import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './components/Utils/AuthOptions';

export async function middleware(request: NextRequest) {
    const { nextUrl } = request;
    const goingRout = nextUrl.pathname;

    const session = await auth();

    if (!session) {
        return NextResponse.redirect(new URL('/login', request?.url))
    }

    // redirect to admin dashboard, if role is admin
    const { role } = session?.user as { name: string, email: string, image: string, role: "admin" | 'user' }

    if (goingRout == '/dashboard') {

        if (role == 'admin') {
            return NextResponse.redirect(new URL('/admin', request?.url))
        }
    }

    // check each request in admin, user is admin
    if(goingRout.startsWith('/admin') || goingRout.includes('/admin')){
        if (role != 'admin') {
            return NextResponse.redirect(new URL('/login', request?.url))
        }
    }

    return NextResponse.next()
}


export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*'],
}
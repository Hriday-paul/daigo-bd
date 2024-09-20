
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth";

const AuthOptions = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID!,
            clientSecret: process.env.FACEBOOK_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials as any;
                    if (!email || !password) throw new Error("Please, fill all input!");

                    const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, password })
                    });

                    if (!loginResponse.ok) {
                        const errorResult = await loginResponse.json();
                        throw new Error(errorResult.message || 'Login failed');
                    }

                    const result = await loginResponse.json();
                    if (result.message === 'password not match') {
                        throw new Error(JSON.stringify(result.message));
                    }

                    return result;

                } catch (err) {
                    const error = err as Error;
                    console.error(error.message);
                    throw new Error(JSON.stringify(error.message || 'internet connection error'));
                }
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: any) {
            
            session.user = token.user;
            return session;
        },
        async signIn({ user, account }: any) {
            try {

                if (user) {
                    const { name, email, image } = user
                    //post data in server
                    const loginResponse = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/user', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, name, photo : image})
                    });
                    const result = await loginResponse.json();
                    console.log("login res", result);
                    return user
                }
                return false
            } catch (err) {
                return false
            }
        }
    },
    trustHost: true,
    pages: {
        signIn: '/login',
    },
});

export const { auth, handlers, signIn, signOut } = AuthOptions;
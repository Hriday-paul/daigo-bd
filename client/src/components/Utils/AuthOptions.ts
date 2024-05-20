import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const AuthOptions: NextAuthOptions = {
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
                    console.log('Im in user form login', credentials);
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
                        throw new Error(result.message);
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
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }: any) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async signIn({ user, account }: any) {
            try {
                console.log('Im test user sign in',user);
                if (user) {
                    const { name, email, image } = user
                    //post data in server
                    const loginResponse = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/user', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, name, password: '', status: 'active', photo: image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU" })
                    });
                    const result = await loginResponse.json()
                    console.log("login res", result);
                    return user
                }
                return false
            } catch (err) {
                return false
            }
        }
    },
    pages: {
        signIn: '/login',  // Specify your login page URL
    },
};
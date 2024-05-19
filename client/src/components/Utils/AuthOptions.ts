import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const AuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID || '',
            clientSecret: process.env.FACEBOOK_SECRET || '',
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as any;
                const user = { id: "", email, password };
                if (!user || !user.password) return null;
                return user
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
        async jwt({ token, user }) {
            return {
                ...token,
                ...user,
            };
        },
        async session({ session, token }) {
            return {
                ...session,
                ...token,
            };
        },
        async signIn({ user, account }: any) {
            try {
                console.log(account);
                if (user) {
                    const { name, email, image } = user
                    console.log(user);
                    // post data in server
                    // const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/providerLogin', { name, email, image, phone: "", streetAddress: "", city: "" });
                    // console.log("login res", loginResponse);
                    return user
                }
                return false
            } catch (err) {
                return false
            }
        }
    },
};
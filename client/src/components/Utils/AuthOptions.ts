import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const AuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const { email, password } = credentials || {};
                    // post data is server
                    // const loginResponse = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + '/login', { email, password });
                    //return loginResponse.data.user;
                    return '/'
                } catch (err) {
                    return false;
                }
            },
        }),
    ],
    callbacks: {
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
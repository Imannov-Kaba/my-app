import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const config = {
    theme: {
        logo: "https://en.wikipedia.org/wiki/File:Google_Earth_icon.svg",
    },
    providers : [Google],
    callbacks : {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl;
            if (pathname === "/dashboard") return !!auth;
            return true;
        },  
    },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
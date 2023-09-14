import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
     * object (`next-auth/client`).
     */
    interface Session {
        user: {
            name: ReactNode;
            id: string | number;
            username: ReactNode | null;
            avatar: StaticImport | null;
            discriminator: string | null;
            public_flags: number | null;
            flags: number | null;
            locale: string | null;
            mfa_enabled: boolean | null;
            premium_type: number | null;
            email: string | null;
        } & DefaultSession 
    }
    interface User extends DefaultUser {
        name: ReactNode;
        id: string | number;
        username: ReactNode | null;
        avatar: StaticImport | null;
        discriminator: string | null;
        public_flags: number | null;
        flags: number | null;
        locale: string | null;
        mfa_enabled: boolean | null;
        premium_type: number | null;
        email: string | null;
    }
}

declare module "next-auth/jwt"{
    interface JWT extends DefaultJWT {
        name: ReactNode;
        id: string | number;
        username: ReactNode | null;
        avatar: StaticImport | null;
        discriminator: string | null;
        public_flags: number | null;
        flags: number | null;
        locale: string | null;
        mfa_enabled: boolean | null;
        premium_type: number | null;
        email: string | null;
    }
}
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface DiscordUser {
    username: string | ReactNode;
    avatar: string | StaticImport;
    discriminator: string | null;
    public_flags: number | null;
    flags: number | null;
    locale: string | null;
    mfa_enabled: boolean | null;
    premium_type: number | null;
    email: string | null;
}

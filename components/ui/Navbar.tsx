import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "./button";
import { ArrowRight } from "lucide-react";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";


export default function Navbar(){
    return (
        <nav className="sticky h-14 top-0 inset-x-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        className="flex z-40 font-semibold"
                        href='/'
                    >
                        <span>
                            quill.
                        </span>
                    </Link>

                    {/* ADD mobile navbar */}
                        <div className="hidden items-center space-x-4 sm:flex">
                            <>
                                <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm"
                                })}
                                href='/pricing'
                                >
                                    Pricing
                                </Link>

                                <LoginLink>
                                    <Link
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "sm"
                                    })}
                                    href='/pricing'
                                    >
                                        Sign in
                                    </Link>
                                </LoginLink>

                            <RegisterLink>
                                <Link
                                className={buttonVariants({
                                    // variant: "ghost",
                                    size: "sm"
                                })}
                                href='/pricing'
                                >
                                    Get Started <ArrowRight className="ml-1.5 w-5 h-5"/>
                                </Link>
                            </RegisterLink>

                            </>
                        </div>

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
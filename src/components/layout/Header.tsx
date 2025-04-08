

'use client'
import Link from "next/link";
import TheraLogo from '../../../public/logo/logo.png'
import Image from "next/image";
import Container from "../global/container";
import MainProvider from "./context/context-provider";
import { PrimaryButton } from "./components/primary-buttons";
import { DialogContainer } from "./components/group-dialogs";

export default function Navbar() {
    return (
        <MainProvider>
        <DialogContainer />
        <header className="px-4 h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center">
                            <Image alt="Theradiagnostics Logo" src={TheraLogo} height={50} width={50} priority />
                        </Link>
                    </div>
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-10">
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">Home</Link>
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">Services</Link>
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">Doctors</Link>
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">Book Appointments</Link>
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">News & Blog</Link>
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">About Us</Link>
                            <Link href="#" className="text-[#116BB4] hover:text-blue-600 text-sm">For Professional</Link>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        <PrimaryButton />
                    </div>
                </div>
            </Container>
        </header>
        </MainProvider>
    )
};



import Image from 'next/image';
import Link from 'next/link'
import { FaFacebookMessenger, FaFacebook ,FaLinkedin, FaLine   } from "react-icons/fa";
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const links = [
    {
        group: 'Solutions',
        items: [
            {
                title: 'Provider Solutions',
                href: '#',
            },
            {
                title: 'Healthcare Solutions',
                href: '#',
            },
            {
                title: 'Payor Solutions',
                href: '#',
            },
            {
                title: 'Pharma Solutions',
                href: '#',
            },
        ],
    },
    {
        group: 'Insights',
        items: [
            {
                title: 'Case Studies',
                href: '#',
            },
            {
                title: 'Thought Leadership',
                href: '#',
            },
            {
                title: 'News',
                href: '#',
            },
            {
                title: 'Resources',
                href: '#',
            },
        ],
    },
    {
        group: 'About Clinic',
        items: [
            {
                title: 'About This Site',
                href: '#',
            },
            {
                title: 'Locations',
                href: '#',
            },
            {
                title: 'Health Information Policy',
                href: '#',
            },
            {
                title: 'Media Requests',
                href: '#',
            },
        ],
    },
    {
        group: 'WellMed - Your Health, Our Priority',
        items: [
            {
                title: 'JR Borja Ext., Cagayan de Oro City, Philippines',
                href: '#',
            },
            {
                title: <Button className='bg-[#16A7E2] rounded-xl mt-5 cursor-pointer'>Contact Us <ArrowRight/></Button>,
                href: '#',
            },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-20">
            <div className="mx-auto">
                <div className="p-5 flex flex-wrap justify-center">
                    <div className="md:col-span-2">
                        <Link href="/" aria-label="go home" className="block size-fit">
                         
                        </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-5 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div key={index} className="text-[#116BB4] space-y-2 text-xs">
                                <span className="block font-bold">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link key={index} href={item.href} className="text-[#116BB4] hover:text-blue-600 block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center mb-5 mt-5'>
                    <Image alt="TheraDiagnostics Logo" src="/logo/logo.png" height={80} width={80} />
                </div>
                <div className="p-3 bg-[#16A7E2] flex flex-wrap items-end justify-evenly gap-6 py-6">
                    <div className='flex flex-wrap gap-6 text-sm'>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-white hover:text-primary block">
                        Privacy Policy
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary block">
                        Terms of Use
                    </Link>
                    <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary block">
                        Site Map
                    </Link>
                    </div>
                    <div className="text-white block text-center text-sm">
                        © {new Date().getFullYear()} Designed & Powered by RePoint Solution Inc.
                    </div>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-white hover:text-primary block">
                            <FaLinkedin size={20} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-primary block">
                            <FaFacebook size={20} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-primary block">
                            <FaFacebookMessenger size={20} />
                        </Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-white hover:text-primary block">
                            <FaLine size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

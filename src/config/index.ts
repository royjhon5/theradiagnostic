import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "TheraDiagnostics",
        template: `%s | TheraDiagnostics`,
    },
    description: "Reliable diagnostic center offering accurate tests and medical screenings with advanced technology for quick and efficient results. Trusted by patients for quality care.",
    icons: {
        icon: [
            {
                url: "https://theradiagnostic-staging.vercel.app/favicon/favicon.ico",
                href: "https://theradiagnostic-staging.vercel.app/favicon/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "TheraDiagnostics",
        description: "Reliable diagnostic center offering accurate tests and medical screenings with advanced technology for quick and efficient results. Trusted by patients for quality care.",
        images: [
            {
                url: "https://theradiagnostic-staging.vercel.app/thumbnail/thumbnail.png",
                width: 1200,
                height: 630,
                alt: "TheraDiagnostic Thumbnail",
              },
        ]
    },
    twitter: {
        title: "TheraDiagnostics",
        description: "Reliable diagnostic center offering accurate tests and medical screenings with advanced technology for quick and efficient results. Trusted by patients for quality care.",
        images: [
            {
                url: "/thumbnail/thumbnail.png",
            }
        ]
    },
    alternates: {
        canonical: "https://theradiagnostic-staging.vercel.app/",
    },
    metadataBase: new URL("https://theradiagnostic-staging.vercel.app/"),
};

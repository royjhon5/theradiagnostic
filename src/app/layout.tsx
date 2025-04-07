import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TheraDiagnostics",
    description:
      "Reliable diagnostic center offering accurate tests and medical screenings with advanced technology for quick and efficient results. Trusted by patients for quality care.",
    robots: "index, follow",
    keywords: [
      "diagnostics",
      "thera",
      "doctors appointment",
    ],
    openGraph: {
      url: "https://theradiagnostic-staging.vercel.app/",
      type: "website",
      title: "TheraDiagnostics",
      description:
        "Reliable diagnostic center offering accurate tests and medical screenings with advanced technology for quick and efficient results. Trusted by patients for quality care.",
      siteName: "TheraDiagnostics",
      images: [
        {
          url: "https://theradiagnostic-staging.vercel.app/thumbnail/thumbnail.png",
          width: 1200,
          height: 630,
          alt: "TheraDiagnostics Thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "TheraDiagnostics",
      description:
        "Reliable diagnostic center offering accurate tests and medical screenings with advanced technology for quick and efficient results. Trusted by patients for quality care.",
      creator: "@rjdev",
      site: "@rjdev",
      images: [
        {
          url: "https://theradiagnostic-staging.vercel.app/thumbnail/thumbnail.png",
          width: 1200,
          height: 630,
          alt: "Aspire Keeper Thumbnail",
        },
      ],
    },
    alternates: {
      canonical: "https://theradiagnostic-staging.vercel.app/",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
            <link rel="icon" type="image/png" sizes="32x32" href="https://theradiagnostic-staging.vercel.app/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="https://theradiagnostic-staging.vercel.app/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://theradiagnostic-staging.vercel.app/favicon-16x16.png" />
            <link rel="icon" type="image/x-icon" href="https://theradiagnostic-staging.vercel.app/favicon/favicon.ico" sizes="32x32" />

            {/* Apple Touch Icons */}
            <link rel="apple-touch-icon" sizes="180x180" href="https://theradiagnostic-staging.vercel.app/favicon/apple-touch-icon.png" />
            <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                    {children}
            </body>
        </html>
    );
};

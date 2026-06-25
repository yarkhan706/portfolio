import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/ui/global/navigation";
import Footer from "@/components/ui/global/footer";
import PageTransition from "@/components/ui/global/page-transition";

export const metadata: Metadata = {
  title: {
    default: "Asfand Yar Khan - Web Developer Portfolio",
    template: "%s | Asfand Yar Khan"
  },
  description: "Asfand Yar Khan - Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects and technical expertise at yarkhan706.com",
  keywords: [
    "Asfand Yar Khan",
    "yarkhan706",
    "web developer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "frontend developer",
    "backend developer",
    "Node.js",
    "portfolio",
    "web development",
    "software engineer",
    "Khan",
    "Yar Khan"
  ],
  authors: [{ name: "Asfand Yar Khan" }],
  creator: "Asfand Yar Khan",
  publisher: "Asfand Yar Khan",
  metadataBase: new URL('https://yarkhan706.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yarkhan706.vercel.app',
    title: 'Asfand Yar Khan - Web Developer Portfolio',
    description: 'Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and technical expertise.',
    siteName: 'Asfand Yar Khan',
    images: [
      {
        url: '/name.svg',
        width: 1200,
        height: 630,
        alt: 'Asfand Yar Khan - Web Developer Portfolio',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Asfand Yar Khan - Web Developer Portfolio',
    description: 'Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/name.svg'],
    creator: '@yarkhan706',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/name.svg',
    apple: '/name.svg',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  other: {},
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional SEO tags */}
        <meta name="format-detection" content="telephone=no" />

        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://yarkhan706.vercel.app/#person",
              "name": "Asfand Yar Khan",
              "url": "https://yarkhan706.vercel.app",
              "sameAs": [
                "https://yarkhan706.vercel.app",
                "https://github.com/yarkhan706",
                "https://linkedin.com/in/yarkhan706"
              ],
              "jobTitle": "Full Stack Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "knowsAbout": [
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "Web Development",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development"
              ],
              "description": "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies",
              "alumniOf": "Web Development",
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Web Developer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Remote"
                },
                "skills": "JavaScript, React, Next.js, Node.js, HTML, CSS, MongoDB, PostgreSQL"
              }
            })
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <PageTransition />
        <Navigation />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
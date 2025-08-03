
export const siteConfig = {
    name: "Bluecompute pvt ltd",
    description: "Leading IT solutions provider offering innovative technology services, products, and digital transformation solutions for businesses worldwide.",
    url: "https://bluecompute.com",
    ogImage: "https://bluecompute.com/og-image.png",
    links: {
        // twitter: "https://x.com/bluecompute",
        linkedin: "https://www.linkedin.com/company/bluecomputeltd",
        // github: "https://github.com/bluecompute",
    },
    keywords: [
        "IT solutions",
        "technology services",
        "digital transformation",
        "software development",
        "cloud computing",
        "cybersecurity",
        "IT consulting"
    ]
}

export function constructMetadata({
    title = siteConfig.name,
    description = siteConfig.description,
    image = siteConfig.ogImage,
    noIndex = false,
    keywords = siteConfig.keywords,
    canonicalUrl,
} = {}) {
    return {
        title: {
            default: title,
            template: `%s | ${siteConfig.name}`
        },
        description,
        keywords: keywords.join(", "),
        authors: [
            {
                name: siteConfig.name,
                url: siteConfig.url,
            },
        ],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: canonicalUrl || siteConfig.url,
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            url: canonicalUrl || siteConfig.url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@yourcompany",
            site: "@yourcompany",
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: "your-google-verification-code",
            yandex: "your-yandex-verification-code",
            yahoo: "your-yahoo-verification-code",
        },
    }
}
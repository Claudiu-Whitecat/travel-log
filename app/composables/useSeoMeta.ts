type SiteMetadata = {
    title?: string
    description?: string
    ogImage?: string
    ogType?: 'website' | 'article' | 'profile'
    twitterCard?: 'summary' | 'summary_large_image'
}

export function useSeoMetadata({
                                   title,
                                   description,
                                   ogImage,
                                   ogType = 'website',
                                   twitterCard = 'summary',
                               }: SiteMetadata) {
    const route = useRoute()
    const ogUrl = 'https://www.penny.ro/' + route.fullPath
    const siteName = 'Penny'

    useSeoMeta({
        title,
        titleTemplate: (title) => title
            ? `${title} · ${siteName}`
            : `${siteName} · Default Site Tagline`,
        description,
        ogTitle: title,
        ogDescription: description,
        ogImage,
        ogType,
        ogUrl,
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: ogImage,
        twitterCard,
    })
}
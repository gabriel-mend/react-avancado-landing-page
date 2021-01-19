export type LandingPageProps = {
    logo: LogoProps
    header: HeaderProps
    sectionAboutProject: sectionAboutProjectProps
    sectionTech: sectionTechProps
    sectionConcepts: sectionConceptsProps
    sectionModules: sectionModulesProps
    sectionAgenda: sectionAgendaProps
    pricingBox: pricingBoxProps
    sectionAboutUs: sectionAboutUsProps
    sectionReviews: sectionReviewsProps
    sectionFaq: sectionFaqProps
}

export type LogoProps = {
    alternativeText: string
    url: string
}

export type ImageProps = {
    alternativeText: string
    url: string
}

export type ButtonProps = {
    label: string
    url: string
}

export type HeaderProps = {
    title: string
    description: string
    image: ImageProps
    button?: ButtonProps
}

export type sectionAboutProjectProps = {
    title: string
    description: string
    image: ImageProps
}

export type sectionTechProps = {
    title: string
    techIcons: [
        { 
            title: string
            icon: ImageProps
        }
    ]
}

export type sectionConceptsProps = {
    title: string 
    concepts: [{
        title: string
    }]
}


export type sectionModulesProps = {
    title: string
    modules: [{
        title: string
        subtitle: string
        description: string
    }]
}

export type sectionAgendaProps = {
    title: string
    description: string
}

export type pricingBoxProps = {
    priceInstall: number
    totalPrice: number
    numberInstallments: number
    benefits: string
    button: {
        url: string
        label: string
    }
}

export type sectionAboutUsProps = {
    title: string
    authors: [{
        name: string
        description: string
        role: string
        photo: {
            alternativeText: string
            url: string
        }
        socialLinks?: [{
            url: string
            title: string
        }]
    }]
}

export type sectionReviewsProps = {
    title: string
    reviews: [{
        name: string
        text: string
        photo: {
            url
        }
    }]
}

export type sectionFaqProps = {
    title: string
    questions: [{
        question: string
        answer: string
    }]
}
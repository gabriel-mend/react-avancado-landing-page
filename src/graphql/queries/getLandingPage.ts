const GET_LADING_PAGE = /* GraphQL */ ` 
fragment logo on LandingPage {
  logo {
    url
    alternativeText
  }
}

fragment header on LandingPage {
  header {
    title
    description
    image {
      url
      alternativeText
    }
    button {
      url
      label
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      url
      alternativeText
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        url
        alternativeText
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}

fragment pricingBox on LandingPage {
  pricingBox {
    totalPrice
    numberInstallments
    priceInstall
    benefits
    button {
      url
      label
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs {
    title
    authors {
      name
      description
      role
      photo {
        url
        alternativeText
      }
      socialLinks {
        url
        title
      }
    }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        url
      }
    }
  }
}

fragment sectionFaq on LandingPage {
  sectionFaq {
    title
    questions {
      question
      answer
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...sectionAgenda
    ...pricingBox
    ...sectionAboutUs
    ...sectionReviews
    ...sectionFaq
  }
}







`

export default GET_LADING_PAGE
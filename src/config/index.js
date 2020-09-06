module.exports = {

    author: "Nick Bryant",
    siteTitle: "Interesting Engineer",
    siteShortTitle: "Nick Bryant", // Used as logo text in header, footer, and splash screen
    siteDescription: "Your one stop shop for high end web development.",
    siteUrl: "https://interesting.engineer",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,

    // There are icons available for the following platforms:
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nickbryant123/"
        },
        {
            name: "Github",
            url: "https://github.com/sbryant31"
        },
    ],

    navLinks: {
        menu: [
            {
                name: "About",
                url: "/#about",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
    ]
}

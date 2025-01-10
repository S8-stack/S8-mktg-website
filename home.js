
import { page, header, slide, footer, movie, grid, gridCard, sqGridCard, sqGridCardGroup, sqGridCardH1, sqGridCardH2, sqGridCardParagraph, sqGridCardLink, sqGrid, sqGridCardPoint } from './aero/aero.js';


export const WEB_PAGE = page([
    header({
        theme: "dark",
        logo: "logos/S8-logo-v4-256px.png",
        menus: ["Home", "Core", "Packages", "Team"],
        hrefs: ["/home.html", "/core.html", "/packages.html", "/team.html"],
        selected: "Home"
    }),
    slide("prime", {
        theme: "light", background: "white",
        title: `<b>Make</b> your technical objects <b>teamwide</b>`,
        subtitle: `Unlock access to playing with core business technical objects throughout your team.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
        asset: "assets/slides/slide02.png",
        assetAspectRatio: 16 / 9
    }),
    sqGrid("light", {
        theme: "light",
        backgroundColor: "white",
        cards: [
            sqGridCard("light", "std", {
                theme: "light",
                backgroundImage: "assets/cards/core-arch-silicon/background.jpg",
                elements: [
                    sqGridCardGroup({ txt: "core.arch.silicon" }),
                    sqGridCardH1({ txt: "Light Threads" }),
                    sqGridCardH2({ txt: "Async tasks made easy" }),
                    sqGridCardParagraph({
                        txt: "Silicon module brings",
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java",
                    }),
                    sqGridCardLink({
                        icon: "/icons/coding.svg",
                        text: "doc",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java",
                        isMobileHideable: true
                    })
                ]
            }),
            sqGridCard("light", "std", {
                theme: "dark",
                backgroundImage: "assets/cards/core-io-xml/background.jpg",
                elements: [
                    sqGridCardGroup({ txt: "core.io.xml" }),
                    sqGridCardH1({ txt: "XML Parsing" }),
                    sqGridCardH2({ txt: "Stable & Secured" }),
                    sqGridCardParagraph({ txt: "Async tasks made easy" }),
                    sqGridCardLink({
                        icon: "/icons/folder.svg",
                        text: "repo",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java",
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                    sqGridCardLink({
                        icon: "/icons/coding.svg",
                        text: "doc",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java",
                        isMobileHideable: true
                    })
                ]
            }),
            sqGridCard("light", "large-square", {
                theme: "light",
                backgroundImage: "/assets/cards/core-bohr/background-3.jpg",
                elements: [
                    sqGridCardGroup({ txt: "core.bohr" }),
                    sqGridCardH1({ txt: "BOHR" }),
                    sqGridCardH2({ txt: "The Ubiquitous data format" }),
                    sqGridCardParagraph({
                        txt: `<span>BOHR (initially Binary Object for HTTP Request) is binary stream format that 
                        makes mulitpart, zipping, versioning and much more seamless integrated.
                        BOHR protocol can be used for:`}),
                    sqGridCardPoint({
                        icon: "/icons/server.svg",
                        text: `<b>Persistency</b>: for storage of complex Graph objects, including the serialization of
                        many data structure.`
                    }),
                    sqGridCardPoint({
                        icon: "/icons/flow.svg",
                        text: `<b>Stream to Front</b>: This is the key to send compelx structure to front with 
                                extremely tight data frame: every single object sent to front is part of graph wehere every 
                                node is identified. Therefore, any modification of the screen does not need any reload of 
                                previously transmitted objects.`
                    }),
                    sqGridCardLink({
                        icon: "/icons/folder.svg",
                        text: "repo",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    })
                ]
            }),
            sqGridCard("light", "large-horizontal", {
                theme: "dark",
                backgroundImage: "/assets/cards/core-bohr-neodymium/background.jpg",
                elements: [
                    sqGridCardGroup({ txt: "core.bohr.neodymium" }),
                    sqGridCardH1({ txt: "Versionable Object Graph Serial format" }),
                    sqGridCardParagraph({ txt: "Xenon is the default implementation of the S8 API." }),
                    sqGridCardLink({
                        icon: "/icons/folder.svg",
                        text: "repo",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                ]
            }),
            sqGridCard("light", "std", {
                theme: "dark",
                backgroundImage: "assets/cards/core-bohr-lithium/background.jpg",
                elements: [
                    sqGridCardGroup({ txt: "core.bohr.lithium" }),
                    sqGridCardH1({ txt: "The fast rev" }),
                    sqGridCardParagraph({ txt: "Async tasks made easy" }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    })
                ]
            }),
            sqGridCard("light", "std", {
                theme: "dark",
                backgroundImage: "assets/cards/core-web-xenon/background.png",
                elements: [
                    sqGridCardGroup({ txt: "core.web.xenon" }),
                    sqGridCardH1({ txt: "The Base Server" }),
                    sqGridCardParagraph({ txt: "Xenon is the default implementation of the S8 API." }),
                    sqGridCardLink({
                        icon: "/icons/folder.svg",
                        text: "repo",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                    sqGridCardLink({
                        icon: "/icons/coding.svg",
                        text: "doc",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    })
                ]
            }),
            sqGridCard("light", "large-horizontal", {
                theme: "dark",
                backgroundImage: "/assets/cards/core-bohr-neon/background.jpg",
                elements: [
                    sqGridCardGroup({ txt: "core.bohr.neon" }),
                    sqGridCardH1({ txt: "Handle front like a desktop window" }),
                    sqGridCardParagraph({ txt: "Neon is the radical front simplification." }),
                    sqGridCardLink({
                        icon: "/icons/folder.svg",
                        text: "repo",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "example",
                        url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                    })
                ]
            }),
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "white",
            }),
            sqGridCard("light", "std", {
                theme: "light",
                backgroundImage: "assets/atoms/beryllium.png",
            }),
            sqGridCard("light", "large-vertical", {
                theme: "light",
                backgroundImage: "assets/atoms/beryllium.png",
            }),
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "blue",
            }),
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "white",
            }),
            sqGridCard("light", "large-square", {
                theme: "light",
                backgroundImage: "assets/atoms/beryllium.png",
            }),
            sqGridCard("dark", "std", {
                theme: "dark",
                backgroundColor: "blue",
                group: "core.io",
                title: "Light Threads"
            }),
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "white",
            })
        ]
    }),
    slide("prime", {
        theme: "light", background: "white",
        title: `<b>Showcase</b> your technical objects <b>anywhere</b>`,
        subtitle: `Enable your customer to deep dive in your products capabilities.`,
        paragraph: `Strong engagement relies on appropriation. By enabling your customers and partners to use your products
            virtually anywhere, you become de facto the reference product.`,
        asset: "assets/slides/slide03.png"
    }),
    slide("prime", {
        theme: "light", background: "white",
        title: `<b>Deliver</b> your technical objects along the <b>integration chain</b>`,
        subtitle: `Gain value beyond your product inherent value.`,
        paragraph: `Delivering a great product is an achievement. Seamlessly integrate in your customers assemblies is 
            paramount, like going from good to unavoidable.`,
        asset: "assets/slides/slide04.png"
    }),
    slide("prime", {
        theme: "light", background: "white",
        title: `Stay in control`,
        subtitle: `Leverage the power of the <span class="emphasis">AlphaVentor</span> 
            platform to give your client a digital twin of your products`,
        asset: "assets/slides/slide00.png"
    }),
    footer()],
    {
        hasCookiesModalBox: true,
    }
);
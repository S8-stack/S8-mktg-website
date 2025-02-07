
import { page, header, slide, footer, movie, grid, gridCard, sqGrid, sqGridCard, sqGridCardH1, sqGridCardH2, sqGridCardLink, sqGridCardParagraph, sqGridCardPoint, codeBlock, sqGridCardGroup } from './aero/aero.js';


export const WEB_PAGE = page(
    [
        header({
            theme: "dark",
            logo: "logos/S8-logo-v4-256px.png",
            menus: ["Home", "Core", "Packages", "Team"],
            hrefs: ["/home.html", "/core.html", "/packages.html", "/team.html"],
            selected: "Packages"
        }),
        slide("prime", {
            theme: "dark", background: "black",
            title: `<b>Built-in</b> engineering capabilities`,
            subtitle: `The Alphaventor platform came with efficient libraries to power your engineering app.`,
            paragraph: `Libraries enables complex applications capabilities out of the boxes, greatly 
            reducing the development time and platform integration`,
            asset: "assets/turbos/SiTyphoon-config-low.png"
        }),
        codeBlock("/snippets/S8Snippet02.java"),
        sqGrid("light", {
            theme: "light",
            backgroundColor: "white",
            cards: [
                sqGridCard("light", "std", {
                    theme: "light",
                    backgroundImage: "assets/cards/core-arch-silicon/background.jpg",
                    elements: [
                        sqGridCardGroup({ txt: "core.arch.silicon"}),
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
                        sqGridCardGroup({ txt: "core.io.xml"}),
                        sqGridCardH1({ txt: "XML Parsing" }),
                        sqGridCardH2({ txt: "Stable & Secured" }),
                        sqGridCardParagraph({ txt: "Async tasks made easy" }),
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
                        sqGridCardGroup({ txt: "core.bohr"}),
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
                        sqGridCardGroup({ txt: "core.bohr.neodymium"}),
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
                        sqGridCardGroup({ txt: "core.bohr.lithium"}),
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
                        sqGridCardGroup({ txt: "core.web.xenon"}),
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
                        sqGridCardGroup({ txt: "core.bohr.neon"}),
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
        grid("light", {
            theme: "light",
            backgroundColor: "rgb(128,128,128)",
            cards: [
                gridCard("light", {
                    theme: "light",
                    backgroundImage: "assets/backgrounds/minimalism-01.jpg",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundImage: "assets/backgrounds/minimalism-02.jpg",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundImage: "assets/backgrounds/minimalism-03.jpg",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundColor: "white",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundImage: "assets/atoms/beryllium.png",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundImage: "assets/atoms/beryllium.png",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundColor: "blue",
                }),
                gridCard("light", {
                    theme: "light",
                    backgroundColor: "white",
                })
            ]
        }),
        footer()
    ],
    {
        hasCookiesModalBox: true,
    }
);

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
        theme: "dark", 
        backgroundGradient: "dark0016",
        title: `<b>Make</b> your technical objects <b>teamwide</b>`,
        subtitle: `Unlock access to playing with core business technical objects throughout your team.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
        asset: "assets/slides/diagram-2.png",
        assetAspectRatio: 16 / 9
    }),
    sqGrid("light", {
        theme: "light",
        backgroundColor: "white",
        cards: [
            /* tile 00 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#fae7eb",
                elements: [
                    sqGridCardH1({ txt: "Simple" }),
                    sqGridCardH2({ txt: "Less is More" }),
                    sqGridCardParagraph({
                        txt: `JAVA Core to code the entire app (back, front, db). A unified API to code 
                        and deploy. Launched in no time`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile00-text",
                    })
                ]
            }),
            /* tile 01 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#e0d4e7",
                elements: [
                    sqGridCardH1({ txt: "Secure" }),
                    sqGridCardH2({ txt: "Paranoid mode enabled" }),
                    sqGridCardParagraph({
                        txt: `Zero dependencies means bullet-proof defense against vicious open 
                        source vulnerabilities insertion in foundations libraries. And the basics: encryption...`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile01-text",
                    })
                ]
            }),
            /* tile 02 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#dbeef7",
                elements: [
                    sqGridCardH1({ txt: "Small" }),
                    sqGridCardH2({ txt: "Small-Surface API" }),
                    sqGridCardParagraph({
                        txt: `The number of things you need to know to start coding on the S8 Stack is astonishing 
                        low! Even if you start a top tier complexity project. So you can build features instead of 
                        doing IT stuff`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile02-text",
                    })
                ]
            }),
            /* tile 03 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#d0edef",
                elements: [
                    sqGridCardH1({ txt: "Synced" }),
                    sqGridCardH2({ txt: "High concurrency architecture" }),
                    sqGridCardParagraph({
                        txt: `Because scaling to high volume requires to think asynchronous since day 1, we have done 
                        it for you under the hood (you don't even have to know what a light thread is).`,
                        isMobileHideable: true
                    })
                ]
            }),
            /* tile 04 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#b5f6cf",
                elements: [
                    sqGridCardH1({ txt: "Storage" }),
                    sqGridCardH2({ txt: "Embedded DB and caching" }),
                    sqGridCardParagraph({
                        txt: `Annotated your objects and we provide under the hood the most efficient 
                        caching and databases accesses.`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile04-text",
                    })
                ]
            }),
            /* tile 05 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#e3e5ff",
                elements: [
                    sqGridCardH1({ txt: "Structured" }),
                    sqGridCardH2({ txt: "Graph DB, native version" }),
                    sqGridCardParagraph({
                        txt: `Handle large objects in db with abitrary graph shapes. Attach resources directly to objects, 
                        leveraging S8 full binary architecture. Go back in time on natively versionned data.`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile05-text",
                    })
                ]
            }),
            /* tile 06 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#faedcb",
                elements: [
                    sqGridCardH1({ txt: "Screen" }),
                    sqGridCardH2({ txt: "Your front as a remote screen" }),
                    sqGridCardParagraph({
                        txt: `Handle directly your front components from the back. 
                        Use standards ot create new one with extension mechanims.`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile06-text",
                    })
                ]
            }),
            /* tile 07 */
            sqGridCard("light", "std", {
                theme: "light",
                backgroundColor: "#fcd5ce",
                elements: [
                    sqGridCardH1({ txt: "Scalable" }),
                    sqGridCardH2({ txt: "Lake of nodes" }),
                    sqGridCardParagraph({
                        txt: `Use cluster of S8 instances to achieve resisilience, 
                        load balancing and back-up at arbitray level.`,
                        isMobileHideable: true
                    }),
                    sqGridCardLink({
                        icon: "/icons/left-circled-arrow.svg",
                        text: "Learn more...",
                        url: "#tile07-text",
                    })
                ]
            }),
        ]
    }),
    slide("prime", {
        id: "tile00-text",
        theme: "light", 
        backgroundGradient: "light-tile00",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile01-text",
        theme: "light", 
        backgroundGradient: "light-tile01",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile02-text",
        theme: "light", 
        backgroundGradient: "light-tile02",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile03-text",
        theme: "light", 
        backgroundGradient: "light-tile03",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile04-text",
        theme: "light", 
        backgroundGradient: "light-tile04",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile05-text",
        theme: "light", 
        backgroundGradient: "light-tile05",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile06-text",
        theme: "light", 
        backgroundGradient: "light-tile06",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
    }),
    slide("prime", {
        id: "tile07-text",
        theme: "light", 
        backgroundGradient: "light-tile07",
        title: `<b>Make</b>Simple<b> Stack</b>`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Vastly increase your sales performance by providing your team with direct insights of the core business objects. 
            Want to answer to a client on how will the product will perform in its use case? 
            Alphaventor platform is the way.`,
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
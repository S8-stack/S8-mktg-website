
import { page, header, slide, footer, movie, grid, gridCard, sqGridCard, sqGridCardGroup, sqGridCardH1, sqGridCardH2, sqGridCardParagraph, sqGridCardLink, sqGrid, sqGridCardPoint, textBlock, txbkH1, txbkP, txbkH2, txbkSVG } from './aero/aero.js';


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
        title: `The <b>High productivity</b> stack, for <b>rich</b> Saas development`,
        subtitle: `Get a top-level team of devs to build your dream app, for a fraction of the cost.`,
        paragraph: `Build by project developpers for project developpers, S8 is curbing spacetime to make possible 
        projects previously thought to be financially out of reach.`,
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
                backgroundImage: "assets/principles/tile00.png",
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
                backgroundImage: "assets/principles/tile01.png",
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
                backgroundImage: "assets/principles/tile02.png",
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
                backgroundImage: "assets/principles/tile03.png",
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
                backgroundImage: "assets/principles/tile04.png",
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
                backgroundImage: "assets/principles/tile05.png",
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
                backgroundImage: "assets/principles/tile06.png",
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
                backgroundImage: "assets/principles/tile07.png",
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
    textBlock("std", {
        id: "tile00-text",
        elements: [
            txbkSVG("/assets/principles/etoile.svg", { width: 128, height: 128 }),
            txbkH1("Simple"),
            txbkP(`The idea of maximum productivity encompasses all aspects of the Saas development and deployment. 
                S8 brings a certain number of radical changes to make this it simpler.`),
            txbkH2("Language"),
            txbkP(`First it proposes the development team to reduce to a single language JAVA, that -despite being 
                seen as less hype than other new languages- is widely adopted, highly efficient but also very complete 
                in terms of features. But have no fear! All the gory aspects of traditional JAVA project development 
                have been left behind, to leverage only the very best of language: JAVA core. It’s even more than 
                that: JAVA comes with a lot high level functions that require expert level team to master, but 
                regarding this, we just ask our user not to use them and to use JAVA as a simpler version of TypeScript.`),
            txbkH2(`Booting fast`),
            txbkP(`S8 marks a clear cut with traditional web-app deployment on JAVA server (Tomcat, etc.). S8 server-side 
                boots in less than 1s on most environments, meaning you don’t care stopping and redeploying an instance 
                anytime you want it. This drastically reduces the development cycle by enabling super frequent test 
                in real world testing environment. This is especially true for apps with advanced graphics where 
                the entire db-back-front is required, even to play unit tests.`),
            txbkH2(`Single man orchestra`),
            txbkP(`Ok, this is wild. But that’s how we built it. We wanted -day 1- that S8 can be efficiently used to 
                build and deploy a project with a record low number of people, so we squeeze all the 
                {params, configs, scripts} around to just focus on app development. 
                S8 enables to have your server life from any simple JAVA environment. 
                We broke the rule of having two servers, one server dedicated for the back and another one for the 
                front, and merged everything into a single stack, for the sake of simplicity and efficient project 
                management.`)
        ],
        backgroundGradient: "light-tile00"
    }),
    textBlock("std", {
        id: "tile01-text",
        elements: [
            txbkSVG("/assets/principles/shield.svg", { width: 128, height: 128 }),
            txbkH1("Secure"),
            txbkH2("Zero dependencies"),
            txbkP(`While open source supply with valuable tools and features, it also creates uncontrolled dependencies 
                from unchecked origins. Many incidents through two decades illustrated how easily a malicious contributor 
                can inject vulnerabilities inside applications based on external modules. The number of those dependencies 
                is out of control for most organizations and this results in random highly critical incidents. With open 
                sources modules deeply nested inside layers and layers of code, it becomes virtually impossible to guarantee 
                a safe system. On top of that, any previously clear dependency can become malevolent through updates.`),
            txbkP(`That’s why we decided to rebuild the entire stack from the ground up, carefully crafting and validating 
                    each of our modules. Therefore, we can guarantee the total absence of the traditional worms inside 
                    the code you will build on S8.`),
            txbkH2("HTTPS and all the rest..."),
            txbkP(`We also implement HTTP2 and TLS security layer with a somewhat restrictive inner policy to stay on 
                the safe side.`),
        ],
        backgroundGradient: "light-tile01"
    }),
    textBlock("std", {
        id: "tile02-text",
        elements: [
            txbkSVG("/assets/principles/3d-printer.svg", { width: 128, height: 128 }),
            txbkH1("Small"),
            txbkH2("Small Surface API is the key"),
            txbkP(`Small surface API might be seen as a limitation. We see a strength: only key features are here, but 
                all key features. This enables a fast learning curve, and an almost immediate kicking off. It also 
                offers a serenity for creator, when you know you sit on something that is taking care of fine grain 
                details, without having to spend time resolving problems -including integration problems- that have 
                been solved so many time. You leverage performance improvement of the entire stack effortlessly.`),
            txbkH2("Multiple environnement, one API"),
            txbkP(`Also, we have plans to build even more aggressive of some module (in a JAVA sense) of current ones, 
                and to propose them on future version. Having a high-level API enables you to take advantage of many 
                implementations  fine tuning with the same codebase. It provides a stable environment, just as JVM 
                provides a standardized coding environment over different machines.`),
            txbkH2("The flow"),
            txbkP(`The key concept of this stack relies on the flow. The flow let you access pretty much every feature
                     of the stack in an asynchronous and unified way. The flow is the context against which you build 
                     the big lambda expression which is in the end your app.`),

        ],
        backgroundGradient: "light-tile02"
    }),
    textBlock("std", {
        id: "tile03-text",
        elements: [
            txbkSVG("/assets/principles/sync.svg", { width: 128, height: 128 }),
            txbkH1("THis is header 1"),
            txbkH2("THis is header 2"),
            txbkP("THis is paragrpah"),
        ],
        backgroundGradient: "light-tile03"
    }),
    textBlock("std", {
        id: "tile04-text",
        elements: [
            txbkSVG("/assets/principles/servers.svg", { width: 128, height: 128 }),
            txbkH1("THis is header 1"),
            txbkH2("THis is header 2"),
            txbkP("THis is paragrpah"),
        ],
        backgroundGradient: "light-tile04"
    }),
    textBlock("std", {
        id: "tile05-text",
        elements: [
            txbkSVG("/assets/principles/graph.svg", { width: 128, height: 128 }),
            txbkH1("THis is header 1"),
            txbkH2("THis is header 2"),
            txbkP("THis is paragrpah"),
        ],
        backgroundGradient: "light-tile05"
    }),
    textBlock("std", {
        id: "tile06-text",
        elements: [
            txbkSVG("/assets/principles/monitor.svg", { width: 128, height: 128 }),
            txbkH1("THis is header 1"),
            txbkH2("THis is header 2"),
            txbkP("THis is paragrpah"),
        ],
        backgroundGradient: "light-tile06"
    }),
    textBlock("std", {
        id: "tile07-text",
        elements: [
            txbkSVG("/assets/principles/scalability.svg", { width: 128, height: 128 }),
            txbkH1("THis is header 1"),
            txbkH2("THis is header 2"),
            txbkP("THis is paragrpah"),
        ],
        backgroundGradient: "light-tile07"
    }),
    slide("hThird", {
        theme: "light",
        backgroundGradient: "light-tile00",
        title: `The make-it-<b>Simple</b> Stack`,
        subtitle: `A single language to master all the features, and in your app assemble them.`,
        paragraph: `Saas development is often a shattered game, with different languages, environments, teams. 
        This in turn increases any task on the development, deployment. With a single JAVA core based stack, S8
        make it simple to kick start your project but also to reach a level in features complexity that is still
        unbelieved to be achievable with a stack that simple.`,
        asset: "assets/principles/etoile.png",
    }),
    slide("prime", {
        id: "tile01-text",
        theme: "light",
        backgroundGradient: "light-tile01",
        title: `Secure`,
        subtitle: `We've taken this to the next level`,
        paragraph: `Because we have a tighten set of features, we have done something: we have recoded everything. I mean everything: XML-parser, 
        JSON-parser, light thread engine, HTTPS server, db access. Pure madness you would think. But the results in terms of
        performance are excellent and most important importantly, we know every single line of the core.`,

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
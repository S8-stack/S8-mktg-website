
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
            txbkH1("Synced"),
            txbkP(`One of the main obstacles into writing a scalable application is the proper handling of high 
                concurrency through asynchronous task orchestration. Since this is a recurring problem, and a hard 
                to solve one, we decided to embedded deep into the S8 stack what we think is the best solution (and 
                we have a high-level API that gives us plenty of room to make further improvements under the hood). 
                Also, because the S8 stack is managing the server aspects, we needed to have this asynchronous engine 
                ready to support the stack inner systems.`),
            txbkP(`That’s why we designed a light threads engine with a built-in thread workers pool along with a thread 
                allocation mechanism that prevent congestion and enable high scaling up.`)
        ],
        backgroundGradient: "light-tile03"
    }),
    textBlock("std", {
        id: "tile04-text",
        elements: [
            txbkSVG("/assets/principles/servers.svg", { width: 128, height: 128 }),
            txbkH1("Storage"),
            txbkP(`Every web-app relies at some point on databases. Moreover, the proximity with data is key to write easily 
                complex treatment. Having noticed this, we came up to think that data must be served efficiently, seamlessly 
                within the app through very simple accesses directly available in the flow. So every instance running on the 
                S8 stack have by default the possibility of working with three types of databases, and build as many tables, 
                objects on the fly.`),
            txbkH2("Annotations"),
            txbkP(`Objects persistency relies on annotating object classes -most robust approach so far. Access to objects 
                is exclusively made through the call of methods on the flow, as well as all subsequent actions (saving, 
                reverting, etc.).`),
            txbkH2("Caching"),
            txbkP(`Caching is a key part of performance, and one of the goals of S8 is to handle this seamlessly. As a result, 
                you can make the assumption that data is always readily available since the caching will balance memory retention 
                to reflect data usage.`),
            txbkH2("Scaling and replicating"),
            txbkP(`For the scaling up versions, we will provide automatic synchronization of instances running S8 stack on our cloud to 
                ensure that any modifications made to data contained on the databases of one instance are replicated to other instances, 
                and efficiently handling copies to ensure a given requirement in terms of redundancy.`)
        ],
        backgroundGradient: "light-tile04"
    }),
    textBlock("std", {
        id: "tile05-text",
        elements: [
            txbkSVG("/assets/principles/graph.svg", { width: 128, height: 128 }),
            txbkH1("Structured"),
            txbkH2("Key-value DB"),
            txbkP(`Key value db is probably the most efficient pattern to get data. S8 provides with efficient table-like list of objects 
                you can search through or retrieve through id, effectively mimicking the core features of NO SQL like db. For more advanced 
                searches, selection with JAVA queries can be used.`),
            txbkH2("Structured DB"),
            txbkP(`Structured DB works with large objects, each representing a group of data you can navigate through points and methods. 
                This group of data typically represent the data of a big project, including hundreds or even hundreds of thousands sub 
                objects, but that belong to a same logical entity and need to remain grouped from a logical point of view (think of the 
                plan of a building), even if you can traverse it easily.`),
        ],
        backgroundGradient: "light-tile05"
    }),
    textBlock("std", {
        id: "tile06-text",
        elements: [
            txbkSVG("/assets/principles/monitor.svg", { width: 128, height: 128 }),
            txbkH1("Screen"),
            txbkP(`One thing that makes Saas so time-consuming to develop is that development is split between two realms, with deiffrenet 
                languages, logics, teams, deployment tools, etc. This gigantically increases the number of skills a team must master to 
                deliver a webapp. So we came up with something different.`),
            txbkH2("Your front as a remote screen"),
            txbkP(`When you develop a app that will run on local device (say desktop or mobile), things are much more simple: without exiting 
                your development environment, you directly have access to all graphical components that come standard with the OS, and you 
                can manipulate in any imaginable way, even inside a deeply nested function. You don’t have to define an API between the back 
                and the front so both can communicate. Everything is fused together, and that’s why it is so easy to achieve remarkable 
                graphical complexity with minimum effort. We thought it was the way to go for Saas as well!`),
            txbkH2("Additional hidden benefits"),
            txbkP(`S8 way of handling the front is radical: each graphical component comes as a JAVA realm object, that you can manipulate at 
                will, and a ghost counterpart -that you never have to touch- that lives on the front side. Connection between both sides of the 
                same entity is handled under the hood by S8. The tremendous benefits are the following:
                <ul>
                <li>High compression throughput
                <li>Natural caching strategies of large objects on the front, operated from the back.
                <li>Radical speed improvements when switching of views of large objects (like opening the plan of building A, closing it, 
                opening plan of building B, closing it and reopening plan of building B).`)
        ],
        backgroundGradient: "light-tile06"
    }),
    textBlock("std", {
        id: "tile07-text",
        elements: [
            txbkSVG("/assets/principles/scalability.svg", { width: 128, height: 128 }),
            txbkH1("Scalable"),
            txbkP(`Scalability is the long-time concern of every project builder. We designed the S8 stack to enable a natural and powerful way of 
                scaling up: each node running S8 is a member of a cluster. It is a member of a database cluster. It is a member of lambda expression 
                workers pools clusters. It is a member of login cluster. And so on. Each node being able to perform the entire set of tasks required 
                by the applications enables a smooth and arbitrary large scale up.`),
        ],
        backgroundGradient: "light-tile07"
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
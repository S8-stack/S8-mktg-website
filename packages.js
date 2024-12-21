
import { page, header, slide, footer, movie, grid, gridCard, sqGrid, sqGridCard } from './aero/aero.js';


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
        /*
        slide("prime", {
            theme: "dark",
            background: "pic:assets/backgrounds/skies-background-01-low.jpg",
            title: `Qx-ng-aircrafts`,
            subtitle: `Blade element analysis: A powerful tool for the low-latitude economy`,
            paragraph: `Blade element analyis is especially powerful when it comes to calculate quickly 
            -and accurately- the power/torque of propellers (whether thrusters or pushers) for the analysis
            of take-off capabilities, entire flight analysis. They offer near instant alternative to CFD and 
            can therefore be easily integrated into repeatable routines that require speed and stability.`,
            asset: "assets/aircrafts/evtol-taking-off05-low.png"
        }),
        slide("prime", {
            theme: "light",
            background: "white",
            title: `Thermodynamics`,
            subtitle: `The foundation layer for process engineering`,
            paragraph: `Being able to compute the thermodynamics properties of process gas (water, steam, natural gas, 
                refrigerants, thermal oil) is at the heart of many common simulations of equipment. It is more specifically 
                useful when it comes to predict the behaviour of fluid handling equipement in a specific customer case, be it a 
                pump, a valve, a turbine or a compressor.`,
            asset: "assets/applications/power-plant00.png",
        }),
        slide("prime", {
            theme: "light",
            background: "pic:assets/applications/meshing.png",
            title: `Thermodynamics`,
            subtitle: `The foundation layer for process engineering`,
            paragraph: `Being able to compute the thermodynamics properties of process gas (water, steam, natural gas, 
                refrigerants, thermal oil) is at the heart of many common simulations of equipment. It is more specifically 
                useful when it comes to predict the behaviour of fluid handling equipement in a specific customer case, be it a 
                pump, a valve, a turbine or a compressor.`
        }),
        slide("prime", {
            theme: "dark", background: "black",
            metrics: [
                {
                    number: "4600", unit: "kg",
                    parameter: "Max Take-off thrust",
                },
                {
                    modifier: ">", number: "450", unit: "km/h",
                    parameter: "Max speed"
                }
            ]
        }),
        slide("prime", {
           
            title: `Opening a new area for eVTOL`,
            subtitle: `Thrust up to 46kN`,
            
        }),
        slide("paragraph", {
            theme: "dark", background: "pic:assets/capabilities/CFD-Screenshot-02.jpg",
            subtitle: `CFD for advanced turbo-units`,
            paragraph: `With a comprehensive know-how in aerodynamics, AlphaVentor is able to support custom turbomachines development`,
        }),
        */
        sqGrid("light", {
            theme: "light",
            backgroundColor: "white",
            cards: [
                sqGridCard("light", "std", {
                    theme: "light",
                    backgroundImage: "assets/cards/core-arch-silicon/background.jpg",
                    group: "core.arch.silicon",
                    title: "Light Threads",
                    paragraph: "Async tasks made easy",
                    links: [
                        {
                            icon: "/icons/folder.svg",
                            text: "repo",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/left-circled-arrow.svg",
                            text: "example",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/coding.svg",
                            text: "doc",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        }
                    ]
                }),
                sqGridCard("light", "std", {
                    theme: "dark",
                    backgroundImage: "assets/cards/core-io-xml/background.jpg",
                    group: "core.io.xml",
                    title: "XML Parsing. Stable & Secured.",
                    paragraph: "Async tasks made easy",
                    links: [
                        {
                            icon: "/icons/folder.svg",
                            text: "repo",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/left-circled-arrow.svg",
                            text: "example",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/coding.svg",
                            text: "doc",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        }
                    ]
                }),
                sqGridCard("light", "large-horizontal", {
                    theme: "dark",
                    backgroundImage: "/assets/cards/core-bohr-neodymium/background.jpg",
                    group: "core.bohr.neodymium",
                    title: "Versionable Object Graph Serial format",
                    paragraph: "Xenon is the default implementation of the S8 API.",
                    links: [
                        {
                            icon: "/icons/folder.svg",
                            text: "repo",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/left-circled-arrow.svg",
                            text: "example",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        }
                    ]
                }),
                sqGridCard("light", "std", {
                    theme: "dark",
                    backgroundImage: "assets/cards/core-web-xenon/background.png",
                    group: "core.web.xenon",
                    title: "The Base Server",
                    paragraph: "Xenon is the default implementation of the S8 API.",
                    links: [
                        {
                            icon: "/icons/folder.svg",
                            text: "repo",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/left-circled-arrow.svg",
                            text: "example",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        },
                        {
                            icon: "/icons/coding.svg",
                            text: "doc",
                            url: "https://github.com/S8-stack/S8-api/blob/main/sources/com/s8/api/flow/S8AsyncFlow.java"
                        }
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
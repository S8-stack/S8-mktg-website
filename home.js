
import { page, header, slide, footer, movie, grid, gridCard } from './aero/aero.js';


export const WEB_PAGE = page([
    header({
        theme: "dark",
        logo: "assets/logos/S8-logo-v4-256px.png",
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
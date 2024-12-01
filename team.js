
import { page, header, slide, footer, movie, grid, gridCard } from './aero/aero.js';

export const WEB_PAGE = page(
    [
        header({
            theme: "dark",
            logo: "assets/logos/S8-logo-v4-256px.png",
            menus: ["Home", "Core", "Packages", "Team"],
            hrefs: ["/home.html", "/core.html", "/packages.html", "/team.html"],
            selected: "Team"
        }),
        slide("prime", {
            theme: "dark", background: "grey64",
            title: `<b>Team</b>`,
            subtitle: `The people behind AlpahVentor.`,
            paragraph: `We are a small self-funded team focused on design, human infrastructure, and Tech. 
            We have 3 full-time staff and an incredible set of advisors. Although small, we are distributed across 
            Europe and Asia.
            
            Contact us at: contact@alphaventor.com`
        }),
        slide("prime", {
            theme: "dark",
            background: "pic:assets/backgrounds/skies-background-01-high.jpg",
            asset: "assets/aircrafts/evtol-screenshot-high.png",
        }),
        footer()
    ],
    {
        hasCookiesModalBox: true,
    }
);
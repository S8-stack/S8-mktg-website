
import { footer, header, page, spText } from '../../aero/aero.js';

export const WEB_PAGE = page(
    [
        header({
            theme: "light",
            logo: "/logos/S8-logo-v4-256px.png",
            menus: ["Home", "Get Started", "Core", "Packages", "Applications", "Licensing"],
            hrefs: ["/home.html", "/core.html", "/packages.html", "/team.html"],
            selected: "none"
        }),
        spText("text.html", { theme: "light", backgroundColor: "white" }),
        footer("/footer.html")
    ],
    {
        hasCookiesModalBox: true,
    }
);
// vite.config.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/@vitejs/plugin-react/dist/index.js";
import { createElement } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/react/index.js";
import { renderToStaticMarkup } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/react-dom/server.node.js";

// src/home-copy.ts
var ABOUT = [
  "start.ng is Nigeria's home for browser games, built by the HNG community. Every game is free to play in your browser with no download, and many are made in Naija: danfo rush hour, jollof catching, Lagos markets and more.",
  "We're also building a home for web games from across Africa. If you make games anywhere on the continent, you can put yours on start.ng for free."
];
var QUESTIONS = [
  ["What is start.ng?", "A home for free browser games made by the HNG community. Each game has its own address, like yourgame.start.ng, and you play it right in your browser."],
  ["Is it free?", "Yes. Every game on start.ng is free to play in your browser, with nothing to download."],
  ["Are there Nigerian or African web games?", "Yes. Many games here are Naija-themed, from danfo rush hour to jollof and Lagos markets, and we welcome games from across Africa."],
  ["Do I need an account to play?", "No. Sign in to get your start.ng character, keep your scores on the leaderboards and join the daily tournament."],
  ["What is the daily tournament?", "Every day a few start.ng games are picked for 24 hours, and the best player wins. Points count towards the overall leaderboard."],
  ["How do I put my game on start.ng?", "Push your browser game to a public GitHub repo, publish it with one API call and approve it once. It goes live at yourgame.start.ng. The docs have every step."]
];

// src/SiteFooterView.tsx
import { jsx, jsxs } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/react/jsx-runtime.js";
function SiteFooterView({ categories = false }) {
  return /* @__PURE__ */ jsxs("footer", { className: "container site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "site-footer-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "site-footer-brand", children: [
        /* @__PURE__ */ jsx("a", { className: "logo", href: "/", children: /* @__PURE__ */ jsxs("b", { children: [
          "start",
          /* @__PURE__ */ jsx("span", { children: ".ng" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { children: "Nigeria's home for browser games, made by the community and by creators across Africa." })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Play", children: [
        /* @__PURE__ */ jsx("h2", { children: "Play" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/games", children: "All games" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/tournament", children: "Daily tournament" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/leaderboard", children: "Leaderboard" }) }),
          categories && /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/categories", children: "Categories" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/hangout", children: "The Hangout" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Make games", children: [
        /* @__PURE__ */ jsx("h2", { children: "Make games" }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/creators", children: "Independent creators" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/docs", children: "Build a game" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/docs.md", children: "Docs for your AI (.md)" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "About", children: [
        /* @__PURE__ */ jsx("h2", { children: "About" }),
        /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", children: "About start.ng" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "site-footer-base", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " start.ng"
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Games from Nigeria and across Africa." })
    ] })
  ] });
}

// src/AboutView.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/react/jsx-runtime.js";
var WAYS = [
  ["Play", "Pick a game from the community and play it right in your browser, free, with nothing to download.", "/games"],
  ["Compete", "Join the daily tournament and climb the overall leaderboard.", "/tournament"],
  ["Independent creators", "Games made and hosted by creators outside start.ng, each with its own page.", "/creators"],
  ["Make a game", "Push your browser game to a public GitHub repo, publish it with one API call and approve it once. The docs have every step.", "/docs"]
];
function AboutView({ themeToggle }) {
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsxs2("header", { className: "container nav", children: [
      /* @__PURE__ */ jsx2("a", { className: "logo", href: "/", children: /* @__PURE__ */ jsxs2("b", { children: [
        "start",
        /* @__PURE__ */ jsx2("span", { children: ".ng" })
      ] }) }),
      /* @__PURE__ */ jsxs2("nav", { "aria-label": "Pages", children: [
        /* @__PURE__ */ jsx2("a", { href: "/games", children: "Games" }),
        /* @__PURE__ */ jsx2("a", { href: "/tournament", children: "Tournament" }),
        /* @__PURE__ */ jsx2("a", { href: "/creators", children: "Creators" }),
        /* @__PURE__ */ jsx2("a", { href: "/docs", children: "Docs" })
      ] }),
      /* @__PURE__ */ jsx2("div", { className: "nav-account", children: themeToggle })
    ] }),
    /* @__PURE__ */ jsx2("main", { children: /* @__PURE__ */ jsxs2("section", { className: "container about about-page", children: [
      /* @__PURE__ */ jsx2("p", { className: "eyebrow", children: "About" }),
      /* @__PURE__ */ jsx2("h1", { children: "About start.ng" }),
      ABOUT.map((p) => /* @__PURE__ */ jsx2("p", { className: "lead", children: p }, p)),
      /* @__PURE__ */ jsx2("h2", { children: "What you can do here" }),
      /* @__PURE__ */ jsx2("ul", { className: "about-ways", children: WAYS.map(([title, text, href]) => /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsxs2("a", { href, children: [
        /* @__PURE__ */ jsx2("b", { children: title }),
        /* @__PURE__ */ jsx2("span", { children: text })
      ] }) }, href)) }),
      /* @__PURE__ */ jsx2("h2", { children: "Questions" }),
      /* @__PURE__ */ jsx2("div", { className: "about-questions", children: QUESTIONS.map(([q, a]) => /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx2("h3", { children: q }),
        /* @__PURE__ */ jsx2("p", { children: a })
      ] }, q)) })
    ] }) }),
    /* @__PURE__ */ jsx2(SiteFooterView, {})
  ] });
}

// src/markdown.tsx
import { Fragment as Fragment2 } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/react/index.js";
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs3 } from "file:///C:/Users/HP/OneDrive/Desktop/Whimsical/startng-fe/node_modules/react/jsx-runtime.js";
var slug = (text) => text.toLowerCase().replace(/`/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function inline(text, key = 0) {
  const out = [];
  const re = /`([^`]+)`|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m;
  while (m = re.exec(text)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const k = `${key}-${m.index}`;
    if (m[1] !== void 0) out.push(/* @__PURE__ */ jsx3("code", { children: m[1] }, k));
    else if (m[2] !== void 0) out.push(/* @__PURE__ */ jsx3("b", { children: inline(m[2], m.index) }, k));
    else {
      const href = m[4];
      const external = /^https?:/.test(href);
      out.push(
        /* @__PURE__ */ jsx3("a", { href: /^(https?:|\/|#)/.test(href) ? href : "#", ...external ? { target: "_blank", rel: "noreferrer" } : {}, children: inline(m[3], m.index) }, k)
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
var cells = (row) => row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
function Markdown({ source }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const k = blocks.length;
    if (!line.trim()) {
      i++;
    } else if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const code = [];
      for (i++; i < lines.length && !lines[i].startsWith("```"); i++) code.push(lines[i]);
      i++;
      blocks.push(
        /* @__PURE__ */ jsx3("pre", { "data-lang": lang || void 0, children: /* @__PURE__ */ jsx3("code", { children: code.join("\n") }) }, k)
      );
    } else if (/^#{1,4} /.test(line)) {
      const level = line.match(/^#+/)[0].length;
      const text = line.slice(level + 1);
      const H = `h${level}`;
      blocks.push(/* @__PURE__ */ jsx3(H, { id: slug(text), children: inline(text) }, k));
      i++;
    } else if (line.trimStart().startsWith("|") && lines[i + 1]?.includes("---")) {
      const head = cells(line);
      const rows = [];
      for (i += 2; i < lines.length && lines[i].trimStart().startsWith("|"); i++) rows.push(cells(lines[i]));
      blocks.push(
        /* @__PURE__ */ jsx3("div", { className: "table", children: /* @__PURE__ */ jsxs3("table", { children: [
          /* @__PURE__ */ jsx3("thead", { children: /* @__PURE__ */ jsx3("tr", { children: head.map((c, j) => /* @__PURE__ */ jsx3("th", { children: inline(c) }, j)) }) }),
          /* @__PURE__ */ jsx3("tbody", { children: rows.map((r, ri) => /* @__PURE__ */ jsx3("tr", { children: r.map((c, j) => /* @__PURE__ */ jsx3("td", { children: inline(c) }, j)) }, ri)) })
        ] }) }, k)
      );
    } else if (/^\s*([-*]|\d+\.) /.test(line)) {
      const ordered = /^\s*\d+\. /.test(line);
      const items = [];
      for (; i < lines.length && /^\s*([-*]|\d+\.) /.test(lines[i]); i++) {
        let item = lines[i].replace(/^\s*([-*]|\d+\.) /, "");
        while (i + 1 < lines.length && /^ {2,}\S/.test(lines[i + 1]) && !/^\s*([-*]|\d+\.) /.test(lines[i + 1])) item += " " + lines[++i].trim();
        items.push(item);
      }
      const L = ordered ? "ol" : "ul";
      blocks.push(/* @__PURE__ */ jsx3(L, { children: items.map((t, j) => /* @__PURE__ */ jsx3("li", { children: inline(t) }, j)) }, k));
    } else if (line.startsWith(">")) {
      const quote = [];
      for (; i < lines.length && lines[i].startsWith(">"); i++) quote.push(lines[i].replace(/^>\s?/, ""));
      blocks.push(/* @__PURE__ */ jsx3("blockquote", { children: quote.map((q, j) => /* @__PURE__ */ jsxs3(Fragment2, { children: [
        inline(q),
        j < quote.length - 1 && /* @__PURE__ */ jsx3("br", {})
      ] }, j)) }, k));
    } else {
      const para = [];
      for (; i < lines.length && lines[i].trim() && !/^(#{1,4} |```|>|\s*([-*]|\d+\.) |\s*\|)/.test(lines[i]); i++) para.push(lines[i].trim());
      blocks.push(/* @__PURE__ */ jsx3("p", { children: inline(para.join(" ")) }, k));
    }
  }
  return /* @__PURE__ */ jsx3(Fragment3, { children: blocks });
}

// src/seo.ts
var SITE_NAME = "start.ng";
var DEFAULT_SITE_URL = "https://start.ng";
var SHARE_IMAGE = "/hangout-cover.jpg";
var SHARE_IMAGE_ALT = "A screenshot of the Hangout, start.ng's own multiplayer game";
var TOURNAMENT_IMAGE = "/tournament-share.png";
var TOURNAMENT_IMAGE_ALT = "start.ng's daily tournament: 5 games, 24 hours, one winner, with covers of games from the community";
var CREATORS_IMAGE = "/creators-share.png";
var CREATORS_IMAGE_ALT = "Made a game? Get it played. Submit your game to start.ng/creators, with covers of games by independent creators";
var HOME_DESCRIPTION = "Nigeria's home for free browser games. Play Naija-themed web games like Danfo Defense and Jollof Rush, no download. Built by the HNG community.";
var PAGES = {
  home: { title: "start.ng \xB7 Good vibes. Good games.", description: HOME_DESCRIPTION, path: "/" },
  games: {
    title: "All games from the community \xB7 start.ng",
    description: "Browse and search every game built by the start.ng community. Pick one and play right in your browser, no download needed.",
    path: "/games"
  },
  creators: {
    title: "Games by independent creators \xB7 start.ng",
    description: "Discover games made and hosted by independent creators, from itch.io to their own sites. Search them all, or submit your own.",
    path: "/creators",
    image: CREATORS_IMAGE,
    imageAlt: CREATORS_IMAGE_ALT
  },
  about: {
    title: "About start.ng \xB7 Nigeria's home for browser games",
    description: "start.ng is Nigeria's home for free browser games, built by the HNG community. What it is, what you can do here, and answers to common questions.",
    path: "/about"
  },
  hangout: {
    title: "The Hangout \xB7 start.ng",
    description: "The Hangout is start.ng's own multiplayer park. Sign in as your character, walk around and meet everyone else who's there.",
    path: "/hangout"
  },
  docs: {
    title: "Docs: publish a game on start.ng",
    description: "How to publish a browser game on start.ng: push it to GitHub, make one API call, approve it once, and it's live at yourgame.start.ng with its own leaderboard.",
    path: "/docs"
  },
  tournament: {
    title: "Today's tournament \xB7 start.ng",
    description: "Every day, a few start.ng games for 24 hours and one winner. Share to enter, play, and climb the standings.",
    path: "/tournament",
    image: TOURNAMENT_IMAGE,
    imageAlt: TOURNAMENT_IMAGE_ALT
  },
  leaderboard: {
    title: "Leaderboard \xB7 start.ng",
    description: "The best players on start.ng: points from the daily tournaments, all time and this week.",
    path: "/leaderboard",
    image: TOURNAMENT_IMAGE,
    imageAlt: TOURNAMENT_IMAGE_ALT
  },
  // The plain page nginx falls back to for /games/<name> when the API can't render that game's page.
  game: {
    title: "Play free on start.ng",
    description: "Play free browser games made by the HNG community on start.ng.",
    path: "/games"
  },
  approve: {
    title: "Put your game live \xB7 start.ng",
    description: "Approve a game you published to start.ng and put it live at its own address.",
    path: "/",
    noindex: true
  },
  // Tournaments with friends (src/features/private_tournaments): the page that starts one, and an invite link's page.
  friendsTournaments: {
    title: "Start a tournament with your friends \xB7 start.ng",
    description: "Pick any games on start.ng, set how long it runs, and share a link. Your friends join and you all follow one table of scores.",
    path: "/friends"
  },
  privateTournament: {
    title: "Join a tournament with friends \xB7 start.ng",
    description: "You've been invited to a tournament on start.ng. Join it, play its games and see where you stand.",
    path: "/friends",
    noindex: true
    // an invite link is private; the page sets its own title once it knows the tournament
  },
  // Friends & follows (src/features/follows): your lists and an invite link's page. Both private.
  follows: {
    title: "Your friends \xB7 start.ng",
    description: "Your friends on start.ng, who you follow and who follows you, and a link to invite new friends.",
    path: "/follows",
    noindex: true
  },
  friendInvite: {
    title: "You're invited to be friends \xB7 start.ng",
    description: "Someone wants to be friends with you on start.ng. Accept and you'll follow each other.",
    path: "/follows",
    noindex: true
    // an invite link is private
  },
  // Leagues (src/features/leagues): your group, tier and countdown in each track. Signed in only, so private.
  league: {
    title: "Your league \xB7 start.ng",
    description: "Your league on start.ng: play any game to score, finish in the top 5 of your group to move up a tier.",
    path: "/league",
    noindex: true
  },
  // Wardrobe (src/features/wardrobe): your coins and items, and the daily shop.
  wardrobe: {
    title: "Your wardrobe \xB7 start.ng",
    description: "Your coins and items on start.ng: earn them by playing any game, and wear them in every game.",
    path: "/wardrobe",
    noindex: true
  },
  shop: {
    title: "Shop \xB7 start.ng",
    description: "Spend the coins you earn playing start.ng games on items for your character. New stock every day.",
    path: "/shop"
  },
  profile: {
    title: "A player on start.ng",
    description: "A player's page on start.ng: their character, level, badges and best scores.",
    path: "/me",
    noindex: true
    // player pages stay out of search results
  },
  spotlight: {
    title: "Spotlight \xB7 start.ng",
    description: "The Game of the Week and today's daily challenge on start.ng: one goal a day, set from how people really play.",
    path: "/spotlight"
  },
  creator: {
    title: "A creator on start.ng",
    description: "A creator's games on start.ng: play them free in your browser, follow them, and share.",
    path: "/by"
  },
  creatorsBoard: {
    title: "Top creators \xB7 start.ng",
    description: "The creators whose games the most different players opened this month on start.ng.",
    path: "/by"
  },
  notFound: {
    title: "Page not found \xB7 start.ng",
    description: "There's nothing at this address. Browse the games on start.ng instead.",
    path: "/",
    noindex: true
  }
};
var STATIC_PAGES = [
  ["games.html", PAGES.games],
  ["creators.html", PAGES.creators],
  ["hangout.html", PAGES.hangout],
  ["docs.html", PAGES.docs],
  ["about.html", PAGES.about],
  ["tournament.html", PAGES.tournament],
  ["leaderboard.html", PAGES.leaderboard],
  ["game.html", PAGES.game],
  ["spotlight.html", PAGES.spotlight],
  ["creators-board.html", PAGES.creatorsBoard],
  ["creator.html", PAGES.creator],
  ["approve.html", PAGES.approve],
  ["friends-tournaments.html", PAGES.friendsTournaments],
  ["private-tournament.html", PAGES.privateTournament],
  ["follows.html", PAGES.follows],
  ["friend-invite.html", PAGES.friendInvite],
  ["league.html", PAGES.league],
  ["wardrobe.html", PAGES.wardrobe],
  ["shop.html", PAGES.shop],
  ["profile.html", PAGES.profile],
  ["404.html", PAGES.notFound]
];
var SITEMAP_PATHS = ["home", "games", "creators", "tournament", "leaderboard", "hangout", "docs", "about"].map((k) => PAGES[k].path);
var imageUrl = (site, image) => /^https?:\/\//.test(image) ? image : site + image;
var esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
function headTags(seo, site) {
  const url = site + (seo.path === "/" ? "/" : seo.path);
  const image = imageUrl(site, seo.image ?? SHARE_IMAGE);
  const tags = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:alt" content="${esc(seo.imageAlt ?? SHARE_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`
  ];
  return tags.join("\n    ");
}
function jsonLd(site) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: SITE_NAME, url: site + "/", logo: site + "/favicon.svg" },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: site + "/",
        description: HOME_DESCRIPTION,
        potentialAction: { "@type": "SearchAction", target: `${site}/games?q={search_term_string}`, "query-input": "required name=search_term_string" }
      }
    ]
  };
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\HP\\OneDrive\\Desktop\\Whimsical\\startng-fe";
var esc2 = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function docsText(site) {
  const source = readFileSync(resolve(__vite_injected_original_dirname, "public/docs.md"), "utf8").replace(/\r\n/g, "\n");
  const toc = source.split("\n").filter((l) => l.startsWith("## ")).map((l) => l.slice(3)).map((s) => `<a href="#${slug(s)}">${esc2(s.replace(/`/g, ""))}</a>`).join("");
  return `<header class="container nav"><a class="logo" href="/"><b>start<span>.ng</span></b></a><nav aria-label="Pages"><a href="/games">Games</a><a href="/creators">Creators</a><a href="/docs" aria-current="page">Docs</a></nav></header><main class="container docs"><aside class="docs-side"><div class="ai-box"><b>Building with AI?</b><span>Give it this page as plain text:</span><code>${esc2(`${site}/docs.md`.replace(/^https?:\/\//, ""))}</code><a class="btn ghost" href="/docs.md" download="startng-docs.md">Download as .md</a></div>` + (toc ? `<nav class="toc" aria-label="On this page"><p class="toc-title">On this page</p>${toc}</nav>` : "") + `</aside><article class="docs-body">${renderToStaticMarkup(createElement(Markdown, { source }))}</article></main>` + renderToStaticMarkup(createElement(SiteFooterView));
}
function hangoutText() {
  return `<main class="container"><h1>The Hangout</h1><p>${esc2(PAGES.hangout.description)}</p><p><b>WASD</b> or arrows to walk \xB7 <b>Shift</b> to run \xB7 <b>drag</b> to look \xB7 <b>Space</b> to wave \xB7 <b>Enter</b> to chat</p></main>`;
}
function seoPages(site) {
  const block = /<!--seo-->[\s\S]*?<!--\/seo-->/;
  const ROOT = '<div id="root"></div>';
  return {
    name: "startng-seo",
    apply: "build",
    // The homepage's own tags go into index.html.
    transformIndexHtml: { order: "post", handler: (html) => html.replace(block, `<!--seo-->
    ${headTags(PAGES.home, site)}
    ${jsonLd(site)}
    <!--/seo-->`) },
    closeBundle() {
      const out = resolve(__vite_injected_original_dirname, "dist");
      const index = readFileSync(resolve(out, "index.html"), "utf8");
      for (const [file, page] of STATIC_PAGES) {
        writeFileSync(resolve(out, file), index.replace(block, `<!--seo-->
    ${headTags(page, site)}
    <!--/seo-->`).replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, ""));
      }
      if (!index.includes(ROOT)) throw new Error(`index.html has no ${ROOT} for the homepage text`);
      writeFileSync(resolve(out, "home.html"), index.replace(ROOT, `<div id="root"><!--# include virtual="/_ssr/home" --></div>`));
      const fill = (file, path, root, more = "") => {
        const html = readFileSync(resolve(out, file), "utf8");
        const url = `"${site}${path}"`;
        if (!html.includes(ROOT) || !html.includes(url)) throw new Error(`${file} has no ${ROOT} or no ${url} for its canonical address`);
        writeFileSync(resolve(out, file), html.replaceAll(url, `"${site}${path}${more}"`).replace(ROOT, () => `<div id="root">${root}</div>`));
      };
      const pageOf = (n) => `<!--# if expr="$${n} != 1" -->?page=<!--# echo var="${n}" --><!--# endif -->`;
      fill("games.html", PAGES.games.path, `<!--# if expr="$games_ssr = yes" --><!--# include virtual="/_ssr/games?page=$games_page" --><!--# endif -->`, pageOf("games_page"));
      fill("creators.html", PAGES.creators.path, `<!--# if expr="$creators_ssr = yes" --><!--# include virtual="/_ssr/creators?page=$creators_page" --><!--# endif -->`, pageOf("creators_page"));
      fill("tournament.html", PAGES.tournament.path, `<!--# include virtual="/_ssr/tournament" -->`);
      fill(
        "leaderboard.html",
        PAGES.leaderboard.path,
        `<!--# include virtual="/_ssr/leaderboard?period=$leaderboard_period" -->`,
        `<!--# if expr="$leaderboard_period = week" -->?period=week<!--# endif -->`
      );
      fill("spotlight.html", PAGES.spotlight.path, `<!--# include virtual="/_ssr/feature/spotlight" -->`);
      fill("creators-board.html", PAGES.creatorsBoard.path, `<!--# include virtual="/_ssr/feature/by" -->`);
      fill("shop.html", PAGES.shop.path, `<!--# include virtual="/_ssr/feature/shop" -->`);
      fill("friends-tournaments.html", PAGES.friendsTournaments.path, `<!--# include virtual="/_ssr/feature/friends" -->`);
      fill("docs.html", PAGES.docs.path, docsText(site));
      fill("about.html", PAGES.about.path, renderToStaticMarkup(createElement(AboutView)));
      const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: QUESTIONS.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
      const about = readFileSync(resolve(out, "about.html"), "utf8");
      if (!about.includes("<!--/seo-->")) throw new Error("about.html has no seo block");
      writeFileSync(resolve(out, "about.html"), about.replace("<!--/seo-->", () => `<script type="application/ld+json">${JSON.stringify(faq).replace(/</g, "\\u003c")}</script>
    <!--/seo-->`));
      fill("hangout.html", PAGES.hangout.path, hangoutText());
      mkdirSync(out, { recursive: true });
      writeFileSync(resolve(out, "robots.txt"), `User-agent: *
Allow: /
Disallow: /approve/
Disallow: /connect

Sitemap: ${site}/sitemap.xml
`);
      const urls = SITEMAP_PATHS.map((p) => `  <url><loc>${site}${p}</loc></url>`).join("\n");
      writeFileSync(resolve(out, "sitemap.static.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`);
    }
  };
}
var vite_config_default = defineConfig(({ mode }) => {
  const site = (loadEnv(mode, process.cwd(), "VITE_").VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
  return {
    plugins: [react(), seoPages(site)],
    // three.js (~520 kB) is split into its own chunk and only loads for the character creator and avatar.
    build: { chunkSizeWarningLimit: 600 }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2hvbWUtY29weS50cyIsICJzcmMvU2l0ZUZvb3RlclZpZXcudHN4IiwgInNyYy9BYm91dFZpZXcudHN4IiwgInNyYy9tYXJrZG93bi50c3giLCAic3JjL3Nlby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcV2hpbXNpY2FsXFxcXHN0YXJ0bmctZmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcV2hpbXNpY2FsXFxcXHN0YXJ0bmctZmVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL09uZURyaXZlL0Rlc2t0b3AvV2hpbXNpY2FsL3N0YXJ0bmctZmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBta2RpclN5bmMsIHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJub2RlOmZzXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiwgUGx1Z2luIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IEFib3V0VmlldyBmcm9tIFwiLi9zcmMvQWJvdXRWaWV3XCI7XHJcbmltcG9ydCB7IFFVRVNUSU9OUyB9IGZyb20gXCIuL3NyYy9ob21lLWNvcHlcIjtcclxuaW1wb3J0IHsgTWFya2Rvd24sIHNsdWcgfSBmcm9tIFwiLi9zcmMvbWFya2Rvd25cIjtcclxuaW1wb3J0IHsgU2l0ZUZvb3RlclZpZXcgfSBmcm9tIFwiLi9zcmMvU2l0ZUZvb3RlclZpZXdcIjtcclxuaW1wb3J0IHsgREVGQVVMVF9TSVRFX1VSTCwgaGVhZFRhZ3MsIGpzb25MZCwgUEFHRVMsIFNJVEVNQVBfUEFUSFMsIFNUQVRJQ19QQUdFUyB9IGZyb20gXCIuL3NyYy9zZW9cIjtcclxuXHJcbmNvbnN0IGVzYyA9IChzOiBzdHJpbmcpID0+IHMucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoL1wiL2csIFwiJnF1b3Q7XCIpO1xyXG5cclxuLyoqIC9kb2NzIGFzIHRleHQgaW5zaWRlICNyb290OiB0aGUgc2FtZSB3b3JkcyBhbmQgbGF5b3V0IHNyYy9Eb2NzLnRzeCBkcmF3cyBmcm9tIHB1YmxpYy9kb2NzLm1kLCBzbyBzZWFyY2ggZW5naW5lc1xyXG4gKiAgYW5kIEFJIHRvb2xzIHJlYWQgdGhlIGRvY3Mgd2l0aG91dCBydW5uaW5nIHRoZSBhcHAuIFRoZSBhcHAgcmVwbGFjZXMgaXQgd2hlbiBpdCBsb2Fkcy4gKi9cclxuZnVuY3Rpb24gZG9jc1RleHQoc2l0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBzb3VyY2UgPSByZWFkRmlsZVN5bmMocmVzb2x2ZShfX2Rpcm5hbWUsIFwicHVibGljL2RvY3MubWRcIiksIFwidXRmOFwiKS5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7XHJcbiAgY29uc3QgdG9jID0gc291cmNlLnNwbGl0KFwiXFxuXCIpLmZpbHRlcigobCkgPT4gbC5zdGFydHNXaXRoKFwiIyMgXCIpKS5tYXAoKGwpID0+IGwuc2xpY2UoMykpXHJcbiAgICAubWFwKChzKSA9PiBgPGEgaHJlZj1cIiMke3NsdWcocyl9XCI+JHtlc2Mocy5yZXBsYWNlKC9gL2csIFwiXCIpKX08L2E+YCkuam9pbihcIlwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgJzxoZWFkZXIgY2xhc3M9XCJjb250YWluZXIgbmF2XCI+PGEgY2xhc3M9XCJsb2dvXCIgaHJlZj1cIi9cIj48Yj5zdGFydDxzcGFuPi5uZzwvc3Bhbj48L2I+PC9hPicgK1xyXG4gICAgJzxuYXYgYXJpYS1sYWJlbD1cIlBhZ2VzXCI+PGEgaHJlZj1cIi9nYW1lc1wiPkdhbWVzPC9hPjxhIGhyZWY9XCIvY3JlYXRvcnNcIj5DcmVhdG9yczwvYT48YSBocmVmPVwiL2RvY3NcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+RG9jczwvYT48L25hdj48L2hlYWRlcj4nICtcclxuICAgICc8bWFpbiBjbGFzcz1cImNvbnRhaW5lciBkb2NzXCI+PGFzaWRlIGNsYXNzPVwiZG9jcy1zaWRlXCI+PGRpdiBjbGFzcz1cImFpLWJveFwiPjxiPkJ1aWxkaW5nIHdpdGggQUk/PC9iPjxzcGFuPkdpdmUgaXQgdGhpcyBwYWdlIGFzIHBsYWluIHRleHQ6PC9zcGFuPicgK1xyXG4gICAgYDxjb2RlPiR7ZXNjKGAke3NpdGV9L2RvY3MubWRgLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgXCJcIikpfTwvY29kZT5gICtcclxuICAgICc8YSBjbGFzcz1cImJ0biBnaG9zdFwiIGhyZWY9XCIvZG9jcy5tZFwiIGRvd25sb2FkPVwic3RhcnRuZy1kb2NzLm1kXCI+RG93bmxvYWQgYXMgLm1kPC9hPjwvZGl2PicgK1xyXG4gICAgKHRvYyA/IGA8bmF2IGNsYXNzPVwidG9jXCIgYXJpYS1sYWJlbD1cIk9uIHRoaXMgcGFnZVwiPjxwIGNsYXNzPVwidG9jLXRpdGxlXCI+T24gdGhpcyBwYWdlPC9wPiR7dG9jfTwvbmF2PmAgOiBcIlwiKSArXHJcbiAgICBgPC9hc2lkZT48YXJ0aWNsZSBjbGFzcz1cImRvY3MtYm9keVwiPiR7cmVuZGVyVG9TdGF0aWNNYXJrdXAoY3JlYXRlRWxlbWVudChNYXJrZG93biwgeyBzb3VyY2UgfSkpfTwvYXJ0aWNsZT48L21haW4+YCArXHJcbiAgICByZW5kZXJUb1N0YXRpY01hcmt1cChjcmVhdGVFbGVtZW50KFNpdGVGb290ZXJWaWV3KSlcclxuICApO1xyXG59XHJcblxyXG4vKiogL2hhbmdvdXQgYXMgdGV4dCBpbnNpZGUgI3Jvb3Q6IHRoZSBwYWdlIGlzIGEgM0QgcGFyayAoc3JjL2hhbmdvdXQpLCBzbyBzZWFyY2ggZW5naW5lcyBnZXQgaXRzIGhlYWRpbmcsIGl0cyBkZXNjcmlwdGlvblxyXG4gKiAgYW5kIGl0cyBvbi1zY3JlZW4gaGludCwgaW4gdGhlIHNhbWUgd29yZHMgKHNyYy9oYW5nb3V0L0hhbmdvdXQudHN4KS4gVGhlIGFwcCByZXBsYWNlcyBpdCB3aGVuIGl0IGxvYWRzLiAqL1xyXG5mdW5jdGlvbiBoYW5nb3V0VGV4dCgpOiBzdHJpbmcge1xyXG4gIHJldHVybiAoXHJcbiAgICAnPG1haW4gY2xhc3M9XCJjb250YWluZXJcIj48aDE+VGhlIEhhbmdvdXQ8L2gxPicgK1xyXG4gICAgYDxwPiR7ZXNjKFBBR0VTLmhhbmdvdXQuZGVzY3JpcHRpb24pfTwvcD5gICtcclxuICAgIFwiPHA+PGI+V0FTRDwvYj4gb3IgYXJyb3dzIHRvIHdhbGsgXHUwMEI3IDxiPlNoaWZ0PC9iPiB0byBydW4gXHUwMEI3IDxiPmRyYWc8L2I+IHRvIGxvb2sgXHUwMEI3IDxiPlNwYWNlPC9iPiB0byB3YXZlIFx1MDBCNyA8Yj5FbnRlcjwvYj4gdG8gY2hhdDwvcD48L21haW4+XCJcclxuICApO1xyXG59XHJcblxyXG4vLyBMaW5rIHByZXZpZXdzIGFuZCBzZWFyY2ggY3Jhd2xlcnMgcmVhZCB0aGUgSFRNTCB0aGV5J3JlIHNlcnZlZCwgc28gdGhlIGJ1aWxkIHdyaXRlcyBvbmUgSFRNTCBmaWxlXHJcbi8vIHBlciBwYWdlIChnYW1lcy5odG1sLCBkb2NzLmh0bWwgLi4uKSB3aXRoIHRoYXQgcGFnZSdzIHRpdGxlLCBkZXNjcmlwdGlvbiBhbmQgT3BlbiBHcmFwaCB0YWdzLFxyXG4vLyBwbHVzIHJvYm90cy50eHQgYW5kIHNpdGVtYXAueG1sLiBuZ2lueCBzZXJ2ZXMgdGhlbSAoc2VlIG5naW54LmNvbmYpLiBUaGUgdGFncyBjb21lIGZyb20gc3JjL3Nlby50cy5cclxuZnVuY3Rpb24gc2VvUGFnZXMoc2l0ZTogc3RyaW5nKTogUGx1Z2luIHtcclxuICBjb25zdCBibG9jayA9IC88IS0tc2VvLS0+W1xcc1xcU10qPzwhLS1cXC9zZW8tLT4vO1xyXG4gIGNvbnN0IFJPT1QgPSAnPGRpdiBpZD1cInJvb3RcIj48L2Rpdj4nO1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBcInN0YXJ0bmctc2VvXCIsXHJcbiAgICBhcHBseTogXCJidWlsZFwiLFxyXG4gICAgLy8gVGhlIGhvbWVwYWdlJ3Mgb3duIHRhZ3MgZ28gaW50byBpbmRleC5odG1sLlxyXG4gICAgdHJhbnNmb3JtSW5kZXhIdG1sOiB7IG9yZGVyOiBcInBvc3RcIiwgaGFuZGxlcjogKGh0bWwpID0+IGh0bWwucmVwbGFjZShibG9jaywgYDwhLS1zZW8tLT5cXG4gICAgJHtoZWFkVGFncyhQQUdFUy5ob21lLCBzaXRlKX1cXG4gICAgJHtqc29uTGQoc2l0ZSl9XFxuICAgIDwhLS0vc2VvLS0+YCkgfSxcclxuICAgIGNsb3NlQnVuZGxlKCkge1xyXG4gICAgICBjb25zdCBvdXQgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHJlYWRGaWxlU3luYyhyZXNvbHZlKG91dCwgXCJpbmRleC5odG1sXCIpLCBcInV0ZjhcIik7XHJcbiAgICAgIGZvciAoY29uc3QgW2ZpbGUsIHBhZ2VdIG9mIFNUQVRJQ19QQUdFUykge1xyXG4gICAgICAgIHdyaXRlRmlsZVN5bmMocmVzb2x2ZShvdXQsIGZpbGUpLCBpbmRleC5yZXBsYWNlKGJsb2NrLCBgPCEtLXNlby0tPlxcbiAgICAke2hlYWRUYWdzKHBhZ2UsIHNpdGUpfVxcbiAgICA8IS0tL3Nlby0tPmApLnJlcGxhY2UoLzxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uXFwvbGRcXCtqc29uXCI+W1xcc1xcU10qPzxcXC9zY3JpcHQ+LywgXCJcIikpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoZSBob21lcGFnZSBuZ2lueCBzZXJ2ZXM6IGluZGV4Lmh0bWwgd2l0aCB0aGUgQVBJJ3MgdGV4dCBmb3Igc2VhcmNoIGVuZ2luZXMgYW5kIEFJIHRvb2xzIGluY2x1ZGVkXHJcbiAgICAgIC8vIGluc2lkZSAjcm9vdCAoYW4gU1NJIGluY2x1ZGUsIHNlZSBcImxvY2F0aW9uID0gL1wiIGluIG5naW54LmNvbmYpLiBUaGUgYXBwIHJlcGxhY2VzIGl0IHdoZW4gaXQgbG9hZHMuXHJcbiAgICAgIGlmICghaW5kZXguaW5jbHVkZXMoUk9PVCkpIHRocm93IG5ldyBFcnJvcihgaW5kZXguaHRtbCBoYXMgbm8gJHtST09UfSBmb3IgdGhlIGhvbWVwYWdlIHRleHRgKTtcclxuICAgICAgd3JpdGVGaWxlU3luYyhyZXNvbHZlKG91dCwgXCJob21lLmh0bWxcIiksIGluZGV4LnJlcGxhY2UoUk9PVCwgYDxkaXYgaWQ9XCJyb290XCI+PCEtLSMgaW5jbHVkZSB2aXJ0dWFsPVwiL19zc3IvaG9tZVwiIC0tPjwvZGl2PmApKTtcclxuICAgICAgLy8gQSBwYWdlJ3MgZmlsZSB3aXRoIGl0cyB0ZXh0IGluc2lkZSAjcm9vdCBhbmQsIGZvciBhIHBhZ2Ugd2l0aCBtb3JlIHRoYW4gb25lIGFkZHJlc3MsIHRoZSBhZGRyZXNzIGl0IGFkZHMgdG9cclxuICAgICAgLy8gaXRzIGNhbm9uaWNhbCBhbmQgb2c6dXJsIChhcyBTU0ksIHNvIG5naW54IGZpbGxzIGl0IGluKS5cclxuICAgICAgY29uc3QgZmlsbCA9IChmaWxlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcm9vdDogc3RyaW5nLCBtb3JlID0gXCJcIikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSByZWFkRmlsZVN5bmMocmVzb2x2ZShvdXQsIGZpbGUpLCBcInV0ZjhcIik7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYFwiJHtzaXRlfSR7cGF0aH1cImA7XHJcbiAgICAgICAgaWYgKCFodG1sLmluY2x1ZGVzKFJPT1QpIHx8ICFodG1sLmluY2x1ZGVzKHVybCkpIHRocm93IG5ldyBFcnJvcihgJHtmaWxlfSBoYXMgbm8gJHtST09UfSBvciBubyAke3VybH0gZm9yIGl0cyBjYW5vbmljYWwgYWRkcmVzc2ApO1xyXG4gICAgICAgIHdyaXRlRmlsZVN5bmMocmVzb2x2ZShvdXQsIGZpbGUpLCBodG1sLnJlcGxhY2VBbGwodXJsLCBgXCIke3NpdGV9JHtwYXRofSR7bW9yZX1cImApLnJlcGxhY2UoUk9PVCwgKCkgPT4gYDxkaXYgaWQ9XCJyb290XCI+JHtyb290fTwvZGl2PmApKTtcclxuICAgICAgfTtcclxuICAgICAgLy8gL2dhbWVzIGFuZCAvY3JlYXRvcnMgdGhlIHNhbWUgd2F5LCBvbmUgcGFnZSBhdCBhIHRpbWUgKHNlZSBcImxvY2F0aW9uIH4gXi9nYW1lcy8/JFwiIGluIG5naW54LmNvbmYpOiBlYWNoIHBhZ2VcclxuICAgICAgLy8gKC9nYW1lcz9wYWdlPTIpIGlzIGl0cyBvd24gY2Fub25pY2FsIGFkZHJlc3MsIGFuZCBzZWFyY2hlcyBhbmQgZmlsdGVycyBnZXQgbm8gdGV4dCAobmdpbnggbWFya3MgdGhlbSBub2luZGV4KS5cclxuICAgICAgY29uc3QgcGFnZU9mID0gKG46IHN0cmluZykgPT4gYDwhLS0jIGlmIGV4cHI9XCIkJHtufSAhPSAxXCIgLS0+P3BhZ2U9PCEtLSMgZWNobyB2YXI9XCIke259XCIgLS0+PCEtLSMgZW5kaWYgLS0+YDtcclxuICAgICAgZmlsbChcImdhbWVzLmh0bWxcIiwgUEFHRVMuZ2FtZXMucGF0aCwgYDwhLS0jIGlmIGV4cHI9XCIkZ2FtZXNfc3NyID0geWVzXCIgLS0+PCEtLSMgaW5jbHVkZSB2aXJ0dWFsPVwiL19zc3IvZ2FtZXM/cGFnZT0kZ2FtZXNfcGFnZVwiIC0tPjwhLS0jIGVuZGlmIC0tPmAsIHBhZ2VPZihcImdhbWVzX3BhZ2VcIikpO1xyXG4gICAgICBmaWxsKFwiY3JlYXRvcnMuaHRtbFwiLCBQQUdFUy5jcmVhdG9ycy5wYXRoLCBgPCEtLSMgaWYgZXhwcj1cIiRjcmVhdG9yc19zc3IgPSB5ZXNcIiAtLT48IS0tIyBpbmNsdWRlIHZpcnR1YWw9XCIvX3Nzci9jcmVhdG9ycz9wYWdlPSRjcmVhdG9yc19wYWdlXCIgLS0+PCEtLSMgZW5kaWYgLS0+YCwgcGFnZU9mKFwiY3JlYXRvcnNfcGFnZVwiKSk7XHJcbiAgICAgIC8vIC90b3VybmFtZW50LCBhbmQgL2xlYWRlcmJvYXJkICh0aGlzIHdlZWsncywgP3BlcmlvZD13ZWVrLCBpcyBpdHMgb3duIGFkZHJlc3MpLlxyXG4gICAgICBmaWxsKFwidG91cm5hbWVudC5odG1sXCIsIFBBR0VTLnRvdXJuYW1lbnQucGF0aCwgYDwhLS0jIGluY2x1ZGUgdmlydHVhbD1cIi9fc3NyL3RvdXJuYW1lbnRcIiAtLT5gKTtcclxuICAgICAgZmlsbChcImxlYWRlcmJvYXJkLmh0bWxcIiwgUEFHRVMubGVhZGVyYm9hcmQucGF0aCwgYDwhLS0jIGluY2x1ZGUgdmlydHVhbD1cIi9fc3NyL2xlYWRlcmJvYXJkP3BlcmlvZD0kbGVhZGVyYm9hcmRfcGVyaW9kXCIgLS0+YCxcclxuICAgICAgICBgPCEtLSMgaWYgZXhwcj1cIiRsZWFkZXJib2FyZF9wZXJpb2QgPSB3ZWVrXCIgLS0+P3BlcmlvZD13ZWVrPCEtLSMgZW5kaWYgLS0+YCk7XHJcbiAgICAgIC8vIEZlYXR1cmVzJyBwYWdlcywgZnJvbSB0aGUgQVBJIHdoaWxlIHRoZSBmZWF0dXJlIGlzIG9uIChzZWUgXCJsb2NhdGlvbiB+IF4vX3Nzci9mZWF0dXJlL1wiIGluIG5naW54LmNvbmYpLlxyXG4gICAgICBmaWxsKFwic3BvdGxpZ2h0Lmh0bWxcIiwgUEFHRVMuc3BvdGxpZ2h0LnBhdGgsIGA8IS0tIyBpbmNsdWRlIHZpcnR1YWw9XCIvX3Nzci9mZWF0dXJlL3Nwb3RsaWdodFwiIC0tPmApO1xyXG4gICAgICBmaWxsKFwiY3JlYXRvcnMtYm9hcmQuaHRtbFwiLCBQQUdFUy5jcmVhdG9yc0JvYXJkLnBhdGgsIGA8IS0tIyBpbmNsdWRlIHZpcnR1YWw9XCIvX3Nzci9mZWF0dXJlL2J5XCIgLS0+YCk7XHJcbiAgICAgIGZpbGwoXCJzaG9wLmh0bWxcIiwgUEFHRVMuc2hvcC5wYXRoLCBgPCEtLSMgaW5jbHVkZSB2aXJ0dWFsPVwiL19zc3IvZmVhdHVyZS9zaG9wXCIgLS0+YCk7XHJcbiAgICAgIGZpbGwoXCJmcmllbmRzLXRvdXJuYW1lbnRzLmh0bWxcIiwgUEFHRVMuZnJpZW5kc1RvdXJuYW1lbnRzLnBhdGgsIGA8IS0tIyBpbmNsdWRlIHZpcnR1YWw9XCIvX3Nzci9mZWF0dXJlL2ZyaWVuZHNcIiAtLT5gKTtcclxuICAgICAgLy8gL2RvY3MgYW5kIC9oYW5nb3V0OiB3cml0dGVuIGludG8gdGhlIHBhZ2UgYXQgYnVpbGQgdGltZSAodGhleSBjaGFuZ2Ugb25seSB3aXRoIGEgZGVwbG95KS5cclxuICAgICAgZmlsbChcImRvY3MuaHRtbFwiLCBQQUdFUy5kb2NzLnBhdGgsIGRvY3NUZXh0KHNpdGUpKTtcclxuICAgICAgZmlsbChcImFib3V0Lmh0bWxcIiwgUEFHRVMuYWJvdXQucGF0aCwgcmVuZGVyVG9TdGF0aWNNYXJrdXAoY3JlYXRlRWxlbWVudChBYm91dFZpZXcpKSk7XHJcbiAgICAgIC8vIFRoZSBxdWVzdGlvbnMgYXMgRkFRIGRhdGEgZm9yIHNlYXJjaCBlbmdpbmVzIGFuZCBhbnN3ZXIgZW5naW5lcyAodGhlIHNhbWUgd29yZHMgYXMgdGhlIHBhZ2UpLlxyXG4gICAgICBjb25zdCBmYXEgPSB7IFwiQGNvbnRleHRcIjogXCJodHRwczovL3NjaGVtYS5vcmdcIiwgXCJAdHlwZVwiOiBcIkZBUVBhZ2VcIiwgbWFpbkVudGl0eTogUVVFU1RJT05TLm1hcCgoW25hbWUsIHRleHRdKSA9PiAoeyBcIkB0eXBlXCI6IFwiUXVlc3Rpb25cIiwgbmFtZSwgYWNjZXB0ZWRBbnN3ZXI6IHsgXCJAdHlwZVwiOiBcIkFuc3dlclwiLCB0ZXh0IH0gfSkpIH07XHJcbiAgICAgIGNvbnN0IGFib3V0ID0gcmVhZEZpbGVTeW5jKHJlc29sdmUob3V0LCBcImFib3V0Lmh0bWxcIiksIFwidXRmOFwiKTtcclxuICAgICAgaWYgKCFhYm91dC5pbmNsdWRlcyhcIjwhLS0vc2VvLS0+XCIpKSB0aHJvdyBuZXcgRXJyb3IoXCJhYm91dC5odG1sIGhhcyBubyBzZW8gYmxvY2tcIik7XHJcbiAgICAgIHdyaXRlRmlsZVN5bmMocmVzb2x2ZShvdXQsIFwiYWJvdXQuaHRtbFwiKSwgYWJvdXQucmVwbGFjZShcIjwhLS0vc2VvLS0+XCIsICgpID0+IGA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCI+JHtKU09OLnN0cmluZ2lmeShmYXEpLnJlcGxhY2UoLzwvZywgXCJcXFxcdTAwM2NcIil9PC9zY3JpcHQ+XHJcbiAgICA8IS0tL3Nlby0tPmApKTtcclxuICAgICAgZmlsbChcImhhbmdvdXQuaHRtbFwiLCBQQUdFUy5oYW5nb3V0LnBhdGgsIGhhbmdvdXRUZXh0KCkpO1xyXG4gICAgICBta2RpclN5bmMob3V0LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuICAgICAgd3JpdGVGaWxlU3luYyhyZXNvbHZlKG91dCwgXCJyb2JvdHMudHh0XCIpLCBgVXNlci1hZ2VudDogKlxcbkFsbG93OiAvXFxuRGlzYWxsb3c6IC9hcHByb3ZlL1xcbkRpc2FsbG93OiAvY29ubmVjdFxcblxcblNpdGVtYXA6ICR7c2l0ZX0vc2l0ZW1hcC54bWxcXG5gKTtcclxuICAgICAgY29uc3QgdXJscyA9IFNJVEVNQVBfUEFUSFMubWFwKChwKSA9PiBgICA8dXJsPjxsb2M+JHtzaXRlfSR7cH08L2xvYz48L3VybD5gKS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICB3cml0ZUZpbGVTeW5jKHJlc29sdmUob3V0LCBcInNpdGVtYXAuc3RhdGljLnhtbFwiKSwgYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Plxcbjx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XFxuJHt1cmxzfVxcbjwvdXJsc2V0PlxcbmApO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgLy8gVklURV9TSVRFX1VSTDogdGhlIHB1YmxpYyBhZGRyZXNzLCBmb3IgY2Fub25pY2FsIGxpbmtzIGFuZCBwcmV2aWV3cyAoZGVmYXVsdCBodHRwczovL3N0YXJ0Lm5nKS5cclxuICBjb25zdCBzaXRlID0gKGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJWSVRFX1wiKS5WSVRFX1NJVEVfVVJMIHx8IERFRkFVTFRfU0lURV9VUkwpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW3JlYWN0KCksIHNlb1BhZ2VzKHNpdGUpXSxcclxuICAgIC8vIHRocmVlLmpzICh+NTIwIGtCKSBpcyBzcGxpdCBpbnRvIGl0cyBvd24gY2h1bmsgYW5kIG9ubHkgbG9hZHMgZm9yIHRoZSBjaGFyYWN0ZXIgY3JlYXRvciBhbmQgYXZhdGFyLlxyXG4gICAgYnVpbGQ6IHsgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA2MDAgfSxcclxuICB9O1xyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFdoaW1zaWNhbFxcXFxzdGFydG5nLWZlXFxcXHNyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxXaGltc2ljYWxcXFxcc3RhcnRuZy1mZVxcXFxzcmNcXFxcaG9tZS1jb3B5LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IUC9PbmVEcml2ZS9EZXNrdG9wL1doaW1zaWNhbC9zdGFydG5nLWZlL3NyYy9ob21lLWNvcHkudHNcIjsvLyBUaGUgaG9tZXBhZ2UncyBBYm91dCBhbmQgcXVlc3Rpb25zLiBUaGUgQVBJIHdyaXRlcyB0aGUgc2FtZSB3b3JkcyBpbnRvIHRoZSBob21lcGFnZSBmb3Igc2VhcmNoIGVuZ2luZXMgYW5kIEFJXHJcbi8vIHRvb2xzIGJlZm9yZSB0aGUgYXBwIGxvYWRzIChzdGFydG5nLWJlIGFwcC9yb3V0ZXJzL3BhZ2VzLnB5LCBIT01FX0FCT1VUIGFuZCBIT01FX1FVRVNUSU9OUyk6IGtlZXAgdGhlbSBpbiBzdGVwLlxyXG5leHBvcnQgY29uc3QgQUJPVVQgPSBbXHJcbiAgXCJzdGFydC5uZyBpcyBOaWdlcmlhJ3MgaG9tZSBmb3IgYnJvd3NlciBnYW1lcywgYnVpbHQgYnkgdGhlIEhORyBjb21tdW5pdHkuIEV2ZXJ5IGdhbWUgaXMgZnJlZSB0byBwbGF5IGluIHlvdXIgYnJvd3NlciB3aXRoIG5vIGRvd25sb2FkLCBhbmQgbWFueSBhcmUgbWFkZSBpbiBOYWlqYTogZGFuZm8gcnVzaCBob3VyLCBqb2xsb2YgY2F0Y2hpbmcsIExhZ29zIG1hcmtldHMgYW5kIG1vcmUuXCIsXHJcbiAgXCJXZSdyZSBhbHNvIGJ1aWxkaW5nIGEgaG9tZSBmb3Igd2ViIGdhbWVzIGZyb20gYWNyb3NzIEFmcmljYS4gSWYgeW91IG1ha2UgZ2FtZXMgYW55d2hlcmUgb24gdGhlIGNvbnRpbmVudCwgeW91IGNhbiBwdXQgeW91cnMgb24gc3RhcnQubmcgZm9yIGZyZWUuXCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUVVFU1RJT05TOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXHJcbiAgW1wiV2hhdCBpcyBzdGFydC5uZz9cIiwgXCJBIGhvbWUgZm9yIGZyZWUgYnJvd3NlciBnYW1lcyBtYWRlIGJ5IHRoZSBITkcgY29tbXVuaXR5LiBFYWNoIGdhbWUgaGFzIGl0cyBvd24gYWRkcmVzcywgbGlrZSB5b3VyZ2FtZS5zdGFydC5uZywgYW5kIHlvdSBwbGF5IGl0IHJpZ2h0IGluIHlvdXIgYnJvd3Nlci5cIl0sXHJcbiAgW1wiSXMgaXQgZnJlZT9cIiwgXCJZZXMuIEV2ZXJ5IGdhbWUgb24gc3RhcnQubmcgaXMgZnJlZSB0byBwbGF5IGluIHlvdXIgYnJvd3Nlciwgd2l0aCBub3RoaW5nIHRvIGRvd25sb2FkLlwiXSxcclxuICBbXCJBcmUgdGhlcmUgTmlnZXJpYW4gb3IgQWZyaWNhbiB3ZWIgZ2FtZXM/XCIsIFwiWWVzLiBNYW55IGdhbWVzIGhlcmUgYXJlIE5haWphLXRoZW1lZCwgZnJvbSBkYW5mbyBydXNoIGhvdXIgdG8gam9sbG9mIGFuZCBMYWdvcyBtYXJrZXRzLCBhbmQgd2Ugd2VsY29tZSBnYW1lcyBmcm9tIGFjcm9zcyBBZnJpY2EuXCJdLFxyXG4gIFtcIkRvIEkgbmVlZCBhbiBhY2NvdW50IHRvIHBsYXk/XCIsIFwiTm8uIFNpZ24gaW4gdG8gZ2V0IHlvdXIgc3RhcnQubmcgY2hhcmFjdGVyLCBrZWVwIHlvdXIgc2NvcmVzIG9uIHRoZSBsZWFkZXJib2FyZHMgYW5kIGpvaW4gdGhlIGRhaWx5IHRvdXJuYW1lbnQuXCJdLFxyXG4gIFtcIldoYXQgaXMgdGhlIGRhaWx5IHRvdXJuYW1lbnQ/XCIsIFwiRXZlcnkgZGF5IGEgZmV3IHN0YXJ0Lm5nIGdhbWVzIGFyZSBwaWNrZWQgZm9yIDI0IGhvdXJzLCBhbmQgdGhlIGJlc3QgcGxheWVyIHdpbnMuIFBvaW50cyBjb3VudCB0b3dhcmRzIHRoZSBvdmVyYWxsIGxlYWRlcmJvYXJkLlwiXSxcclxuICBbXCJIb3cgZG8gSSBwdXQgbXkgZ2FtZSBvbiBzdGFydC5uZz9cIiwgXCJQdXNoIHlvdXIgYnJvd3NlciBnYW1lIHRvIGEgcHVibGljIEdpdEh1YiByZXBvLCBwdWJsaXNoIGl0IHdpdGggb25lIEFQSSBjYWxsIGFuZCBhcHByb3ZlIGl0IG9uY2UuIEl0IGdvZXMgbGl2ZSBhdCB5b3VyZ2FtZS5zdGFydC5uZy4gVGhlIGRvY3MgaGF2ZSBldmVyeSBzdGVwLlwiXSxcclxuXTtcclxuIiwgIi8qKiBUaGUgc2l0ZSdzIGZvb3RlciwgYXMgcGxhaW4gbWFya3VwIChubyBmbGFncywgbm8gZGF0YSksIHNvIHRoZSBidWlsZCBjYW4gd3JpdGUgaXQgaW50byBwYWdlcyAodml0ZS5jb25maWcudHMpLiBTaXRlRm9vdGVyIChTaXRlRm9vdGVyLnRzeCkgaXMgdGhlIG9uZVxyXG4gKiAgdGhlIGFwcCBkcmF3cy4gVGhlIHNlcnZlciB3cml0ZXMgdGhlIHNhbWUgZm9vdGVyIG9uIGl0cyBvd24gcGFnZXMgKHN0YXJ0bmctYmUgYXBwL3NlcnZlcl9odG1sLnB5LCBzaXRlX2Zvb3Rlcik6IGtlZXAgdGhlIHdvcmRzIGFuZCBsaW5rc1xyXG4gKiAgdGhlIHNhbWUgaW4gYWxsIHRocmVlLiBDYXRlZ29yaWVzIHNob3dzIG9ubHkgd2hpbGUgdGhlIHRhZ3MgZmVhdHVyZSBpcyBvbiwgbGlrZSB0aGUgc2VydmVyJ3MuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBTaXRlRm9vdGVyVmlldyh7IGNhdGVnb3JpZXMgPSBmYWxzZSB9OiB7IGNhdGVnb3JpZXM/OiBib29sZWFuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXIgc2l0ZS1mb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWZvb3Rlci1ncmlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWZvb3Rlci1icmFuZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCI+PGI+c3RhcnQ8c3Bhbj4ubmc8L3NwYW4+PC9iPjwvYT5cclxuICAgICAgICAgIDxwPk5pZ2VyaWEncyBob21lIGZvciBicm93c2VyIGdhbWVzLCBtYWRlIGJ5IHRoZSBjb21tdW5pdHkgYW5kIGJ5IGNyZWF0b3JzIGFjcm9zcyBBZnJpY2EuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBsYXlcIj5cclxuICAgICAgICAgIDxoMj5QbGF5PC9oMj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2FtZXNcIj5BbGwgZ2FtZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvdG91cm5hbWVudFwiPkRhaWx5IHRvdXJuYW1lbnQ8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbGVhZGVyYm9hcmRcIj5MZWFkZXJib2FyZDwvYT48L2xpPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcyAmJiA8bGk+PGEgaHJlZj1cIi9jYXRlZ29yaWVzXCI+Q2F0ZWdvcmllczwvYT48L2xpPn1cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvaGFuZ291dFwiPlRoZSBIYW5nb3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1ha2UgZ2FtZXNcIj5cclxuICAgICAgICAgIDxoMj5NYWtlIGdhbWVzPC9oMj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvY3JlYXRvcnNcIj5JbmRlcGVuZGVudCBjcmVhdG9yczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb2NzXCI+QnVpbGQgYSBnYW1lPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2RvY3MubWRcIj5Eb2NzIGZvciB5b3VyIEFJICgubWQpPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIkFib3V0XCI+XHJcbiAgICAgICAgICA8aDI+QWJvdXQ8L2gyPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hYm91dFwiPkFib3V0IHN0YXJ0Lm5nPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwic2l0ZS1mb290ZXItYmFzZVwiPlxyXG4gICAgICAgIDxzcGFuPlx1MDBBOSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBzdGFydC5uZzwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5HYW1lcyBmcm9tIE5pZ2VyaWEgYW5kIGFjcm9zcyBBZnJpY2EuPC9zcGFuPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBQk9VVCwgUVVFU1RJT05TIH0gZnJvbSBcIi4vaG9tZS1jb3B5XCI7XHJcbmltcG9ydCB7IFNpdGVGb290ZXJWaWV3IH0gZnJvbSBcIi4vU2l0ZUZvb3RlclZpZXdcIjtcclxuXHJcbi8vIFRoZSAvYWJvdXQgcGFnZS4gUHVyZSwgc28gdGhlIGJ1aWxkIGNhbiB3cml0ZSB0aGUgc2FtZSBwYWdlIGludG8gYWJvdXQuaHRtbCBmb3Igc2VhcmNoIGVuZ2luZXMgYW5kIEFJIHRvb2xzXHJcbi8vICh2aXRlLmNvbmZpZy50cykgYW5kIHRoZSBhcHAgZHJhd3MgaXQgYWdhaW4gd2hlbiBpdCBsb2FkcyAoQWJvdXQudHN4KS4gSXRzIHdvcmRzIGFyZSB0aGUgaG9tZXBhZ2UncyAoaG9tZS1jb3B5LnRzKSBwbHVzXHJcbi8vIHRoZSBwbGFjZXMgdG8gZ28gbmV4dC5cclxuY29uc3QgV0FZUzogW3N0cmluZywgc3RyaW5nLCBzdHJpbmddW10gPSBbXHJcbiAgW1wiUGxheVwiLCBcIlBpY2sgYSBnYW1lIGZyb20gdGhlIGNvbW11bml0eSBhbmQgcGxheSBpdCByaWdodCBpbiB5b3VyIGJyb3dzZXIsIGZyZWUsIHdpdGggbm90aGluZyB0byBkb3dubG9hZC5cIiwgXCIvZ2FtZXNcIl0sXHJcbiAgW1wiQ29tcGV0ZVwiLCBcIkpvaW4gdGhlIGRhaWx5IHRvdXJuYW1lbnQgYW5kIGNsaW1iIHRoZSBvdmVyYWxsIGxlYWRlcmJvYXJkLlwiLCBcIi90b3VybmFtZW50XCJdLFxyXG4gIFtcIkluZGVwZW5kZW50IGNyZWF0b3JzXCIsIFwiR2FtZXMgbWFkZSBhbmQgaG9zdGVkIGJ5IGNyZWF0b3JzIG91dHNpZGUgc3RhcnQubmcsIGVhY2ggd2l0aCBpdHMgb3duIHBhZ2UuXCIsIFwiL2NyZWF0b3JzXCJdLFxyXG4gIFtcIk1ha2UgYSBnYW1lXCIsIFwiUHVzaCB5b3VyIGJyb3dzZXIgZ2FtZSB0byBhIHB1YmxpYyBHaXRIdWIgcmVwbywgcHVibGlzaCBpdCB3aXRoIG9uZSBBUEkgY2FsbCBhbmQgYXBwcm92ZSBpdCBvbmNlLiBUaGUgZG9jcyBoYXZlIGV2ZXJ5IHN0ZXAuXCIsIFwiL2RvY3NcIl0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dFZpZXcoeyB0aGVtZVRvZ2dsZSB9OiB7IHRoZW1lVG9nZ2xlPzogUmVhY3ROb2RlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJjb250YWluZXIgbmF2XCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCI+PGI+c3RhcnQ8c3Bhbj4ubmc8L3NwYW4+PC9iPjwvYT5cclxuICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlc1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9nYW1lc1wiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi90b3VybmFtZW50XCI+VG91cm5hbWVudDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvY3JlYXRvcnNcIj5DcmVhdG9yczwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvZG9jc1wiPkRvY3M8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYWNjb3VudFwiPnt0aGVtZVRvZ2dsZX08L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBhYm91dCBhYm91dC1wYWdlXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJleWVicm93XCI+QWJvdXQ8L3A+XHJcbiAgICAgICAgICA8aDE+QWJvdXQgc3RhcnQubmc8L2gxPlxyXG4gICAgICAgICAge0FCT1VULm1hcCgocCkgPT4gPHAga2V5PXtwfSBjbGFzc05hbWU9XCJsZWFkXCI+e3B9PC9wPil9XHJcblxyXG4gICAgICAgICAgPGgyPldoYXQgeW91IGNhbiBkbyBoZXJlPC9oMj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhYm91dC13YXlzXCI+XHJcbiAgICAgICAgICAgIHtXQVlTLm1hcCgoW3RpdGxlLCB0ZXh0LCBocmVmXSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2hyZWZ9PjxhIGhyZWY9e2hyZWZ9PjxiPnt0aXRsZX08L2I+PHNwYW4+e3RleHR9PC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPGgyPlF1ZXN0aW9uczwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXF1ZXN0aW9uc1wiPlxyXG4gICAgICAgICAgICB7UVVFU1RJT05TLm1hcCgoW3EsIGFdKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3F9PjxoMz57cX08L2gzPjxwPnthfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPFNpdGVGb290ZXJWaWV3IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICIvLyBBIHNtYWxsIE1hcmtkb3duIHJlbmRlcmVyIGZvciB0aGUgZG9jcyBwYWdlIChzdGFydC5uZy9kb2NzLm1kKTogaGVhZGluZ3MsIHBhcmFncmFwaHMsIGxpc3RzLFxyXG4vLyBxdW90ZXMsIHRhYmxlcywgZmVuY2VkIGNvZGUsIGFuZCBpbmxpbmUgY29kZSwgYm9sZCBhbmQgbGlua3MuIEl0IGJ1aWxkcyBSZWFjdCBlbGVtZW50cywgbmV2ZXJcclxuLy8gSFRNTCBzdHJpbmdzLCBzbyBub3RoaW5nIGluIHRoZSBmaWxlIGNhbiBpbmplY3QgbWFya3VwLlxyXG5pbXBvcnQgeyBGcmFnbWVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2x1ZyA9ICh0ZXh0OiBzdHJpbmcpID0+IHRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9gL2csIFwiXCIpLnJlcGxhY2UoL1teYS16MC05XSsvZywgXCItXCIpLnJlcGxhY2UoL14tfC0kL2csIFwiXCIpO1xyXG5cclxuZnVuY3Rpb24gaW5saW5lKHRleHQ6IHN0cmluZywga2V5ID0gMCk6IFJlYWN0Tm9kZVtdIHtcclxuICBjb25zdCBvdXQ6IFJlYWN0Tm9kZVtdID0gW107XHJcbiAgY29uc3QgcmUgPSAvYChbXmBdKylgfFxcKlxcKihbXipdKylcXCpcXCp8XFxbKFteXFxdXSspXFxdXFwoKFteKVxcc10rKVxcKS9nO1xyXG4gIGxldCBsYXN0ID0gMDtcclxuICBsZXQgbTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcclxuICB3aGlsZSAoKG0gPSByZS5leGVjKHRleHQpKSkge1xyXG4gICAgaWYgKG0uaW5kZXggPiBsYXN0KSBvdXQucHVzaCh0ZXh0LnNsaWNlKGxhc3QsIG0uaW5kZXgpKTtcclxuICAgIGNvbnN0IGsgPSBgJHtrZXl9LSR7bS5pbmRleH1gO1xyXG4gICAgaWYgKG1bMV0gIT09IHVuZGVmaW5lZCkgb3V0LnB1c2goPGNvZGUga2V5PXtrfT57bVsxXX08L2NvZGU+KTtcclxuICAgIGVsc2UgaWYgKG1bMl0gIT09IHVuZGVmaW5lZCkgb3V0LnB1c2goPGIga2V5PXtrfT57aW5saW5lKG1bMl0sIG0uaW5kZXgpfTwvYj4pO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IGhyZWYgPSBtWzRdO1xyXG4gICAgICBjb25zdCBleHRlcm5hbCA9IC9eaHR0cHM/Oi8udGVzdChocmVmKTtcclxuICAgICAgb3V0LnB1c2goXHJcbiAgICAgICAgPGEga2V5PXtrfSBocmVmPXsvXihodHRwcz86fFxcL3wjKS8udGVzdChocmVmKSA/IGhyZWYgOiBcIiNcIn0gey4uLihleHRlcm5hbCA/IHsgdGFyZ2V0OiBcIl9ibGFua1wiLCByZWw6IFwibm9yZWZlcnJlclwiIH0gOiB7fSl9PlxyXG4gICAgICAgICAge2lubGluZShtWzNdLCBtLmluZGV4KX1cclxuICAgICAgICA8L2E+LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbGFzdCA9IHJlLmxhc3RJbmRleDtcclxuICB9XHJcbiAgaWYgKGxhc3QgPCB0ZXh0Lmxlbmd0aCkgb3V0LnB1c2godGV4dC5zbGljZShsYXN0KSk7XHJcbiAgcmV0dXJuIG91dDtcclxufVxyXG5cclxuY29uc3QgY2VsbHMgPSAocm93OiBzdHJpbmcpID0+IHJvdy50cmltKCkucmVwbGFjZSgvXlxcfHxcXHwkL2csIFwiXCIpLnNwbGl0KFwifFwiKS5tYXAoKGMpID0+IGMudHJpbSgpKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXJrZG93bih7IHNvdXJjZSB9OiB7IHNvdXJjZTogc3RyaW5nIH0pIHtcclxuICBjb25zdCBsaW5lcyA9IHNvdXJjZS5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIikuc3BsaXQoXCJcXG5cIik7XHJcbiAgY29uc3QgYmxvY2tzOiBSZWFjdE5vZGVbXSA9IFtdO1xyXG4gIGxldCBpID0gMDtcclxuICB3aGlsZSAoaSA8IGxpbmVzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xyXG4gICAgY29uc3QgayA9IGJsb2Nrcy5sZW5ndGg7XHJcbiAgICBpZiAoIWxpbmUudHJpbSgpKSB7XHJcbiAgICAgIGkrKztcclxuICAgIH0gZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiYGBgXCIpKSB7XHJcbiAgICAgIGNvbnN0IGxhbmcgPSBsaW5lLnNsaWNlKDMpLnRyaW0oKTtcclxuICAgICAgY29uc3QgY29kZTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgZm9yIChpKys7IGkgPCBsaW5lcy5sZW5ndGggJiYgIWxpbmVzW2ldLnN0YXJ0c1dpdGgoXCJgYGBcIik7IGkrKykgY29kZS5wdXNoKGxpbmVzW2ldKTtcclxuICAgICAgaSsrO1xyXG4gICAgICBibG9ja3MucHVzaChcclxuICAgICAgICA8cHJlIGtleT17a30gZGF0YS1sYW5nPXtsYW5nIHx8IHVuZGVmaW5lZH0+XHJcbiAgICAgICAgICA8Y29kZT57Y29kZS5qb2luKFwiXFxuXCIpfTwvY29kZT5cclxuICAgICAgICA8L3ByZT4sXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKC9eI3sxLDR9IC8udGVzdChsaW5lKSkge1xyXG4gICAgICBjb25zdCBsZXZlbCA9IGxpbmUubWF0Y2goL14jKy8pIVswXS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IHRleHQgPSBsaW5lLnNsaWNlKGxldmVsICsgMSk7XHJcbiAgICAgIGNvbnN0IEggPSBgaCR7bGV2ZWx9YCBhcyBcImgxXCI7XHJcbiAgICAgIGJsb2Nrcy5wdXNoKDxIIGtleT17a30gaWQ9e3NsdWcodGV4dCl9PntpbmxpbmUodGV4dCl9PC9IPik7XHJcbiAgICAgIGkrKztcclxuICAgIH0gZWxzZSBpZiAobGluZS50cmltU3RhcnQoKS5zdGFydHNXaXRoKFwifFwiKSAmJiBsaW5lc1tpICsgMV0/LmluY2x1ZGVzKFwiLS0tXCIpKSB7XHJcbiAgICAgIGNvbnN0IGhlYWQgPSBjZWxscyhsaW5lKTtcclxuICAgICAgY29uc3Qgcm93czogc3RyaW5nW11bXSA9IFtdO1xyXG4gICAgICBmb3IgKGkgKz0gMjsgaSA8IGxpbmVzLmxlbmd0aCAmJiBsaW5lc1tpXS50cmltU3RhcnQoKS5zdGFydHNXaXRoKFwifFwiKTsgaSsrKSByb3dzLnB1c2goY2VsbHMobGluZXNbaV0pKTtcclxuICAgICAgYmxvY2tzLnB1c2goXHJcbiAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+e2hlYWQubWFwKChjLCBqKSA9PiA8dGgga2V5PXtqfT57aW5saW5lKGMpfTwvdGg+KX08L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3Jvd3MubWFwKChyLCByaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17cml9PntyLm1hcCgoYywgaikgPT4gPHRkIGtleT17an0+e2lubGluZShjKX08L3RkPil9PC90cj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICgvXlxccyooWy0qXXxcXGQrXFwuKSAvLnRlc3QobGluZSkpIHtcclxuICAgICAgY29uc3Qgb3JkZXJlZCA9IC9eXFxzKlxcZCtcXC4gLy50ZXN0KGxpbmUpO1xyXG4gICAgICBjb25zdCBpdGVtczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgZm9yICg7IGkgPCBsaW5lcy5sZW5ndGggJiYgL15cXHMqKFstKl18XFxkK1xcLikgLy50ZXN0KGxpbmVzW2ldKTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBsaW5lc1tpXS5yZXBsYWNlKC9eXFxzKihbLSpdfFxcZCtcXC4pIC8sIFwiXCIpO1xyXG4gICAgICAgIHdoaWxlIChpICsgMSA8IGxpbmVzLmxlbmd0aCAmJiAvXiB7Mix9XFxTLy50ZXN0KGxpbmVzW2kgKyAxXSkgJiYgIS9eXFxzKihbLSpdfFxcZCtcXC4pIC8udGVzdChsaW5lc1tpICsgMV0pKSBpdGVtICs9IFwiIFwiICsgbGluZXNbKytpXS50cmltKCk7XHJcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBMID0gb3JkZXJlZCA/IFwib2xcIiA6IFwidWxcIjtcclxuICAgICAgYmxvY2tzLnB1c2goPEwga2V5PXtrfT57aXRlbXMubWFwKCh0LCBqKSA9PiA8bGkga2V5PXtqfT57aW5saW5lKHQpfTwvbGk+KX08L0w+KTtcclxuICAgIH0gZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiPlwiKSkge1xyXG4gICAgICBjb25zdCBxdW90ZTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgZm9yICg7IGkgPCBsaW5lcy5sZW5ndGggJiYgbGluZXNbaV0uc3RhcnRzV2l0aChcIj5cIik7IGkrKykgcXVvdGUucHVzaChsaW5lc1tpXS5yZXBsYWNlKC9ePlxccz8vLCBcIlwiKSk7XHJcbiAgICAgIGJsb2Nrcy5wdXNoKDxibG9ja3F1b3RlIGtleT17a30+e3F1b3RlLm1hcCgocSwgaikgPT4gPEZyYWdtZW50IGtleT17an0+e2lubGluZShxKX17aiA8IHF1b3RlLmxlbmd0aCAtIDEgJiYgPGJyIC8+fTwvRnJhZ21lbnQ+KX08L2Jsb2NrcXVvdGU+KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBhcmE6IHN0cmluZ1tdID0gW107XHJcbiAgICAgIGZvciAoOyBpIDwgbGluZXMubGVuZ3RoICYmIGxpbmVzW2ldLnRyaW0oKSAmJiAhL14oI3sxLDR9IHxgYGB8PnxcXHMqKFstKl18XFxkK1xcLikgfFxccypcXHwpLy50ZXN0KGxpbmVzW2ldKTsgaSsrKSBwYXJhLnB1c2gobGluZXNbaV0udHJpbSgpKTtcclxuICAgICAgYmxvY2tzLnB1c2goPHAga2V5PXtrfT57aW5saW5lKHBhcmEuam9pbihcIiBcIikpfTwvcD4pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gPD57YmxvY2tzfTwvPjtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcV2hpbXNpY2FsXFxcXHN0YXJ0bmctZmVcXFxcc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFdoaW1zaWNhbFxcXFxzdGFydG5nLWZlXFxcXHNyY1xcXFxzZW8udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL09uZURyaXZlL0Rlc2t0b3AvV2hpbXNpY2FsL3N0YXJ0bmctZmUvc3JjL3Nlby50c1wiOy8vIFBhZ2UgdGl0bGVzLCBkZXNjcmlwdGlvbnMgYW5kIGxpbmsgcHJldmlld3MgKE9wZW4gR3JhcGggLyBUd2l0dGVyIGNhcmRzKS5cclxuLy9cclxuLy8gVGhlIGFwcCBpcyBjbGllbnQtcmVuZGVyZWQsIGJ1dCBjaGF0IGFwcHMgYW5kIHNlYXJjaCBjcmF3bGVycyByZWFkIHRoZSBIVE1MIHRoZXkgYXJlIHNlcnZlZCBhbmRcclxuLy8gb2Z0ZW4gZG9uJ3QgcnVuIEphdmFTY3JpcHQuIFNvIGV2ZXJ5IHBhZ2UncyB0YWdzIGxpdmUgaGVyZSBvbmNlIGFuZCBhcmUgdXNlZCB0d2ljZTpcclxuLy8gIC0gdml0ZS5jb25maWcudHMgd3JpdGVzIG9uZSBIVE1MIGZpbGUgcGVyIHBhZ2UgYXQgYnVpbGQgdGltZSAoZ2FtZXMuaHRtbCwgZG9jcy5odG1sIC4uLiksIHdoaWNoXHJcbi8vICAgIG5naW54IHNlcnZlcyBmb3IgdGhhdCBhZGRyZXNzLCBzbyBhIHNoYXJlZCBsaW5rIHNob3dzIHRoZSByaWdodCBwcmV2aWV3O1xyXG4vLyAgLSBzZXRTZW8oKSBrZWVwcyB0aGUgdGFncyByaWdodCB3aGlsZSBzb21lb25lIG1vdmVzIGFyb3VuZCB0aGUgYXBwIHdpdGhvdXQgYSByZWxvYWQuXHJcbi8vIEtlZXAgdGhlIHBhdGhzIGluIHN0ZXAgd2l0aCBtYWluLnRzeCBhbmQgbmdpbnguY29uZi5cclxuXHJcbmV4cG9ydCBjb25zdCBTSVRFX05BTUUgPSBcInN0YXJ0Lm5nXCI7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NJVEVfVVJMID0gXCJodHRwczovL3N0YXJ0Lm5nXCI7XHJcbi8qKiBUaGUgcGljdHVyZSBzaG93biBpbiBsaW5rIHByZXZpZXdzIChpbiBwdWJsaWMvKS4gKi9cclxuZXhwb3J0IGNvbnN0IFNIQVJFX0lNQUdFID0gXCIvaGFuZ291dC1jb3Zlci5qcGdcIjtcclxuZXhwb3J0IGNvbnN0IFNIQVJFX0lNQUdFX0FMVCA9IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBIYW5nb3V0LCBzdGFydC5uZydzIG93biBtdWx0aXBsYXllciBnYW1lXCI7XHJcbi8qKiBUaGUgdG91cm5hbWVudCdzIG93biBwcmV2aWV3IHBpY3R1cmUgKGluIHB1YmxpYy8pOiBzaG93biBvbiBYIGFuZCBpbiBjaGF0cyB3aGVuIC90b3VybmFtZW50IGlzIHNoYXJlZC4gKi9cclxuZXhwb3J0IGNvbnN0IFRPVVJOQU1FTlRfSU1BR0UgPSBcIi90b3VybmFtZW50LXNoYXJlLnBuZ1wiO1xyXG5leHBvcnQgY29uc3QgVE9VUk5BTUVOVF9JTUFHRV9BTFQgPSBcInN0YXJ0Lm5nJ3MgZGFpbHkgdG91cm5hbWVudDogNSBnYW1lcywgMjQgaG91cnMsIG9uZSB3aW5uZXIsIHdpdGggY292ZXJzIG9mIGdhbWVzIGZyb20gdGhlIGNvbW11bml0eVwiO1xyXG4vKiogVGhlIGNyZWF0b3JzIHBhZ2UncyBwcmV2aWV3IHBpY3R1cmUgKGluIHB1YmxpYy8pOiBhbiBpbnZpdGF0aW9uIHRvIHN1Ym1pdCBhIGdhbWUsIHNob3duIHdoZW4gL2NyZWF0b3JzIGlzIHNoYXJlZC4gKi9cclxuZXhwb3J0IGNvbnN0IENSRUFUT1JTX0lNQUdFID0gXCIvY3JlYXRvcnMtc2hhcmUucG5nXCI7XHJcbmV4cG9ydCBjb25zdCBDUkVBVE9SU19JTUFHRV9BTFQgPSBcIk1hZGUgYSBnYW1lPyBHZXQgaXQgcGxheWVkLiBTdWJtaXQgeW91ciBnYW1lIHRvIHN0YXJ0Lm5nL2NyZWF0b3JzLCB3aXRoIGNvdmVycyBvZiBnYW1lcyBieSBpbmRlcGVuZGVudCBjcmVhdG9yc1wiO1xyXG5cclxuZXhwb3J0IHR5cGUgU2VvID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAvKiogVGhlIHBhZ2UncyBhZGRyZXNzLCB3aXRob3V0IHRoZSBzaXRlOiBcIi9nYW1lc1wiLiAqL1xyXG4gIHBhdGg6IHN0cmluZztcclxuICAvKiogS2VlcCB0aGUgcGFnZSBvdXQgb2Ygc2VhcmNoIHJlc3VsdHMgKHNpZ24taW4gZmxvd3MsIDQwNCkuICovXHJcbiAgbm9pbmRleD86IGJvb2xlYW47XHJcbiAgLyoqIEl0cyBvd24gcHJldmlldyBwaWN0dXJlOiBhIHBhdGggaW4gcHVibGljLyBvciBhIGZ1bGwgYWRkcmVzcywgbGlrZSBhIGdhbWUncyBjb3ZlciAoZGVmYXVsdCBTSEFSRV9JTUFHRSkuICovXHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgaW1hZ2VBbHQ/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBIT01FX0RFU0NSSVBUSU9OID1cclxuICBcIk5pZ2VyaWEncyBob21lIGZvciBmcmVlIGJyb3dzZXIgZ2FtZXMuIFBsYXkgTmFpamEtdGhlbWVkIHdlYiBnYW1lcyBsaWtlIERhbmZvIERlZmVuc2UgYW5kIEpvbGxvZiBSdXNoLCBubyBkb3dubG9hZC4gQnVpbHQgYnkgdGhlIEhORyBjb21tdW5pdHkuXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUEFHRVM6IFJlY29yZDxzdHJpbmcsIFNlbz4gPSB7XHJcbiAgaG9tZTogeyB0aXRsZTogXCJzdGFydC5uZyBcdTAwQjcgR29vZCB2aWJlcy4gR29vZCBnYW1lcy5cIiwgZGVzY3JpcHRpb246IEhPTUVfREVTQ1JJUFRJT04sIHBhdGg6IFwiL1wiIH0sXHJcbiAgZ2FtZXM6IHtcclxuICAgIHRpdGxlOiBcIkFsbCBnYW1lcyBmcm9tIHRoZSBjb21tdW5pdHkgXHUwMEI3IHN0YXJ0Lm5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJCcm93c2UgYW5kIHNlYXJjaCBldmVyeSBnYW1lIGJ1aWx0IGJ5IHRoZSBzdGFydC5uZyBjb21tdW5pdHkuIFBpY2sgb25lIGFuZCBwbGF5IHJpZ2h0IGluIHlvdXIgYnJvd3Nlciwgbm8gZG93bmxvYWQgbmVlZGVkLlwiLFxyXG4gICAgcGF0aDogXCIvZ2FtZXNcIixcclxuICB9LFxyXG4gIGNyZWF0b3JzOiB7XHJcbiAgICB0aXRsZTogXCJHYW1lcyBieSBpbmRlcGVuZGVudCBjcmVhdG9ycyBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRpc2NvdmVyIGdhbWVzIG1hZGUgYW5kIGhvc3RlZCBieSBpbmRlcGVuZGVudCBjcmVhdG9ycywgZnJvbSBpdGNoLmlvIHRvIHRoZWlyIG93biBzaXRlcy4gU2VhcmNoIHRoZW0gYWxsLCBvciBzdWJtaXQgeW91ciBvd24uXCIsXHJcbiAgICBwYXRoOiBcIi9jcmVhdG9yc1wiLFxyXG4gICAgaW1hZ2U6IENSRUFUT1JTX0lNQUdFLFxyXG4gICAgaW1hZ2VBbHQ6IENSRUFUT1JTX0lNQUdFX0FMVCxcclxuICB9LFxyXG4gIGFib3V0OiB7XHJcbiAgICB0aXRsZTogXCJBYm91dCBzdGFydC5uZyBcdTAwQjcgTmlnZXJpYSdzIGhvbWUgZm9yIGJyb3dzZXIgZ2FtZXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInN0YXJ0Lm5nIGlzIE5pZ2VyaWEncyBob21lIGZvciBmcmVlIGJyb3dzZXIgZ2FtZXMsIGJ1aWx0IGJ5IHRoZSBITkcgY29tbXVuaXR5LiBXaGF0IGl0IGlzLCB3aGF0IHlvdSBjYW4gZG8gaGVyZSwgYW5kIGFuc3dlcnMgdG8gY29tbW9uIHF1ZXN0aW9ucy5cIixcclxuICAgIHBhdGg6IFwiL2Fib3V0XCIsXHJcbiAgfSxcclxuICBoYW5nb3V0OiB7XHJcbiAgICB0aXRsZTogXCJUaGUgSGFuZ291dCBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBIYW5nb3V0IGlzIHN0YXJ0Lm5nJ3Mgb3duIG11bHRpcGxheWVyIHBhcmsuIFNpZ24gaW4gYXMgeW91ciBjaGFyYWN0ZXIsIHdhbGsgYXJvdW5kIGFuZCBtZWV0IGV2ZXJ5b25lIGVsc2Ugd2hvJ3MgdGhlcmUuXCIsXHJcbiAgICBwYXRoOiBcIi9oYW5nb3V0XCIsXHJcbiAgfSxcclxuICBkb2NzOiB7XHJcbiAgICB0aXRsZTogXCJEb2NzOiBwdWJsaXNoIGEgZ2FtZSBvbiBzdGFydC5uZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSG93IHRvIHB1Ymxpc2ggYSBicm93c2VyIGdhbWUgb24gc3RhcnQubmc6IHB1c2ggaXQgdG8gR2l0SHViLCBtYWtlIG9uZSBBUEkgY2FsbCwgYXBwcm92ZSBpdCBvbmNlLCBhbmQgaXQncyBsaXZlIGF0IHlvdXJnYW1lLnN0YXJ0Lm5nIHdpdGggaXRzIG93biBsZWFkZXJib2FyZC5cIixcclxuICAgIHBhdGg6IFwiL2RvY3NcIixcclxuICB9LFxyXG4gIHRvdXJuYW1lbnQ6IHtcclxuICAgIHRpdGxlOiBcIlRvZGF5J3MgdG91cm5hbWVudCBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkV2ZXJ5IGRheSwgYSBmZXcgc3RhcnQubmcgZ2FtZXMgZm9yIDI0IGhvdXJzIGFuZCBvbmUgd2lubmVyLiBTaGFyZSB0byBlbnRlciwgcGxheSwgYW5kIGNsaW1iIHRoZSBzdGFuZGluZ3MuXCIsXHJcbiAgICBwYXRoOiBcIi90b3VybmFtZW50XCIsXHJcbiAgICBpbWFnZTogVE9VUk5BTUVOVF9JTUFHRSxcclxuICAgIGltYWdlQWx0OiBUT1VSTkFNRU5UX0lNQUdFX0FMVCxcclxuICB9LFxyXG4gIGxlYWRlcmJvYXJkOiB7XHJcbiAgICB0aXRsZTogXCJMZWFkZXJib2FyZCBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBiZXN0IHBsYXllcnMgb24gc3RhcnQubmc6IHBvaW50cyBmcm9tIHRoZSBkYWlseSB0b3VybmFtZW50cywgYWxsIHRpbWUgYW5kIHRoaXMgd2Vlay5cIixcclxuICAgIHBhdGg6IFwiL2xlYWRlcmJvYXJkXCIsXHJcbiAgICBpbWFnZTogVE9VUk5BTUVOVF9JTUFHRSxcclxuICAgIGltYWdlQWx0OiBUT1VSTkFNRU5UX0lNQUdFX0FMVCxcclxuICB9LFxyXG4gIC8vIFRoZSBwbGFpbiBwYWdlIG5naW54IGZhbGxzIGJhY2sgdG8gZm9yIC9nYW1lcy88bmFtZT4gd2hlbiB0aGUgQVBJIGNhbid0IHJlbmRlciB0aGF0IGdhbWUncyBwYWdlLlxyXG4gIGdhbWU6IHtcclxuICAgIHRpdGxlOiBcIlBsYXkgZnJlZSBvbiBzdGFydC5uZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUGxheSBmcmVlIGJyb3dzZXIgZ2FtZXMgbWFkZSBieSB0aGUgSE5HIGNvbW11bml0eSBvbiBzdGFydC5uZy5cIixcclxuICAgIHBhdGg6IFwiL2dhbWVzXCIsXHJcbiAgfSxcclxuICBhcHByb3ZlOiB7XHJcbiAgICB0aXRsZTogXCJQdXQgeW91ciBnYW1lIGxpdmUgXHUwMEI3IHN0YXJ0Lm5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBcHByb3ZlIGEgZ2FtZSB5b3UgcHVibGlzaGVkIHRvIHN0YXJ0Lm5nIGFuZCBwdXQgaXQgbGl2ZSBhdCBpdHMgb3duIGFkZHJlc3MuXCIsXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIG5vaW5kZXg6IHRydWUsXHJcbiAgfSxcclxuICAvLyBUb3VybmFtZW50cyB3aXRoIGZyaWVuZHMgKHNyYy9mZWF0dXJlcy9wcml2YXRlX3RvdXJuYW1lbnRzKTogdGhlIHBhZ2UgdGhhdCBzdGFydHMgb25lLCBhbmQgYW4gaW52aXRlIGxpbmsncyBwYWdlLlxyXG4gIGZyaWVuZHNUb3VybmFtZW50czoge1xyXG4gICAgdGl0bGU6IFwiU3RhcnQgYSB0b3VybmFtZW50IHdpdGggeW91ciBmcmllbmRzIFx1MDBCNyBzdGFydC5uZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUGljayBhbnkgZ2FtZXMgb24gc3RhcnQubmcsIHNldCBob3cgbG9uZyBpdCBydW5zLCBhbmQgc2hhcmUgYSBsaW5rLiBZb3VyIGZyaWVuZHMgam9pbiBhbmQgeW91IGFsbCBmb2xsb3cgb25lIHRhYmxlIG9mIHNjb3Jlcy5cIixcclxuICAgIHBhdGg6IFwiL2ZyaWVuZHNcIixcclxuICB9LFxyXG4gIHByaXZhdGVUb3VybmFtZW50OiB7XHJcbiAgICB0aXRsZTogXCJKb2luIGEgdG91cm5hbWVudCB3aXRoIGZyaWVuZHMgXHUwMEI3IHN0YXJ0Lm5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJZb3UndmUgYmVlbiBpbnZpdGVkIHRvIGEgdG91cm5hbWVudCBvbiBzdGFydC5uZy4gSm9pbiBpdCwgcGxheSBpdHMgZ2FtZXMgYW5kIHNlZSB3aGVyZSB5b3Ugc3RhbmQuXCIsXHJcbiAgICBwYXRoOiBcIi9mcmllbmRzXCIsXHJcbiAgICBub2luZGV4OiB0cnVlLCAvLyBhbiBpbnZpdGUgbGluayBpcyBwcml2YXRlOyB0aGUgcGFnZSBzZXRzIGl0cyBvd24gdGl0bGUgb25jZSBpdCBrbm93cyB0aGUgdG91cm5hbWVudFxyXG4gIH0sXHJcbiAgLy8gRnJpZW5kcyAmIGZvbGxvd3MgKHNyYy9mZWF0dXJlcy9mb2xsb3dzKTogeW91ciBsaXN0cyBhbmQgYW4gaW52aXRlIGxpbmsncyBwYWdlLiBCb3RoIHByaXZhdGUuXHJcbiAgZm9sbG93czoge1xyXG4gICAgdGl0bGU6IFwiWW91ciBmcmllbmRzIFx1MDBCNyBzdGFydC5uZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiWW91ciBmcmllbmRzIG9uIHN0YXJ0Lm5nLCB3aG8geW91IGZvbGxvdyBhbmQgd2hvIGZvbGxvd3MgeW91LCBhbmQgYSBsaW5rIHRvIGludml0ZSBuZXcgZnJpZW5kcy5cIixcclxuICAgIHBhdGg6IFwiL2ZvbGxvd3NcIixcclxuICAgIG5vaW5kZXg6IHRydWUsXHJcbiAgfSxcclxuICBmcmllbmRJbnZpdGU6IHtcclxuICAgIHRpdGxlOiBcIllvdSdyZSBpbnZpdGVkIHRvIGJlIGZyaWVuZHMgXHUwMEI3IHN0YXJ0Lm5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTb21lb25lIHdhbnRzIHRvIGJlIGZyaWVuZHMgd2l0aCB5b3Ugb24gc3RhcnQubmcuIEFjY2VwdCBhbmQgeW91J2xsIGZvbGxvdyBlYWNoIG90aGVyLlwiLFxyXG4gICAgcGF0aDogXCIvZm9sbG93c1wiLFxyXG4gICAgbm9pbmRleDogdHJ1ZSwgLy8gYW4gaW52aXRlIGxpbmsgaXMgcHJpdmF0ZVxyXG4gIH0sXHJcbiAgLy8gTGVhZ3VlcyAoc3JjL2ZlYXR1cmVzL2xlYWd1ZXMpOiB5b3VyIGdyb3VwLCB0aWVyIGFuZCBjb3VudGRvd24gaW4gZWFjaCB0cmFjay4gU2lnbmVkIGluIG9ubHksIHNvIHByaXZhdGUuXHJcbiAgbGVhZ3VlOiB7XHJcbiAgICB0aXRsZTogXCJZb3VyIGxlYWd1ZSBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgbGVhZ3VlIG9uIHN0YXJ0Lm5nOiBwbGF5IGFueSBnYW1lIHRvIHNjb3JlLCBmaW5pc2ggaW4gdGhlIHRvcCA1IG9mIHlvdXIgZ3JvdXAgdG8gbW92ZSB1cCBhIHRpZXIuXCIsXHJcbiAgICBwYXRoOiBcIi9sZWFndWVcIixcclxuICAgIG5vaW5kZXg6IHRydWUsXHJcbiAgfSxcclxuICAvLyBXYXJkcm9iZSAoc3JjL2ZlYXR1cmVzL3dhcmRyb2JlKTogeW91ciBjb2lucyBhbmQgaXRlbXMsIGFuZCB0aGUgZGFpbHkgc2hvcC5cclxuICB3YXJkcm9iZToge1xyXG4gICAgdGl0bGU6IFwiWW91ciB3YXJkcm9iZSBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgY29pbnMgYW5kIGl0ZW1zIG9uIHN0YXJ0Lm5nOiBlYXJuIHRoZW0gYnkgcGxheWluZyBhbnkgZ2FtZSwgYW5kIHdlYXIgdGhlbSBpbiBldmVyeSBnYW1lLlwiLFxyXG4gICAgcGF0aDogXCIvd2FyZHJvYmVcIixcclxuICAgIG5vaW5kZXg6IHRydWUsXHJcbiAgfSxcclxuICBzaG9wOiB7XHJcbiAgICB0aXRsZTogXCJTaG9wIFx1MDBCNyBzdGFydC5uZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU3BlbmQgdGhlIGNvaW5zIHlvdSBlYXJuIHBsYXlpbmcgc3RhcnQubmcgZ2FtZXMgb24gaXRlbXMgZm9yIHlvdXIgY2hhcmFjdGVyLiBOZXcgc3RvY2sgZXZlcnkgZGF5LlwiLFxyXG4gICAgcGF0aDogXCIvc2hvcFwiLFxyXG4gIH0sXHJcbiAgcHJvZmlsZToge1xyXG4gICAgdGl0bGU6IFwiQSBwbGF5ZXIgb24gc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgcGxheWVyJ3MgcGFnZSBvbiBzdGFydC5uZzogdGhlaXIgY2hhcmFjdGVyLCBsZXZlbCwgYmFkZ2VzIGFuZCBiZXN0IHNjb3Jlcy5cIixcclxuICAgIHBhdGg6IFwiL21lXCIsXHJcbiAgICBub2luZGV4OiB0cnVlLCAvLyBwbGF5ZXIgcGFnZXMgc3RheSBvdXQgb2Ygc2VhcmNoIHJlc3VsdHNcclxuICB9LFxyXG4gIHNwb3RsaWdodDoge1xyXG4gICAgdGl0bGU6IFwiU3BvdGxpZ2h0IFx1MDBCNyBzdGFydC5uZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIEdhbWUgb2YgdGhlIFdlZWsgYW5kIHRvZGF5J3MgZGFpbHkgY2hhbGxlbmdlIG9uIHN0YXJ0Lm5nOiBvbmUgZ29hbCBhIGRheSwgc2V0IGZyb20gaG93IHBlb3BsZSByZWFsbHkgcGxheS5cIixcclxuICAgIHBhdGg6IFwiL3Nwb3RsaWdodFwiLFxyXG4gIH0sXHJcbiAgY3JlYXRvcjoge1xyXG4gICAgdGl0bGU6IFwiQSBjcmVhdG9yIG9uIHN0YXJ0Lm5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIGNyZWF0b3IncyBnYW1lcyBvbiBzdGFydC5uZzogcGxheSB0aGVtIGZyZWUgaW4geW91ciBicm93c2VyLCBmb2xsb3cgdGhlbSwgYW5kIHNoYXJlLlwiLFxyXG4gICAgcGF0aDogXCIvYnlcIixcclxuICB9LFxyXG4gIGNyZWF0b3JzQm9hcmQ6IHtcclxuICAgIHRpdGxlOiBcIlRvcCBjcmVhdG9ycyBcdTAwQjcgc3RhcnQubmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBjcmVhdG9ycyB3aG9zZSBnYW1lcyB0aGUgbW9zdCBkaWZmZXJlbnQgcGxheWVycyBvcGVuZWQgdGhpcyBtb250aCBvbiBzdGFydC5uZy5cIixcclxuICAgIHBhdGg6IFwiL2J5XCIsXHJcbiAgfSxcclxuICBub3RGb3VuZDoge1xyXG4gICAgdGl0bGU6IFwiUGFnZSBub3QgZm91bmQgXHUwMEI3IHN0YXJ0Lm5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSdzIG5vdGhpbmcgYXQgdGhpcyBhZGRyZXNzLiBCcm93c2UgdGhlIGdhbWVzIG9uIHN0YXJ0Lm5nIGluc3RlYWQuXCIsXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIG5vaW5kZXg6IHRydWUsXHJcbiAgfSxcclxufTtcclxuXHJcbi8qKiBQYWdlcyB0aGF0IGdldCB0aGVpciBvd24gSFRNTCBmaWxlIGF0IGJ1aWxkIHRpbWU6IFtmaWxlIG5hbWUsIHBhZ2VdLiAqL1xyXG5leHBvcnQgY29uc3QgU1RBVElDX1BBR0VTOiBbc3RyaW5nLCBTZW9dW10gPSBbXHJcbiAgW1wiZ2FtZXMuaHRtbFwiLCBQQUdFUy5nYW1lc10sXHJcbiAgW1wiY3JlYXRvcnMuaHRtbFwiLCBQQUdFUy5jcmVhdG9yc10sXHJcbiAgW1wiaGFuZ291dC5odG1sXCIsIFBBR0VTLmhhbmdvdXRdLFxyXG4gIFtcImRvY3MuaHRtbFwiLCBQQUdFUy5kb2NzXSxcclxuICBbXCJhYm91dC5odG1sXCIsIFBBR0VTLmFib3V0XSxcclxuICBbXCJ0b3VybmFtZW50Lmh0bWxcIiwgUEFHRVMudG91cm5hbWVudF0sXHJcbiAgW1wibGVhZGVyYm9hcmQuaHRtbFwiLCBQQUdFUy5sZWFkZXJib2FyZF0sXHJcbiAgW1wiZ2FtZS5odG1sXCIsIFBBR0VTLmdhbWVdLFxyXG4gIFtcInNwb3RsaWdodC5odG1sXCIsIFBBR0VTLnNwb3RsaWdodF0sXHJcbiAgW1wiY3JlYXRvcnMtYm9hcmQuaHRtbFwiLCBQQUdFUy5jcmVhdG9yc0JvYXJkXSxcclxuICBbXCJjcmVhdG9yLmh0bWxcIiwgUEFHRVMuY3JlYXRvcl0sXHJcbiAgW1wiYXBwcm92ZS5odG1sXCIsIFBBR0VTLmFwcHJvdmVdLFxyXG4gIFtcImZyaWVuZHMtdG91cm5hbWVudHMuaHRtbFwiLCBQQUdFUy5mcmllbmRzVG91cm5hbWVudHNdLFxyXG4gIFtcInByaXZhdGUtdG91cm5hbWVudC5odG1sXCIsIFBBR0VTLnByaXZhdGVUb3VybmFtZW50XSxcclxuICBbXCJmb2xsb3dzLmh0bWxcIiwgUEFHRVMuZm9sbG93c10sXHJcbiAgW1wiZnJpZW5kLWludml0ZS5odG1sXCIsIFBBR0VTLmZyaWVuZEludml0ZV0sXHJcbiAgW1wibGVhZ3VlLmh0bWxcIiwgUEFHRVMubGVhZ3VlXSxcclxuICBbXCJ3YXJkcm9iZS5odG1sXCIsIFBBR0VTLndhcmRyb2JlXSxcclxuICBbXCJzaG9wLmh0bWxcIiwgUEFHRVMuc2hvcF0sXHJcbiAgW1wicHJvZmlsZS5odG1sXCIsIFBBR0VTLnByb2ZpbGVdLFxyXG4gIFtcIjQwNC5odG1sXCIsIFBBR0VTLm5vdEZvdW5kXSxcclxuXTtcclxuXHJcbi8qKiBQYWdlcyB0aGF0IGJlbG9uZyBpbiBzaXRlbWFwLnhtbC4gKi9cclxuZXhwb3J0IGNvbnN0IFNJVEVNQVBfUEFUSFMgPSBbXCJob21lXCIsIFwiZ2FtZXNcIiwgXCJjcmVhdG9yc1wiLCBcInRvdXJuYW1lbnRcIiwgXCJsZWFkZXJib2FyZFwiLCBcImhhbmdvdXRcIiwgXCJkb2NzXCIsIFwiYWJvdXRcIl0ubWFwKChrKSA9PiBQQUdFU1trXS5wYXRoKTtcclxuXHJcbi8qKiBBIHBpY3R1cmUncyBmdWxsIGFkZHJlc3M6IHBhdGhzIGluIHB1YmxpYy8gZ2V0IHRoZSBzaXRlIGluIGZyb250LCBmdWxsIGFkZHJlc3NlcyBzdGF5IGFzIHRoZXkgYXJlLiAqL1xyXG5jb25zdCBpbWFnZVVybCA9IChzaXRlOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcpID0+ICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaW1hZ2UpID8gaW1hZ2UgOiBzaXRlICsgaW1hZ2UpO1xyXG5cclxuY29uc3QgZXNjID0gKHM6IHN0cmluZykgPT4gcy5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcblxyXG4vKiogVGhlIDxoZWFkPiB0YWdzIGZvciBhIHBhZ2UsIGFzIEhUTUwuIGBzaXRlYCBpcyB0aGUgcHVibGljIG9yaWdpbiwgbGlrZSBodHRwczovL3N0YXJ0Lm5nLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaGVhZFRhZ3Moc2VvOiBTZW8sIHNpdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgdXJsID0gc2l0ZSArIChzZW8ucGF0aCA9PT0gXCIvXCIgPyBcIi9cIiA6IHNlby5wYXRoKTtcclxuICBjb25zdCBpbWFnZSA9IGltYWdlVXJsKHNpdGUsIHNlby5pbWFnZSA/PyBTSEFSRV9JTUFHRSk7XHJcbiAgY29uc3QgdGFncyA9IFtcclxuICAgIGA8dGl0bGU+JHtlc2Moc2VvLnRpdGxlKX08L3RpdGxlPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIiR7ZXNjKHNlby5kZXNjcmlwdGlvbil9XCIgLz5gLFxyXG4gICAgYDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiJHtzZW8ubm9pbmRleCA/IFwibm9pbmRleCwgbm9mb2xsb3dcIiA6IFwiaW5kZXgsIGZvbGxvdywgbWF4LWltYWdlLXByZXZpZXc6bGFyZ2VcIn1cIiAvPmAsXHJcbiAgICBgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cIiR7ZXNjKHVybCl9XCIgLz5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIiR7U0lURV9OQU1FfVwiIC8+YCxcclxuICAgIGA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIiR7ZXNjKHNlby50aXRsZSl9XCIgLz5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiJHtlc2Moc2VvLmRlc2NyaXB0aW9uKX1cIiAvPmAsXHJcbiAgICBgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiJHtlc2ModXJsKX1cIiAvPmAsXHJcbiAgICBgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIke2VzYyhpbWFnZSl9XCIgLz5gLFxyXG4gICAgYDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6YWx0XCIgY29udGVudD1cIiR7ZXNjKHNlby5pbWFnZUFsdCA/PyBTSEFSRV9JTUFHRV9BTFQpfVwiIC8+YCxcclxuICAgIGA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiJHtlc2Moc2VvLnRpdGxlKX1cIiAvPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiJHtlc2Moc2VvLmRlc2NyaXB0aW9uKX1cIiAvPmAsXHJcbiAgICBgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiJHtlc2MoaW1hZ2UpfVwiIC8+YCxcclxuICBdO1xyXG4gIHJldHVybiB0YWdzLmpvaW4oXCJcXG4gICAgXCIpO1xyXG59XHJcblxyXG4vKiogU3RydWN0dXJlZCBkYXRhIGZvciB0aGUgaG9tZXBhZ2UsIHNvIHNlYXJjaCBlbmdpbmVzIGtub3cgd2hhdCBzdGFydC5uZyBpcy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGpzb25MZChzaXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBcIkBjb250ZXh0XCI6IFwiaHR0cHM6Ly9zY2hlbWEub3JnXCIsXHJcbiAgICBcIkBncmFwaFwiOiBbXHJcbiAgICAgIHsgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLCBuYW1lOiBTSVRFX05BTUUsIHVybDogc2l0ZSArIFwiL1wiLCBsb2dvOiBzaXRlICsgXCIvZmF2aWNvbi5zdmdcIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJAdHlwZVwiOiBcIldlYlNpdGVcIixcclxuICAgICAgICBuYW1lOiBTSVRFX05BTUUsXHJcbiAgICAgICAgdXJsOiBzaXRlICsgXCIvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IEhPTUVfREVTQ1JJUFRJT04sXHJcbiAgICAgICAgcG90ZW50aWFsQWN0aW9uOiB7IFwiQHR5cGVcIjogXCJTZWFyY2hBY3Rpb25cIiwgdGFyZ2V0OiBgJHtzaXRlfS9nYW1lcz9xPXtzZWFyY2hfdGVybV9zdHJpbmd9YCwgXCJxdWVyeS1pbnB1dFwiOiBcInJlcXVpcmVkIG5hbWU9c2VhcmNoX3Rlcm1fc3RyaW5nXCIgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICByZXR1cm4gYDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj4ke0pTT04uc3RyaW5naWZ5KGRhdGEpLnJlcGxhY2UoLzwvZywgXCJcXFxcdTAwM2NcIil9PC9zY3JpcHQ+YDtcclxufVxyXG5cclxuLyoqIFRoZSBwdWJsaWMgb3JpZ2luLCBmcm9tIHRoZSBzYW1lIFZJVEVfU0lURV9VUkwgdGhlIGJ1aWxkIHVzZXMsIHNvIGEgcHJldmlldyBvciBhbHRlcm5hdGUgaG9zdCBzdGlsbCBwb2ludHMgYXQgdGhlIHJlYWwgYWRkcmVzcy4gKi9cclxuZnVuY3Rpb24gc2l0ZVVybCgpOiBzdHJpbmcge1xyXG4gIHJldHVybiAoaW1wb3J0Lm1ldGEuZW52LlZJVEVfU0lURV9VUkwgfHwgREVGQVVMVF9TSVRFX1VSTCkucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xyXG59XHJcblxyXG4vKiogVXBkYXRlIHRoZSB0YWdzIG9mIHRoZSBwYWdlIHRoYXQncyBvcGVuICh3aGVuIG1vdmluZyBiZXR3ZWVuIHBhZ2VzIG9yIHNlYXJjaGluZyB3aXRob3V0IGEgcmVsb2FkKS4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbyhzZW86IFNlbykge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gc2VvLnRpdGxlO1xyXG4gIGNvbnN0IHVybCA9IHNpdGVVcmwoKSArIHNlby5wYXRoO1xyXG4gIGNvbnN0IHJvYm90cyA9IHNlby5ub2luZGV4ID8gXCJub2luZGV4LCBub2ZvbGxvd1wiIDogXCJpbmRleCwgZm9sbG93LCBtYXgtaW1hZ2UtcHJldmlldzpsYXJnZVwiO1xyXG4gIGNvbnN0IHVwc2VydCA9ICh0YWc6IFwibWV0YVwiIHwgXCJsaW5rXCIsIHNlbGVjdG9yOiBzdHJpbmcsIGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgaWYgKCFlbCkgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgoZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZykpKTtcclxuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkgZWwuc2V0QXR0cmlidXRlKGssIHYpO1xyXG4gIH07XHJcbiAgY29uc3QgbWV0YSA9IChrZXk6IFwibmFtZVwiIHwgXCJwcm9wZXJ0eVwiLCBuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykgPT5cclxuICAgIHVwc2VydChcIm1ldGFcIiwgYG1ldGFbJHtrZXl9PVwiJHtuYW1lfVwiXWAsIHsgW2tleV06IG5hbWUsIGNvbnRlbnQgfSk7XHJcbiAgbWV0YShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiLCBzZW8uZGVzY3JpcHRpb24pO1xyXG4gIG1ldGEoXCJuYW1lXCIsIFwicm9ib3RzXCIsIHJvYm90cyk7XHJcbiAgbWV0YShcInByb3BlcnR5XCIsIFwib2c6dGl0bGVcIiwgc2VvLnRpdGxlKTtcclxuICBtZXRhKFwicHJvcGVydHlcIiwgXCJvZzpkZXNjcmlwdGlvblwiLCBzZW8uZGVzY3JpcHRpb24pO1xyXG4gIG1ldGEoXCJwcm9wZXJ0eVwiLCBcIm9nOnVybFwiLCB1cmwpO1xyXG4gIG1ldGEoXCJuYW1lXCIsIFwidHdpdHRlcjp0aXRsZVwiLCBzZW8udGl0bGUpO1xyXG4gIG1ldGEoXCJuYW1lXCIsIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiLCBzZW8uZGVzY3JpcHRpb24pO1xyXG4gIGNvbnN0IGltYWdlID0gaW1hZ2VVcmwoc2l0ZVVybCgpLCBzZW8uaW1hZ2UgPz8gU0hBUkVfSU1BR0UpO1xyXG4gIG1ldGEoXCJwcm9wZXJ0eVwiLCBcIm9nOmltYWdlXCIsIGltYWdlKTtcclxuICBtZXRhKFwicHJvcGVydHlcIiwgXCJvZzppbWFnZTphbHRcIiwgc2VvLmltYWdlQWx0ID8/IFNIQVJFX0lNQUdFX0FMVCk7XHJcbiAgbWV0YShcIm5hbWVcIiwgXCJ0d2l0dGVyOmltYWdlXCIsIGltYWdlKTtcclxuICB1cHNlcnQoXCJsaW5rXCIsICdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScsIHsgcmVsOiBcImNhbm9uaWNhbFwiLCBocmVmOiB1cmwgfSk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVixTQUFTLFdBQVcsY0FBYyxxQkFBcUI7QUFDMVksU0FBUyxlQUFlO0FBQ3hCLFNBQVMsY0FBYyxlQUF1QjtBQUM5QyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyw0QkFBNEI7OztBQ0g5QixJQUFNLFFBQVE7QUFBQSxFQUNuQjtBQUFBLEVBQ0E7QUFDRjtBQUVPLElBQU0sWUFBZ0M7QUFBQSxFQUMzQyxDQUFDLHFCQUFxQix3SkFBd0o7QUFBQSxFQUM5SyxDQUFDLGVBQWUsd0ZBQXdGO0FBQUEsRUFDeEcsQ0FBQyw0Q0FBNEMsbUlBQW1JO0FBQUEsRUFDaEwsQ0FBQyxpQ0FBaUMsaUhBQWlIO0FBQUEsRUFDbkosQ0FBQyxpQ0FBaUMsaUlBQWlJO0FBQUEsRUFDbkssQ0FBQyxxQ0FBcUMsZ0tBQWdLO0FBQ3hNOzs7QUNOdUMsU0FBUSxLQUFSO0FBTGhDLFNBQVMsZUFBZSxFQUFFLGFBQWEsTUFBTSxHQUE2QjtBQUMvRSxTQUNFLHFCQUFDLFlBQU8sV0FBVSx5QkFDaEI7QUFBQSx5QkFBQyxTQUFJLFdBQVUsb0JBQ2I7QUFBQSwyQkFBQyxTQUFJLFdBQVUscUJBQ2I7QUFBQSw0QkFBQyxPQUFFLFdBQVUsUUFBTyxNQUFLLEtBQUksK0JBQUMsT0FBRTtBQUFBO0FBQUEsVUFBSyxvQkFBQyxVQUFLLGlCQUFHO0FBQUEsV0FBTyxHQUFJO0FBQUEsUUFDekQsb0JBQUMsT0FBRSxvR0FBc0Y7QUFBQSxTQUMzRjtBQUFBLE1BQ0EscUJBQUMsU0FBSSxjQUFXLFFBQ2Q7QUFBQSw0QkFBQyxRQUFHLGtCQUFJO0FBQUEsUUFDUixxQkFBQyxRQUNDO0FBQUEsOEJBQUMsUUFBRyw4QkFBQyxPQUFFLE1BQUssVUFBUyx1QkFBUyxHQUFJO0FBQUEsVUFDbEMsb0JBQUMsUUFBRyw4QkFBQyxPQUFFLE1BQUssZUFBYyw4QkFBZ0IsR0FBSTtBQUFBLFVBQzlDLG9CQUFDLFFBQUcsOEJBQUMsT0FBRSxNQUFLLGdCQUFlLHlCQUFXLEdBQUk7QUFBQSxVQUN6QyxjQUFjLG9CQUFDLFFBQUcsOEJBQUMsT0FBRSxNQUFLLGVBQWMsd0JBQVUsR0FBSTtBQUFBLFVBQ3ZELG9CQUFDLFFBQUcsOEJBQUMsT0FBRSxNQUFLLFlBQVcseUJBQVcsR0FBSTtBQUFBLFdBQ3hDO0FBQUEsU0FDRjtBQUFBLE1BQ0EscUJBQUMsU0FBSSxjQUFXLGNBQ2Q7QUFBQSw0QkFBQyxRQUFHLHdCQUFVO0FBQUEsUUFDZCxxQkFBQyxRQUNDO0FBQUEsOEJBQUMsUUFBRyw4QkFBQyxPQUFFLE1BQUssYUFBWSxrQ0FBb0IsR0FBSTtBQUFBLFVBQ2hELG9CQUFDLFFBQUcsOEJBQUMsT0FBRSxNQUFLLFNBQVEsMEJBQVksR0FBSTtBQUFBLFVBQ3BDLG9CQUFDLFFBQUcsOEJBQUMsT0FBRSxNQUFLLFlBQVcsb0NBQXNCLEdBQUk7QUFBQSxXQUNuRDtBQUFBLFNBQ0Y7QUFBQSxNQUNBLHFCQUFDLFNBQUksY0FBVyxTQUNkO0FBQUEsNEJBQUMsUUFBRyxtQkFBSztBQUFBLFFBQ1Qsb0JBQUMsUUFDQyw4QkFBQyxRQUFHLDhCQUFDLE9BQUUsTUFBSyxVQUFTLDRCQUFjLEdBQUksR0FDekM7QUFBQSxTQUNGO0FBQUEsT0FDRjtBQUFBLElBQ0EscUJBQUMsT0FBRSxXQUFVLG9CQUNYO0FBQUEsMkJBQUMsVUFBSztBQUFBO0FBQUEsU0FBRyxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLFFBQUU7QUFBQSxTQUFTO0FBQUEsTUFDM0Msb0JBQUMsVUFBSyxtREFBcUM7QUFBQSxPQUM3QztBQUFBLEtBQ0Y7QUFFSjs7O0FDMUJJLG1CQUV5QyxPQUFBQSxNQUFSLFFBQUFDLGFBRmpDO0FBVEosSUFBTSxPQUFtQztBQUFBLEVBQ3ZDLENBQUMsUUFBUSxxR0FBcUcsUUFBUTtBQUFBLEVBQ3RILENBQUMsV0FBVyxnRUFBZ0UsYUFBYTtBQUFBLEVBQ3pGLENBQUMsd0JBQXdCLCtFQUErRSxXQUFXO0FBQUEsRUFDbkgsQ0FBQyxlQUFlLCtIQUErSCxPQUFPO0FBQ3hKO0FBRWUsU0FBUixVQUEyQixFQUFFLFlBQVksR0FBZ0M7QUFDOUUsU0FDRSxnQkFBQUEsTUFBQSxZQUNFO0FBQUEsb0JBQUFBLE1BQUMsWUFBTyxXQUFVLGlCQUNoQjtBQUFBLHNCQUFBRCxLQUFDLE9BQUUsV0FBVSxRQUFPLE1BQUssS0FBSSwwQkFBQUMsTUFBQyxPQUFFO0FBQUE7QUFBQSxRQUFLLGdCQUFBRCxLQUFDLFVBQUssaUJBQUc7QUFBQSxTQUFPLEdBQUk7QUFBQSxNQUN6RCxnQkFBQUMsTUFBQyxTQUFJLGNBQVcsU0FDZDtBQUFBLHdCQUFBRCxLQUFDLE9BQUUsTUFBSyxVQUFTLG1CQUFLO0FBQUEsUUFDdEIsZ0JBQUFBLEtBQUMsT0FBRSxNQUFLLGVBQWMsd0JBQVU7QUFBQSxRQUNoQyxnQkFBQUEsS0FBQyxPQUFFLE1BQUssYUFBWSxzQkFBUTtBQUFBLFFBQzVCLGdCQUFBQSxLQUFDLE9BQUUsTUFBSyxTQUFRLGtCQUFJO0FBQUEsU0FDdEI7QUFBQSxNQUNBLGdCQUFBQSxLQUFDLFNBQUksV0FBVSxlQUFlLHVCQUFZO0FBQUEsT0FDNUM7QUFBQSxJQUNBLGdCQUFBQSxLQUFDLFVBQ0MsMEJBQUFDLE1BQUMsYUFBUSxXQUFVLDhCQUNqQjtBQUFBLHNCQUFBRCxLQUFDLE9BQUUsV0FBVSxXQUFVLG1CQUFLO0FBQUEsTUFDNUIsZ0JBQUFBLEtBQUMsUUFBRyw0QkFBYztBQUFBLE1BQ2pCLE1BQU0sSUFBSSxDQUFDLE1BQU0sZ0JBQUFBLEtBQUMsT0FBVSxXQUFVLFFBQVEsZUFBckIsQ0FBdUIsQ0FBSTtBQUFBLE1BRXJELGdCQUFBQSxLQUFDLFFBQUcsa0NBQW9CO0FBQUEsTUFDeEIsZ0JBQUFBLEtBQUMsUUFBRyxXQUFVLGNBQ1gsZUFBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLE1BQU0sSUFBSSxNQUMzQixnQkFBQUEsS0FBQyxRQUFjLDBCQUFBQyxNQUFDLE9BQUUsTUFBWTtBQUFBLHdCQUFBRCxLQUFDLE9BQUcsaUJBQU07QUFBQSxRQUFJLGdCQUFBQSxLQUFDLFVBQU0sZ0JBQUs7QUFBQSxTQUFPLEtBQXRELElBQTBELENBQ3BFLEdBQ0g7QUFBQSxNQUVBLGdCQUFBQSxLQUFDLFFBQUcsdUJBQVM7QUFBQSxNQUNiLGdCQUFBQSxLQUFDLFNBQUksV0FBVSxtQkFDWixvQkFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFDbkIsZ0JBQUFDLE1BQUMsU0FBWTtBQUFBLHdCQUFBRCxLQUFDLFFBQUksYUFBRTtBQUFBLFFBQUssZ0JBQUFBLEtBQUMsT0FBRyxhQUFFO0FBQUEsV0FBckIsQ0FBeUIsQ0FDcEMsR0FDSDtBQUFBLE9BQ0YsR0FDRjtBQUFBLElBQ0EsZ0JBQUFBLEtBQUMsa0JBQWU7QUFBQSxLQUNsQjtBQUVKOzs7QUNoREEsU0FBUyxZQUFBRSxpQkFBMkI7QUFZQyxTQWtGNUIsWUFBQUEsV0FsRjRCLE9BQUFDLE1Ba0QzQixRQUFBQyxhQWxEMkI7QUFWOUIsSUFBTSxPQUFPLENBQUMsU0FBaUIsS0FBSyxZQUFZLEVBQUUsUUFBUSxNQUFNLEVBQUUsRUFBRSxRQUFRLGVBQWUsR0FBRyxFQUFFLFFBQVEsVUFBVSxFQUFFO0FBRTNILFNBQVMsT0FBTyxNQUFjLE1BQU0sR0FBZ0I7QUFDbEQsUUFBTSxNQUFtQixDQUFDO0FBQzFCLFFBQU0sS0FBSztBQUNYLE1BQUksT0FBTztBQUNYLE1BQUk7QUFDSixTQUFRLElBQUksR0FBRyxLQUFLLElBQUksR0FBSTtBQUMxQixRQUFJLEVBQUUsUUFBUSxLQUFNLEtBQUksS0FBSyxLQUFLLE1BQU0sTUFBTSxFQUFFLEtBQUssQ0FBQztBQUN0RCxVQUFNLElBQUksR0FBRyxHQUFHLElBQUksRUFBRSxLQUFLO0FBQzNCLFFBQUksRUFBRSxDQUFDLE1BQU0sT0FBVyxLQUFJLEtBQUssZ0JBQUFELEtBQUMsVUFBYyxZQUFFLENBQUMsS0FBUCxDQUFTLENBQU87QUFBQSxhQUNuRCxFQUFFLENBQUMsTUFBTSxPQUFXLEtBQUksS0FBSyxnQkFBQUEsS0FBQyxPQUFXLGlCQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxLQUF4QixDQUEwQixDQUFJO0FBQUEsU0FDdkU7QUFDSCxZQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2hCLFlBQU0sV0FBVyxXQUFXLEtBQUssSUFBSTtBQUNyQyxVQUFJO0FBQUEsUUFDRixnQkFBQUEsS0FBQyxPQUFVLE1BQU0sa0JBQWtCLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBTSxHQUFJLFdBQVcsRUFBRSxRQUFRLFVBQVUsS0FBSyxhQUFhLElBQUksQ0FBQyxHQUNwSCxpQkFBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssS0FEZixDQUVSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxXQUFPLEdBQUc7QUFBQSxFQUNaO0FBQ0EsTUFBSSxPQUFPLEtBQUssT0FBUSxLQUFJLEtBQUssS0FBSyxNQUFNLElBQUksQ0FBQztBQUNqRCxTQUFPO0FBQ1Q7QUFFQSxJQUFNLFFBQVEsQ0FBQyxRQUFnQixJQUFJLEtBQUssRUFBRSxRQUFRLFlBQVksRUFBRSxFQUFFLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO0FBRXpGLFNBQVMsU0FBUyxFQUFFLE9BQU8sR0FBdUI7QUFDdkQsUUFBTSxRQUFRLE9BQU8sUUFBUSxTQUFTLElBQUksRUFBRSxNQUFNLElBQUk7QUFDdEQsUUFBTSxTQUFzQixDQUFDO0FBQzdCLE1BQUksSUFBSTtBQUNSLFNBQU8sSUFBSSxNQUFNLFFBQVE7QUFDdkIsVUFBTSxPQUFPLE1BQU0sQ0FBQztBQUNwQixVQUFNLElBQUksT0FBTztBQUNqQixRQUFJLENBQUMsS0FBSyxLQUFLLEdBQUc7QUFDaEI7QUFBQSxJQUNGLFdBQVcsS0FBSyxXQUFXLEtBQUssR0FBRztBQUNqQyxZQUFNLE9BQU8sS0FBSyxNQUFNLENBQUMsRUFBRSxLQUFLO0FBQ2hDLFlBQU0sT0FBaUIsQ0FBQztBQUN4QixXQUFLLEtBQUssSUFBSSxNQUFNLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLEtBQUssR0FBRyxJQUFLLE1BQUssS0FBSyxNQUFNLENBQUMsQ0FBQztBQUNsRjtBQUNBLGFBQU87QUFBQSxRQUNMLGdCQUFBQSxLQUFDLFNBQVksYUFBVyxRQUFRLFFBQzlCLDBCQUFBQSxLQUFDLFVBQU0sZUFBSyxLQUFLLElBQUksR0FBRSxLQURmLENBRVY7QUFBQSxNQUNGO0FBQUEsSUFDRixXQUFXLFdBQVcsS0FBSyxJQUFJLEdBQUc7QUFDaEMsWUFBTSxRQUFRLEtBQUssTUFBTSxLQUFLLEVBQUcsQ0FBQyxFQUFFO0FBQ3BDLFlBQU0sT0FBTyxLQUFLLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLFlBQU0sSUFBSSxJQUFJLEtBQUs7QUFDbkIsYUFBTyxLQUFLLGdCQUFBQSxLQUFDLEtBQVUsSUFBSSxLQUFLLElBQUksR0FBSSxpQkFBTyxJQUFJLEtBQS9CLENBQWlDLENBQUk7QUFDekQ7QUFBQSxJQUNGLFdBQVcsS0FBSyxVQUFVLEVBQUUsV0FBVyxHQUFHLEtBQUssTUFBTSxJQUFJLENBQUMsR0FBRyxTQUFTLEtBQUssR0FBRztBQUM1RSxZQUFNLE9BQU8sTUFBTSxJQUFJO0FBQ3ZCLFlBQU0sT0FBbUIsQ0FBQztBQUMxQixXQUFLLEtBQUssR0FBRyxJQUFJLE1BQU0sVUFBVSxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxHQUFHLEdBQUcsSUFBSyxNQUFLLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3JHLGFBQU87QUFBQSxRQUNMLGdCQUFBQSxLQUFDLFNBQVksV0FBVSxTQUNyQiwwQkFBQUMsTUFBQyxXQUNDO0FBQUEsMEJBQUFELEtBQUMsV0FDQywwQkFBQUEsS0FBQyxRQUFJLGVBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxnQkFBQUEsS0FBQyxRQUFZLGlCQUFPLENBQUMsS0FBWixDQUFjLENBQUssR0FBRSxHQUN4RDtBQUFBLFVBQ0EsZ0JBQUFBLEtBQUMsV0FDRSxlQUFLLElBQUksQ0FBQyxHQUFHLE9BQ1osZ0JBQUFBLEtBQUMsUUFBYSxZQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0sZ0JBQUFBLEtBQUMsUUFBWSxpQkFBTyxDQUFDLEtBQVosQ0FBYyxDQUFLLEtBQWpELEVBQW1ELENBQzdELEdBQ0g7QUFBQSxXQUNGLEtBVlEsQ0FXVjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLFdBQVcsb0JBQW9CLEtBQUssSUFBSSxHQUFHO0FBQ3pDLFlBQU0sVUFBVSxhQUFhLEtBQUssSUFBSTtBQUN0QyxZQUFNLFFBQWtCLENBQUM7QUFDekIsYUFBTyxJQUFJLE1BQU0sVUFBVSxvQkFBb0IsS0FBSyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUs7QUFDbEUsWUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLFFBQVEscUJBQXFCLEVBQUU7QUFDbkQsZUFBTyxJQUFJLElBQUksTUFBTSxVQUFVLFdBQVcsS0FBSyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsS0FBSyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUcsU0FBUSxNQUFNLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSztBQUN2SSxjQUFNLEtBQUssSUFBSTtBQUFBLE1BQ2pCO0FBQ0EsWUFBTSxJQUFJLFVBQVUsT0FBTztBQUMzQixhQUFPLEtBQUssZ0JBQUFBLEtBQUMsS0FBVyxnQkFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLGdCQUFBQSxLQUFDLFFBQVksaUJBQU8sQ0FBQyxLQUFaLENBQWMsQ0FBSyxLQUFwRCxDQUFzRCxDQUFJO0FBQUEsSUFDaEYsV0FBVyxLQUFLLFdBQVcsR0FBRyxHQUFHO0FBQy9CLFlBQU0sUUFBa0IsQ0FBQztBQUN6QixhQUFPLElBQUksTUFBTSxVQUFVLE1BQU0sQ0FBQyxFQUFFLFdBQVcsR0FBRyxHQUFHLElBQUssT0FBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLFFBQVEsU0FBUyxFQUFFLENBQUM7QUFDbEcsYUFBTyxLQUFLLGdCQUFBQSxLQUFDLGdCQUFvQixnQkFBTSxJQUFJLENBQUMsR0FBRyxNQUFNLGdCQUFBQyxNQUFDRixXQUFBLEVBQWtCO0FBQUEsZUFBTyxDQUFDO0FBQUEsUUFBRyxJQUFJLE1BQU0sU0FBUyxLQUFLLGdCQUFBQyxLQUFDLFFBQUc7QUFBQSxXQUEzQyxDQUE4QyxDQUFXLEtBQWhHLENBQWtHLENBQWE7QUFBQSxJQUM5SSxPQUFPO0FBQ0wsWUFBTSxPQUFpQixDQUFDO0FBQ3hCLGFBQU8sSUFBSSxNQUFNLFVBQVUsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsMENBQTBDLEtBQUssTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFLLE1BQUssS0FBSyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUM7QUFDdkksYUFBTyxLQUFLLGdCQUFBQSxLQUFDLE9BQVcsaUJBQU8sS0FBSyxLQUFLLEdBQUcsQ0FBQyxLQUF6QixDQUEyQixDQUFJO0FBQUEsSUFDckQ7QUFBQSxFQUNGO0FBQ0EsU0FBTyxnQkFBQUEsS0FBQUQsV0FBQSxFQUFHLGtCQUFPO0FBQ25COzs7QUN6Rk8sSUFBTSxZQUFZO0FBQ2xCLElBQU0sbUJBQW1CO0FBRXpCLElBQU0sY0FBYztBQUNwQixJQUFNLGtCQUFrQjtBQUV4QixJQUFNLG1CQUFtQjtBQUN6QixJQUFNLHVCQUF1QjtBQUU3QixJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHFCQUFxQjtBQWNsQyxJQUFNLG1CQUNKO0FBRUssSUFBTSxRQUE2QjtBQUFBLEVBQ3hDLE1BQU0sRUFBRSxPQUFPLHlDQUFzQyxhQUFhLGtCQUFrQixNQUFNLElBQUk7QUFBQSxFQUM5RixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxVQUFVO0FBQUEsRUFDWjtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1g7QUFBQTtBQUFBLEVBRUEsb0JBQW9CO0FBQUEsSUFDbEIsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLG1CQUFtQjtBQUFBLElBQ2pCLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1g7QUFBQTtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1g7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1g7QUFBQTtBQUFBLEVBRUEsVUFBVTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUE7QUFBQSxFQUNYO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsRUFDWDtBQUNGO0FBR08sSUFBTSxlQUFnQztBQUFBLEVBQzNDLENBQUMsY0FBYyxNQUFNLEtBQUs7QUFBQSxFQUMxQixDQUFDLGlCQUFpQixNQUFNLFFBQVE7QUFBQSxFQUNoQyxDQUFDLGdCQUFnQixNQUFNLE9BQU87QUFBQSxFQUM5QixDQUFDLGFBQWEsTUFBTSxJQUFJO0FBQUEsRUFDeEIsQ0FBQyxjQUFjLE1BQU0sS0FBSztBQUFBLEVBQzFCLENBQUMsbUJBQW1CLE1BQU0sVUFBVTtBQUFBLEVBQ3BDLENBQUMsb0JBQW9CLE1BQU0sV0FBVztBQUFBLEVBQ3RDLENBQUMsYUFBYSxNQUFNLElBQUk7QUFBQSxFQUN4QixDQUFDLGtCQUFrQixNQUFNLFNBQVM7QUFBQSxFQUNsQyxDQUFDLHVCQUF1QixNQUFNLGFBQWE7QUFBQSxFQUMzQyxDQUFDLGdCQUFnQixNQUFNLE9BQU87QUFBQSxFQUM5QixDQUFDLGdCQUFnQixNQUFNLE9BQU87QUFBQSxFQUM5QixDQUFDLDRCQUE0QixNQUFNLGtCQUFrQjtBQUFBLEVBQ3JELENBQUMsMkJBQTJCLE1BQU0saUJBQWlCO0FBQUEsRUFDbkQsQ0FBQyxnQkFBZ0IsTUFBTSxPQUFPO0FBQUEsRUFDOUIsQ0FBQyxzQkFBc0IsTUFBTSxZQUFZO0FBQUEsRUFDekMsQ0FBQyxlQUFlLE1BQU0sTUFBTTtBQUFBLEVBQzVCLENBQUMsaUJBQWlCLE1BQU0sUUFBUTtBQUFBLEVBQ2hDLENBQUMsYUFBYSxNQUFNLElBQUk7QUFBQSxFQUN4QixDQUFDLGdCQUFnQixNQUFNLE9BQU87QUFBQSxFQUM5QixDQUFDLFlBQVksTUFBTSxRQUFRO0FBQzdCO0FBR08sSUFBTSxnQkFBZ0IsQ0FBQyxRQUFRLFNBQVMsWUFBWSxjQUFjLGVBQWUsV0FBVyxRQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUMsRUFBRSxJQUFJO0FBRzVJLElBQU0sV0FBVyxDQUFDLE1BQWMsVUFBbUIsZUFBZSxLQUFLLEtBQUssSUFBSSxRQUFRLE9BQU87QUFFL0YsSUFBTSxNQUFNLENBQUMsTUFBYyxFQUFFLFFBQVEsTUFBTSxPQUFPLEVBQUUsUUFBUSxNQUFNLFFBQVEsRUFBRSxRQUFRLE1BQU0sTUFBTTtBQUd6RixTQUFTLFNBQVMsS0FBVSxNQUFzQjtBQUN2RCxRQUFNLE1BQU0sUUFBUSxJQUFJLFNBQVMsTUFBTSxNQUFNLElBQUk7QUFDakQsUUFBTSxRQUFRLFNBQVMsTUFBTSxJQUFJLFNBQVMsV0FBVztBQUNyRCxRQUFNLE9BQU87QUFBQSxJQUNYLFVBQVUsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUFBLElBQ3hCLHFDQUFxQyxJQUFJLElBQUksV0FBVyxDQUFDO0FBQUEsSUFDekQsZ0NBQWdDLElBQUksVUFBVSxzQkFBc0Isd0NBQXdDO0FBQUEsSUFDNUcsK0JBQStCLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDdkM7QUFBQSxJQUNBLDBDQUEwQyxTQUFTO0FBQUEsSUFDbkQsc0NBQXNDLElBQUksSUFBSSxLQUFLLENBQUM7QUFBQSxJQUNwRCw0Q0FBNEMsSUFBSSxJQUFJLFdBQVcsQ0FBQztBQUFBLElBQ2hFLG9DQUFvQyxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzVDLHNDQUFzQyxJQUFJLEtBQUssQ0FBQztBQUFBLElBQ2hELDBDQUEwQyxJQUFJLElBQUksWUFBWSxlQUFlLENBQUM7QUFBQSxJQUM5RTtBQUFBLElBQ0EsdUNBQXVDLElBQUksSUFBSSxLQUFLLENBQUM7QUFBQSxJQUNyRCw2Q0FBNkMsSUFBSSxJQUFJLFdBQVcsQ0FBQztBQUFBLElBQ2pFLHVDQUF1QyxJQUFJLEtBQUssQ0FBQztBQUFBLEVBQ25EO0FBQ0EsU0FBTyxLQUFLLEtBQUssUUFBUTtBQUMzQjtBQUdPLFNBQVMsT0FBTyxNQUFzQjtBQUMzQyxRQUFNLE9BQU87QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNSLEVBQUUsU0FBUyxnQkFBZ0IsTUFBTSxXQUFXLEtBQUssT0FBTyxLQUFLLE1BQU0sT0FBTyxlQUFlO0FBQUEsTUFDekY7QUFBQSxRQUNFLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLEtBQUssT0FBTztBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsaUJBQWlCLEVBQUUsU0FBUyxnQkFBZ0IsUUFBUSxHQUFHLElBQUksaUNBQWlDLGVBQWUsbUNBQW1DO0FBQUEsTUFDaEo7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU8sc0NBQXNDLEtBQUssVUFBVSxJQUFJLEVBQUUsUUFBUSxNQUFNLFNBQVMsQ0FBQztBQUM1Rjs7O0FMN09BLElBQU0sbUNBQW1DO0FBWXpDLElBQU1HLE9BQU0sQ0FBQyxNQUFjLEVBQUUsUUFBUSxNQUFNLE9BQU8sRUFBRSxRQUFRLE1BQU0sTUFBTSxFQUFFLFFBQVEsTUFBTSxNQUFNLEVBQUUsUUFBUSxNQUFNLFFBQVE7QUFJdEgsU0FBUyxTQUFTLE1BQXNCO0FBQ3RDLFFBQU0sU0FBUyxhQUFhLFFBQVEsa0NBQVcsZ0JBQWdCLEdBQUcsTUFBTSxFQUFFLFFBQVEsU0FBUyxJQUFJO0FBQy9GLFFBQU0sTUFBTSxPQUFPLE1BQU0sSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQ3BGLElBQUksQ0FBQyxNQUFNLGFBQWEsS0FBSyxDQUFDLENBQUMsS0FBS0EsS0FBSSxFQUFFLFFBQVEsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQzlFLFNBQ0UsNFhBR1NBLEtBQUksR0FBRyxJQUFJLFdBQVcsUUFBUSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsc0dBRTFELE1BQU0sbUZBQW1GLEdBQUcsV0FBVyxNQUN4RyxzQ0FBc0MscUJBQXFCLGNBQWMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQy9GLHFCQUFxQixjQUFjLGNBQWMsQ0FBQztBQUV0RDtBQUlBLFNBQVMsY0FBc0I7QUFDN0IsU0FDRSxrREFDTUEsS0FBSSxNQUFNLFFBQVEsV0FBVyxDQUFDO0FBR3hDO0FBS0EsU0FBUyxTQUFTLE1BQXNCO0FBQ3RDLFFBQU0sUUFBUTtBQUNkLFFBQU0sT0FBTztBQUNiLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBLElBRVAsb0JBQW9CLEVBQUUsT0FBTyxRQUFRLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFBbUIsU0FBUyxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQUEsTUFBUyxPQUFPLElBQUksQ0FBQztBQUFBLGdCQUFtQixFQUFFO0FBQUEsSUFDbkssY0FBYztBQUNaLFlBQU0sTUFBTSxRQUFRLGtDQUFXLE1BQU07QUFDckMsWUFBTSxRQUFRLGFBQWEsUUFBUSxLQUFLLFlBQVksR0FBRyxNQUFNO0FBQzdELGlCQUFXLENBQUMsTUFBTSxJQUFJLEtBQUssY0FBYztBQUN2QyxzQkFBYyxRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU0sUUFBUSxPQUFPO0FBQUEsTUFBbUIsU0FBUyxNQUFNLElBQUksQ0FBQztBQUFBLGdCQUFtQixFQUFFLFFBQVEsMkRBQTJELEVBQUUsQ0FBQztBQUFBLE1BQzNMO0FBR0EsVUFBSSxDQUFDLE1BQU0sU0FBUyxJQUFJLEVBQUcsT0FBTSxJQUFJLE1BQU0scUJBQXFCLElBQUksd0JBQXdCO0FBQzVGLG9CQUFjLFFBQVEsS0FBSyxXQUFXLEdBQUcsTUFBTSxRQUFRLE1BQU0sNkRBQTZELENBQUM7QUFHM0gsWUFBTSxPQUFPLENBQUMsTUFBYyxNQUFjLE1BQWMsT0FBTyxPQUFPO0FBQ3BFLGNBQU0sT0FBTyxhQUFhLFFBQVEsS0FBSyxJQUFJLEdBQUcsTUFBTTtBQUNwRCxjQUFNLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSTtBQUMzQixZQUFJLENBQUMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssU0FBUyxHQUFHLEVBQUcsT0FBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLFdBQVcsSUFBSSxVQUFVLEdBQUcsNEJBQTRCO0FBQ2hJLHNCQUFjLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxXQUFXLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLFFBQVEsTUFBTSxNQUFNLGtCQUFrQixJQUFJLFFBQVEsQ0FBQztBQUFBLE1BQ3ZJO0FBR0EsWUFBTSxTQUFTLENBQUMsTUFBYyxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQztBQUN0RixXQUFLLGNBQWMsTUFBTSxNQUFNLE1BQU0sK0dBQStHLE9BQU8sWUFBWSxDQUFDO0FBQ3hLLFdBQUssaUJBQWlCLE1BQU0sU0FBUyxNQUFNLHdIQUF3SCxPQUFPLGVBQWUsQ0FBQztBQUUxTCxXQUFLLG1CQUFtQixNQUFNLFdBQVcsTUFBTSw4Q0FBOEM7QUFDN0Y7QUFBQSxRQUFLO0FBQUEsUUFBb0IsTUFBTSxZQUFZO0FBQUEsUUFBTTtBQUFBLFFBQy9DO0FBQUEsTUFBMkU7QUFFN0UsV0FBSyxrQkFBa0IsTUFBTSxVQUFVLE1BQU0scURBQXFEO0FBQ2xHLFdBQUssdUJBQXVCLE1BQU0sY0FBYyxNQUFNLDhDQUE4QztBQUNwRyxXQUFLLGFBQWEsTUFBTSxLQUFLLE1BQU0sZ0RBQWdEO0FBQ25GLFdBQUssNEJBQTRCLE1BQU0sbUJBQW1CLE1BQU0sbURBQW1EO0FBRW5ILFdBQUssYUFBYSxNQUFNLEtBQUssTUFBTSxTQUFTLElBQUksQ0FBQztBQUNqRCxXQUFLLGNBQWMsTUFBTSxNQUFNLE1BQU0scUJBQXFCLGNBQWMsU0FBUyxDQUFDLENBQUM7QUFFbkYsWUFBTSxNQUFNLEVBQUUsWUFBWSxzQkFBc0IsU0FBUyxXQUFXLFlBQVksVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFLFNBQVMsWUFBWSxNQUFNLGdCQUFnQixFQUFFLFNBQVMsVUFBVSxLQUFLLEVBQUUsRUFBRSxFQUFFO0FBQzlMLFlBQU0sUUFBUSxhQUFhLFFBQVEsS0FBSyxZQUFZLEdBQUcsTUFBTTtBQUM3RCxVQUFJLENBQUMsTUFBTSxTQUFTLGFBQWEsRUFBRyxPQUFNLElBQUksTUFBTSw2QkFBNkI7QUFDakYsb0JBQWMsUUFBUSxLQUFLLFlBQVksR0FBRyxNQUFNLFFBQVEsZUFBZSxNQUFNLHNDQUFzQyxLQUFLLFVBQVUsR0FBRyxFQUFFLFFBQVEsTUFBTSxTQUFTLENBQUM7QUFBQSxnQkFDckosQ0FBQztBQUNYLFdBQUssZ0JBQWdCLE1BQU0sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUN0RCxnQkFBVSxLQUFLLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFDbEMsb0JBQWMsUUFBUSxLQUFLLFlBQVksR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0YsSUFBSTtBQUFBLENBQWdCO0FBQzlJLFlBQU0sT0FBTyxjQUFjLElBQUksQ0FBQyxNQUFNLGVBQWUsSUFBSSxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssSUFBSTtBQUN0RixvQkFBYyxRQUFRLEtBQUssb0JBQW9CLEdBQUc7QUFBQTtBQUFBLEVBQXlHLElBQUk7QUFBQTtBQUFBLENBQWU7QUFBQSxJQUNoTDtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBRXhDLFFBQU0sUUFBUSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsT0FBTyxFQUFFLGlCQUFpQixrQkFBa0IsUUFBUSxPQUFPLEVBQUU7QUFDeEcsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLElBQUksQ0FBQztBQUFBO0FBQUEsSUFFakMsT0FBTyxFQUFFLHVCQUF1QixJQUFJO0FBQUEsRUFDdEM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJqc3giLCAianN4cyIsICJGcmFnbWVudCIsICJqc3giLCAianN4cyIsICJlc2MiXQp9Cg==

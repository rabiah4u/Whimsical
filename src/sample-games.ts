// Local-only sample game data for homepage preview without backend
// This is ONLY used when the API is unavailable (local development)
// Production code path (API integration) remains completely unchanged.

import type { Game } from "./games";
import { colorsFor } from "./games";

function gameColors(title: string): [string, string] {
  return colorsFor(title);
}

export const SAMPLE_GAMES: Game[] = [
  {
    slug: "danfo-rush",
    title: "Danfo Rush Hour",
    url: "https://danfo-rush.start.ng",
    host: "danfo-rush.start.ng",
    by: "Adebayo",
    colors: gameColors("Danfo Rush Hour"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 12450,
    description: "Race through Lagos traffic in a danfo bus. Dodge okadas, catch passengers, and don't crash!"
  },
  {
    slug: "jollof-catch",
    title: "Jollof Catching",
    url: "https://jollof-catch.start.ng",
    host: "jollof-catch.start.ng",
    by: "Chidi",
    colors: gameColors("Jollof Catching"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 9830,
    description: "Catch falling jollof rice in your bowl. Avoid the hot peppers! How many plates can you stack?"
  },
  {
    slug: "lagos-market-run",
    title: "Lagos Market Run",
    url: "https://lagos-market-run.start.ng",
    host: "lagos-market-run.start.ng",
    by: "Funke",
    colors: gameColors("Lagos Market Run"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 8760,
    description: "Dash through Balogun market buying ingredients. Haggle with sellers, avoid crowds, reach your stall!"
  },
  {
    slug: "afrobeats-dash",
    title: "Afrobeats Dash",
    url: "https://afrobeats-dash.start.ng",
    host: "afrobeats-dash.start.ng",
    by: "Tunde",
    colors: gameColors("Afrobeats Dash"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 7420,
    description: "Run to the rhythm of Afrobeats. Jump, slide, and dance through vibrant Nigerian streets."
  },
  {
    slug: "keke-driver",
    title: "Keke Driver",
    url: "https://keke-driver.start.ng",
    host: "keke-driver.start.ng",
    by: "Emeka",
    colors: gameColors("Keke Driver"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 6890,
    description: "Navigate your keke through Lagos streets. Pick up passengers, avoid potholes and traffic!"
  },
  {
    slug: "suya-night",
    title: "Suya Night",
    url: "https://suya-night.start.ng",
    host: "suya-night.start.ng",
    by: "Zainab",
    colors: gameColors("Suya Night"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 5670,
    description: "Grill perfect suya under the night sky. Fan the coals, flip the meat, serve hungry customers."
  },
  {
    slug: "ankara-designer",
    title: "Ankara Designer",
    url: "https://ankara-designer.start.ng",
    host: "ankara-designer.start.ng",
    by: "Bola",
    colors: gameColors("Ankara Designer"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 4320,
    description: "Create stunning Ankara outfits. Mix patterns, choose cuts, dress models for the runway."
  },
  {
    slug: "naija-quiz",
    title: "Naija Quiz",
    url: "https://naija-quiz.start.ng",
    host: "naija-quiz.start.ng",
    by: "Segun",
    colors: gameColors("Naija Quiz"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 3980,
    description: "Test your Nigerian knowledge. History, slang, music, food - how well do you know Naija?"
  },
  {
    slug: "okada-rush",
    title: "Okada Rush",
    url: "https://okada-rush.start.ng",
    host: "okada-rush.start.ng",
    by: "Kunle",
    colors: gameColors("Okada Rush"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 3450,
    description: "Weave through Lagos on an okada. Deliver packages fast but stay on two wheels!"
  },
  {
    slug: "puff-puff-master",
    title: "Puff Puff Master",
    url: "https://puff-puff-master.start.ng",
    host: "puff-puff-master.start.ng",
    by: "Ngozi",
    colors: gameColors("Puff Puff Master"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 2890,
    description: "Fry perfect puff puff balls. Watch the oil temp, flip at the right moment, don't burn them!"
  },
  {
    slug: "calabar-carnival",
    title: "Calabar Carnival",
    url: "https://calabar-carnival.start.ng",
    host: "calabar-carnival.start.ng",
    by: "Ekaette",
    colors: gameColors("Calabar Carnival"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 2560,
    description: "Dance through Africa's biggest street party. Match moves, collect feathers, lead the parade!"
  },
  {
    slug: "zobo-stand",
    title: "Zobo Stand",
    url: "https://zobo-stand.start.ng",
    host: "zobo-stand.start.ng",
    by: "Halima",
    colors: gameColors("Zobo Stand"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 2230,
    description: "Brew and sell refreshing zobo. Balance hibiscus, ginger, pineapple - keep customers happy!"
  },
  {
    slug: "asooke-weaver",
    title: "Aso-Oke Weaver",
    url: "https://asooke-weaver.start.ng",
    host: "asooke-weaver.start.ng",
    by: "Yemi",
    colors: gameColors("Aso-Oke Weaver"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 1980,
    description: "Weave traditional Aso-Oke cloth. Thread the loom, pick patterns, create heritage fabrics."
  },
  {
    slug: "abuja-skyline",
    title: "Abuja Skyline",
    url: "https://abuja-skyline.start.ng",
    host: "abuja-skyline.start.ng",
    by: "Ibrahim",
    colors: gameColors("Abuja Skyline"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 1750,
    description: "Build Abuja's skyline. Stack buildings, manage resources, create Nigeria's capital city."
  },
  {
    slug: "akara-morning",
    title: "Akara Morning",
    url: "https://akara-morning.start.ng",
    host: "akara-morning.start.ng",
    by: "Chiamaka",
    colors: gameColors("Akara Morning"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 1540,
    description: "Fry akara for the morning rush. Blend beans, season perfectly, serve with pap and bread."
  },
  {
    slug: "yoruba-legends",
    title: "Yoruba Legends",
    url: "https://yoruba-legends.start.ng",
    host: "yoruba-legends.start.ng",
    by: "Tayo",
    colors: gameColors("Yoruba Legends"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 1320,
    description: "Play through Yoruba mythology. Meet Orishas, solve riddles, restore balance to the world."
  },
  {
    slug: "highlife-hero",
    title: "Highlife Hero",
    url: "https://highlife-hero.start.ng",
    host: "highlife-hero.start.ng",
    by: "Obianuju",
    colors: gameColors("Highlife Hero"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 1180,
    description: "Strum classic highlife guitar. Hit the notes, feel the groove, become a highlife legend."
  },
  {
    slug: "nollywood-director",
    title: "Nollywood Director",
    url: "https://nollywood-director.start.ng",
    host: "nollywood-director.start.ng",
    by: "Kemi",
    colors: gameColors("Nollywood Director"),
    cover: null,
    board: [{ key: "score", label: "Score", order: "highest", format: "number" }],
    plays: 980,
    description: "Direct your own Nollywood movie. Cast actors, choose scenes, create box office hits!"
  }
];

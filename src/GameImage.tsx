import { useState } from "react";
import type { Game } from "./games";

/** Maps a game slug to the best matching category art asset in public/category-art/ */
const CATEGORY_ART_MAP: Record<string, string> = {
  "danfo-rush": "lagos.webp",
  "jollof-catch": "food-and-cooking.webp",
  "lagos-market-run": "markets-and-street-life.webp",
  "afrobeats-dash": "nigerian-themed.webp",
  "keke-driver": "lagos.webp",
  "suya-night": "food-and-cooking.webp",
  "ankara-designer": "nigerian-themed.webp",
  "naija-quiz": "brainy-games.webp",
  "okada-rush": "lagos.webp",
  "puff-puff-master": "food-and-cooking.webp",
  "calabar-carnival": "nigerian-themed.webp",
  "zobo-stand": "food-and-cooking.webp",
  "asooke-weaver": "nigerian-themed.webp",
  "abuja-skyline": "simulation-and-management.webp",
  "akara-morning": "food-and-cooking.webp",
  "yoruba-legends": "ancient-ruins-and-treasure.webp",
  "highlife-hero": "nigerian-themed.webp",
  "nollywood-director": "nigerian-themed.webp",
  "hangout": "browser-games.webp",
};

/** Returns the best available image URL for a game, or a generated SVG fallback. */
export function getGameImageUrl(game: Game): string {
  if (game.cover) return game.cover;
  const categoryArt = CATEGORY_ART_MAP[game.slug];
  if (categoryArt) return `/category-art/${categoryArt}`;
  return generateGameSVG(game);
}
function generateGameSVG(game: Game): string {
  const [color1, color2] = game.colors;
  const title = game.title.toLowerCase();

  let iconPath = "";
  if (title.includes("rush") || title.includes("run") || title.includes("dash") || title.includes("driver")) {
    iconPath = `<path d="M18 26L12 20l6-6L12 8l6 6-6 6z" fill="white"/><circle cx="18" cy="17" r="3" fill="white" opacity="0.3"/>`;
  } else if (title.includes("catch") || title.includes("dodge")) {
    iconPath = `<path d="M22 18a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8z" fill="none" stroke="white" stroke-width="2"/><circle cx="18" cy="14" r="2" fill="white"/>`;
  } else if (title.includes("market") || title.includes("stand")) {
    iconPath = `<path d="M6 22h28M10 14l-2 8h24l-2-8M14 14v8M22 14v8" stroke="white" stroke-width="2" stroke-linecap="round"/>`;
  } else if (title.includes("quiz") || title.includes("legend")) {
    iconPath = `<path d="M12 6v12M6 12h12M18 12l4 4" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="12" r="8" fill="none" stroke="white" stroke-width="1.5" opacity="0.5"/>`;
  } else if (title.includes("cook") || title.includes("food") || title.includes("suya") || title.includes("zobo") || title.includes("akara") || title.includes("puff")) {
    iconPath = `<path d="M10 22h20M14 14l2-8h8l2 8M20 14v8" stroke="white" stroke-width="2" stroke-linecap="round"/><ellipse cx="18" cy="18" rx="6" ry="3" fill="white" opacity="0.3"/>`;
  } else if (title.includes("weaver") || title.includes("designer") || title.includes("director")) {
    iconPath = `<path d="M8 10h24M8 16h24M8 22h24M14 10v12M22 10v12" stroke="white" stroke-width="1.5" stroke-linecap="round"/>`;
  } else if (title.includes("skyline") || title.includes("build")) {
    iconPath = `<path d="M6 22h28M10 22v-12h4v12M18 22v-16h8v16M26 22v-8h4v8" fill="white"/>`;
  } else if (title.includes("music") || title.includes("highlife") || title.includes("afrobeats")) {
    iconPath = `<path d="M10 22v-16a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v16M14 14v8M22 14v8" stroke="white" stroke-width="2" stroke-linecap="round"/>`;
  } else if (title.includes("hangout") || title.includes("multiplayer") || title.includes("park")) {
    iconPath = `<circle cx="18" cy="16" r="6" fill="white" opacity="0.3"/><path d="M14 18c0-2.5 2-4 6-4s6 1.5 6 4" stroke="white" stroke-width="2" fill="none"/><path d="M10 22h16" stroke="white" stroke-width="2" stroke-linecap="round"/>`;
  } else {
    iconPath = `<rect x="6" y="6" width="24" height="24" rx="4" fill="white" opacity="0.15"/><circle cx="18" cy="18" r="8" fill="white" opacity="0.3"/>`;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
      <defs>
        <linearGradient id="bg-${game.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color1}"/>
          <stop offset="100%" stop-color="${color2}"/>
        </linearGradient>
      </defs>
      <rect width="36" height="36" fill="url(#bg-${game.slug})"/>
      ${iconPath}
    </svg>
  `.trim();

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/** React component for rendering a game's image with proper fallbacks and error handling. */
export function GameImage({ game, alt = "", className = "", ...props }: { game: Game; alt?: string; className?: string } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [src, setSrc] = useState(() => getGameImageUrl(game));
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error && !src.startsWith("data:image/svg")) {
      setError(true);
      setSrc(getGameImageUrl(game));
    }
  };

  const handleFallbackError = () => {
    if (src.startsWith("data:image/svg")) {
      setSrc("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjZTFlMWUxIi8+PC9zdmc+");
    }
  };

  return (
    <img
      src={src}
      alt={alt || game.title}
      className={className}
      onError={error ? handleFallbackError : handleError}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}

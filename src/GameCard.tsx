import type { ReactNode } from "react";
import type { User } from "./api";
import { cardPartsFor, type CardSlot } from "./features/registry";
import { useFeatures } from "./features/flags";
import type { Game } from "./games";
import { GameImage } from "./GameImage";

const BEE_SVG = (
  <svg viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="8" cy="4" rx="6" ry="3.5" fill="#e8f5ff" opacity="0.7" transform="rotate(-25 8 4)"/>
    <ellipse cx="20" cy="4" rx="6" ry="3.5" fill="#e8f5ff" opacity="0.7" transform="rotate(25 20 4)"/>
    <ellipse cx="14" cy="11" rx="10" ry="7" fill="#292a23"/>
    <ellipse cx="14" cy="8" rx="7" ry="3" fill="#ffd93d"/>
    <ellipse cx="14" cy="14" rx="7" ry="3" fill="#ffd93d"/>
    <ellipse cx="14" cy="5" rx="4" ry="3.5" fill="#292a23"/>
    <circle cx="12" cy="4" r="1" fill="white" opacity="0.8"/>
    <circle cx="16" cy="4" r="1" fill="white" opacity="0.8"/>
    <path d="M11 3.5 Q8 0 6 -2" stroke="#292a23" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M17 3.5 Q20 0 22 -2" stroke="#292a23" stroke-width="1" fill="none" stroke-linecap="round"/>
    <circle cx="6" cy="-2" r="1" fill="#292a23"/>
    <circle cx="22" cy="-2" r="1" fill="#292a23"/>
    <path d="M14 18 L14 21" stroke="#292a23" stroke-width="1.2" stroke-linecap="round"/>
  </svg>
);

const FLOWER_SVG = (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="28" cy="28" r="24" fill="#fff3a0" opacity="0.35"/>
    <g fill="#ff6b9d">
      <ellipse cx="28" cy="6" rx="6" ry="14"/>
      <ellipse cx="46" cy="24" rx="14" ry="6" transform="rotate(45 46 24)"/>
      <ellipse cx="28" cy="46" rx="6" ry="14"/>
      <ellipse cx="10" cy="24" rx="14" ry="6" transform="rotate(-45 10 24)"/>
    </g>
    <ellipse cx="28" cy="28" rx="6" ry="4" fill="#ff9f1c"/>
  </svg>
);

// A game's card on the homepage and /games. Features add to it through slots (src/features/registry.ts,
// registerCardPart) instead of editing this file: badges on the picture, stats under the title, actions by Play.
export default function GameCard({ game: g, legendary = false, link, user, onSignIn, favorite, board, play }: {
  game: Game;
  legendary?: boolean;
  link: { href: string; onClick?: (e: React.MouseEvent) => void };
  user: User | null;
  onSignIn: () => void;
  favorite: ReactNode;
  board: ReactNode;
  play: ReactNode;
}) {
  const isOn = useFeatures();
  const slot = (name: CardSlot) => {
    const parts = cardPartsFor(name)
      .filter((p) => isOn(p.feature))
      .map((p) => ({ key: p.key, node: p.render(g, { user, onSignIn }) }))
      .filter((p) => p.node !== null && p.node !== undefined && p.node !== false);
    return parts.length ? <div className={`card-${name}`}>{parts.map((p) => <span key={p.key}>{p.node}</span>)}</div> : null;
  };
  return (
    <article className={legendary ? "game legendary" : "game"}>
      {/* Flower popup with bee visitor on hover/focus */}
      <span className="game-flower" aria-hidden="true">
        {FLOWER_SVG}
        {BEE_SVG}
      </span>
      <a className="game-link" {...link}>
        <div className="art" style={{ background: `linear-gradient(135deg, ${g.colors[0]}, ${g.colors[1]})` }}>
          <GameImage game={g} alt={`${g.title} game cover`} />
          {slot("badges")}
        </div>
        <div className="info">
          <h3>{g.title}</h3>
          <p>{g.host}</p>
          <span className="by">by {g.by}</span>
          {slot("stats")}
        </div>
      </a>
      <div className="meta">
        {favorite}
        {board}
        {slot("actions")}
        {play}
      </div>
    </article>
  );
}

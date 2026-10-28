// Local-only sample tournament & shelves data for homepage preview
// This is ONLY used when the API is unavailable (local development)
// Production code path (API integration) remains completely unchanged.

import { SAMPLE_GAMES } from "./sample-games";
import type { TournamentGame, Tournament } from "./api";

// Helper to convert sample game to TournamentGame format
function toTournamentGame(g: typeof SAMPLE_GAMES[0]): TournamentGame {
  return {
    name: g.slug,
    url: g.url,
    cover_url: g.cover,
    description: g.description,
    leaderboard: g.board ?? [],
    players: g.plays,
    top: [],
  };
}

// Sample tournament data for today - matches the Tournament type from api.ts
export const SAMPLE_TOURNAMENT: Tournament = {
  id: 1,
  starts_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // Started 1 hour ago
  ends_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Ends in 24 hours
  finished: false,
  games: SAMPLE_GAMES.slice(0, 5).map(toTournamentGame),
  entrants: 1234,
  entered: false,
  standings: [],
  me: null,
  winner: null,
  next_starts_at: new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString()
};

// Sample shelves data (for Categories/Featured/Staff Picks/New sections)
// Matches the Shelves type from features/discovery/api.ts
export const SAMPLE_SHELVES = {
  featured: SAMPLE_GAMES.slice(0, 5).map(g => g.slug),
  staff: SAMPLE_GAMES.slice(5, 10).map(g => g.slug),
  new: SAMPLE_GAMES.slice(10, 15).map(g => g.slug),
  continue_playing: SAMPLE_GAMES.slice(0, 3).map(g => g.slug),
  most_played: SAMPLE_GAMES.slice(0, 5).map(g => g.slug),
  most_improved: SAMPLE_GAMES.slice(5, 10).map(g => g.slug)
};

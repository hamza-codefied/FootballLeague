// types/team.ts

export type Player = {
  id: number;
  name: string;
  position: string;
  age: number;
  goals: number;
  assists: number;
  matches: number;
  isCaptain: boolean;
  isStarPlayer: boolean;
};

export type Team = {
  id: number;
  code:any;
  name: string;
  fullName: string;
  founded: string;
  location: string;
  stadium: string;
  capacity: string;
  coach: string;
  captain: string;
  colors: { primary: string; accent: string };
  logo: string;
  heroImage: string;
  description: string;
  achievements: string[];
  stats: {
    matchesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
    position: any;
  };
  players: Player[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Fixture {
  id: number;
  home_team: string;
  away_team: string;
  fixture_date: any; // Format: YYYY-MM-DD
  fixture_time: any; // Format: HH:mm:ss
  venue: string;
  round: string;
  created_at: any; // Format: YYYY-MM-DD HH:mm:ss
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getFixtures = async (): Promise<Fixture[]> => {
  const res = await axios.get<Fixture[]>(`${API_URL}/fixture.php`);
  return res.data;
};

export const useFixtures = () => {
  return useQuery({
    queryKey: ["fixtures"],
    queryFn: getFixtures,
  });
};

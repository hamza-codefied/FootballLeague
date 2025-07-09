import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "./use-fixtures";

export interface CreateFixturePayload {
  home_team: string;
  away_team: string;
  fixture_date: any;
  fixture_time: any;
  venue: string;
  round: string;
}

export const createFixture = async (fixture: CreateFixturePayload) => {
  const response = await axios.post(`${API_URL}/fixture.php`, fixture);
  return response.data;
};

export const useCreateFixture = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (fixture: CreateFixturePayload) => createFixture(fixture),
    onSuccess: () => {
      // Optionally refetch fixtures list after creating one
      queryClient.invalidateQueries({ queryKey: ["fixtures"] });
    },
  });
};

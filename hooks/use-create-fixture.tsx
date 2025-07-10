import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "./use-fixtures";
import { useAuth } from "@/context/AuthContext";

export interface CreateFixturePayload {
  home_team: string;
  away_team: string;
  fixture_date: any;
  fixture_time: any;
  venue: string;
  round: string;
}

export const createFixture = async (
  fixture: CreateFixturePayload,
  token: string
) => {
  const response = await axios.post(`${API_URL}/fixture.php`, fixture, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const useCreateFixture = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();

  return useMutation({
    mutationFn: (fixture: CreateFixturePayload) => {
      if (!token) throw new Error("No token found");
      return createFixture(fixture, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fixtures"] });
    },
  });
};

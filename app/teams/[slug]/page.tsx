// app/teams/[slug]/page.tsx
import TeamDetailPage from "@/components/TeamDetailPage";
import { teamsData } from "@/data/teams";

export const generateStaticParams = async () => {
  return teamsData.map((team: any) => ({
    slug: team.name.toLowerCase().replace(/\s+/g, "-"),
  }));
};

export default function TeamPage({ params }: { params: { slug: string } }) {
  const team = teamsData.find(
    (team: any) => team.name.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!team) {
    return <div className="text-center text-white py-20">Team not found.</div>;
  }

  return <TeamDetailPage team={team} />;
}

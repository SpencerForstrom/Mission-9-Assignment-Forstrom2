import { Team } from "../types";

const TeamCard = ({ team }: { team: Team }) => {
  console.log("Rendering TeamCard:", team); // ✅ Debugging log

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-bold">{team.school}</h2>
      <p className="italic">{team.name}</p>
      <p>{team.city}, {team.state}</p>
    </div>
  );
};

export default TeamCard;

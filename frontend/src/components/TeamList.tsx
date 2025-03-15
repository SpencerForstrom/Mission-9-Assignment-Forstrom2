import TeamCard from "./TeamCard";
import { Team } from "../types";

const TeamList = ({ teams }: { teams: Team[] }) => {
  console.log("Received teams in TeamList:", teams); // ✅ Debugging log

  if (!teams || teams.length === 0) {
    return <p>No teams found.</p>; // ✅ If empty, show this
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
};

export default TeamList;

import { useEffect, useState } from "react";
import Header from "./components/Header";
import TeamList from "./components/TeamList";
import { Team } from "./types";

function App() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/CollegeBasketballTeams.json")
      .then((res) => res.json())
      .then((json) => {
        if (json.teams) {
          setTeams(json.teams);
        }
      })
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div className="p-4">
      <Header />
      <TeamList teams={teams} />
    </div>
  );
}

export default App;


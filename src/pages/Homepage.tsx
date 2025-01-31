import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

const Homepage = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const array = ["1", "2", "3", "4", "5"];

  return (
    <main className="">
      <h1 className="p-4">FantaMeister</h1>
      <Navbar />
      <div className="flex flex-wrap gap-4 p-4">
        {array.map((item) => (
          <TeamCard key={item}/>
        ))}
      </div>
    </main>
  );
};

export default Homepage;

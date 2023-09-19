import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const Cards = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="grid grid-cols-3 gap-7">
      {users.map((user) => (
        <Card user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Cards;

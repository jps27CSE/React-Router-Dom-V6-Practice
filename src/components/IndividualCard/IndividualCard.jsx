import { useLoaderData } from "react-router-dom";

const IndividualCard = () => {
  const indiVidualData = useLoaderData();
  const { name, phone, username, website } = indiVidualData;
  console.log(indiVidualData);
  return (
    <div>
      <div className="card w-96 bg-primary text-primary-content mx-auto mt-5">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="mx-auto">
            <p>{phone}</p>
            <p>{username}</p>
            <p>{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCard;

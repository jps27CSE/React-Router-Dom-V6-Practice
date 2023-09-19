import { Outlet, useNavigation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar />
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
    </div>
  );
};

export default Home;

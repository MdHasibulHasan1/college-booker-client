import { Helmet } from "react-helmet-async";
import { Form } from "react-hook-form";
import Login from "../Login";

import AddedForm from "./Form";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      <Login></Login>
      <AddedForm />
    </div>
  );
};

export default Home;

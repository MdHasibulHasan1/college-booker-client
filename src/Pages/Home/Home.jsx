import { Helmet } from "react-helmet-async";
import { Form } from "react-hook-form";
import AddedForm from "./Form";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      <AddedForm />
    </div>
  );
};

export default Home;

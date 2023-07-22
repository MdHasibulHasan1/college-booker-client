import { Helmet } from "react-helmet-async";
import { Form } from "react-hook-form";
import useColleges from "../../hooks/useColleges";
import Login from "../Login";
import CollegeCardSection from "./CollegeCardSection/CollegeCardSection";

import AddedForm from "./Form";
import SearchField from "./Search/SearchField";

const Home = () => {
  const [colleges, collegesRefetch] = useColleges();
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>

      <SearchField />
      <CollegeCardSection colleges={colleges} />
      <Login></Login>
      <AddedForm />
    </div>
  );
};

export default Home;

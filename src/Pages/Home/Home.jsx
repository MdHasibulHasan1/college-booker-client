import { Helmet } from "react-helmet-async";
import { Form } from "react-hook-form";
import useColleges from "../../hooks/useColleges";
import Login from "../Login";
import CollegeCardSection from "./CollegeCardSection/CollegeCardSection";

import AddedForm from "./Form";
import ReviewSection from "./ReviewSection/ReviewSection";
import CollegeSearch from "./Search/CollegeSearch";

const Home = () => {
  const [colleges, collegesRefetch] = useColleges();
  return (
    <div>
      <Helmet>
        <title>App Name | Home</title>
      </Helmet>
      <CollegeSearch />

      <CollegeCardSection colleges={colleges} />
      <ReviewSection />

      <AddedForm />
    </div>
  );
};

export default Home;

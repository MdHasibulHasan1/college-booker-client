import { Helmet } from "react-helmet-async";
import { Form } from "react-hook-form";
import useColleges from "../../hooks/useColleges";
import CollegeGallerySection from "./CollegeGallerySection/CollegeGallerySection";
import CollegeList from "./CollegesList/CollegesList";

import AddedForm from "./Form";
import ResearchPaperLinks from "./ResearchPaperLinks/ResearchPaperLinks";
import ReviewSection from "./ReviewSection/ReviewSection";
import CollegeSearch from "./Search/CollegeSearch";

const Home = () => {
  const [colleges, collegesRefetch] = useColleges();
  return (
    <div>
      <Helmet>
        <title>CollegeBooker | Home</title>
      </Helmet>
      <CollegeSearch />
      <CollegeList />
      <CollegeGallerySection colleges={colleges} />

      <ResearchPaperLinks colleges={colleges} />

      <ReviewSection />

      {/* <AddedForm /> */}
    </div>
  );
};

export default Home;

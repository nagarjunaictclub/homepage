import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import PresidentMessage from "@/components/About/PresidentMessage";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="About Page"
        description="Welcome to our ICT Club, a dynamic community dedicated to exploring and embracing the limitless potential of Information and Communication Technology."
      /> */}
      <AboutSectionOne />
      <PresidentMessage />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;

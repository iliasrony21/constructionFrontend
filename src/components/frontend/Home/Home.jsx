import About from "./Banner/Banner";

import BlogNewsSection from "./BlogNewsSection/BlogNewsSection";
import OurProjectHome from "./OurProjectHome/OurProjectHome";
import OurServiceHome from "./OurServicesPage/OurServiceHome";
import Sliders from "./Sliders";
import Testimonials from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <About></About>
      <OurServiceHome></OurServiceHome>
      <WhyChooseUs></WhyChooseUs>
      <OurProjectHome></OurProjectHome>
      <Testimonials></Testimonials>
      <BlogNewsSection></BlogNewsSection>
    </div>
  );
};

export default Home;

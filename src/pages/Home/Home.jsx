import About from "./About";
import Banner from "./Banner";
import Blog from "./Blog";
import BrandName from "./BrandName";
import Industry from "./Industry";
import OurService from "./OurService";
import Projects from "./Projects";
import Service from "./Service";
import Tech from "./Tech";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandName />
      <Service />
      <About />
      <Industry />
      <Tech />
      <OurService />
      <Projects />
      <Testimonial />
      <Blog/>
    </div>
  );
};

export default Home;

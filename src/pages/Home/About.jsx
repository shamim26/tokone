import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  return (
    <div className="bg-section grid grid-cols-1 md:grid-cols-2 px-3 pt-24 my-24">
      <div className="relative md:-mr-28">
        <img
          className="w-full "
          src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-main-img-h5.png"
          alt=""
        />
        <img
          className="absolute w-1/4 md:w-auto right-1/4 top-10 animate-up"
          src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-drone-img-h5.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-start md:mr-32">
        <SectionTitle
          title={"ABOUT US"}
          heading={"We Are Increasing Business Success With Technology"}
        />
        <p className="text-justify">
          Deliver beautiful emails that get opened and clicked every time.
          Personalized content to every subscriber. Fully customizable
          templates. Build relationships that lead to conversions.
        </p>
        <div>
          <h3 className="text-lg font-semibold font-heading underline mt-10">
            Top Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-1 md:gap-x-3 gap-y-2 md:gap-y-5 mt-5">
            <li className="flex items-center gap-5">
              <span className="w-8 h-8 bg-white  rounded-full shadow-md flex justify-center items-center">
                <img
                  className="w-1/2"
                  src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/blue-tick.png"
                  alt=""
                />
              </span>
              <p className="text-lg font-medium text-typography">
                Drag & Drop Newsletter Editor
              </p>
            </li>
            <li className="flex items-center gap-5">
              <span className="w-8 h-8 bg-white  rounded-full shadow-md flex justify-center items-center">
                <img
                  className="w-1/2"
                  src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/blue-tick.png"
                  alt=""
                />
              </span>
              <p className="text-lg font-medium text-typography">
                Content A/B Testing
              </p>
            </li>
            <li className="flex items-center gap-5">
              <span className="w-8 h-8 bg-white  rounded-full shadow-md flex justify-center items-center">
                <img
                  className="w-1/2"
                  src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/blue-tick.png"
                  alt=""
                />
              </span>
              <p className="text-lg font-medium text-typography">
                Subject Line A/B Testing
              </p>
            </li>
            <li className="flex items-center gap-5">
              <span className="w-8 h-8 bg-white  rounded-full shadow-md flex justify-center items-center">
                <img
                  className="w-1/2"
                  src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/blue-tick.png"
                  alt=""
                />
              </span>
              <p className="text-lg font-medium text-typography">
                List Segmentation
              </p>
            </li>
          </ul>
        </div>
        <Button name={" Get Started Now "} />
      </div>
    </div>
  );
};

export default About;

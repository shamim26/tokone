import Button from "../../components/Button";

const Banner = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFFFFF] from-0% to-[#DBFFEA] to-100% pt-[160px]">
      <div className="flex flex-col-reverse md:flex-row items-center justify-end md:ml-10">
        <div className="md:p-8 p-3">
          <h4 className="text-lg font-heading font-medium text-secondary mb-5">
            TECHNOLOGY SOLUTIONS
          </h4>
          <h1 className="text-2xl md:text-6xl font-bold font-heading text-primary md:leading-[70px] mb-5">
            Digital Technology IT Solution Services Around the World
          </h1>
          <p className="text-lg text-gray-700 mb-14">
            Our process that relies on methods and techniques to taking raw data
            - mining for insights and years of experience will help you become
            the industry leader.
          </p>
          <div className="flex items-end gap-10 mb-20">
            <Button name={" Start Free Trial "} />
            <button className="bg-gradient-to-r from-secondary from-0% to-[#8366E3] to-100% h-16 w-16 flex items-center justify-center rounded-full animation-pulse">
              <svg fill="#fff" viewBox="0 0 16 16" height="1.5em" width="1.5em">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center  gap-5">
            <img
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/customer-avatar.png"
              alt=""
            />
            <p className="text-lg font-heading font-medium text-gray-600">
              Trusted By 5000+ Worldwide <br /> Brand & Customers
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <img
            className="-mr-10"
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly-h5.png"
            alt=""
          />
          <img
            className="md:block absolute top-1/4 right-80 animate-up hidden"
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly5-h5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

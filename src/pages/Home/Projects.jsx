import SectionTitle from "../../components/SectionTitle";

const Projects = () => {
  return (
    <div className="mx-2 md:mx-5 mb-20">
      <div className="flex justify-center mb-10">
        <SectionTitle
          headingClass="text-center md:mx-[25rem]"
          titleClass="text-center"
          title={"our projects"}
          heading={"Our Recent Launched Projects Available Into Market"}
        />
      </div>
      {/* project cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        <div className="group relative  rounded ">
          <div className="overflow-hidden rounded ">
            <img
              className="rounded group-hover:scale-125 transition-all duration-700 ease-linear"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_4-520x640.jpg"
              alt=""
            />
          </div>

          <div className="bg-white rounded group-hover:-translate-y-2 transition-all duration-700 ease-linear absolute -bottom-14 left-9 shadow-[0_6px_25px_rgba(0,0,0,7%)] px-7 py-5">
            <p className="text-typography mb-4">Illustration</p>
            <h1 className="font-heading font-bold text-primary hover:text-secondary cursor-pointer text-xl">
              Infrastructure Upgrade
            </h1>
          </div>
        </div>
        <div className="group relative  rounded ">
          <div className="overflow-hidden rounded">
            <img
              className="rounded group-hover:scale-125 transition-all duration-700 ease-linear"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_3-520x640.jpg"
              alt=""
            />
          </div>

          <div className="bg-white rounded group-hover:-translate-y-2 transition-all duration-700 ease-linear absolute -bottom-14 left-9 shadow-[0_6px_25px_rgba(0,0,0,7%)] px-7 py-5">
            <p className="text-typography mb-4">Illustration</p>
            <h1 className="font-heading font-bold text-primary hover:text-secondary cursor-pointer text-xl">
              Infrastructure Upgrade
            </h1>
          </div>
        </div>
        <div className="group relative  rounded ">
          <div className="overflow-hidden rounded">
            <img
              className="rounded group-hover:scale-125 transition-all duration-700 ease-linear"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_2-520x640.jpg"
              alt=""
            />
          </div>

          <div className="bg-white rounded group-hover:-translate-y-2 transition-all duration-700 ease-linear absolute -bottom-14 left-9 shadow-[0_6px_25px_rgba(0,0,0,7%)] px-7 py-5">
            <p className="text-typography mb-4">Illustration</p>
            <h1 className="font-heading font-bold text-primary hover:text-secondary cursor-pointer text-xl">
              Infrastructure Upgrade
            </h1>
          </div>
        </div>
        <div className="group relative  rounded ">
          <div className="overflow-hidden rounded">
            <img
              className="rounded group-hover:scale-125 transition-all duration-700 ease-linear"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_1-520x640.jpg"
              alt=""
            />
          </div>

          <div className="bg-white rounded group-hover:-translate-y-2 transition-all duration-700 ease-linear absolute -bottom-14 left-9 shadow-[0_6px_25px_rgba(0,0,0,7%)] px-7 py-5">
            <p className="text-typography mb-4">Illustration</p>
            <h1 className="font-heading font-bold text-primary hover:text-secondary cursor-pointer text-xl">
              Infrastructure Upgrade
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

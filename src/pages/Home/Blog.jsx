import SectionTitle from "../../components/SectionTitle";

const Blog = () => {
  return (
    <div className="bg-section mt-20 py-20 ">
      <div className="mx-2 md:mx-16">
        <div className="pb-10">
          <SectionTitle
            title="OUR BLOG"
            heading="Latest Tips &Tricks"
            titleClass="text-center"
            headingClass="text-center"
          />
          <p className="text-typography text-center">
            Deliver beautiful emails that get opened and clicked every time.
            Personalized content <br /> to every subscriber Fully customizable
            templates the gioun
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative bg-[#E9F6EE] rounded-[10px]">
            <img
              className="rounded-[10px] w-auto"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/technology-cat-blog.jpg"
              alt=""
            />
            <div className=" px-5 py-6">
              <p className="flex items-center justify-center my-5 gap-4">
                <span>Mar 15, 2023</span>
                <span className="flex items-center gap-1">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <path
                      d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z"
                      fill="url(#paint0_linear_878_836)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_878_836"
                        x1="-3.93273e-08"
                        y1="0.803572"
                        x2="6.33755"
                        y2="1.30989"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#513DE8"></stop>
                        <stop offset="1" stopColor="#8366E3"></stop>
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  8 min read
                </span>
              </p>
              <p>
                Podcasting operational change management inside of workflows to
                establish a...
              </p>
              <div className="flex items-center gap-2 mt-6">
                <img
                  className="rounded-full"
                  src="https://secure.gravatar.com/avatar/7b65fa8dfa960b5398f1ddaf161a9c8f?s=40&d=mm&r=g"
                  alt=""
                />
                <p className="flex-1">by Tekone</p>
                <button className="flex items-center gap-2 text-sm font-medium text-secondary hover:bg-secondary hover:text-white border-2 rounded-full px-5 py-[6px]">
                  Read Post{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_878_887)">
                      <path
                        d="M7.5 8.125H2.5V6.875H7.5V2.5L12.5 7.5L7.5 12.5V8.125Z"
                        fill="#513DE8"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_878_887">
                        <rect width="15" height="15" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white px-10 md:px-16 py-4 rounded-[10px] absolute top-[10em] md:top-[12.2em] left-[2em] md:left-[2.5em]">
              <h1 className="cursor-pointer text-xl font-bold font-heading text-center text-primary hover:text-secondary">
                10 Top Machine Learning <br /> Platforms In 2023
              </h1>
            </div>
            <div className="flex items-center gap-3 bg-white hover:bg-opacity-60 cursor-pointer rounded-full absolute top-32 md:top-40 left-[2em] md:left-[2.5em] px-3 py-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <path
                  d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z"
                  fill="url(#paint0_linear_878_836)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_878_836"
                    x1="-3.93273e-08"
                    y1="0.803572"
                    x2="6.33755"
                    y2="1.30989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#513DE8"></stop>
                    <stop offset="1" stopColor="#8366E3"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-sm font-semibold text-secondary">
                {" "}
                Technology
              </p>
            </div>
            <span className="absolute top-5 left-5 flex items-center justify-center cursor-pointer h-10 w-10 rounded-full bg-gradient-to-r from-secondary from-0% to-[#8366E3] to-100%">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M3.70371 13.1768L7.90054e-06 14L0.823208 10.2963C0.28108 9.28226 -0.00172329 8.14985 7.90054e-06 7C7.90054e-06 3.1339 3.13391 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14C5.85015 14.0017 4.71774 13.7189 3.70371 13.1768Z"
                  fill="white"
                ></path>{" "}
              </svg>
            </span>
          </div>
          <div className="relative bg-[#E9F6EE] rounded-[10px]">
            <img
              className="rounded-[10px] w-auto"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/technology-cat-blog2.jpg"
              alt=""
            />
            <div className=" px-5 py-6">
              <p className="flex items-center justify-center my-5 gap-4">
                <span>Mar 15, 2023</span>
                <span className="flex items-center gap-1">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <path
                      d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z"
                      fill="url(#paint0_linear_878_836)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_878_836"
                        x1="-3.93273e-08"
                        y1="0.803572"
                        x2="6.33755"
                        y2="1.30989"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#513DE8"></stop>
                        <stop offset="1" stopColor="#8366E3"></stop>
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  8 min read
                </span>
              </p>
              <p>
                Podcasting operational change management inside of workflows to
                establish a...
              </p>
              <div className="flex items-center gap-2 mt-6">
                <img
                  className="rounded-full"
                  src="https://secure.gravatar.com/avatar/7b65fa8dfa960b5398f1ddaf161a9c8f?s=40&d=mm&r=g"
                  alt=""
                />
                <p className="flex-1">by Tekone</p>
                <button className="flex items-center gap-2 text-sm font-medium text-secondary hover:bg-secondary hover:text-white border-2 rounded-full px-5 py-[6px]">
                  Read Post{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_878_887)">
                      <path
                        d="M7.5 8.125H2.5V6.875H7.5V2.5L12.5 7.5L7.5 12.5V8.125Z"
                        fill="#513DE8"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_878_887">
                        <rect width="15" height="15" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white px-10 md:px-16 py-4 rounded-[10px] absolute top-[10em] md:top-[12.2em] left-[2em] md:left-[2.5em]">
              <h1 className="cursor-pointer text-xl font-bold font-heading text-center text-primary hover:text-secondary">
                10 Top Machine Learning <br /> Platforms In 2023
              </h1>
            </div>
            <div className="flex items-center gap-3 bg-white hover:bg-opacity-60 cursor-pointer rounded-full absolute top-32 md:top-40 left-[2em] md:left-[2.5em] px-3 py-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <path
                  d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z"
                  fill="url(#paint0_linear_878_836)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_878_836"
                    x1="-3.93273e-08"
                    y1="0.803572"
                    x2="6.33755"
                    y2="1.30989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#513DE8"></stop>
                    <stop offset="1" stopColor="#8366E3"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-sm font-semibold text-secondary">
                {" "}
                Technology
              </p>
            </div>
            <span className="absolute top-5 left-5 flex items-center justify-center cursor-pointer h-10 w-10 rounded-full bg-gradient-to-r from-secondary from-0% to-[#8366E3] to-100%">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M3.70371 13.1768L7.90054e-06 14L0.823208 10.2963C0.28108 9.28226 -0.00172329 8.14985 7.90054e-06 7C7.90054e-06 3.1339 3.13391 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14C5.85015 14.0017 4.71774 13.7189 3.70371 13.1768Z"
                  fill="white"
                ></path>{" "}
              </svg>
            </span>
          </div>
          <div className="relative bg-[#E9F6EE] rounded-[10px]">
            <img
              className="rounded-[10px] w-auto"
              src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/application-cat-blog.jpg"
              alt=""
            />
            <div className=" px-5 py-6">
              <p className="flex items-center justify-center my-5 gap-4">
                <span>Mar 15, 2023</span>
                <span className="flex items-center gap-1">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                  >
                    <path
                      d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z"
                      fill="url(#paint0_linear_878_836)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_878_836"
                        x1="-3.93273e-08"
                        y1="0.803572"
                        x2="6.33755"
                        y2="1.30989"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#513DE8"></stop>
                        <stop offset="1" stopColor="#8366E3"></stop>
                      </linearGradient>
                    </defs>
                  </svg>{" "}
                  8 min read
                </span>
              </p>
              <p>
                Podcasting operational change management inside of workflows to
                establish a...
              </p>
              <div className="flex items-center gap-2 mt-6">
                <img
                  className="rounded-full"
                  src="https://secure.gravatar.com/avatar/7b65fa8dfa960b5398f1ddaf161a9c8f?s=40&d=mm&r=g"
                  alt=""
                />
                <p className="flex-1">by Tekone</p>
                <button className="flex items-center gap-2 text-sm font-medium text-secondary hover:bg-secondary hover:text-white border-2 rounded-full px-5 py-[6px]">
                  Read Post{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <g clipPath="url(#clip0_878_887)">
                      <path
                        d="M7.5 8.125H2.5V6.875H7.5V2.5L12.5 7.5L7.5 12.5V8.125Z"
                        fill="#513DE8"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_878_887">
                        <rect width="15" height="15" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white px-10 md:px-16 py-4 rounded-[10px] absolute top-[10em] md:top-[12.2em] left-[2em] md:left-[2.5em]">
              <h1 className="cursor-pointer text-xl font-bold font-heading text-center text-primary hover:text-secondary">
                10 Top Machine Learning <br /> Platforms In 2023
              </h1>
            </div>
            <div className="flex items-center gap-3 bg-white hover:bg-opacity-60 cursor-pointer rounded-full absolute top-32 md:top-40 left-[2em] md:left-[2.5em] px-3 py-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <path
                  d="M3 0L5.59808 1.5V4.5L3 6L0.401924 4.5V1.5L3 0Z"
                  fill="url(#paint0_linear_878_836)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_878_836"
                    x1="-3.93273e-08"
                    y1="0.803572"
                    x2="6.33755"
                    y2="1.30989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#513DE8"></stop>
                    <stop offset="1" stopColor="#8366E3"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-sm font-semibold text-secondary">Technology</p>
            </div>
            <span className="absolute top-5 left-5 flex items-center justify-center cursor-pointer h-10 w-10 rounded-full bg-gradient-to-r from-secondary from-0% to-[#8366E3] to-100%">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M3.70371 13.1768L7.90054e-06 14L0.823208 10.2963C0.28108 9.28226 -0.00172329 8.14985 7.90054e-06 7C7.90054e-06 3.1339 3.13391 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14C5.85015 14.0017 4.71774 13.7189 3.70371 13.1768Z"
                  fill="white"
                ></path>{" "}
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

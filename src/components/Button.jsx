const Button = ({ name, extraClass, extraElement }) => {
  return (
    <button
      className={`text-white font-medium bg-gradient-to-r hover:bg-gradient-to-l from-secondary from-0% to-[#8366E3] to-100% px-9 py-4 rounded-full mt-10 ${extraClass}`}
    >
      {name} {extraElement}
    </button>
  );
};

export default Button;

const SectionTitle = ({ title, heading, headingClass, titleClass }) => {
  return (
    <div>
      <h4
        className={`text-secondary font-heading font-medium uppercase mb-3 ${titleClass}`}
      >
        {title}
      </h4>
      <h1
        className={`text-primary font-bold font-heading text-2xl md:text-4xl mb-5 ${headingClass}`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;

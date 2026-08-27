const SectionTitle = ({
  title,
  paragraph,
  center,
  mb = "50px",
  eyebrow,
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  eyebrow?: string;
}) => {
  return (
    <div
      className={`wow fadeInUp max-w-[700px] w-full ${center ? "mx-auto text-center" : ""}`}
      data-wow-delay=".1s"
      style={{ marginBottom: mb }}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary dark:text-yellow uppercase bg-primary/10 dark:bg-yellow/10 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl lg:text-[40px] leading-tight">
        {title}
      </h2>
      {paragraph && (
        <p className="text-base text-body-color leading-relaxed md:text-lg">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

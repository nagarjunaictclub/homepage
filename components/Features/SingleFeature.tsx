import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp h-full rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
        data-wow-delay=".15s"
      >
        <div>
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 dark:bg-yellow/10 text-primary dark:text-yellow">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold tracking-tight text-black dark:text-white">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-body-color dark:text-gray-300">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;

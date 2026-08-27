import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full h-full">
      <div
        className="wow fadeInUp flex h-full flex-col justify-between rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
        data-wow-delay=".1s"
      >
        <div>
          <div className="mb-6 flex items-center space-x-1">{ratingIcons}</div>
          <p className="mb-8 text-base leading-relaxed text-body-color dark:text-gray-300 italic">
            “{content}”
          </p>
        </div>
        <div className="flex items-center pt-6 border-t border-gray-100 dark:border-white/5">
          <div className="relative mr-4 h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full border-2 border-primary/20 dark:border-yellow/20">
            <Image src={image} alt={name} fill sizes="50px" className="object-cover" />
          </div>
          <div className="w-full">
            <h5 className="text-base font-bold text-black dark:text-white">
              {name}
            </h5>
            <p className="text-xs font-medium text-body-color dark:text-gray-400">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;

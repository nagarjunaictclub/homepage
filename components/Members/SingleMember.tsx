import { Member } from "@/types/members";
import Image from "next/image";
import Link from "next/link";

const SingleMember = ({ member }: { member: Member }) => {
  const { id, title, name, image, socialLinks } = member;

  return (
    <div className="w-full h-full">
      <div
        className="wow fadeInUp group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-[#131943] shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
        data-wow-delay=".1s"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-white/5">
          {image ? (
            <Image
              src={image}
              width={600}
              height={600}
              alt={name || "member image"}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-gray-400 dark:text-gray-500">
              {name ? name.charAt(0) : "M"}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <h3 className="text-lg font-bold text-black dark:text-white">{name}</h3>
            <p className="text-xs font-medium text-primary dark:text-yellow mt-0.5">{title}</p>
          </div>

          <div className="mt-4 flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-white/5">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
              >
                <i className="ri-facebook-line"></i>
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
              >
                <i className="ri-instagram-line"></i>
              </a>
            )}
            {socialLinks.linkedIn && (
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
              >
                <i className="ri-linkedin-line"></i>
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
              >
                <i className="ri-github-line"></i>
              </a>
            )}
            {socialLinks?.portal !== "" && socialLinks?.portal && (
              <a
                href={socialLinks.portal}
                target="_blank"
                rel="noreferrer"
                aria-label="Personal Portfolio"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
              >
                <i className="ri-global-line"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;

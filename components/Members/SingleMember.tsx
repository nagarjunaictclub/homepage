import { Member } from "@/types/members";
import Image from "next/image";
import Link from "next/link";

const SingleMember = ({ member }: { member: Member }) => {
  const { id, title, name, image, socialLinks } = member;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative h-full overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Image
          src={image}
          width={600}
          height={300}
          alt="member image"
          className="w-100 aspect-square object-cover"
        />
        <div className="flex flex-col justify-between gap-3 px-3 py-4">
          <div className="flex justify-between gap-3">
            <h2 className="font-extrabold">{name}</h2>
            <p className="italic">{title}</p>
          </div>
          <div className="mt-2 flex justify-evenly">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                className="border border-body-color/[.15] p-2 text-xl"
                rel="noreferrer"
              >
                <i className="ri-facebook-line"></i>
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className=" border-body-color/[.15] border p-2 text-xl"
              >
                <i className="ri-instagram-line"></i>
              </a>
            )}
            {socialLinks.linkedIn && (
              <a
                href={socialLinks.linkedIn}
                className="border border-body-color/[.15] p-2 text-xl"
              >
                <i className="ri-linkedin-line"></i>
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                className="border border-body-color/[.15] p-2 text-xl"
              >
                <i className="ri-github-line"></i>
              </a>
            )}
            {socialLinks?.portal !== "" && (
              <a
                href={socialLinks.portal}
                target="_blank"
                className="border border-body-color/[.15] p-2 text-xl"
                rel="noreferrer"
              >
                <i className="ri-pages-line"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;

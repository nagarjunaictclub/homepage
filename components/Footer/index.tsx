import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/removed-bg-logo.png"
import lightlogo from "../../app/assets/logo.png"

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 border-t border-gray-100 dark:border-white/10 bg-gray-50/50 dark:bg-[#090E34] pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
            <div className="lg:col-span-5">
              <div className="mb-8 max-w-[360px]">
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src={lightlogo}
                    alt="Nagarjuna ICT Club Logo"
                    width={110}
                    className="dark:hidden object-contain"
                  />
                  <Image
                    src={logo}
                    alt="Nagarjuna ICT Club Logo"
                    width={110}
                    className="hidden dark:block object-contain"
                  />
                </Link>
                <p className="mb-6 text-sm text-body-color dark:text-gray-300 leading-relaxed">
                  Empowering innovation and connecting passionate technology minds across Nagarjuna College.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/nagarjuna.ict.club"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook Page"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
                  >
                    <i className="ri-facebook-line text-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/nagarjuna_ict_club"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
                  >
                    <i className="ri-instagram-line text-lg"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nagarjuna-ict-club"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary hover:text-white dark:hover:border-yellow dark:hover:bg-yellow dark:hover:text-black transition-all"
                  >
                    <i className="ri-linkedin-line text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-black dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm font-medium text-body-color hover:text-primary dark:text-gray-300 dark:hover:text-yellow transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-sm font-medium text-body-color hover:text-primary dark:text-gray-300 dark:hover:text-yellow transition-colors"
                  >
                    Events & Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="text-sm font-medium text-body-color hover:text-primary dark:text-gray-300 dark:hover:text-yellow transition-colors"
                  >
                    Club Executive Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="text-sm font-medium text-body-color hover:text-primary dark:text-gray-300 dark:hover:text-yellow transition-colors"
                  >
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="text-sm font-medium text-body-color hover:text-primary dark:text-gray-300 dark:hover:text-yellow transition-colors"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-black dark:text-white">
                Contact & Location
              </h3>
              <p className="text-sm text-body-color dark:text-gray-300 leading-relaxed mb-4">
                Nagarjuna College of IT, Shankhamul, Kathmandu, Nepal
              </p>
              <p className="text-sm text-body-color dark:text-gray-300 mb-2">
                Email: <a href="mailto:nagarjunaictclub@gmail.com" className="text-primary dark:text-yellow font-medium hover:underline">nagarjunaictclub@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-white/10 bg-white/50 dark:bg-black/20 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs font-medium text-body-color dark:text-gray-400">
              Copyright &copy; {new Date().getFullYear()} <a href="https://www.nagarjunaictclub.com/" className="text-black dark:text-white hover:text-primary dark:hover:text-yellow font-semibold">Nagarjuna ICT Club</a>. All rights reserved.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;

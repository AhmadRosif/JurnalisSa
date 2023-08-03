import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

const footerData = [
  {
    title: "Berita",
    items: [
      {
        title: "Nasional",
        linkStudy: "https://www.cnnindonesia.com/nasional/"
      },
      {
        title: "Internasional",
        linkStudy: "https://www.cnnindonesia.com/internasional/"
      },
      {
        title: "Olahraga",
        linkStudy: "https://www.cnnindonesia.com/olahraga/"
      },
      {
        title: "Teknologi",
        linkStudy: "https://www.cnnindonesia.com/teknologi/"
      }
    ],
  },
  {
    title: "Important Links",
    items: [
      {
        title: "Benefit",
        importantLink: "#benefit"
      },
      {
        title: "FeedBack",
        importantLink: "#feedback"
      },
      {
        title: "FAQ",
        importantLink: "#FAQ"
      },
      {
        title: "Roadmap",
        importantLink: "https://roadmap.sh"
      }
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "SMKSA",
        linkCompany: "https://ponpes-smksa.sch.id/"
      },
      {
        title: "BKK-SMKSA",
        linkCompany: "https://bkk.ponpes-smksa.sch.id/"
      },
      {
        title: "Get Aplikasi",
        linkCompany: "https://jurnalis-sa.vercel.app/"
      }
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="font-bold mr-2 text-6xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  MEDIA
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Untuk pertanyaan lebih lanjut, silahkan hubungi admin melalui

                <a
                  href="https://wa.me/6289508233507"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                  here.
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.facebook.com/106082929246018"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://instagram.com/media_smksa"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://github.com/sip-userbot"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Programming</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.linkStudy}
                        aria-label=""
                        target={"_blank"}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.importantLink}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.linkCompany}
                        aria-label=""
                        target={"_blank"}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023. MEDIA SA All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

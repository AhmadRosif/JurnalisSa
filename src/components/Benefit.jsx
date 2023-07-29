import { motion } from "framer-motion";

import react from "../assets/images/react.png";
import laravel from "../assets/images/laravel.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Benefit = () => (
  <section className="w-full md:h-screen  bg-customDarkBg2 mt-20 md:flex md:items-center md:justify-center" id="benefit">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={react}
                alt="f1"
                className="rounded-xl  custom-border-gray transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={laravel}
                alt="f2"
                className="rounded-xl  custom-border-gray transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Support dan bimbingan
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Benefit join Media Sa
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">Kita gak akan maju jika hanya belajar sendiri. Yuk, bergabung ke komunitas Media Sa kita dan mari diskusikan dan sharing tentang Media bersama-sama!"
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                  Solidaritas dan kebersamaan dalam belajar Reportase maupun Multimedia 
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                    Mendapatkan mentor yang akan membimbing kamu
                </span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>
                    Mendapatkan teman-teman baru yang memiliki minat yang sama
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "M.Yusuf",
    customerTitle: "Member Pmr SMKSA",
    content:
        "Untuk anak Media SMKSA Jadilah seperti reporter/kameramen selalu aman walaupun tidak ada penjagaan! #kameramenselaluselamat",
    image: testimonial1,
  },
  {
    customerName: "Vita Erviana",
    customerTitle: "Pradana Putri SMKSA",
    content:
        "Harapannya organisasi Media SA makin maju dan diminati, mengingat perkembangan teknologi yang semakin marak.",
    image: testimonial2,
  },
  {
    customerName: "Andika Prasetia",
    customerTitle: "Ketua Media SMKSA",
    content:
        "Bagi saya Media SA itu adalah keluarga saya dimana saya belajar dan diskusi bersama yang awalnya tidak bisa menjadi bisa, bagi kalian yang merasa takut tidak bisa apapun mengenai jurnalis tenang saja kok disini dibimbing oleh pembina tata cara meliput dll , jadii jangan takut mencoba",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          penyemangat dan harapan
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          people motivate Media SA
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4 transition duration-200 ease-in-out hover:scale-110"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt=""  className={'rounded-full bg-cover'} />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

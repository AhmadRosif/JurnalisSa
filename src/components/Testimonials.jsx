import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Ega Gofur",
    customerTitle: "Frontend Enginner",
    content:
        "Sebagai admin kopico saya sangat terkesan dengan komunitas coding ini. Teman-teman saya telah berkembang pesat dalam keterampilan pemrograman setelah bergabung dengan komunitas ini. Mereka mendapatkan bimbingan dari ahli, Bergabung dengan komunitas coding ini adalah langkah tepat bagi siapa saja yang ingin mengembangkan keterampilan pemrograman dan karir di bidang teknologi sesuai dengan dunia industri saat ini. Lebih dari 200+ siswa telah bergabung, Good Job Kopico!",
    image: testimonial1,
  },
  {
    customerName: "Henry Cahyo Nugroho",
    customerTitle: "Guru SMKN 1 Kepanjen",
    content:
        "Tidak bisa saya sangkal, komunitas coding ini sangat membantu dalam membimbing siswa-siswa saya yang ingin belajar pemrograman. Saya melihat peningkatan yang signifikan dalam keterampilan pemrograman mereka setelah bergabung dengan komunitas ini. Para ahli dan pengembang berpengalaman memberikan panduan yang sangat berharga bagi mereka, Saya merekomendasikan komunitas coding ini bagi siapa saja yang ingin memperdalam keterampilan pemrograman mereka.",
    image: testimonial2,
  },
  {
    customerName: "Tri Aldy Kurniawan",
    customerTitle: "Full Stack Developer",
    content:
        "Saya selalu mendorong teman saya untuk belajar keterampilan baru yang dapat meningkatkan peluang karir mereka. Komunitas coding ini telah membantu teman saya untuk mengembangkan keterampilan pemrograman dan mempersiapkan untuk magang di tempat industri yang mereka inginkan. Teman saya sangat menikmati lingkungan belajar yang terbuka dan kolaboratif di komunitas ini. KOPICO adalah tempat yang tepat untuk memulai perjalanan pemrograman Anda.",
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
          people motivate media sa
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

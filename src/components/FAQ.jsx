import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Apa keuntungan bergabung dengan kopico?",
    answer:
    "Bergabung dengan komunitas pingin coding dapat memberikan banyak keuntungan, seperti memperluas jaringan dan meningkatkan keterampilan Anda dalam pengembangan perangkat lunak. Anda akan bertemu dengan orang-orang yang memiliki minat yang sama dengan Anda, sehingga dapat belajar dari pengalaman dan pengetahuan mereka. Selain itu, komunitas pingin coding seringkali menyediakan bahan-bahan belajar, webinar, dan pelatihan yang dapat membantu meningkatkan keterampilan Anda secara gratis. ",
  },
  {
    question: "Apa saja kegiatan yang diadakan oleh kopico?",
    answer:
      "komunitas pingin coding biasanya mengadakan berbagai kegiatan seperti pertemuan berkala, diskusi kelompok, dan hackathon. Selain itu, kopico juga menyediakan bahan-bahan belajar, tutorial, dan sumber daya lain yang dapat membantu Anda meningkatkan keterampilan Anda dalam pengembangan perangkat lunak.",
  },
  {
    question: "Apakah ada persyaratan khusus untuk bergabung dengan kopico",
    answer:
      "Tidak ada persyaratan khusus untuk bergabung dengan komunitas pingin coding, selain tentu saja minat yang kuat dalam pengembangan perangkat lunak. Kopico terbuka untuk siapa saja, dari pemula hingga profesional yang ingin belajar dan berbagi pengalaman.",
  },
  {
    question: "Bagaimana cara bergabung dengan kopico",
    answer:
      "Untuk bergabung dengan komunitas pingin coding, Anda bisa mencari informasi di internet atau sosial media, seperti Instagram, dan GitHub. Ada banyak komunitas coding gratis yang tersedia di internet, jadi pastikan untuk memilih yang sesuai dengan minat dan kebutuhan Anda. Setelah bergabung, Anda dapat berpartisipasi dalam kegiatan dan berinteraksi dengan anggota komunitas lainnya.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Punya beberapa pertanyaan?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={index}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

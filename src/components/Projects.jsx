import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { motion } from "framer-motion";

import projectImg from "../assets/elegant edge.png";
import uiuxImg from "../assets/ui.png";
import oldSiteImg from "../assets/persnlweb.png";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-400">Projects</span>
      </h2>

      <div className="max-w-xl mx-auto">

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
        >

          {/* ================= PROJECT 1 ================= */}
          <SwiperSlide>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg backdrop-blur-xl"
            >

              <div className="h-64 flex items-center justify-center bg-black">
                <img src={projectImg} alt="E-commerce" className="max-h-full object-contain" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  E-Commerce Shopping Platform
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Full-stack application simulating real online shopping experience with authentication and cart system.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MongoDB", "Tailwind"].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>

          {/* ================= PROJECT 2 ================= */}
          <SwiperSlide>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg backdrop-blur-xl"
            >

              <div className="h-64 flex items-center justify-center bg-black">
                <img src={uiuxImg} alt="UI UX" className="max-h-full object-contain" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  UI/UX Design
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  UI/UX design projects focused on creating new website interfaces and redesigning existing websites as part of academic coursework.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Adobe XD"].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>

          {/* ================= PROJECT 3 ================= */}
          <SwiperSlide>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-lg backdrop-blur-xl"
            >

              <div className="h-64 flex items-center justify-center bg-black">
                <img src={oldSiteImg} alt="First Website" className="max-h-full object-contain" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  My First Personal Website
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Beginner project built using HTML, CSS, and Bootstrap during early learning stage.
                </p>

                <p className="text-gray-500 text-xs mt-2">
                  Learned layout structure, responsive design, and Bootstrap grid system.
                </p>

                {/* 🔥 IMPROVED BUTTON */}
                <a
                  href="https://fidhakadiekoyil.github.io/fidha-website/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-xs font-semibold 
                  bg-gradient-to-r from-blue-500/30 to-purple-500/30 
                  hover:from-blue-500/40 hover:to-purple-500/40 
                  text-white border border-white/20 rounded-lg 
                  shadow-md transition-all duration-300"
                >
                  🚀 View Live Demo
                </a>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["HTML", "CSS", "Bootstrap"].map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            >
              Success Stories
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              See how our students are <br />
              <span className="text-red-600 italic">crushing the markets</span>
            </motion.h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-slate-500 font-bold"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              4.9/5 Student Rating
            </motion.div>
            {/* Custom Navigation buttons */}
            <div className="flex gap-2">
              <button className="swiper-prev-btn p-3 rounded-full border border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-slate-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="swiper-next-btn p-3 rounded-full border border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all text-slate-400">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className="max-w-7xl mx-auto px-4 overflow-visible">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-next-btn',
            prevEl: '.swiper-prev-btn',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-16"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div 
                className="group h-full"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-slate-100 shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <video 
                    src={t.thumbnail} 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 cursor-pointer"
                    >
                      <Play className="text-white fill-white w-6 h-6 md:w-8 md:h-8 ml-1" />
                    </motion.div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-lg text-[10px] md:text-xs font-black mb-4 shadow-lg shadow-green-500/30">
                      <TrendingUp className="w-3 h-3" />
                      {t.profit} PROFIT
                    </div>
                    <h4 className="text-white text-xl md:text-2xl font-black mb-1">{t.name}</h4>
                    <p className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-widest mb-4">{t.role}</p>
                    <p className="text-white/80 text-xs md:text-sm line-clamp-2 italic leading-relaxed">"{t.quote}"</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

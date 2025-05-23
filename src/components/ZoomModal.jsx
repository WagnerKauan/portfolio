import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const ZoomModal = ({ images = [], alt, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card rounded-xl max-w-4xl w-full p-10 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-primary hover:text-violet-600 font-bold text-2xl cursor-pointer"
              aria-label="Close modal"
            >
              <X />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-lg custom-swiper"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`${alt} - slide ${index + 1}`}
                    className="w-full h-full max-h-[70vh] object-contain rounded-lg select-none"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

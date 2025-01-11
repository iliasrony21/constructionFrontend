import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonial1 from "../../../../assets/images/testimonial1.jpeg";
import testimonial2 from "../../../../assets/images/testimonial2.jpeg";
import testimonial3 from "../../../../assets/images/testimonial3.jpeg";
import testimonial4 from "../../../../assets/images/testimonial4.jpeg";
import testimonial5 from "../../../../assets/images/testimonial5.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Homeowner",
      testimonial:
        "The team was professional, efficient, and delivered an outstanding result. My house renovation exceeded my expectations!",
      image: testimonial1,
    },
    {
      id: 2,
      name: "Sarah Smith",
      position: "Business Owner",
      testimonial:
        "Their attention to detail and quality craftsmanship truly stood out. I highly recommend their services!",
      image: testimonial2,
    },
    {
      id: 3,
      name: "Michael Lee",
      position: "Architect",
      testimonial:
        "Working with them was a seamless experience. They are experts in their field and prioritize customer satisfaction.",
      image: testimonial3,
    },
    {
      id: 4,
      name: "Michael Trot",
      position: "Architect",
      testimonial:
        "Working with them was a seamless experience. They are experts in their field and prioritize customer satisfaction.",
      image: testimonial4,
    },
    {
      id: 5,
      name: "Michael Andrew",
      position: "Architect",
      testimonial:
        "Working with them was a seamless experience. They are experts in their field and prioritize customer satisfaction.",
      image: testimonial5,
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Testimonials
        </h2>
        <p className="text-center mb-8">What people are saying about us</p>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{ clickable: true }}
          loop={true}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className="bg-white relative shadow-lg rounded-lg text-center w-60 h-64 lg:w-60 lg:h-80 xl:w-64 xl:h-[320px] 2xl:w-80 2xl:h-[290px]"
                
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 mt-2"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-blue-500">{testimonial.position}</p>
                <p className="text-gray-600 mt-4 text-md">{testimonial.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
          {/* Pagination dots */}
          <div className="mt-14">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

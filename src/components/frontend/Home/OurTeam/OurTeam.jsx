import member1 from '../../../../assets/images/member1.jpeg';
import member2 from '../../../../assets/images/member2.jpeg';
import member3 from '../../../../assets/images/member3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Project Manager',
    image: member1,
    description: 'John ensures projects are completed on time and within budget.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Architect',
    image: member2,
    description: 'Jane is responsible for the design and planning of all projects.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Construction Supervisor',
    image: member3,
    description: 'Mike oversees the daily operations at construction sites.',
  },
  {
    id: 4,
    name: 'Mike Johnson',
    role: 'Construction Supervisor',
    image: member3,
    description: 'Mike oversees the daily operations at construction sites.',
  },
  {
    id: 5,
    name: 'Mike Johnson',
    role: 'Construction Supervisor',
    image: member3,
    description: 'Mike oversees the daily operations at construction sites.',
  },
  {
    id: 6,
    name: 'Mike Johnson',
    role: 'Construction Supervisor',
    image: member3,
    description: 'Mike oversees the daily operations at construction sites.',
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Team
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Let us see our dedicated Team.Everyone is special for their work.
        </p>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {teamMembers.map((team) => (
            <SwiperSlide key={team.id}>
              <div className="bg-white shadow-lg rounded-lg text-center w-64 h-60 mx-auto">
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mt-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 mt-4">
                  {team.name}
                </h3>
                <p className="text-sm text-blue-500">{team.role}</p>
                <p className="text-gray-600 mt-4 text-sm px-4">
                  {team.description}
                </p>
              </div>
            </SwiperSlide>
          ))}

            {/* Pagination dots */}
            <div className="mt-12">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;

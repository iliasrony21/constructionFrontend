
import residentialImg from "../../../../assets/images/residential.jpeg";
import commercialImg from "../../../../assets/images/commercial.jpeg";
import renovationImg from "../../../../assets/images/renovation.jpg";
import architectureImg from "../../../../assets/images/architecture.jpg";
import projectManagementImg from "../../../../assets/images/project-management.jpg";
import interiorDesignImg from "../../../../assets/images/interior-design.jpg";

const OurServiceHome = () => {
  const services = [
    {
      title: "Residential Construction",
      description:
        "Building your dream home with precision, quality, and care. We specialize in modern and traditional designs tailored to your needs.",
      image: residentialImg,
    },
    {
      title: "Commercial Construction",
      description:
        "Constructing state-of-the-art commercial spaces to help businesses thrive and grow in their industries.",
      image: commercialImg,
    },
    {
      title: "Renovation Services",
      description:
        "Transforming old spaces into modern, functional areas with our expert renovation and remodeling services.",
      image: renovationImg,
    },
    {
      title: "Architectural Design",
      description:
        "Creating innovative and sustainable designs for your construction projects with our team of architects.",
      image: architectureImg,
    },
    {
      title: "Project Management",
      description:
        "Efficient planning, coordination, and execution to deliver projects on time and within budget.",
      image: projectManagementImg,
    },
    {
      title: "Interior Design",
      description:
        "Designing stylish and functional interiors to enhance the beauty and usability of your spaces.",
      image: interiorDesignImg,
    },
  ];

  return (
<section className="bg-gray-100 pb-16 pt-8">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
      <p className="text-gray-600 mt-1">
        Discover our wide range of services designed to meet all your construction and renovation needs.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md hover:shadow-lg flex flex-col overflow-hidden transition">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <div className="mt-auto">
              <button className="primary-button w-full mt-2">View Service</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div>
    <button className="view-button flex justify-center mx-auto mt-4">View All Service</button>
  </div>
</section>

  
  );
};

export default OurServiceHome;

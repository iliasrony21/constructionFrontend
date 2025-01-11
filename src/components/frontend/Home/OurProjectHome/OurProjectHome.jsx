import { useState, useEffect } from "react";
import project1Img from "../../../../assets/images/project1.jpeg";
import project2Img from "../../../../assets/images/project2.jpeg";
import project3Img from "../../../../assets/images/project3.jpeg";
import project4Img from "../../../../assets/images/project4.jpeg";
import project5Img from "../../../../assets/images/project5.jpeg";
import { GrPrevious, GrNext } from "react-icons/gr";

const OurProjectHome = () => {
  const projects = [
    {
      title: "Modern Villa Construction",
      description: "A luxurious villa featuring state-of-the-art architecture and premium finishes.",
      image: project1Img,
    },
    {
      title: "Corporate Office Design",
      description: "An elegant and functional office space designed for productivity and collaboration.",
      image: project2Img,
    },
    {
      title: "Urban Apartment Renovation",
      description: "A complete transformation of a city apartment into a modern, stylish living space.",
      image: project3Img,
    },
    {
      title: "New Apartment Renovation",
      description: "A complete transformation of a city apartment into a modern, stylish living space.",
      image: project4Img,
    },
    {
      title: "Old Apartment Renovation",
      description: "A complete transformation of a city apartment into a modern, stylish living space.",
      image: project5Img,
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to 4 items per page
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Adjust itemsPerPage based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) { // Mobile screens (smaller than 640px)
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4); // Default to 4 items per page for larger screens
      }
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  // Get visible items based on startIndex
  const visibleProjects = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (startIndex + i) % projects.length;
    visibleProjects.push(projects[index]);
  }

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
          <p className="text-gray-600 mt-4">
            Explore some of our recent projects showcasing quality and innovation.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="flex gap-4 justify-center relative">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                className="w-full sm:w-1/4 bg-gray-100 rounded-lg shadow-md overflow-hidden relative"
                style={{ height: '320px' }} // Fixed height for all cards
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center"
            >
              <GrPrevious className="text-2xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white p-4 rounded-full shadow-md hover:bg-gray-700 flex items-center justify-center"
            >
              <GrNext className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjectHome;

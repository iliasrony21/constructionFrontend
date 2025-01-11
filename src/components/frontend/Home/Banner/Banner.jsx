import banner from "../../../../assets/images/aboutusbanner.webp";

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start max-w-6xl mx-auto px-4 md:px-8 py-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={banner}
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-primary text-lg font-semibold mb-2">About Us</p>
          <h5 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Empower Your Journey
          </h5>
          <p className="text-gray-600 text-lg mb-6">
            Explore endless possibilities with our innovative solutions.
            Whether you are starting a new project or enhancing an existing
            one, we are here to help. Our team is dedicated to delivering
            high-quality services tailored to meet your unique needs. We believe
            in building strong partnerships and providing support every step of
            the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;



const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Why Choose Us
        </h2>
        <p className="text-center mb-8">
            Discover our wide variety of projects.Created in close partnership with our clients and collaborators,this approach merges industry expertise.
            <br />decades of experience,innovation, and flexibility to consistently deliver excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20l9-5-9-5-9 5 9 5z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12l9-5-9-5-9 5 9 5z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Expertise</h3>
            <p className="text-gray-600 mt-2">
              Over 20 years of experience in delivering top-quality construction
              projects.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6h4v12h-4z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              High-Quality Standards
            </h3>
            <p className="text-gray-600 mt-2">
              We use the best materials and the latest technologies to ensure
              durability and excellence.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <div className="mb-4">
              <svg
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-600 mt-2">
              Your satisfaction is our priority. We deliver on time and within
              budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

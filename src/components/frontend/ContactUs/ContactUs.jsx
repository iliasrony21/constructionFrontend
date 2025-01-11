import HeaderBanner from "../../Common/HeaderBanner";

const ContactUs = () => {
  return (
    <div>
      <HeaderBanner
        headerText="Quality, Integrity, Value"
        headerName="Contact Us"
        text="We offer a diverse array of construction services, spanning residential and commercial projects."
      ></HeaderBanner>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions or need help? Feel free to reach out to us.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-4 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093645!2d144.953735315861!3d-37.81627944202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1619850626695!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

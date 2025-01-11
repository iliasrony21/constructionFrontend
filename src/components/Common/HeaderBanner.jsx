import aboutImage from "../../assets/images/aboutus.jpg";
const HeaderBanner = ({ headerText, headerName, text }) => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-52 object-cover" src={aboutImage} alt="" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-2 text-white px-16 py-4">
          <h5 className="secondary-color">{headerText}</h5>
          <h1 className="text-5xl font-extrabold">{headerName}</h1>
          <p className="text-md">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;

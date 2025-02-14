import { useEffect, useState } from "react";
import { baseUrl, token } from "../Common/BaseUrl";
import { NavLink } from "react-router-dom";

const Show = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchServices = async (page = 1) => {
    try {
      const res = await fetch(`${baseUrl}services/show?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token()}`,
        },
      });
      const result = await res.json();
      setServices(result.data.data); // The actual services array
      setCurrentPage(result.data.current_page);
      setTotalPages(result.data.last_page);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
// 14 start 
  useEffect(() => {
    fetchServices(currentPage);
  }, [currentPage]);

  return (
    <div className="flex">
      {/* Content area */}
      <div className="flex-grow ml-64 p-6">
        <div className="flex justify-between my-4">
          <h1 className="text-2xl my-2">Services</h1>
          <NavLink to={"/admin/services/create"} className="px-4 py-2 bg-blue-500 text-white rounded">
            Create
          </NavLink>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Service Name</th>
                <th scope="col" className="px-6 py-3">Slug</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.length > 0 ? (
                services.map((service) => (
                  <tr key={service.id} className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <td className="px-6 py-4">{service.id}</td>
                    <td className="px-6 py-4">{service.title}</td>
                    <td className="px-6 py-4">{service.slug}</td>
                    <td className="px-6 py-4">{service.status === 1 ? "Active" : "Inactive"}</td>
                    <td className="px-6 py-4">
                      {service.image ? (
                        <img src={`${baseUrl}uploads/services/small/${service.image}`} alt={service.title} className="w-16 h-16 object-cover" />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <NavLink className="font-medium bg-yellow-400 px-4 py-2 text-white rounded mr-2">Edit</NavLink>
                      <NavLink className="font-medium bg-red-600 px-4 py-2 text-white rounded">Delete</NavLink>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">No services found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            disabled={currentPage === 1}
            onClick={() => fetchServices(currentPage - 1)}
          >
            Previous
          </button>
          <span className="px-4 py-2">{currentPage} / {totalPages}</span>
          <button
            className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
            disabled={currentPage === totalPages}
            onClick={() => fetchServices(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Show;

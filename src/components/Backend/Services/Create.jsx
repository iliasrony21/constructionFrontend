import { useState, useRef, useMemo } from "react";
import { useForm } from "react-hook-form";
import { baseUrl, token } from "../Common/BaseUrl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Content",
    }),
    [placeholder]
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const newData = { ...data, "content": content, "imageId": imageId };
    const res = await fetch(baseUrl + "service/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();
    console.log(result);
    if (result.status === true) {
      // Correctly check the API response
      toast.success(result.message); // Show success message
      navigate("/admin/services"); // Correct navigation
    } else {
      toast.error(result.message || "Something went wrong!");
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setValue("image", file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("image", file);
    await fetch(baseUrl + "all-image/store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === false) {
          if (result.message) {
            toast.error(result.message); // General error message
          } else if (result.errors && result.errors.image) {
            toast.error(result.errors.image[0]); // Specific image error
          } else {
            toast.error("An unknown error occurred.");
          }
        } else {
          setImageId(result.data.id);
        }
      });
  };

  return (
    <div className="w-[60%] mx-auto flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6">Create Service</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Short Description</label>
            <input
              type="text"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Content</label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Status</label>
            <select
              {...register("status")}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {imagePreview && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Image Preview</h3>
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-full max-w-xs object-cover rounded-md"
              />
            </div>
          )}

          <button
            disabled={isDisable}
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

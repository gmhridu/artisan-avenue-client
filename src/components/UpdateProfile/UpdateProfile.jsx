import React, { useContext, useState } from "react";
import { AuthContext } from "../../utils/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData.name, formData.image)
      .then(() => {
        if (formData.image) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Failed to update profile:", error);
      });
  };

  return (
    <div>
      <section className="lg:min-h-[600px] h-auto flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid md:grid-cols-3 grid-cols-1  gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div
              className="space-y-2 flex flex-col items-center justify-center
          md:items-start col-span-full lg:col-span-1"
            >
              <p className="font-medium text-left">Profile</p>
              <p className="text-xs text-left">Update Your Profile!</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="photo" className="block text-gray-600">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Photo URL"
                  className="input input-bordered w-full max-w-xs"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="block btn btn-primary w-full p-3 text-center rounded-lg text-gray-50 bg-navColor 
          hover:bg-teal-700 font-bold"
          >
            Update Profile
          </button>
        </form>
      </section>
    </div>
  );
};

export default UpdateProfile;

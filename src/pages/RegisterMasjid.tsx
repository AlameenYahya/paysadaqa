import React, { useState } from "react";

const RegisterMasjid = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    logo: null as File | null,
  });

  const [previewImage, setPreviewImage] = useState<string | null>(null); // State for image preview
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "logo" && files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, logo: file }));

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    if (formData.logo) formDataToSend.append("logo", formData.logo);

    try {
      const response = await fetch("http://localhost:5000/api/masjids/register", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (response.ok) {
        const result = await response.json();
        setMessage(
          `Registration successful! Account Number: ${result.virtualAccount.accountNumber}, Bank: ${result.virtualAccount.bankName}`
        );
      }
       {
        setMessage(result.message || "Error submitting form.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("An error occurred while submitting the form.")
      }
      
    }
    
    };
    const handleCancel = () => {
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        logo: null,
      });
      setPreviewImage(null);
      setMessage("");
    };
    


  return (
    <section className="bg-tertiary py-10">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-primary">Register Your Masjid</h2>
        {message && <p className="text-center mb-4 text-red">{message}</p>}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Masjid Name */}
          <input
            type="text"
            name="name"
            placeholder="Masjid Name"
            required
            className="w-full p-3 border rounded-md mb-4 border-primary"
            onChange={handleChange}
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            className="w-full p-3 border rounded-md mb-4 border-primary"
            onChange={handleChange}
          />

          {/* Phone and Email */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded-md border-primary"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded-md border-primary"
              onChange={handleChange}
            />
          </div>

         

          {/* Image Upload with Preview */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-primary">Upload Masjid Logo</label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-center border-primary"
            />
            {previewImage && (
              <div className="mt-4 flex justify-center">
                <img
                  src={previewImage}
                  alt="Logo Preview"
                  className="w-32 h-32 rounded-full object-center border-2 border-primary"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-40 ml-5 bg-primary text-tertiary p-3 rounded-md  hover:bg-tertiary hover:text-primary font-semibold transition duration-300 text-center"
          >
            Register Masjid
          </button>
          <button
  type="button"
  onClick={handleCancel}
  className="w-40 ml-20 bg-red text-tertiary p-3 rounded-md hover:bg-red transition duration-300 font-semibold text-center"
>
  Cancel
</button>

        </form>
      </div>
    </section>
  );
};

export default RegisterMasjid;

import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setMessage("Login successful! Redirecting...");
    }, 2000);
  };

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="container max-w-md mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-8">
          Login to Your Account
        </h1>

        {/* Success/Error Message */}
        {message && (
          <div
            className={`p-4 mb-6 text-center rounded-lg ${
              message.includes("successful") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-nursery mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-nursery mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 rounded-lg shadow-md transition duration-300 ${
                loading
                  ? "bg-gray-400 text-nursery cursor-not-allowed"
                  : "bg-[#F8D666] text-white hover:bg-transparent hover:text-[#F8D666] border border-[#F8D666]"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <p className="text-nursery">
            Don't have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Register Here
            </a>
          </p>
          <p className="text-nursery mt-2">
            Forgot your password?{" "}
            <a href="/reset-password" className="text-blue-600 hover:underline">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

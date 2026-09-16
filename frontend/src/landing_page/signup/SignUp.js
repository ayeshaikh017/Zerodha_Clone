import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    // Frontend password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

    if (!passwordPattern.test(formData.password)) {
      setMessage(
        "Password must be at least 6 characters and include uppercase, lowercase, and a special character."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
       "https://zerodha-clone-1-82hd.onrender.com/signup",
        formData,
        { withCredentials: true }
        );
      setMessage(response.data.message || "Signup successful!");

      if (response.data.success) {
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Signup failed. Check that your backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <p>Sign up to get started.</p>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}"
          title="At least 6 characters, including uppercase, lowercase, and a special character"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        {message && <p className="signup-message">{message}</p>}
      </form>
    </div>
  );
}

export default SignUp;
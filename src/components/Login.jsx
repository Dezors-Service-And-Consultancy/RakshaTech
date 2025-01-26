import React, { useState } from 'react';
import { registerUser } from '../api'; 

export default function Login() {
  const [formData, setFormData] = useState({
    fullname: '',
    college: '',
    email: '',
    category: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = 'Name is required';
    if (!formData.college) newErrors.college = 'College is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        setIsSubmitting(true);
        const response = await registerUser(formData);
        console.log('User registered:', response);
        // Handle successful registration, maybe redirect or show a success message
        setRegistrationStatus({
          success: true,
          message: 'Registration successful! Please log in.',
        });
      } catch (err) {
        setIsSubmitting(false);
        setErrors({ form: err.message || 'Something went wrong!' });
        setRegistrationStatus({
          success: false,
          message: 'Something went wrong. Please try again.',
        });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="logincontainer space-y-6">
      <h1 className="text-xl text-white font-semibold leading-tight tracking-tight md:text-2xl dark:text-white">
        Register Here
      </h1>
      <div className="glassmorphism flex flex-row items-center justify-center">
        <div className="w-full rounded-lg">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-3 md:space-y-5" onSubmit={handleSubmit}>
              {errors.form && <p className="text-red-500">{errors.form}</p>}
              <div>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="text-sm rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Full Name"
                />
                {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="college"
                  id="college"
                  value={formData.college}
                  onChange={handleChange}
                  className="text-sm rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="College"
                />
                {errors.college && <p className="text-red-500">{errors.college}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-sm rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="text-sm rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                  placeholder="Category"
                />
                {errors.category && <p className="text-red-500">{errors.category}</p>}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="text-sm rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Create an Account'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

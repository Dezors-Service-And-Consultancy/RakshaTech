import React, { useState } from 'react';

import '../Registration.css'
export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        email: '',
        category: '',
        password: '',
        confirmPassword: '',
        terms: false,
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.college) newErrors.college = 'College is required';
if (!formData.email) newErrors.email = 'Email is required';
if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) newErrors.email = 'Email is invalid';

        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions';
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
          // Handle successful form submission
          console.log('Form submitted:', formData);
        } else {
          setErrors(validationErrors);
        }
      };
    
    return (
         
        <section className="logincontainer space-y-6">
        <h1 className="text-xl text-white font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
            Register Here
        </h1>
        <div className="glassmorphism flex flex-row items-center justify-center">
          
          <div className="w-full rounded-lg">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-3 md:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="text-sm rounded-lg  block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white " placeholder="Name" required />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input type="text" name="college" id="college" value={formData.college} onChange={handleChange} className="text-sm rounded-lg  block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white " placeholder="College" required />
                  {errors.college && <p className="text-red-500">{errors.college}</p>}
                </div>
                <div>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="text-sm rounded-lg  block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white " placeholder="Email" required />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <input type="text" name="category" id="category" value={formData.category} onChange={handleChange} className="text-sm rounded-lg  block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white" placeholder="Category" required />
                  {errors.category && <p className="text-red-500">{errors.category}</p>}
                </div>
                <div>
                  <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Password" className="text-sm rounded-lg block w-full p-2.5 bg-field border-gray-600 placeholder-gray-400 text-white " required />
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} className="w-4 h-4 border  rounded  bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required />
                 </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                    {errors.terms && <p className="text-red-500">{errors.terms}</p>}
                  </div>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

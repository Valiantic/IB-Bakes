import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.subject && formData.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isFormValid()) {
      Swal.fire({
        title: 'Thank you for inquiring \nMessage Sent!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f43f5e',
        customClass: {
          container: 'sweet-alert-container',
          popup: 'sweet-alert-popup',
          title: 'sweet-alert-title',
          htmlContainer: 'sweet-alert-content',
          confirmButton: 'sweet-alert-confirm'
        }
      }).then(() => {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration in milliseconds
      offset: 200,    // distance the element must be scrolled before it animates
    });
  }, []);

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-[Poppins]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-rose-500 mb-2" data-aos="fade-up">Get in Touch</h2>
            <p className="text-lg text-gray-600">We'd love to hear from you!</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-600 py-2 px-2 transition-colors"
                  placeholder="Your name"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-2 -top-5 text-sm text-gray-600 cursor-text transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-600"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-600 py-2 px-2 transition-colors"
                  placeholder="Email address"
                  required
                />
                <label 
                  htmlFor="email"
                  className="absolute left-2 -top-5 text-sm text-gray-600 cursor-text transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-600"
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-600 py-2 px-2 transition-colors"
                  placeholder="Subject"
                  required
                />
                <label 
                  htmlFor="subject"
                  className="absolute left-2 -top-5 text-sm text-gray-600 cursor-text transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-600"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="peer w-full border-2 border-gray-300 rounded-lg text-gray-900 placeholder-transparent focus:outline-none focus:border-pink-600 py-2 px-2 transition-colors resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-2 -top-5 text-sm text-gray-600 cursor-text transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2
                  peer-focus:-top-5 peer-focus:text-sm peer-focus:text-pink-600"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full py-3 px-6 text-white rounded-lg transition-colors font-medium text-lg
                  ${isFormValid() 
                    ? 'bg-pink-600 hover:bg-pink-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts

"use client"
import React from 'react';
import { BookOpen, Users, Star, Phone, MapPin, Mail, Play, ChevronLeft, ChevronRight, Sparkles, Target, Clock } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isHovered, setIsHovered] = useState(-1);

  const features = [
    { icon: BookOpen, title: "Expert Teachers", description: "Learn from the best in the field" },
    { icon: Users, title: "Small Batches", description: "Personalized attention guaranteed" },
    { icon: Target, title: "Focused Approach", description: "Structured learning path" },
    { icon: Clock, title: "Flexible Timing", description: "Classes that fit your schedule" }
  ];

  const teachers = [
    {
      name: "Dr. Sarah Williams",
      role: "Mathematics Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
      description: "Ph.D. in Mathematics with 10+ years of teaching experience"
    },
    {
      name: "Prof. James Chen",
      role: "Physics Specialist",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300",
      description: "Former NASA researcher with a passion for teaching"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chemistry Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300",
      description: "Industry veteran with practical research experience"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      text: "The coaching center transformed my learning experience. The personalized attention helped me excel in my studies.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Michael Chen",
      role: "Parent",
      text: "My daughter's confidence has grown tremendously since joining. The mentors here are exceptional!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Emily Davis",
      role: "Student",
      text: "The innovative teaching methods and supportive environment make learning enjoyable and effective.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const videoReviews = [
    { id: "1", thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" },
    { id: "2", thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" },
    { id: "3", thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center hero-pattern bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
  {/* Background Blobs */}
  <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>
  <div className="absolute top-1/4 right-10 w-80 h-80 bg-indigo-300 opacity-30 blur-3xl rounded-full animate-pulse"></div>

  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
  <div className="container mx-auto px-6 text-center relative">
    <div className="float-animation">
      <Sparkles className="w-12 h-12 mx-auto mb-6 text-indigo-600" />
    </div>
    <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-indigo-600">
      Unlock Your Potential
    </h1>
    <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
      Expert guidance, personalized attention, and proven results to help you achieve your academic goals.
    </p>
    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-indigo-200">
      Start Learning Today
    </button>
  </div>
</section>


      {/* Features Grid */}
      <section className="py-20 bg-gray section-pattern text-indigo-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <feature.icon className={`w-10 h-10 ${isHovered === index ? 'text-purple-600' : 'text-indigo-600'} transition-colors duration-300`} />
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50" id="about">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
                alt="Students learning"
                className="rounded-2xl shadow-xl  hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 gradient-text text-indigo-600">About Us</h2>
              <p className="text-gray-700 mb-6 text-lg">
                With over 10 years of experience in education, we've helped thousands of students achieve their dreams. Our innovative teaching methods and dedicated mentors ensure that every student receives the attention they deserve.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <BookOpen className="text-indigo-600 w-6 h-6" />
                  <span className="font-medium text-indigo-600">Expert Teachers</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Users className="text-purple-600 w-6 h-6" />
                  <span className="font-medium text-indigo-600">Small Batches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 bg-white section-pattern">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12 text-indigo-600">Meet Our Expert Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{teacher.name}</h3>
                    <p className="text-sm text-indigo-200">{teacher.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{teacher.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-pattern" id="testimonials">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12 text-indigo-600">What Our Students Say</h2>
          <div className="relative">
            <div className="flex items-center justify-center">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-indigo-600" />
              </button>
              <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-2xl shadow-xl">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover ring-4 ring-purple-100"
                />
                <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
                <h4 className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-purple-600">{testimonials[currentTestimonial].role}</p>
              </div>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow hover:scale-110 transform duration-300"
              >
                <ChevronRight className="w-6 h-6 text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50" id="videos">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12 text-indigo-600">Video Reviews</h2>
          <div className="relative">
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={() => setCurrentVideo((prev) => (prev === 0 ? videoReviews.length - 1 : prev - 1))}
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-indigo-600" />
              </button>
              <div className="relative group">
                <img 
                  src={videoReviews[currentVideo].thumbnail}
                  alt={`Video review ${currentVideo + 1}`}
                  className="rounded-xl shadow-xl w-[600px] h-[337px] object-cover transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-5 rounded-full shadow-lg group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 transform group-hover:scale-110">
                    <Play className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setCurrentVideo((prev) => (prev === videoReviews.length - 1 ? 0 : prev + 1))}
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 section-pattern" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12 text-indigo-600">Get in Touch</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium text-indigo-600">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-200 text-indigo-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium text-indigo-600">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 text-indigo-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium text-indigo-600">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 text-indigo-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 text-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Excellence Academy</h3>
              <p className="text-gray-400">
                Empowering students to achieve their dreams through quality education and personalized guidance.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <MapPin className="w-5 h-5 text-indigo-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <span className="group-hover:text-purple-400 transition-colors duration-300">123 Learning Street, Education City, 12345</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-indigo-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <span className="group-hover:text-purple-400 transition-colors duration-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-indigo-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <span className="group-hover:text-purple-400 transition-colors duration-300">info@excellenceacademy.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">Opening Hours</h4>
              <div className="space-y-2">
                <p className="hover:text-purple-400 transition-colors duration-300">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="hover:text-purple-400 transition-colors duration-300">Saturday: 9:00 AM - 5:00 PM</p>
                <p className="hover:text-purple-400 transition-colors duration-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
            <p>© 2024 Excellence Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
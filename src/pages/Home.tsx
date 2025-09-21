import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon,
  ServerIcon,
  CodeBracketIcon,
  ChartBarIcon,
  StarIcon,
  CheckCircleIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import heroBg from '../assets/hero-bg.svg';
import cybersecurityImage from '../assets/Cybersecurity & Compliance Design.png';
import techImage1 from '../assets/ChatGPT Image Aug 23, 2025, 02_54_12 PM.png';
import techImage2 from '../assets/ChatGPT Image Aug 23, 2025, 02_57_13 PM.png';
import techImage3 from '../assets/ChatGPT Image Aug 23, 2025, 02_58_33 PM.png';
import techImage4 from '../assets/ChatGPT Image Aug 23, 2025, 03_15_40 PM.png';

const Home: React.FC = () => {
  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity & Compliance',
      description: 'Identity & Access Management, Zero Trust Architecture, Threat Detection & Response',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: CloudIcon,
      title: 'Cloud & Infrastructure',
      description: 'Cloud Migration, Microsoft 365, Backup & Disaster Recovery',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'IT Modernization & Endpoint Management',
      description: 'Device Lifecycle Management, MDM, Patch Management',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: ServerIcon,
      title: 'Directory & Platform Services',
      description: 'Active Directory, SCCM & Intune, Microsoft 365 Administration',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: CodeBracketIcon,
      title: 'Application & Software Development',
      description: 'Mobile Apps, PWAs, Desktop Apps, AI Chatbots',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: ChartBarIcon,
      title: 'IT Strategy & Consulting',
      description: 'Digital Roadmapping, Process Optimization, Web Design',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const trustSignals = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'AWS', logo: 'AWS' },
    { name: 'Google Workspace', logo: 'GW' },
    { name: 'NIST', logo: 'NIST' },
    { name: 'FISMA', logo: 'FISMA' },
    { name: 'SOX', logo: 'SOX' }
  ];

  const testimonials = [
    {
      quote: "Cybtex Solutions transformed our outdated infrastructure into a secure, cloud-based system in record time. Their expertise in compliance saved us months of work.",
      author: "CIO",
      company: "Financial Services Firm",
      rating: 5
    },
    {
      quote: "The team at Cybtex delivered exceptional results. Our cybersecurity posture has never been stronger, and the implementation was seamless.",
      author: "CTO",
      company: "Healthcare Organization",
      rating: 5
    }
  ];

  const whyChooseUs = [
    { title: 'Highly Experienced Senior Staff', description: 'Decades of experience in enterprise IT and cybersecurity' },
    { title: 'Flexible Engagement', description: 'Custom solutions tailored to your specific needs' },
    { title: 'Certified Experts', description: 'Team of certified professionals across all major platforms' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Cybersecurity Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Background text overlay */}
          <div className="absolute top-20 right-20 text-white/20 text-8xl font-bold rotate-12">
            SECURE
          </div>
          <div className="absolute bottom-20 right-32 text-white/20 text-6xl font-bold -rotate-12">
            MODERN
          </div>
        </div>
        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Secure. Modern. Efficient.
                <span className="block text-primary-200">Your Trusted Partner in IT & Cybersecurity.</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Cybtex Solutions delivers enterprise-grade IT modernization, robust cybersecurity, and strategic consulting to keep your business secure, agile, and future-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  Request a Free Consultation
                </Link>
                <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  <PlayIcon className="w-5 h-5 mr-2 inline" />
                  Watch About Cybtex
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">20+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Projects Delivered</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About & Trust Signals */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Trusted by Leading Organizations
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Our leadership has over 20+ years of industry experience. Cybtex Solutions empowers organizations in government, finance, healthcare, and beyond to modernize infrastructure, safeguard data, and maximize operational efficiency delivering every project on time and within budget.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {trustSignals.map((signal) => (
                  <div key={signal.name} className="bg-secondary-50 rounded-lg p-4 text-center">
                    <div className="font-semibold text-secondary-800">{signal.logo}</div>
                    <div className="text-sm text-secondary-600">{signal.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={cybersecurityImage} 
                alt="Cybersecurity & Compliance" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>
              
              {/* Top overlay text */}
              <div className="absolute top-6 left-6 text-white">
                <div className="bg-primary-600/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-semibold">🔒 Enterprise Security</p>
                </div>
              </div>
              
              {/* Center overlay text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="bg-black/60 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <h3 className="text-2xl font-bold mb-2">Why Choose Cybtex?</h3>
                  <p className="text-primary-200 text-sm mb-4">Trusted Cybersecurity Partner</p>
                </div>
              </div>
              
              {/* Bottom content */}
              <div className="absolute bottom-6 left-6 text-white">
                <div className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-primary-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-primary-100 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Core Services
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to secure, modernize, and optimize your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={[techImage1, techImage2, techImage3, techImage4][index % 4]} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Image overlay with service title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-bold">{service.title}</h4>
                    <div className="text-xs text-primary-200 opacity-90">Learn More →</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-primary-600 font-medium hover:text-primary-700">
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={techImage1} 
            alt="Background Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Trusted by organizations across industries for our proven track record of success
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-secondary-50 rounded-xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-secondary-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                    <div className="text-secondary-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Secure & Modernize Your IT?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get your free consultation and discover how Cybtex Solutions can transform your business infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Book Your Free Consultation
            </Link>
            <button className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              Download 2025 Cybersecurity Readiness Checklist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

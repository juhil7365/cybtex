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
    { title: '20+ Years Expertise', description: 'Decades of experience in enterprise IT and cybersecurity' },
    { title: 'Proven Success', description: 'Track record with government and enterprise clients' },
    { title: 'Flexible Engagement', description: 'Custom solutions tailored to your specific needs' },
    { title: 'Certified Experts', description: 'Team of certified professionals across all major platforms' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Cybersecurity Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
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
                With over 20 years of experience, Cybtex Solutions empowers organizations in government, finance, healthcare, and beyond to modernize infrastructure, safeguard data, and maximize operational efficiency delivering every project on time and within budget.
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
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Why Choose Cybtex?</h3>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900">{item.title}</h4>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                  </div>
                ))}
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
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

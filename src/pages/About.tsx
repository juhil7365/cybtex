import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      experience: '25+ years in IT & Cybersecurity',
      expertise: ['Enterprise Architecture', 'Cybersecurity Strategy', 'Cloud Migration'],
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      experience: '20+ years in Technology Leadership',
      expertise: ['Cloud Infrastructure', 'DevOps', 'Digital Transformation'],
      image: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Security',
      experience: '18+ years in Cybersecurity',
      expertise: ['Threat Detection', 'Compliance', 'Incident Response'],
      image: '👨‍🔒'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Development',
      experience: '15+ years in Software Development',
      expertise: ['Mobile Development', 'PWA', 'AI/ML Integration'],
      image: '👩‍💻'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality solutions.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex challenges.',
      icon: '🚀'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity and ethical business practices.',
      icon: '🤝'
    },
    {
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients, working collaboratively to achieve success.',
      icon: '🤲'
    }
  ];

  const certifications = [
    { name: 'Microsoft Gold Partner', description: 'Cloud Platform & Security' },
    { name: 'AWS Advanced Consulting Partner', description: 'Cloud Solutions' },
    { name: 'Google Cloud Partner', description: 'Infrastructure & Security' },
    { name: 'NIST Cybersecurity Framework', description: 'Certified Implementation' },
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'SOC 2 Type II', description: 'Security & Availability' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About Cybtex Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8 leading-relaxed"
            >
              For over 20 years, we've been the trusted partner for organizations seeking to secure, 
              modernize, and optimize their IT infrastructure. Our mission is to deliver innovative 
              technology solutions that drive business success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding" id="overview">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 2003, Cybtex Solutions began with a simple mission: to help organizations 
                navigate the complex world of IT and cybersecurity. What started as a small consulting 
                firm has grown into a comprehensive technology partner serving clients across government, 
                healthcare, finance, and beyond.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Today, we're proud to have delivered over 500 successful projects, maintained a 99% 
                client satisfaction rate, and built lasting partnerships with organizations of all sizes. 
                Our team of certified experts brings decades of combined experience in enterprise IT, 
                cybersecurity, and digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">20+</div>
                  <div className="text-secondary-900 font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-secondary-900 font-semibold">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Our Mission</h3>
              <p className="text-secondary-700 mb-6">
                To empower organizations with secure, modern, and efficient technology solutions that 
                drive growth, enhance security, and enable digital transformation.
              </p>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Our Vision</h3>
              <p className="text-secondary-700">
                To be the most trusted technology partner for organizations seeking to secure their 
                future through innovative IT solutions and strategic digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" id="team">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead our organization and drive our success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-secondary-600 text-sm mb-4">{member.experience}</p>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="text-sm text-secondary-700">
                      • {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-secondary-50" id="partners">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our certifications and strategic partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <StarIcon className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="font-semibold text-secondary-900">{cert.name}</h3>
                </div>
                <p className="text-secondary-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="section-padding" id="careers">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                We're always looking for talented professionals who share our passion for technology 
                and commitment to excellence. Join our team and be part of delivering innovative 
                solutions that make a difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                  <span className="text-secondary-700">Competitive compensation and benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                  <span className="text-secondary-700">Professional development opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                  <span className="text-secondary-700">Flexible work arrangements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary-600" />
                  <span className="text-secondary-700">Collaborative and innovative culture</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">Current Openings</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900">Senior Cybersecurity Engineer</h4>
                  <p className="text-secondary-600 text-sm">Full-time • Remote/Hybrid</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900">Cloud Solutions Architect</h4>
                  <p className="text-secondary-600 text-sm">Full-time • Remote/Hybrid</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900">Full Stack Developer</h4>
                  <p className="text-secondary-600 text-sm">Full-time • Remote/Hybrid</p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center btn-primary mt-6"
              >
                Apply Now
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experienced team can help transform your organization's technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Get Started Today
            </Link>
            <Link to="/work" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

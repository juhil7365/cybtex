import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Work: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Federal Agency Cloud Migration',
      industry: 'Government',
      description: 'Successfully migrated a federal agency from legacy on-premises infrastructure to a secure Azure cloud environment.',
      challenge: 'A federal agency needed to modernize their aging infrastructure while maintaining strict FISMA compliance requirements.',
      solution: 'Implemented a hybrid cloud architecture with Azure Government, established zero-trust security framework, and automated compliance reporting.',
      results: [
        '40% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'FISMA compliance maintained',
        '50% faster deployment times'
      ],
      technologies: ['Azure Government', 'Azure AD', 'Azure Security Center', 'Power BI'],
      image: '🏛️'
    },
    {
      id: 2,
      title: 'Financial Services Security Overhaul',
      industry: 'Financial Services',
      description: 'Comprehensive cybersecurity transformation for a regional bank, implementing advanced threat detection and SOX compliance.',
      challenge: 'A regional bank needed to enhance their security posture and achieve SOX compliance while maintaining operational efficiency.',
      solution: 'Deployed advanced threat detection systems, implemented privileged access management, and established automated compliance monitoring.',
      results: [
        'Zero security incidents in 18 months',
        'SOX compliance achieved',
        '60% reduction in security alerts',
        '24/7 threat monitoring established'
      ],
      technologies: ['Microsoft Defender', 'Azure Sentinel', 'Privileged Identity Management', 'Power Automate'],
      image: '🏦'
    },
    {
      id: 3,
      title: 'Healthcare System Modernization',
      industry: 'Healthcare',
      description: 'Complete IT modernization for a healthcare network, including HIPAA-compliant patient portal and clinical workflow optimization.',
      challenge: 'A healthcare network needed to modernize their IT infrastructure while ensuring HIPAA compliance and improving patient care.',
      solution: 'Implemented Microsoft 365 for healthcare, developed secure patient portal, and optimized clinical workflows with Power Platform.',
      results: [
        'HIPAA compliance maintained',
        '30% improvement in patient satisfaction',
        'Streamlined clinical workflows',
        'Enhanced data security'
      ],
      technologies: ['Microsoft 365', 'Power Platform', 'Azure Health Bot', 'Teams for Healthcare'],
      image: '🏥'
    }
  ];

  const featuredProjects = [
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application for field service management',
      technologies: ['React Native', 'Azure Mobile Apps', 'Power BI'],
      image: '📱'
    },
    {
      title: 'Progressive Web App',
      description: 'PWA for real-time collaboration and document management',
      technologies: ['React.js', 'Service Workers', 'Azure Functions'],
      image: '🌐'
    },
    {
      title: 'AI Chatbot Implementation',
      description: 'Intelligent chatbot for customer service automation',
      technologies: ['Azure Bot Service', 'LUIS', 'Power Virtual Agents'],
      image: '🤖'
    },
    {
      title: 'Cloud Migration',
      description: 'Large-scale migration to Microsoft Azure',
      technologies: ['Azure Migrate', 'Azure Site Recovery', 'Azure Backup'],
      image: '☁️'
    }
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
              Our Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8 leading-relaxed"
            >
              Discover how we've helped organizations across industries transform their IT infrastructure, 
              enhance security, and drive business success through innovative technology solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Real-world examples of how we've delivered measurable results for our clients.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-secondary-200"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{study.image}</span>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {study.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Challenge</h4>
                        <p className="text-secondary-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Solution</h4>
                        <p className="text-secondary-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <StarIcon className="w-4 h-4 text-green-600 fill-current" />
                              <span className="text-secondary-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-6">{study.image}</div>
                      <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                        {study.title}
                      </h4>
                      <Link
                        to="/contact"
                        className="inline-flex items-center btn-primary"
                      >
                        Learn More
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Application Development Highlights
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Showcasing our expertise in modern application development and cloud implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                >
                  View Details
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-900 font-semibold">Projects Delivered</div>
              <div className="text-secondary-600 text-sm">Across all industries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-secondary-900 font-semibold">Client Satisfaction</div>
              <div className="text-secondary-600 text-sm">Based on feedback</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-secondary-900 font-semibold">Years Experience</div>
              <div className="text-secondary-600 text-sm">In IT solutions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-secondary-900 font-semibold">Support Available</div>
              <div className="text-secondary-600 text-sm">For all clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Start Your Project
            </Link>
            <Link to="/services" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;

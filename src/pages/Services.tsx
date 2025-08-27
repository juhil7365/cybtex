import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon,
  ServerIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      id: 'cybersecurity',
      icon: ShieldCheckIcon,
      title: 'Cybersecurity & Compliance',
      subtitle: 'Protect your business with enterprise-grade security solutions',
      description: 'Comprehensive cybersecurity services designed to safeguard your digital assets and ensure regulatory compliance.',
      features: [
        'Identity & Access Management (IAM & PAM)',
        'Zero Trust Architecture Implementation',
        'Threat Detection & Response Systems',
        'Regulatory Compliance (NIST, FISMA, SOX)',
        'Security Audits & Penetration Testing',
        'Incident Response Planning'
      ],
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced risk exposure',
        '24/7 threat monitoring'
      ],
      color: 'bg-red-50 text-red-600 border-red-200'
    },
    {
      id: 'cloud',
      icon: CloudIcon,
      title: 'Cloud & Infrastructure',
      subtitle: 'Modernize your infrastructure with cloud-first solutions',
      description: 'Transform your IT infrastructure with scalable cloud solutions and robust disaster recovery systems.',
      features: [
        'Cloud Migration (Azure, AWS)',
        'Microsoft 365 & Google Workspace',
        'Backup & Disaster Recovery',
        'Secure Remote Access Solutions',
        'Hybrid Cloud Architecture',
        'Cloud Cost Optimization'
      ],
      benefits: [
        'Scalable infrastructure',
        'Reduced operational costs',
        'Enhanced collaboration',
        'Business continuity'
      ],
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'modernization',
      icon: DevicePhoneMobileIcon,
      title: 'IT Modernization & Endpoint Management',
      subtitle: 'Streamline device management and modernize your IT operations',
      description: 'Comprehensive endpoint management solutions to optimize device lifecycle and enhance productivity.',
      features: [
        'Device Lifecycle Management',
        'Mobile Device Management (MDM)',
        'Patch Management & Software Deployment',
        'Endpoint Security & Monitoring',
        'Asset Inventory & Tracking',
        'Automated Workflow Optimization'
      ],
      benefits: [
        'Improved device security',
        'Reduced management overhead',
        'Enhanced user productivity',
        'Centralized control'
      ],
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: 'directory',
      icon: ServerIcon,
      title: 'Directory & Platform Services',
      subtitle: 'Optimize your directory services and platform management',
      description: 'Expert management of directory services and platform infrastructure to ensure seamless operations.',
      features: [
        'Active Directory & Azure AD',
        'SCCM & Intune Management',
        'Microsoft 365 Administration',
        'Group Policy Management',
        'Identity Federation',
        'Single Sign-On (SSO) Implementation'
      ],
      benefits: [
        'Simplified user management',
        'Enhanced security',
        'Improved productivity',
        'Reduced administrative burden'
      ],
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'development',
      icon: CodeBracketIcon,
      title: 'Application & Software Development',
      subtitle: 'Custom software solutions for modern business needs',
      description: 'End-to-end software development services from mobile apps to enterprise solutions.',
      features: [
        'Mobile App Development',
        'Cross-platform App Development',
        'Progressive Web Apps (PWAs)',
        'Desktop Application Development',
        'AI Chatbot Development',
        'API Development & Integration'
      ],
      benefits: [
        'Custom solutions',
        'Enhanced user experience',
        'Increased efficiency',
        'Competitive advantage'
      ],
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      id: 'consulting',
      icon: ChartBarIcon,
      title: 'IT Strategy & Consulting',
      subtitle: 'Strategic guidance to transform your IT operations',
      description: 'Expert consulting services to align your IT strategy with business objectives and drive digital transformation.',
      features: [
        'IT Strategy & Digital Roadmapping',
        'Process Optimization',
        'Web Design & Development',
        'Technology Assessment',
        'Change Management',
        'Project Management'
      ],
      benefits: [
        'Strategic alignment',
        'Improved efficiency',
        'Cost optimization',
        'Future-ready solutions'
      ],
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8 leading-relaxed"
            >
              Comprehensive IT solutions designed to secure, modernize, and optimize your business operations. 
              From cybersecurity to cloud migration, we deliver results that drive your success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="scroll-mt-20"
                id={service.id}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.color} mb-6`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                      {service.title}
                    </h2>
                    <h3 className="text-xl text-primary-600 mb-4 font-semibold">
                      {service.subtitle}
                    </h3>
                    <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircleIcon className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                              <span className="text-secondary-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-4">Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-secondary-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 border border-secondary-200">
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${service.color} mb-6`}>
                          <service.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-secondary-600 mb-6">
                          {service.subtitle}
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center btn-primary"
                        >
                          Get Started
                          <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help secure, modernize, and optimize your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Schedule a Consultation
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

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Industries: React.FC = () => {
  const industries = [
    {
      id: 'government',
      name: 'Government & Public Sector',
      description: 'Secure, compliant solutions for federal, state, and local government agencies.',
      challenges: [
        'Strict compliance requirements (FISMA, NIST)',
        'Legacy system modernization',
        'Cybersecurity threats',
        'Budget constraints'
      ],
      solutions: [
        'FISMA & NIST compliance implementation',
        'Secure cloud migration',
        'Zero Trust architecture',
        'Cost-effective modernization'
      ],
      icon: '🏛️',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'finance',
      name: 'Financial Services',
      description: 'Robust security and compliance solutions for banks, credit unions, and financial institutions.',
      challenges: [
        'SOX compliance requirements',
        'Data security & privacy',
        'Regulatory reporting',
        'Fraud prevention'
      ],
      solutions: [
        'SOX compliance framework',
        'Advanced threat detection',
        'Automated reporting systems',
        'Fraud monitoring solutions'
      ],
      icon: '🏦',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      description: 'HIPAA-compliant solutions for healthcare providers and life sciences organizations.',
      challenges: [
        'HIPAA compliance requirements',
        'Patient data security',
        'Interoperability standards',
        'Clinical workflow optimization'
      ],
      solutions: [
        'HIPAA-compliant infrastructure',
        'Secure patient portals',
        'HL7 integration',
        'Clinical system optimization'
      ],
      icon: '🏥',
      color: 'bg-red-50 text-red-600 border-red-200'
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      description: 'Technology solutions for K-12 schools, universities, and educational technology companies.',
      challenges: [
        'Remote learning infrastructure',
        'Student data privacy',
        'Device management',
        'Budget optimization'
      ],
      solutions: [
        'Virtual learning platforms',
        'FERPA-compliant systems',
        'MDM for education',
        'Cost-effective IT solutions'
      ],
      icon: '🎓',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'retail',
      name: 'Retail & eCommerce',
      description: 'Digital transformation solutions for retail chains and e-commerce platforms.',
      challenges: [
        'Omnichannel integration',
        'Payment security (PCI DSS)',
        'Inventory management',
        'Customer experience'
      ],
      solutions: [
        'Unified commerce platforms',
        'PCI DSS compliance',
        'Inventory optimization',
        'Customer analytics'
      ],
      icon: '🛍️',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      id: 'startups',
      name: 'Startups & SMBs',
      description: 'Scalable technology solutions for startups and small to medium businesses.',
      challenges: [
        'Limited IT resources',
        'Rapid growth scaling',
        'Cost constraints',
        'Security concerns'
      ],
      solutions: [
        'Cloud-first architecture',
        'Scalable infrastructure',
        'Cost-effective solutions',
        'Security best practices'
      ],
      icon: '🚀',
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
              Industries We Serve
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8 leading-relaxed"
            >
              We understand the unique challenges and compliance requirements of different industries. 
              Our tailored solutions help organizations across sectors achieve their technology goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="scroll-mt-20"
                id={industry.id}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{industry.icon}</span>
                      <h2 className="text-3xl font-bold text-secondary-900">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-4">Common Challenges</h4>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircleIcon className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                              <span className="text-secondary-700">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-4">Our Solutions</h4>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-secondary-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 border border-secondary-200">
                      <div className="text-center">
                        <div className="text-6xl mb-6">{industry.icon}</div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                          {industry.name}
                        </h3>
                        <p className="text-secondary-600 mb-6">
                          {industry.description}
                        </p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center btn-primary"
                        >
                          Get Industry Solutions
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

      {/* Industry Stats */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our track record speaks for itself. We've successfully delivered solutions across diverse industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-900 font-semibold mb-2">Government Agencies</div>
              <div className="text-secondary-600 text-sm">FISMA & NIST compliant solutions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-secondary-900 font-semibold mb-2">Financial Institutions</div>
              <div className="text-secondary-600 text-sm">SOX & PCI DSS compliance</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">75+</div>
              <div className="text-secondary-900 font-semibold mb-2">Healthcare Organizations</div>
              <div className="text-secondary-600 text-sm">HIPAA-compliant solutions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-secondary-900 font-semibold mb-2">SMBs & Startups</div>
              <div className="text-secondary-600 text-sm">Scalable growth solutions</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can address your unique challenges and drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Schedule Industry Consultation
            </Link>
            <Link to="/work" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

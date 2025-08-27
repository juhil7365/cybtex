import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Technologies: React.FC = () => {
  const technologies = [
    {
      id: 'azure',
      name: 'Microsoft Azure',
      description: 'Cloud computing platform for building, testing, deploying, and managing applications and services.',
      features: [
        'Virtual Machines & Containers',
        'Azure Active Directory',
        'Azure DevOps',
        'Azure Security Center',
        'Azure Backup & Recovery',
        'Azure Monitor & Analytics'
      ],
      logo: 'AZURE',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 'aws',
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud computing platform offering over 200 fully featured services.',
      features: [
        'EC2 & Lambda Services',
        'AWS Identity & Access Management',
        'Amazon S3 & CloudFront',
        'AWS Security Hub',
        'AWS Backup & Disaster Recovery',
        'CloudWatch & CloudTrail'
      ],
      logo: 'AWS',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      id: 'm365',
      name: 'Microsoft 365',
      description: 'Productivity cloud that delivers innovative Office apps, intelligent cloud services, and world-class security.',
      features: [
        'Office 365 Applications',
        'Exchange Online',
        'SharePoint Online',
        'Teams & Collaboration',
        'OneDrive for Business',
        'Power Platform'
      ],
      logo: 'M365',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 'google',
      name: 'Google Workspace',
      description: 'Cloud-based productivity suite that helps teams communicate, collaborate, and get things done.',
      features: [
        'Gmail & Calendar',
        'Google Drive',
        'Google Meet',
        'Google Docs Suite',
        'Google Admin Console',
        'Google Cloud Identity'
      ],
      logo: 'GW',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: 'sccm',
      name: 'SCCM & Intune',
      description: 'Microsoft\'s enterprise management solution for managing large numbers of Windows-based computers.',
      features: [
        'System Center Configuration Manager',
        'Microsoft Intune',
        'Co-management',
        'Software Deployment',
        'Patch Management',
        'Device Compliance'
      ],
      logo: 'SCCM',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      id: 'ad',
      name: 'Active Directory & Azure AD',
      description: 'Directory services for Windows domain networks and cloud-based identity and access management.',
      features: [
        'On-premises Active Directory',
        'Azure Active Directory',
        'Hybrid Identity',
        'Single Sign-On (SSO)',
        'Multi-Factor Authentication',
        'Conditional Access'
      ],
      logo: 'AD',
      color: 'bg-red-50 text-red-600 border-red-200'
    },
    {
      id: 'mdm',
      name: 'MDM Platforms',
      description: 'Mobile Device Management solutions for securing and managing mobile devices in the enterprise.',
      features: [
        'Microsoft Intune',
        'Jamf Pro',
        'VMware Workspace ONE',
        'MobileIron',
        'Device Enrollment',
        'App Management'
      ],
      logo: 'MDM',
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    },
    {
      id: 'pwa',
      name: 'PWA Frameworks',
      description: 'Progressive Web App frameworks for building modern, responsive web applications.',
      features: [
        'React.js',
        'Angular',
        'Vue.js',
        'Next.js',
        'Service Workers',
        'Offline Capabilities'
      ],
      logo: 'PWA',
      color: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    },
    {
      id: 'mobile',
      name: 'Mobile Development Tools',
      description: 'Cross-platform mobile development frameworks and tools for building native and hybrid apps.',
      features: [
        'Xamarin',
        'Flutter',
        'React Native',
        'Ionic',
        'NativeScript',
        'Cordova'
      ],
      logo: 'MOBILE',
      color: 'bg-pink-50 text-pink-600 border-pink-200'
    },
    {
      id: 'compliance',
      name: 'Compliance Standards',
      description: 'Industry-standard compliance frameworks and security certifications.',
      features: [
        'NIST Cybersecurity Framework',
        'FISMA Compliance',
        'SOX Compliance',
        'ISO 27001',
        'HIPAA Compliance',
        'GDPR Compliance'
      ],
      logo: 'COMP',
      color: 'bg-gray-50 text-gray-600 border-gray-200'
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
              Technologies & Platforms
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-primary-100 mb-8 leading-relaxed"
            >
              We leverage cutting-edge technologies and platforms to deliver secure, scalable, and efficient solutions 
              that drive your business forward.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="scroll-mt-20"
                id={tech.id}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary-200">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tech.color} mb-4`}>
                    <span className="font-bold text-sm">{tech.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-secondary-600 mb-4 text-sm">
                    {tech.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tech.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircleIcon className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Technology Expertise Areas
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our team has deep expertise across multiple technology domains to provide comprehensive solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">☁️</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Cloud Platforms</h3>
              <p className="text-secondary-600 text-sm">
                Azure, AWS, Google Cloud expertise for scalable cloud solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Security & Identity</h3>
              <p className="text-secondary-600 text-sm">
                Active Directory, Azure AD, IAM, and compliance frameworks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Development</h3>
              <p className="text-secondary-600 text-sm">
                React, Angular, mobile development, and PWA frameworks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Management</h3>
              <p className="text-secondary-600 text-sm">
                SCCM, Intune, MDM, and endpoint management solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Leverage These Technologies?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our certified experts can help you implement and optimize these technologies for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Get Expert Consultation
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

export default Technologies;

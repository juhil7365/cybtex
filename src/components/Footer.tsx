import React from 'react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Cybersecurity & Compliance', href: '/services#cybersecurity' },
      { name: 'Cloud & Infrastructure', href: '/services#cloud' },
      { name: 'IT Modernization', href: '/services#modernization' },
      { name: 'Directory Services', href: '/services#directory' },
      { name: 'Application Development', href: '/services#development' },
      { name: 'IT Strategy & Consulting', href: '/services#consulting' }
    ],
    technologies: [
      { name: 'Microsoft Azure', href: '/technologies#azure' },
      { name: 'Amazon Web Services', href: '/technologies#aws' },
      { name: 'Microsoft 365', href: '/technologies#m365' },
      { name: 'Google Workspace', href: '/technologies#google' },
      { name: 'SCCM & Intune', href: '/technologies#sccm' },
      { name: 'Active Directory', href: '/technologies#ad' }
    ],
    industries: [
      { name: 'Government & Public Sector', href: '/industries#government' },
      { name: 'Financial Services', href: '/industries#finance' },
      { name: 'Healthcare & Life Sciences', href: '/industries#healthcare' },
      { name: 'Education & EdTech', href: '/industries#education' },
      { name: 'Retail & eCommerce', href: '/industries#retail' },
      { name: 'Startups & SMBs', href: '/industries#startups' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/about#careers' },
      { name: 'Partners', href: '/about#partners' },
      { name: 'Case Studies', href: '/work' },
      { name: 'Contact', href: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/cybtex-solutions', icon: 'LI' },
    { name: 'Twitter', href: 'https://twitter.com/cybtexsolutions', icon: 'TW' },
    { name: 'Facebook', href: 'https://facebook.com/cybtexsolutions', icon: 'FB' }
  ];

  const complianceBadges = [
    { name: 'NIST', description: 'NIST Cybersecurity Framework' },
    { name: 'FISMA', description: 'Federal Information Security Management Act' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act Compliance' },
    { name: 'ISO 27001', description: 'Information Security Management' }
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">Cybtex Solutions</span>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Your trusted partner in IT & cybersecurity. We deliver enterprise-grade solutions to keep your business secure, agile, and future-ready.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@cybtex.net" className="text-secondary-300 hover:text-white transition-colors">
                  info@cybtex.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <a href="tel:301-701-5633" className="text-secondary-300 hover:text-white transition-colors">
                  301-701-5633
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary-400" />
                <span className="text-secondary-300">
                  Maryland, United States
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2">
              {footerLinks.technologies.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-secondary-700 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Compliance & Certifications</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceBadges.map((badge) => (
              <div key={badge.name} className="bg-secondary-800 rounded-lg p-4 text-center">
                <div className="font-semibold text-primary-400 mb-1">{badge.name}</div>
                <div className="text-xs text-secondary-400">{badge.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} Cybtex Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Legal Links */}
              <div className="flex space-x-4 text-sm">
                <Link to="/privacy" className="text-secondary-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-secondary-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

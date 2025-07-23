import React from 'react';
import { Facebook, Twitter, Instagram, Github, Linkedin, Youtube } from 'lucide-react';

const SocialLinks = ({ className = "" }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/ai4all',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/ai4all',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/ai4all',
      color: 'hover:text-pink-500'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ai4all',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/ai4all',
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@ai4all',
      color: 'hover:text-red-500'
    }
  ];

  const handleSocialClick = (url, name) => {
    // Open social media link in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Track analytics if needed
    console.log(`Clicked ${name} social link`);
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <button
            key={social.name}
            onClick={() => handleSocialClick(social.url, social.name)}
            className={`p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 text-gray-400 ${social.color} hover:scale-110 hover:shadow-lg`}
            title={social.name}
            aria-label={`Visit our ${social.name} page`}
          >
            <IconComponent className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
};

export default SocialLinks;


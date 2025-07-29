import React from 'react';
import { Instagram, MessageCircle, Mail, Phone, Youtube } from 'lucide-react';

const SocialPalette = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/insi.iq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", color: "#E4405F" },
    { icon: MessageCircle, href: "https://whatsapp.com/channel/0029VbB02Ow9hXFBWwNih01v", color: "#25D366" },
    { icon: Mail, href: "mailto:insightiq4students@gmail.com", color: "#EA4335" },
    { icon: Phone, href: "tel:9026975729", color: "#0077B5" },
    { icon: Youtube, href: "https://youtube.com/@insight_iq-p2n?si=cgkWpy0OJ_mJocpH", color: "#FF0000" }
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 hover:w-16 bg-white/10 backdrop-blur-md 
                       flex items-center justify-center rounded-l-xl group
                       transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <link.icon
              size={24}
              className="group-hover:scale-110 transition-transform duration-300"
              style={{ color: link.color }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialPalette;

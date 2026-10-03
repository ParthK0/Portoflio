import React, { useEffect } from 'react';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact & Connect | Parth Khowal";
  }, []);

  return (
    <div className="pt-28 pb-20 bg-[#000000] min-h-screen text-[#FFFFFF]">
      <Contact />
    </div>
  );
};

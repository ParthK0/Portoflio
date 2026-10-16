import React, { useEffect } from 'react';
import { WorkSection } from '../components/WorkSection';

export const WorkPage: React.FC = () => {
  useEffect(() => {
    document.title = "Work | Code by Parth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#111111] min-h-screen text-[#FFFFFF]">
      <WorkSection />
    </div>
  );
};

export default WorkPage;

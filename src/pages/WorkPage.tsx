import React, { useEffect } from 'react';
import { WorkSection } from '../components/WorkSection';

export const WorkPage: React.FC = () => {
  useEffect(() => {
    document.title = "Work | Code by Parth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0e0e10] min-h-screen text-[#f4f4f2]">
      <WorkSection />
    </div>
  );
};

export default WorkPage;

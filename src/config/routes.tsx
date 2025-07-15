import { ResponsiveLayout } from '@/components/layout/ResponsiveLayout';
import { Routes, Route } from 'react-router-dom';
import { ProgramPageSection, QuizPage2, WhatWeHealPageSection, OurApproachPageSection, TreatmentPageSection } from './routeConfig';
import { Homepage } from '@/pages/Home';
import ProgramDetailPage from '@/pages/Home/ProgramDetailPage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MedicalQuestionnaire from '@/pages/onboarding/MedicalQuestionnaire';
import UploadPortal from '@/pages/onboarding/UploadPortal';
import BookingScheduler from '@/pages/consultation/BookingScheduler';
import ProfessionalDemo from '@/pages/demo/ProfessionalDemo';
import { ProfessionalLayout } from '@/components/layout/ProfessionalLayout';

export function AppRoutes() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {/* Routes with Responsive Layout */}
      <Route element={<ResponsiveLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/programs" element={<ProgramPageSection />} />
        <Route path="/programs/:programId" element={<ProgramDetailPage />} />
        <Route path="/quiz" element={<QuizPage2 />} />
        <Route path="/onboarding/medical-questionnaire" element={<MedicalQuestionnaire />} />
        <Route path="/treatment" element={<TreatmentPageSection />} />
        <Route path="/approach" element={<OurApproachPageSection />} />
        <Route path="/onboarding/upload-portal" element={<UploadPortal />} />
        <Route path="/consultation" element={<BookingScheduler />} />
      </Route>
      
      {/* Demo route with professional layout */}
      <Route 
        path="/demo/professional" 
        element={
          <ProfessionalLayout>
            <ProfessionalDemo />
          </ProfessionalLayout>
        } 
      />

      {/* Standalone routes (without layout) */}
      <Route path="/what-we-heal" element={<WhatWeHealPageSection />} />
      <Route path="/approach/five-healers" element={<OurApproachPageSection />} />
      <Route path="/approach/daily-rituals" element={<OurApproachPageSection />} />
    </Routes>
  );
}
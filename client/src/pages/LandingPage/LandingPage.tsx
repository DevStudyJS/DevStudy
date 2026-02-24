import { useEffect, useState } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { Hero } from '../../components/features/Hero';
import { Features } from '../../components/features/Features';
import { HowItWorks } from '../../components/features/HowItWorks';
import { Testimonials } from '../../components/features/Testimonials';
import { CTA } from '../../components/features/CTA';
import { LandingContent } from '../../types/landing.types';
import { api } from '../../services/api';

export const LandingPage = () => {
  const [content, setContent] = useState<LandingContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getLandingContent()
      .then(setContent)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-dark">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!content) return null;
 
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero courses={content.hero.courses} lessons={content.hero.lessons} students={content.hero.students}  />
      <Features title={content.features.title} subtitle={content.features.subtitle} cards={content.features.cards} />
      <HowItWorks title={content.steps.title} subtitle={content.steps.subtitle} items={content.steps.items} />
      <Testimonials title={content.testimonials.title} subtitle={content.testimonials.subtitle} reviews={content.testimonials.reviews} />
      <CTA title={content.cta.title} subtitle={content.cta.subtitle} btnPrimary={content.cta.btnPrimary} btnSecondary={content.cta.btnSecondary} badges={content.cta.badges} />
      <Footer />
    </div>
  );
};
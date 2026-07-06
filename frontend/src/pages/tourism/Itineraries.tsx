import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { usePageContent } from '../../hooks/usePageContent';
import FAQ from '../../components/FAQ';
import fish from '../../assets/fish.jpg';
import inTrade from '../../assets/Inland.jpeg';

interface ItineraryData {
  hero: {
    label_en: string;
    label_fr: string;
    title_en: string;
    title_fr: string;
    subtitle_line_1_en: string;
    subtitle_line_1_fr: string;
    subtitle_line_2_en: string;
    subtitle_line_2_fr: string;
    body_text_en: string;
    body_text_fr: string;
  };
  body_paragraph_en: string;
  body_paragraph_fr: string;
  cta_buttons: {
    label: string;
    url: string;
  }[];
  image_cards: {
    caption: string;
  }[];
  cards: {
    title: string;
    description: string;
    number: string;
  }[];
}

interface Experience {
  title: string;
  desc: string;
  icon: string;
}

const Itineraries = () => {
  const { language, t } = useLanguage();
  const { content: data } = usePageContent('itineraries', null);

  // Parse structured itineraries data or use fallback
  let itinerariesData: ItineraryData | null = null;
  if (data?.itineraries_data) {
    try {
      itinerariesData = JSON.parse(data.itineraries_data);
    } catch (e: any) {
      console.error('Failed to parse itineraries_data:', e);
    }
  }
  
  // Use dynamic content with fallback to translations or structured data
  const lang = language as 'en' | 'fr';
  const content = {
    // Hero section
    label: itinerariesData?.hero?.[`label_${lang}`] || t('nav.tourism'),
    title: data?.title || itinerariesData?.hero?.[`title_${lang}`] || t('itinerariesPage.title'),
    subtitle1: data?.subtitle_1 || itinerariesData?.hero?.[`subtitle_line_1_${lang}`] || t('itinerariesPage.subtitle1'),
    subtitle2: data?.subtitle_2 || itinerariesData?.hero?.[`subtitle_line_2_${lang}`] || t('itinerariesPage.subtitle2'),
    body1: data?.body_1 || itinerariesData?.hero?.[`body_text_${lang}`] || t('itinerariesPage.body1'),
    
    // Body content
    body2: data?.body_2 || itinerariesData?.[`body_paragraph_${lang}`] || t('itinerariesPage.body2'),
    
    // CTA buttons
    ctaFisherman: data?.button_1_label || itinerariesData?.cta_buttons?.[0]?.label || t('itinerariesPage.ctaFisherman'),
    ctaFishermanUrl: data?.button_1_url || itinerariesData?.cta_buttons?.[0]?.url || '/tourisme/tables-d-hotes',
    ctaCycling: data?.button_2_label || itinerariesData?.cta_buttons?.[1]?.label || t('itinerariesPage.ctaCycling'),
    ctaCyclingUrl: data?.button_2_url || itinerariesData?.cta_buttons?.[1]?.url || '/tourisme/hebergements',
    
    // Image captions
    img1Caption: data?.body_3 || itinerariesData?.image_cards?.[0]?.caption || t('itinerariesPage.img1Caption'),
    img2Caption: data?.body_4 || itinerariesData?.image_cards?.[1]?.caption || t('itinerariesPage.img2Caption'),
  };

  // Get cards from structured data or fallback to individual fields
  const experiences = itinerariesData?.cards?.map((card: any, index: number) => ({
    title: card.title,
    desc: card.description,
    icon: card.number || String(index + 1).padStart(2, '0')
  })) || [
    { title: data?.subtitle_3 || t('itinerariesPage.ex1Title'), desc: data?.body_5 || t('itinerariesPage.ex1Desc'), icon: "01" },
    { title: data?.button_3_label || t('itinerariesPage.ex2Title'), desc: data?.meta_title || t('itinerariesPage.ex2Desc'), icon: "02" },
    { title: data?.meta_description || t('itinerariesPage.ex3Title'), desc: data?.footer_text_1 || t('itinerariesPage.ex3Desc'), icon: "03" },
    { title: data?.footer_text_2 || t('itinerariesPage.ex4Title'), desc: data?.quote_1 || t('itinerariesPage.ex4Desc'), icon: "04" },
  ];

  return (
    <div className="bg-brand-cream min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-brand-deep pt-32 pb-24 px-6 relative overflow-hidden text-white">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-brand-red text-xs font-bold uppercase tracking-[0.3em] mb-6 font-sans">
              {content.label}
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
              {content.title}
            </h1>

            <div className="flex flex-col gap-2 mb-10">
              <span className="text-brand-red text-sm font-bold uppercase tracking-[0.2em] font-sans">
                {content.subtitle1}
              </span>
              <span className="text-brand-red text-sm font-bold uppercase tracking-[0.2em] font-sans">
                {content.subtitle2}
              </span>
            </div>

            <div
              className="text-white/70 text-lg md:text-xl font-sans leading-relaxed italic max-w-3xl"
              style={{
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                overflow: 'hidden',
                maxWidth: '100%'
              }}
              dangerouslySetInnerHTML={{ __html: content.body1 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Experience Cards Row */}
      <section className="py-16 container-custom px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((ex, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-brand-forest/10 shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-brand-red font-serif italic text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {ex.icon}
              </div>
              <h3 className="text-brand-deep font-sans font-bold uppercase tracking-widest text-xs mb-3">
                {ex.title}
              </h3>
              <p className="text-brand-deep/60 text-sm leading-relaxed">
                {ex.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding container-custom px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-brand-deep text-brand-deep/80 text-lg md:text-xl leading-relaxed font-sans max-w-none">
              <div
                className="mb-12"
                style={{
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  overflow: 'hidden',
                  maxWidth: '100%'
                }}
                dangerouslySetInnerHTML={{ __html: content.body2 }}
              />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to={content.ctaFishermanUrl} className="btn btn-primary">
                {content.ctaFisherman}
              </Link>
              <Link to={content.ctaCyclingUrl} className="btn btn-outline">
                {content.ctaCycling}
              </Link>
            </div>
          </motion.div>

          {/* Image Grid with Offset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <div className="aspect-[3/4] bg-brand-sage/10 rounded-2xl overflow-hidden relative group shadow-xl">
                <img 
                  src={fish} 
                  alt="Kelabi Fish Auction" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/60 text-center px-4">
                Kelibia Fish Auction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 translate-y-12 sm:translate-y-24"
            >
              <div className="aspect-[3/4] bg-brand-forest/10 rounded-2xl overflow-hidden relative group shadow-xl">
                <img 
                  src={inTrade} 
                  alt="In Trade Cycling Routes" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/60 text-center px-4">
                Inland Cycling Routes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ data={data} />
    </div>
  );
};

export default Itineraries;

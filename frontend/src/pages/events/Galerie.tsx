import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { galleryItems, GalleryCategory } from '../../data/gallery';
import Lightbox from '../../components/Lightbox';
import { usePageContent } from '../../hooks/usePageContent';
import hands1 from '../../assets/hands1.jpeg';
import image1 from '../../assets/image1.png';

const Galerie = () => {
  const { language, t } = useLanguage();
  const { content: dynamicContent } = usePageContent('gallery', null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [uploadedImages, setUploadedImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchUploadedImages = async () => {
      try {
        const res = await fetch('/api/media/public?type=image&gallery=true');
        if (!res.ok) return;
        const data = await res.json();
        setUploadedImages(Array.isArray(data) ? data : []);
      } catch {
        setUploadedImages([]);
      }
    };
    fetchUploadedImages();
  }, []);

  const categories: (GalleryCategory | 'All')[] = ['All', 'Food', 'Landscape', 'Artisanat', 'Festivals', 'People'];

  const uploadedGalleryItems = useMemo(() => uploadedImages.map((item, index) => ({
    id: `db-${item.id}`,
    src: item.url,
    alt: {
      en: item.alt_text_en || item.original_name || `Gallery image ${index + 1}`,
      fr: item.alt_text_fr || item.alt_text_en || item.original_name || `Image galerie ${index + 1}`
    },
    category: (item.category as GalleryCategory) || 'All',
    type: 'image' as const
  })), [uploadedImages]);

  const sourceItems = uploadedGalleryItems.length > 0 ? uploadedGalleryItems : galleryItems;

  const photos = sourceItems.filter(item => 
    item.type === 'image' && 
    (activeCategory === 'All' || item.category === activeCategory)
  );

  // Videos will be populated via the Media Library once video URLs are added
  const videos: any[] = [];

  const currentItems: any[] = activeTab === 'photos' ? photos : videos;

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-deep pt-32 pb-20 px-6 relative overflow-hidden text-white">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-brand-sage text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">
              {t('nav.media')}
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-4 leading-tight">
              {dynamicContent ? (language === 'fr' ? dynamicContent.title_fr : dynamicContent.title_en) : t('nav.gallery')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Block Content (Inside Cream Area) */}
      <section className="container-custom px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col gap-2 mb-10">
            <span className="text-brand-sage text-sm font-bold uppercase tracking-[0.2em] font-sans">
              {dynamicContent ? (language === 'fr' ? dynamicContent.subtitle_1_fr : dynamicContent.subtitle_1_en) : t('galleryIntro.subtitle1')}
            </span>
            <span className="text-brand-red text-sm font-bold uppercase tracking-[0.2em] font-sans">
              {dynamicContent ? (language === 'fr' ? dynamicContent.subtitle_2_fr : dynamicContent.subtitle_2_en) : t('galleryIntro.subtitle2')}
            </span>
          </div>

          <h2 className="text-brand-deep text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
            {dynamicContent ? (language === 'fr' ? dynamicContent.title_fr : dynamicContent.title_en) : t('galleryIntro.title')}
          </h2>
          
          <div className="flex flex-col gap-12">
            <div className="prose prose-xl prose-brand-deep text-brand-deep/80 leading-relaxed font-sans max-w-none">
              <p className="mb-8 font-medium italic">{dynamicContent ? (language === 'fr' ? dynamicContent.body_1_fr : dynamicContent.body_1_en) : t('galleryIntro.body1')}</p>
              <p className="mb-12">{dynamicContent ? (language === 'fr' ? dynamicContent.body_2_fr : dynamicContent.body_2_en) : t('galleryIntro.body2')}</p>
            </div>

            {/* Intro Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="flex flex-col gap-4">
                <div className="aspect-video bg-brand-forest/5 rounded-3xl overflow-hidden relative group shadow-2xl border border-brand-forest/10">
                  <img 
                    src={hands1} 
                    alt="Documenting Nabeul Pottery" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/60 text-center px-4">
                  Documenting Nabeul Pottery (May 2026)
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="aspect-video bg-brand-deep rounded-3xl overflow-hidden relative group shadow-2xl border border-brand-forest/10">
                  <img 
                    src={image1} 
                    alt="Food Film Menu Entry" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-deep/20 backdrop-blur-[1px] z-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-brand-deep shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-brand-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-forest/60 text-center px-4">
                  "Food Film Menu" Entry
                </p>
              </div>
            </div>

            </div>
        </motion.div>
      </section>

      {/* Tabs Section */}
      <section className="container-custom px-6 pb-12 border-t border-brand-forest/5 pt-20">
        <div className="flex justify-center gap-4">
          {[
            { id: 'photos', label: language === 'fr' ? 'Photos' : 'Photos' },
            { id: 'videos', label: language === 'fr' ? 'Vidéos' : 'Videos' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden ${
                activeTab === tab.id 
                  ? 'text-white bg-brand-deep shadow-2xl scale-105' 
                  : 'text-brand-deep/40 hover:text-brand-deep border border-brand-forest/10'
              }`}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-x-0 bottom-0 h-1 bg-brand-red"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Categories for Photos */}
      <AnimatePresence>
        {activeTab === 'photos' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-wrap justify-center gap-4 py-12 px-6"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border-b-2 transition-all ${activeCategory === cat ? 'border-brand-red text-brand-deep' : 'border-transparent text-brand-forest/40 hover:text-brand-forest'}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state for Videos tab */}
      {activeTab === 'videos' && videos.length === 0 && (
        <section className="container-custom px-6 pb-24 text-center">
          <div className="py-24 border border-dashed border-brand-forest/20 rounded-2xl">
            <p className="text-brand-deep/40 font-serif italic text-xl mb-3">
              {language === 'fr' ? 'Les vidéos arrivent bientôt.' : 'Videos coming soon.'}
            </p>
            <p className="text-brand-deep/25 text-sm">
              {language === 'fr'
                ? "Ajoutez des URL vidéo via la médiathèque pour qu'elles apparaissent ici."
                : 'Add video URLs via the Media Library to have them appear here.'}
            </p>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="container-custom pb-32 px-6">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          <AnimatePresence>
            {currentItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-6 relative group cursor-pointer overflow-hidden rounded-xl bg-brand-deep"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.src}
                  alt={item.alt[language]}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-brand-deep shadow-2xl">
                    {item.type === 'video' ? <Play className="w-5 h-5 fill-current" /> : <Maximize2 className="w-5 h-5" />}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white/60 text-[9px] font-bold uppercase tracking-widest block mb-2">{item.category}</span>
                  <p className="text-white text-sm font-serif italic italic">{item.alt[language]}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={currentItems}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((lightboxIndex - 1 + currentItems.length) % currentItems.length)}
            onNext={() => setLightboxIndex((lightboxIndex + 1) % currentItems.length)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galerie;

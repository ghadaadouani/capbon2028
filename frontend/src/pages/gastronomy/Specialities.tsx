import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import fish from '../../assets/fish.jpg';
import harissa1 from '../../assets/harissa1.png';
import chilis1 from '../../assets/chilis1.jpg';
import fruit1 from '../../assets/fruit1.jpg';

interface Dish {
  name: string;
  origin: string;
  body: string;
  season?: string;
}

interface Content {
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  introLabel: string;
  introTitle: string;
  introBody: string;
  dishesLabel: string;
  dishesTitle: string;
  dishes: Dish[];
  cta: string;
}

const Specialities = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content: Record<'en' | 'fr', Content> = {
    en: {
      heroTitle: 'Specialities',
      heroSubtitle: 'From Chakchouka to Grilled Fish — The Flavours of Cap Bon',
      heroDesc:
        'Every dish on the Cap Bon table is a palimpsest: Phoenician olives, Andalusian spices, Roman grain, and the sea forever in the foreground. These are not recipes — they are living archives.',
      introLabel: 'Gastronomy · Heritage',
      introTitle: 'A Table Where History is Served',
      introBody:
        'The specialities of Cap Bon are inseparable from its landscape. The salt air of the Mediterranean, the volcanic soil of Nabeul, the orange groves of Menzel Bouzelfa — each element enters the pot. What results is a cuisine at once earthy and delicate, fiery and restrained. Our dishes are cooked slowly, eaten communally, and passed down without recipes.',
      dishesLabel: 'Signature Dishes',
      dishesTitle: 'The Emblematic Plates of the Peninsula',
      dishes: [
        {
          name: 'Chakchouka',
          origin: 'The dish that names us',
          season: 'Year-round',
          body:
            'Our peninsula bears the name of its most emblematic dish. Eggs poached in a gently spiced tomato and pepper sauce, enriched with garlic and cumin — Chakchouka is humble in form and extraordinary in depth. Eaten at breakfast and dinner alike, it is the great equalizer of the Cap Bon table. Each family has a version; none of them are wrong.',
        },
        {
          name: 'Harissa Bled — Grilled Sea Bream with Harissa',
          origin: 'Coast & fire',
          season: 'Spring · Summer',
          body:
            'The fish of Cap Bon come from some of the cleanest waters of the Tunisian coast. Daurade and loup de mer are rubbed with our Protected Designation of Origin harissa — made in the Mehraz from sun-dried chilies, garlic, caraway and coriander — then grilled over olive wood embers. The result is a dish with three simultaneous tastes: sea, fire, and smoke.',
        },
        {
          name: 'Couscous Abyad',
          origin: 'Celebration',
          season: 'Weddings · Eid',
          body:
            'The White Couscous is not an everyday dish; it is architecture. Hand-rolled semolina, steamed in the couscoussier, crowned with Medjool dates, icing sugar and exactly one hundred eggs for a wedding feast. The GDA women\'s groups of Cap Bon are its keepers. To eat Couscous Abyad is to be invited into the inner sanctum of a family\'s joy.',
        },
        {
          name: 'Assida',
          origin: 'Sweet porridge of celebration',
          season: 'Mawlid · Winter',
          body:
            'Assida is a sweet, thick semolina porridge scented with Mā\' zahar — the orange blossom water distilled in Cap Bon\'s seven historic copper stills. Poured into a communal bowl and dressed with honey, olive oil and almonds, it is served on the Prophet\'s birthday and at family gatherings. Its preparation fills the house with a fragrance that is, to anyone raised in Cap Bon, the smell of celebration itself.',
        },
        {
          name: 'Makroudh',
          origin: 'Andalusian pastry legacy',
          season: 'Ramadan · Year-round',
          body:
            'Semolina dough cut into diamonds, filled with Deglet Nour date paste and fried until golden, then drenched in citrus-scented honey. The Makroudh arrived on the ships of the Andalusian refugees who rebuilt Nabeul and Hammamet in the 17th century. Five hundred years later, it remains the first sweet offered to a guest, the last thing eaten at iftar, and the best reason to stop at any roadside stall on the road north.',
        },
        {
          name: 'Osbane Shayih',
          origin: 'Ancestral preservation',
          season: 'Autumn · Slaughter season',
          body:
            'Tripe stuffed with aromatic herbs and dried under the Mediterranean sun — Osbane Shayih is one of the most misunderstood and deeply respected dishes in Cap Bon. The Ambassadrices de Hammamet, a group of women who act as custodians of local culinary heritage, are among its last practitioners. It is an act of radical anti-waste, a dish born from necessity and elevated into ritual.',
        },
      ],
      cta: 'Explore the Artisanal Crafts',
    },
    fr: {
      heroTitle: 'Plats & Spécialités',
      heroSubtitle: 'De la Chakchouka aux poissons grillés — Les saveurs du Cap Bon',
      heroDesc:
        'Chaque plat de la table du Cap Bon est un palimpseste : olives phéniciennes, épices andalouses, grain romain, et la mer toujours en premier plan. Ce ne sont pas des recettes — ce sont des archives vivantes.',
      introLabel: 'Gastronomie · Patrimoine',
      introTitle: 'Une table où l\'histoire est servie',
      introBody:
        'Les spécialités du Cap Bon sont inséparables de son paysage. L\'air salin de la Méditerranée, la terre volcanique de Nabeul, les orangeraies de Menzel Bouzelfa — chaque élément entre dans la marmite. Il en résulte une cuisine à la fois terreuse et délicate, ardente et mesurée. Nos plats cuisent lentement, se mangent en communauté et se transmettent sans recettes.',
      dishesLabel: 'Plats emblématiques',
      dishesTitle: 'Les assiettes emblématiques de la Péninsule',
      dishes: [
        {
          name: 'Chakchouka',
          origin: 'Le plat qui nous nomme',
          season: 'Toute l\'année',
          body:
            'Notre péninsule porte le nom de son plat le plus emblématique. Des œufs pochés dans une sauce tomate et poivron légèrement épicée, enrichie d\'ail et de cumin — la Chakchouka est humble dans sa forme et extraordinaire dans sa profondeur. Mangée au petit-déjeuner comme au dîner, elle est le grand égalisateur de la table du Cap Bon. Chaque famille en a une version ; aucune n\'est mauvaise.',
        },
        {
          name: 'Harissa Bled — Daurade grillée à la harissa',
          origin: 'Côte & feu',
          season: 'Printemps · Été',
          body:
            'Les poissons du Cap Bon proviennent de certaines des eaux les plus propres du littoral tunisien. Daurade et loup de mer sont frottés avec notre harissa à indication géographique protégée — préparée dans le Mehraz à partir de piments séchés au soleil, d\'ail, de carvi et de coriandre — puis grillés sur des braises de bois d\'olivier. Le résultat est un plat avec trois goûts simultanés : la mer, le feu et la fumée.',
        },
        {
          name: 'Couscous Abyad',
          origin: 'Célébration',
          season: 'Mariages · Aïd',
          body:
            'Le Couscous Blanc n\'est pas un plat quotidien ; c\'est une architecture. Semoule roulée à la main, cuite à la vapeur dans le couscoussier, couronnée de dattes Medjool, de sucre glace et d\'exactement cent œufs pour un festin de mariage. Les groupes de femmes GDA du Cap Bon en sont les gardiennes. Manger du Couscous Abyad, c\'est être invité dans le sanctuaire intérieur de la joie d\'une famille.',
        },
        {
          name: 'Assida',
          origin: 'Bouillie sucrée de célébration',
          season: 'Mawlid · Hiver',
          body:
            'L\'Assida est une bouillie de semoule sucrée et épaisse, parfumée au Mā\' zahar — l\'eau de fleur d\'oranger distillée dans les sept alambics en cuivre historiques du Cap Bon. Versée dans un plat commun et habillée de miel, d\'huile d\'olive et d\'amandes, elle est servie pour l\'anniversaire du Prophète et lors des réunions de famille. Sa préparation emplit la maison d\'un parfum qui est, pour quiconque a grandi au Cap Bon, l\'odeur de la fête elle-même.',
        },
        {
          name: 'Makroudh',
          origin: 'Héritage pâtissier andalou',
          season: 'Ramadan · Toute l\'année',
          body:
            'Pâte de semoule découpée en losanges, fourrée de pâte de dattes Deglet Nour et frite jusqu\'à être dorée, puis enrobée de miel parfumé aux agrumes. Le Makroudh est arrivé sur les bateaux des réfugiés andalous qui ont rebâti Nabeul et Hammamet au XVIIe siècle. Cinq cents ans plus tard, c\'est toujours le premier sucré offert à un invité, la dernière chose mangée à l\'iftar, et la meilleure raison de s\'arrêter à n\'importe quel étal en bord de route sur la route du nord.',
        },
        {
          name: 'Osbane Shayih',
          origin: 'Préservation ancestrale',
          season: 'Automne · Saison de l\'abattage',
          body:
            'Tripes farcies aux herbes aromatiques et séchées sous le soleil méditerranéen — l\'Osbane Shayih est l\'un des plats les plus mal compris et les plus profondément respectés du Cap Bon. Les Ambassadrices de Hammamet, un groupe de femmes qui jouent le rôle de gardiennes du patrimoine culinaire local, comptent parmi ses dernières praticiennes. C\'est un acte d\'anti-gaspillage radical, un plat né de la nécessité et élevé au rang de rituel.',
        },
      ],
      cta: 'Explorer les Arts Artisanaux',
    },
  };

  const c = content[language as 'en' | 'fr'];

  const sectionImages = [fish, harissa1, chilis1, fruit1];

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Hero */}
      <section className="bg-brand-deep pt-32 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${chilis1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/80 to-brand-deep/40 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-brand-sage text-[10px] font-bold uppercase tracking-[0.4em] mb-4 font-sans">
              Gastronomie · Cap Bon
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-6 leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-brand-sage font-serif italic text-xl md:text-2xl mb-6">
              {c.heroSubtitle}
            </p>
            <p className="text-white/60 text-base md:text-lg font-sans leading-relaxed max-w-2xl">
              {c.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-custom px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl"
        >
          <div>
            <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
              {c.introLabel}
            </span>
            <h2 className="text-brand-deep text-4xl md:text-5xl font-serif italic mb-8 leading-tight">
              {c.introTitle}
            </h2>
            <p className="text-brand-deep/70 text-base md:text-lg leading-relaxed font-sans">
              {c.introBody}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {sectionImages.slice(0, 4).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`overflow-hidden rounded-xl shadow-lg ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Dishes Accordion */}
      <section className="bg-white/50 border-t border-brand-forest/5 py-24">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
              {c.dishesLabel}
            </span>
            <h2 className="text-brand-deep text-4xl md:text-5xl font-serif italic">
              {c.dishesTitle}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto divide-y divide-brand-forest/10">
            {c.dishes.map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group faq-trigger"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[11px] font-black text-brand-red tabular-nums mt-1 min-w-[28px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-brand-deep text-lg md:text-xl font-serif font-medium group-hover:text-brand-red transition-colors">
                        {dish.name}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-brand-forest/60 font-bold uppercase tracking-widest">
                          {dish.origin}
                        </span>
                        {dish.season && (
                          <>
                            <span className="text-brand-forest/20">·</span>
                            <span className="text-[10px] text-brand-sage font-bold uppercase tracking-widest">
                              {dish.season}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-brand-red flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-brand-deep/70 text-base leading-relaxed font-sans pl-[52px] pb-8 max-w-3xl">
                        {dish.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-deep py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-white text-3xl md:text-4xl font-serif italic mb-8">
            {language === 'fr'
              ? 'Derrière chaque plat, un artisan.'
              : 'Behind every dish, a craftsperson.'}
          </h2>
          <a
            href="/gastronomie/les-arts-du-cap-bon"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-brand-deep"
          >
            {c.cta}
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Specialities;

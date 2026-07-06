import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const SHAKSHOUKA_SECTIONS = [
  { label: 'Shakshouka Label', en: 'shakshouka_label_en', fr: 'shakshouka_label_fr' },
  { label: 'Shakshouka Title', en: 'shakshouka_title_en', fr: 'shakshouka_title_fr' },
  { label: 'Shakshouka Subtitle', en: 'shakshouka_subtitle_en', fr: 'shakshouka_subtitle_fr' },
  { label: 'Shakshouka CTA 1', en: 'shakshouka_cta1_en', fr: 'shakshouka_cta1_fr' },
  { label: 'Shakshouka CTA 2', en: 'shakshouka_cta2_en', fr: 'shakshouka_cta2_fr' },
];

const REVERSAL_SECTIONS = [
  { label: 'Reversal Label', en: 'reversal_label_en', fr: 'reversal_label_fr' },
  { label: 'Reversal Title', en: 'reversal_title_en', fr: 'reversal_title_fr' },
  { label: 'Reversal Subtitle', en: 'reversal_subtitle_en', fr: 'reversal_subtitle_fr' },
  { label: 'Reversal Tertiary', en: 'reversal_tertiary_en', fr: 'reversal_tertiary_fr' },
  { label: 'Reversal CTA 1', en: 'reversal_cta1_en', fr: 'reversal_cta1_fr' },
  { label: 'Reversal CTA 2', en: 'reversal_cta2_en', fr: 'reversal_cta2_fr' },
];

const MANIFESTO_SECTIONS = [
  { label: 'Manifesto Heading', en: 'subtitle_1_en', fr: 'subtitle_1_fr' },
  { label: 'Manifesto Verse / Line 1', en: 'body_1_en', fr: 'body_1_fr' },
  { label: 'Manifesto Verse / Line 2', en: 'body_2_en', fr: 'body_2_fr' },
  { label: 'Manifesto Verse / Line 3', en: 'body_3_en', fr: 'body_3_fr' },
];

const FRAGRANCE_SECTIONS = [
  { label: 'Fragrance Label (eyebrow)', en: 'subtitle_1_en', fr: 'subtitle_1_fr', type: 'input' },
  { label: 'Fragrance Title', en: 'subtitle_2_en', fr: 'subtitle_2_fr', type: 'input' },
  { label: 'Fragrance Subtitle', en: 'subtitle_3_en', fr: 'subtitle_3_fr', type: 'input' },
  { label: 'Quote Block Text', en: 'body_1_en', fr: 'body_1_fr', type: 'quill' },
  { label: 'Olive Section Title', en: 'body_2_en', fr: 'body_2_fr', type: 'input' },
];

const AREA_MONTH_SECTIONS = [
  { label: 'Area Label (eyebrow)', en: 'subtitle_1_en', fr: 'subtitle_1_fr', type: 'input' },
  { label: 'Area Title', en: 'subtitle_2_en', fr: 'subtitle_2_fr', type: 'input' },
  { label: 'Area Description', en: 'body_1_en', fr: 'body_1_fr', type: 'quill' },
];

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};

interface Props {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
}

/**
 * HomePageFields — all home-page-specific CMS fields.
 * Extracted from PagesManager to keep it manageable.
 */
const HomePageFields: React.FC<Props> = ({ formData, handleInputChange }) => {
  return (
    <>
              {/* Section Header: Shakshouka Peninsula - Dedicated Fields */}
              <div className="col-span-full mt-8 mb-4">
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <h3 className="text-amber-700 font-bold uppercase tracking-wider text-sm">Shakshouka Peninsula Section</h3>
                  <p className="text-gray-600 text-xs mt-1">Uses dedicated fields: shakshouka_title, shakshouka_subtitle, shakshouka_p1, shakshouka_p2, etc.</p>
                </div>
              </div>

              {/* Shakshouka Peninsula - Dedicated Text Fields */}
              {SHAKSHOUKA_SECTIONS.map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label}</label>
                    <input
                      className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all"
                      value={formData[section.en] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.en, e.target.value)}
                      placeholder={`Enter ${section.label}...`}
                    />
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (FR)</label>
                    <input
                      className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all"
                      value={formData[section.fr] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.fr, e.target.value)}
                      placeholder={`Entrez le ${section.label.toLowerCase()}...`}
                    />
                  </div>
                </React.Fragment>
              ))}

              {/* Shakshouka Peninsula - Rich Text Fields */}
              {[
                { label: 'Shakshouka Paragraph 1', en: 'shakshouka_p1_en', fr: 'shakshouka_p1_fr' },
                { label: 'Shakshouka Paragraph 2', en: 'shakshouka_p2_en', fr: 'shakshouka_p2_fr' },
              ].map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label}</label>
                    <ReactQuill
                      theme="snow"
                      value={formData[section.en] || ''}
                      onChange={(val: string) => handleInputChange(section.en, val)}
                      modules={quillModules}
                      className="rounded-xl overflow-hidden"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 text-right">{section.label} (FR)</label>
                    <ReactQuill
                      theme="snow"
                      value={formData[section.fr] || ''}
                      onChange={(val: string) => handleInputChange(section.fr, val)}
                      modules={quillModules}
                      className="rounded-xl overflow-hidden"
                    />
                  </div>
                </React.Fragment>
              ))}

              {/* Section Header: Mediterranean Reversal - Dedicated Fields */}
              <div className="col-span-full mt-8 mb-4">
                <div className="bg-brand-red/10 border-l-4 border-brand-red p-4 rounded-r-lg">
                  <h3 className="text-brand-red font-bold uppercase tracking-wider text-sm">Mediterranean Reversal Section</h3>
                  <p className="text-gray-600 text-xs mt-1">Uses dedicated fields: reversal_label, reversal_title, reversal_subtitle, reversal_tertiary, reversal_p1, reversal_p2, etc.</p>
                </div>
              </div>

              {/* Mediterranean Reversal - Dedicated Text Fields */}
              {REVERSAL_SECTIONS.map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label}</label>
                    <input
                      className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all"
                      value={formData[section.en] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.en, e.target.value)}
                      placeholder={`Enter ${section.label}...`}
                    />
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (FR)</label>
                    <input
                      className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all"
                      value={formData[section.fr] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.fr, e.target.value)}
                      placeholder={`Entrez le ${section.label.toLowerCase()}...`}
                    />
                  </div>
                </React.Fragment>
              ))}

              {/* Mediterranean Reversal - Rich Text Fields */}
              {[
                { label: 'Reversal Paragraph 1', en: 'reversal_p1_en', fr: 'reversal_p1_fr' },
                { label: 'Reversal Paragraph 2', en: 'reversal_p2_en', fr: 'reversal_p2_fr' },
              ].map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label}</label>
                    <ReactQuill
                      theme="snow"
                      value={formData[section.en] || ''}
                      onChange={(val: string) => handleInputChange(section.en, val)}
                      modules={quillModules}
                      className="rounded-xl overflow-hidden"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3 text-right">{section.label} (FR)</label>
                    <ReactQuill
                      theme="snow"
                      value={formData[section.fr] || ''}
                      onChange={(val: string) => handleInputChange(section.fr, val)}
                      modules={quillModules}
                      className="rounded-xl overflow-hidden"
                    />
                  </div>
                </React.Fragment>
              ))}

              {/* Section Header: Manifesto */}
              <div className="col-span-full mt-8 mb-4">
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <h3 className="text-purple-700 font-bold uppercase tracking-wider text-sm">Manifesto Section</h3>
                  <p className="text-gray-600 text-xs mt-1">Subtitle 1 (heading), Body 1-3 (verses/lines)</p>
                </div>
              </div>

              {MANIFESTO_SECTIONS.map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (EN)</label>
                    <input
                      className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all"
                      value={formData[section.en] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.en, e.target.value)}
                      placeholder={`Enter ${section.label}...`}
                    />
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (FR)</label>
                    <input
                      className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all"
                      value={formData[section.fr] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.fr, e.target.value)}
                      placeholder={`Entrez ${section.label.toLowerCase()}...`}
                    />
                  </div>
                </React.Fragment>
              ))}

              {/* Section Header: Red Gold & Fragrance */}
              <div className="col-span-full mt-8 mb-4">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="text-orange-700 font-bold uppercase tracking-wider text-sm">Red Gold & Fragrance Section</h3>
                  <p className="text-gray-600 text-xs mt-1">Subtitle 1 (label), Subtitle 2 (title), Subtitle 3 (subtitle), Body 1 (quote), Body 2 (olive title), Button 1</p>
                </div>
              </div>

              {FRAGRANCE_SECTIONS.map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (EN)</label>
                    {section.type === 'quill' ? (
                      <ReactQuill theme="snow" value={formData[section.en] || ''} onChange={(val: string) => handleInputChange(section.en, val)} modules={quillModules} className="rounded-xl overflow-hidden" />
                    ) : (
                      <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all" value={formData[section.en] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.en, e.target.value)} placeholder={`Enter ${section.label}...`} />
                    )}
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (FR)</label>
                    {section.type === 'quill' ? (
                      <ReactQuill theme="snow" value={formData[section.fr] || ''} onChange={(val: string) => handleInputChange(section.fr, val)} modules={quillModules} className="rounded-xl overflow-hidden" />
                    ) : (
                      <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all" value={formData[section.fr] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.fr, e.target.value)} placeholder={`Entrez ${section.label.toLowerCase()}...`} />
                    )}
                  </div>
                </React.Fragment>
              ))}

              {/* Red Gold CTA Button 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">CTA Button Label (EN)</label>
                <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-bold outline-none focus:bg-white focus:border-blue-500 transition-all" value={formData['button_1_label_en'] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('button_1_label_en', e.target.value)} placeholder="Button text..." />
                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 mt-4">CTA Button URL</label>
                <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-mono outline-none focus:bg-white focus:border-blue-500 transition-all" value={formData['button_1_url'] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('button_1_url', e.target.value)} placeholder="/page-path" />
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">CTA Button Label (FR)</label>
                <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-bold outline-none focus:bg-white focus:border-red-500 transition-all" value={formData['button_1_label_fr'] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('button_1_label_fr', e.target.value)} placeholder="Texte du bouton..." />
              </div>

              {/* Section Header: Area of Month */}
              <div className="col-span-full mt-8 mb-4">
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                  <h3 className="text-teal-700 font-bold uppercase tracking-wider text-sm">Area of Month Section</h3>
                  <p className="text-gray-600 text-xs mt-1">Subtitle 1 (label), Subtitle 2 (title), Body 1 (description), Button 1, Image 1</p>
                </div>
              </div>

              {AREA_MONTH_SECTIONS.map((section) => (
                <React.Fragment key={section.en}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (EN)</label>
                    {section.type === 'quill' ? (
                      <ReactQuill theme="snow" value={formData[section.en] || ''} onChange={(val: string) => handleInputChange(section.en, val)} modules={quillModules} className="rounded-xl overflow-hidden" />
                    ) : (
                      <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all" value={formData[section.en] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.en, e.target.value)} placeholder={`Enter ${section.label}...`} />
                    )}
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">{section.label} (FR)</label>
                    {section.type === 'quill' ? (
                      <ReactQuill theme="snow" value={formData[section.fr] || ''} onChange={(val: string) => handleInputChange(section.fr, val)} modules={quillModules} className="rounded-xl overflow-hidden" />
                    ) : (
                      <input className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all" value={formData[section.fr] || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(section.fr, e.target.value)} placeholder={`Entrez ${section.label.toLowerCase()}...`} />
                    )}
                  </div>
                </React.Fragment>
              ))}

              {/* Area of Month CTA + Image note */}
              <div className="col-span-full bg-teal-50 border border-teal-100 rounded-xl p-4 text-xs text-teal-700">
                ℹ️ <strong>Button 1</strong> and <strong>Image Slot 1</strong> for this section are edited in the Button 1 and Image Slot 1 blocks further below on this page.
              </div>
    </>
  );
};

export default HomePageFields;

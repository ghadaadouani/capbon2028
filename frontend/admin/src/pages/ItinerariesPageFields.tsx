import React from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Plus, Trash2 } from 'lucide-react';
import MediaPicker from '../components/MediaPicker';

export interface ItineraryCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface CTAButton {
  id: string;
  label: string;
  url: string;
  style: 'filled' | 'outline';
}

export interface ImageCard {
  id: string;
  image_url: string;
  caption: string;
}

export interface ItineraryData {
  hero: {
    label_en: string; label_fr: string;
    title_en: string; title_fr: string;
    subtitle_line_1_en: string; subtitle_line_1_fr: string;
    subtitle_line_2_en: string; subtitle_line_2_fr: string;
    body_text_en: string; body_text_fr: string;
  };
  cards: ItineraryCard[];
  body_paragraph_en: string;
  body_paragraph_fr: string;
  cta_buttons: CTAButton[];
  image_cards: ImageCard[];
}

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'],
  ],
};

interface Props {
  itinerariesData: ItineraryData;
  setItinerariesData: React.Dispatch<React.SetStateAction<ItineraryData>>;
  mediaPickerOpen: boolean;
  setMediaPickerOpen: (v: boolean) => void;
  activeImageField: string | null;
  setActiveImageField: (v: string | null) => void;
  setIsDirty: (dirty: boolean) => void;
}

/**
 * ItinerariesPageFields — all itineraries-page-specific CMS fields.
 * Extracted from PagesManager to keep it manageable.
 */
const ItinerariesPageFields: React.FC<Props> = ({
  itinerariesData,
  setItinerariesData,
  mediaPickerOpen,
  setMediaPickerOpen,
  activeImageField,
  setActiveImageField,
  setIsDirty,
}) => {
  return (
    <>
                  {/* Section Header: Itineraries */}
                  <div className="col-span-full mt-8 mb-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h3 className="text-blue-700 font-bold uppercase tracking-wider text-sm">Itineraries Page Sections</h3>
                      <p className="text-gray-600 text-xs mt-1">Complete page content management</p>
                    </div>
                  </div>

                  {/* A. Hero Section */}
                  <div className="col-span-full">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-6">
                      <h3 className="text-purple-700 font-bold uppercase tracking-wider text-sm">A. Page Header / Hero Block</h3>
                    </div>
                  </div>
                  
                  {/* Hero Label */}
                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Label (EN)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all"
                        value={itinerariesData.hero.label_en}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, label_en: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="TOURISM"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Label (FR)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all"
                        value={itinerariesData.hero.label_fr}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, label_fr: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="TOURISME"
                      />
                    </div>
                  </div>

                  {/* Hero Title */}
                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Title (EN)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-blue-500 transition-all"
                        value={itinerariesData.hero.title_en}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, title_en: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="Beyond the Resort Bubble: Active Itineraries"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Title (FR)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-lg font-serif italic outline-none focus:bg-white focus:border-red-500 transition-all"
                        value={itinerariesData.hero.title_fr}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, title_fr: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="Au-delà de la Bulle Resort: Itinéraires Actifs"
                      />
                    </div>
                  </div>

                  {/* Hero Subtitles */}
                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Subtitle Line 1 (EN)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-sans outline-none focus:bg-white focus:border-blue-500 transition-all"
                        value={itinerariesData.hero.subtitle_line_1_en}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, subtitle_line_1_en: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="THE FISHERMAN'S DAWN AND THE AROMATIC TRAIL"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Subtitle Line 1 (FR)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-sans outline-none focus:bg-white focus:border-red-500 transition-all"
                        value={itinerariesData.hero.subtitle_line_1_fr}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, subtitle_line_1_fr: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="L'AUBE DU PÊCHEUR ET LE SENTIER AROMATIQUE"
                      />
                    </div>
                  </div>

                  <div className="col-span-2 grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Subtitle Line 2 (EN)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-sans outline-none focus:bg-white focus:border-blue-500 transition-all"
                        value={itinerariesData.hero.subtitle_line_2_en}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, subtitle_line_2_en: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="ECO-ARCHAEOLOGY AND CYCLING THE EMERALD CROWN"
                      />
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Subtitle Line 2 (FR)</label>
                      <input
                        className="w-full p-4 bg-gray-50 border border-transparent rounded-xl text-sm font-sans outline-none focus:bg-white focus:border-red-500 transition-all"
                        value={itinerariesData.hero.subtitle_line_2_fr}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, subtitle_line_2_fr: e.target.value }
                          }));
                          setIsDirty(true);
                        }}
                        placeholder="ÉCO-ARCHÉOLOGIE ET CYCLISME DE LA COURONNE D'ÉMERAUDE"
                      />
                    </div>
                  </div>

                  {/* Hero Body Text */}
                  <div className="col-span-2">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Hero Body Text (EN)</label>
                      <ReactQuill 
                        theme="snow"
                        value={itinerariesData.hero.body_text_en}
                        onChange={(val: string) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            hero: { ...prev.hero, body_text_en: val }
                          }));
                          setIsDirty(true);
                        }}
                        modules={quillModules}
                        className="rounded-xl overflow-hidden"
                      />
                    </div>
                  </div>

                  {/* B. Numbered Cards Block */}
                  <div className="col-span-full">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
                      <h3 className="text-green-700 font-bold uppercase tracking-wider text-sm">B. Numbered Cards Block</h3>
                    </div>
                  </div>

                  {/* Cards List */}
                  <div className="col-span-full">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Experience Cards</label>
                        <button
                          type="button"
                          onClick={() => {
                            const newCard: ItineraryCard = {
                              id: Date.now().toString(),
                              number: String(itinerariesData.cards.length + 1).padStart(2, '0'),
                              title: '',
                              description: ''
                            };
                            setItinerariesData((prev: ItineraryData) => ({
                              ...prev,
                              cards: [...prev.cards, newCard]
                            }));
                            setIsDirty(true);
                          }}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-green-700 transition-all flex items-center gap-1"
                        >
                          <Plus size={12} /> Add Card
                        </button>
                      </div>
                      
                      <div className="space-y-4">
                        {itinerariesData.cards.map((card: any, index: number) => (
                          <div key={card.id} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                                  {card.number}
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-gray-600">Card {index + 1}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setItinerariesData((prev: ItineraryData) => ({
                                    ...prev,
                                    cards: prev.cards.filter((c: ItineraryCard) => c.id !== card.id)
                                  }));
                                  setIsDirty(true);
                                }}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Title (EN)</label>
                                <input
                                  className="w-full p-3 bg-white border border-transparent rounded-lg text-sm font-serif italic outline-none focus:bg-gray-50 focus:border-blue-500 transition-all"
                                  value={card.title}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const updatedCards = [...itinerariesData.cards];
                                    updatedCards[index] = { ...card, title: e.target.value };
                                    setItinerariesData((prev: ItineraryData) => ({ ...prev, cards: updatedCards }));
                                    setIsDirty(true);
                                  }}
                                  placeholder="Card title..."
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Number</label>
                                <input
                                  className="w-full p-3 bg-white border border-transparent rounded-lg text-sm font-sans outline-none focus:bg-gray-50 focus:border-blue-500 transition-all"
                                  value={card.number}
                                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const updatedCards = [...itinerariesData.cards];
                                    updatedCards[index] = { ...card, number: e.target.value };
                                    setItinerariesData((prev: ItineraryData) => ({ ...prev, cards: updatedCards }));
                                    setIsDirty(true);
                                  }}
                                  placeholder="01, 02, 03..."
                                />
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Description (EN)</label>
                              <textarea
                                className="w-full p-3 bg-white border border-transparent rounded-lg text-sm font-sans outline-none focus:bg-gray-50 focus:border-blue-500 transition-all resize-none"
                                rows={3}
                                value={card.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                  const updatedCards = [...itinerariesData.cards];
                                  updatedCards[index] = { ...card, description: e.target.value };
                                  setItinerariesData((prev: ItineraryData) => ({ ...prev, cards: updatedCards }));
                                  setIsDirty(true);
                                }}
                                placeholder="Card description..."
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* C. Body Text Block */}
                  <div className="col-span-full">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
                      <h3 className="text-orange-700 font-bold uppercase tracking-wider text-sm">C. Body Text / Long Paragraph Block</h3>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Body Paragraph (EN)</label>
                      <ReactQuill 
                        theme="snow"
                        value={itinerariesData.body_paragraph_en}
                        onChange={(val: string) => {
                          setItinerariesData((prev: ItineraryData) => ({
                            ...prev,
                            body_paragraph_en: val
                          }));
                          setIsDirty(true);
                        }}
                        modules={quillModules}
                        className="rounded-xl overflow-hidden"
                      />
                    </div>
                  </div>

                  {/* D. CTA Buttons Block */}
                  <div className="col-span-full">
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-6">
                      <h3 className="text-indigo-700 font-bold uppercase tracking-wider text-sm">D. CTA Buttons Block</h3>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="grid grid-cols-2 gap-6">
                        {itinerariesData.cta_buttons.map((button: CTAButton, index: number) => (
                          <div key={button.id} className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black uppercase tracking-widest text-gray-600">Button {index + 1}</span>
                              <select
                                className="text-xs px-2 py-1 border border-gray-300 rounded-lg"
                                value={button.style}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                  const updatedButtons = [...itinerariesData.cta_buttons];
                                  updatedButtons[index] = { ...button, style: e.target.value as 'filled' | 'outline' };
                                  setItinerariesData((prev: ItineraryData) => ({ ...prev, cta_buttons: updatedButtons }));
                                  setIsDirty(true);
                                }}
                              >
                                <option value="filled">Filled</option>
                                <option value="outline">Outline</option>
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Label (EN)</label>
                              <input
                                className="w-full p-3 bg-gray-50 border border-transparent rounded-lg text-sm font-sans outline-none focus:bg-white focus:border-blue-500 transition-all"
                                value={button.label}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  const updatedButtons = [...itinerariesData.cta_buttons];
                                  updatedButtons[index] = { ...button, label: e.target.value };
                                  setItinerariesData((prev: ItineraryData) => ({ ...prev, cta_buttons: updatedButtons }));
                                  setIsDirty(true);
                                }}
                                placeholder="Button text..."
                              />
                            </div>
                            
                            <div>
                              <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">URL</label>
                              <input
                                className="w-full p-3 bg-gray-50 border border-transparent rounded-lg text-sm font-sans outline-none focus:bg-white focus:border-blue-500 transition-all"
                                value={button.url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  const updatedButtons = [...itinerariesData.cta_buttons];
                                  updatedButtons[index] = { ...button, url: e.target.value };
                                  setItinerariesData((prev: ItineraryData) => ({ ...prev, cta_buttons: updatedButtons }));
                                  setIsDirty(true);
                                }}
                                placeholder="/path/to/page"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* E. Image Cards Block */}
                  <div className="col-span-full">
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-6">
                      <h3 className="text-pink-700 font-bold uppercase tracking-wider text-sm">E. Image Cards Block (with Captions)</h3>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="grid grid-cols-2 gap-6">
                        {itinerariesData.image_cards.map((imageCard: ImageCard, index: number) => (
                          <div key={imageCard.id} className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black uppercase tracking-widest text-gray-600">Image {index + 1}</span>
                            </div>
                            
                            <div>
                              <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Image URL</label>
                              <input
                                className="w-full p-3 bg-gray-50 border border-transparent rounded-lg text-sm font-sans outline-none focus:bg-white focus:border-blue-500 transition-all"
                                value={imageCard.image_url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                  const updatedImageCards = [...itinerariesData.image_cards];
                                  updatedImageCards[index] = { ...imageCard, image_url: e.target.value };
                                  setItinerariesData((prev: ItineraryData) => ({ ...prev, image_cards: updatedImageCards }));
                                  setIsDirty(true);
                                }}
                                placeholder="https://example.com/image.jpg"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Caption (EN)</label>
                              <textarea
                                className="w-full p-3 bg-gray-50 border border-transparent rounded-lg text-sm font-sans outline-none focus:bg-white focus:border-blue-500 transition-all resize-none"
                                rows={2}
                                value={imageCard.caption}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                  const updatedImageCards = [...itinerariesData.image_cards];
                                  updatedImageCards[index] = { ...imageCard, caption: e.target.value };
                                  setItinerariesData((prev: ItineraryData) => ({ ...prev, image_cards: updatedImageCards }));
                                  setIsDirty(true);
                                }}
                                placeholder="Image caption..."
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
    </>
  );
};

export default ItinerariesPageFields;

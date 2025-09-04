import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Slide } from './components/Slide';
import { Navigation } from './components/Navigation';
import { SlideContent } from './types';
import { ProgressBar } from './components/ProgressBar';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [seenSlides, setSeenSlides] = useState<Set<number>>(new Set([0]));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const presentationRef = useRef<HTMLDivElement>(null);


  const slidesData: SlideContent[] = useMemo(() => [
    {
      type: 'title',
      title: 'Mimpi: Membangun Ekosistem Kreatif',
      subtitle: 'BACHTIAR ARYANSYAH PUTRA (24091367032)',
    },
    {
      type: 'image_text_split',
      title: 'VISUAL ART THAT TELLS MY DREAM',
      imageUrl: 'https://images.unsplash.com/photo-1554228198-36a3fa994f7b?q=80&w=1964&auto=format&fit=crop',
    },
    {
      type: 'list',
      title: 'Mimpi: Membangun Ekosistem Kreatif',
      points: [
        { heading: 'Apa', text: 'Mendirikan Creative & Visual Storytelling Agency yang visioner dan inovatif.' },
        { heading: 'Fokus', text: 'Bukan sekadar dokumentasi teknis, melainkan seni bercerita melalui visual (visual storytelling).' },
        { heading: 'Tujuan', text: 'Menjadi kurator memori, perangkai emosi, dan arsiparis momen berharga bagi setiap klien.' },
      ],
    },
    {
        type: 'list',
        title: 'Layanan Komprehensif',
        points: [
            { heading: 'Pesta & Perayaan', text: 'Pernikahan, ulang tahun, dan acara keluarga.' },
            { heading: 'Acara & Event', text: 'Konser, festival, seminar, dan acara komunitas.' },
            { heading: 'Profesional & Korporat', text: 'Company profile, konten marketing, dan dokumentasi event perusahaan.' },
        ]
    },
    {
      type: 'vision',
      title: 'Visi & Cara Mencapai Mimpi Anda',
      vision: 'Menjadi agency kreatif terdepan di Indonesia melalui penceritaan visual yang kuat, inovatif, dan berstandar internasional.',
      mission: {
        heading: 'Misi:',
        points: [
            'Menghasilkan karya berkualitas tinggi.',
            'Membangun hubungan personal dengan klien.',
            'Mengembangkan tim kreatif yang solid.',
            'Terus berinovasi mengikuti tren dan teknologi.',
        ]
      }
    },
    {
        type: 'roadmap',
        title: 'Peta Jalan Strategis (Roadmap)',
        points: [
            { heading: 'Fase 1: Fondasi (Tahun 0-1)', text: 'Membangun portofolio sebagai freelancer. Menguasai skill & membeli peralatan esensial.' },
            { heading: 'Fase 2: Perintisan (Tahun 1-3)', text: 'Mendirikan badan usaha & membangun aset digital (web & media sosial). Membangun jaringan tim & mengumpulkan testimoni klien.' },
            { heading: 'Fase 3: Pertumbuhan (Tahun 3-5)', text: 'Merekrut tim inti & menyewa kantor/studio. Menargetkan klien korporat & memperluas layanan.' },
        ]
    },
    {
        type: 'grid',
        title: 'Kontribusi Anda untuk Masyarakat',
        points: [
            'Mengabadikan Sejarah & Kenangan',
            'Menciptakan Lapangan Kerja',
            'Mendukung Bisnis Lain',
            'Meningkatkan Standar Industri',
            'Mendokumentasikan Budaya Lokal',
        ]
    },
    {
        type: 'career',
        title: 'Rumusan Jenjang Karir Anda ke Depan',
        points: [
            { heading: 'Tahap 1 (Tahun 0-3): Praktisi Kreatif', text: 'Peran: Founder & Chief Photographer/Videographer. Fokus: Eksekusi proyek dan membangun reputasi.'},
            { heading: 'Tahap 2 (Tahun 3-6): Pemimpin Tim', text: 'Peran: Founder & Creative Director. Fokus: Mengarahkan tim, quality control, dan penjualan.'},
            { heading: 'Tahap 3 (Tahun 6+): Visioner', text: 'Peran: CEO (Chief Executive Officer). Fokus: Strategi jangka panjang, ekspansi, dan membangun legasi.'},
        ]
    },
    {
      type: 'end',
      title: 'Terima Kasih',
    },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      const next = Math.min(prev + 1, slidesData.length - 1);
      if (next !== prev) {
        setSeenSlides(oldSet => new Set(oldSet).add(next));
      }
      return next;
    });
  }, [slidesData.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!presentationRef.current) return;

    if (!document.fullscreenElement) {
      presentationRef.current.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return (
    <main className="bg-slate-50 text-slate-800 w-screen h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div ref={presentationRef} className="w-full max-w-6xl aspect-video bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col border border-white/20">
            {/* Animated Gradient Blobs */}
            <div className="absolute top-0 -left-24 w-96 h-96 bg-gradient-to-br from-teal-200 via-sky-200 to-transparent rounded-full opacity-50 filter blur-3xl animate-blob-float"></div>
            <div className="absolute bottom-0 -right-24 w-96 h-96 bg-gradient-to-br from-sky-200 via-purple-200 to-transparent rounded-full opacity-50 filter blur-3xl animate-blob-float" style={{ animationDelay: '5s', animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-pink-200 via-yellow-100 to-transparent rounded-full opacity-40 filter blur-3xl animate-blob-float" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>

            <div className="flex-grow flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <Slide 
                          content={slide} 
                          isActive={index === currentSlide} 
                          hasBeenSeen={seenSlides.has(index)}
                        />
                    </div>
                ))}
            </div>
            
            <div className="absolute bottom-4 right-4 text-xs text-slate-400 bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm z-10" aria-live="polite">
                <span>{currentSlide + 1}</span>
                <span className="mx-1">/</span>
                <span>{slidesData.length}</span>
            </div>

            <ProgressBar current={currentSlide} total={slidesData.length} />

            <Navigation 
                onPrev={prevSlide} 
                onNext={nextSlide} 
                isFirst={currentSlide === 0}
                isLast={currentSlide === slidesData.length - 1}
            />

            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 left-4 p-3 rounded-full bg-slate-100/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 z-20"
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              {isFullscreen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0v4m0-4h-4m-4-4l-6 6m0 0v-4m0 4h4" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4m-4 0l5 5m7-5h4v4m-4 0l5 5m-12 7v-4h4m-4 0l5-5m7 12h-4v-4m4 0l-5-5" />
                </svg>
              )}
            </button>
        </div>
        
        <footer className="absolute bottom-4 text-slate-400 text-sm">
            Presentation by Bachtiar Aryansyah Putra
        </footer>
    </main>
  );
};

export default App;
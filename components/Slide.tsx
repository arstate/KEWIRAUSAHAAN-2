import React from 'react';
import { SlideContent, SlidePoint } from '../types';

interface SlideProps {
  content: SlideContent;
  isActive: boolean;
  hasBeenSeen: boolean;
}

const TitleSlide: React.FC<{ title: string; subtitle?: string, isActive: boolean, hasBeenSeen: boolean }> = ({ title, subtitle, isActive, hasBeenSeen }) => (
    <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative z-10">
            <h1
                className={`text-6xl font-bold text-teal-600 leading-tight tracking-tight ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: '150ms' }}
            >
                {title}
            </h1>
            {subtitle && (
                <p 
                    className={`mt-6 text-2xl text-slate-500 font-light ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: '300ms' }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    </div>
);

const ImageTextSplitSlide: React.FC<{ title: string; imageUrl?: string, isActive: boolean, hasBeenSeen: boolean }> = ({ title, imageUrl, isActive, hasBeenSeen }) => (
    <div className="flex h-full w-full bg-slate-50">
        <div className="w-5/12 flex flex-col justify-center items-start p-16">
            <h2 
                className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-600 to-teal-600 leading-tight tracking-tight ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: '150ms' }}
            >
                {title}
            </h2>
        </div>
        <div className="w-7/12 h-full overflow-hidden">
             {imageUrl && (
                <div className={`w-full h-full ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '300ms' }}>
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-full h-full object-contain object-center"
                    />
                </div>
            )}
        </div>
    </div>
);

const ListSlide: React.FC<{ title: string; points: SlidePoint[], isActive: boolean, hasBeenSeen: boolean }> = ({ title, points, isActive, hasBeenSeen }) => (
    <div className="p-16 h-full flex flex-col">
        <h2 
            className={`text-4xl font-bold text-sky-700 mb-12 pb-4 border-b-2 border-sky-100 ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
             style={{ animationDelay: '150ms' }}
        >
            {title}
        </h2>
        <div className="space-y-8 flex-grow">
            {points.map((point, index) => (
                <div 
                    key={index}
                    className={`flex items-start ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                    <div className="mt-1 flex-shrink-0 w-8 h-8 bg-gradient-to-br from-sky-400 to-teal-400 text-white shadow-md rounded-full flex items-center justify-center font-bold text-lg mr-6">{index + 1}</div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-800">{point.heading}</h3>
                        <p className="text-slate-600 text-lg mt-1">{point.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const VisionSlide: React.FC<Omit<SlideContent, 'type'> & { isActive: boolean, hasBeenSeen: boolean }> = ({ title, vision, mission, isActive, hasBeenSeen }) => (
    <div className="p-16 h-full flex flex-col">
        <h2 className={`text-4xl font-bold text-teal-700 mb-8 ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
            <div 
                className={`bg-teal-50 p-8 rounded-lg relative overflow-hidden ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: '300ms' }}
            >
                <div aria-hidden="true" className={`absolute top-4 right-4 text-teal-200 opacity-70 ${isActive ? 'animate-gentle-pulse' : ''}`}>
                    <VisionIcon />
                </div>
                <h3 className="text-2xl font-semibold text-teal-800 mb-4 border-b-2 border-teal-200 pb-2 relative z-10">Visi</h3>
                <p className="text-teal-900 text-lg leading-relaxed relative z-10">{vision}</p>
            </div>
            <div 
                className={`bg-sky-50 p-8 rounded-lg relative overflow-hidden ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: '450ms' }}
            >
                 <div aria-hidden="true" className={`absolute top-4 right-4 text-sky-200 opacity-70 ${isActive ? 'animate-gentle-pulse' : ''}`} style={{animationDelay: '0.5s'}}>
                    <MissionIcon />
                </div>
                <h3 className="text-2xl font-semibold text-sky-800 mb-4 border-b-2 border-sky-200 pb-2 relative z-10">{mission?.heading}</h3>
                <ul className="list-disc list-inside space-y-2 text-sky-900 text-lg relative z-10">
                    {mission?.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
            </div>
        </div>
    </div>
);

const RoadmapSlide: React.FC<{ title: string; points: SlidePoint[], isActive: boolean, hasBeenSeen: boolean }> = ({ title, points, isActive, hasBeenSeen }) => (
    <div className="p-16 h-full flex flex-col">
        <h2 className={`text-4xl font-bold text-slate-700 mb-12 text-center ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>{title}</h2>
        <div className="flex justify-between items-center flex-grow relative px-10">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-teal-300 to-sky-300 -translate-y-1/2" style={{width: '90%', left: '5%'}}></div>
            
            {points.map((point, index) => (
                <div 
                    key={index} 
                    className={`w-1/3 px-4 z-10 flex flex-col items-center ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                    <div className="w-4 h-4 bg-white border-2 border-teal-500 rounded-full mb-4 z-10"></div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-400 h-full w-full">
                        <h3 className="text-xl font-bold text-teal-600 mb-3">{point.heading}</h3>
                        <p className="text-slate-600 text-sm">{point.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const GridSlide: React.FC<{ title: string; points: string[], isActive: boolean, hasBeenSeen: boolean }> = ({ title, points, isActive, hasBeenSeen }) => (
     <div className="p-16 h-full flex flex-col">
        <h2 className={`text-4xl font-bold text-sky-700 mb-12 text-center ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>{title}</h2>
        <div className="grid grid-cols-3 gap-8 flex-grow">
            {points.map((point, index) => (
                 <div 
                    key={index} 
                    className={`bg-sky-50 border border-sky-100 text-sky-800 rounded-lg flex items-center justify-center p-6 text-center text-xl font-semibold hover:bg-sky-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                 >
                    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#99e2ff_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">{point}</span>
                </div>
            ))}
            <div className={`bg-gray-100 border border-gray-200 text-gray-500 rounded-lg flex items-center justify-center p-6 text-center text-xl font-semibold col-start-2 ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${300 + points.length * 100}ms` }}
            >
                Dan Lainnya...
            </div>
        </div>
    </div>
);

const CareerSlide: React.FC<{ title: string; points: SlidePoint[], isActive: boolean, hasBeenSeen: boolean }> = ({ title, points, isActive, hasBeenSeen }) => (
    <div className="p-16 h-full flex flex-col">
        <h2 className={`text-4xl font-bold text-teal-700 mb-12 ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>{title}</h2>
        <div className="space-y-6 flex-grow">
            {points.map((point, index) => (
                <div 
                    key={index}
                    className={`bg-teal-50/70 p-6 rounded-lg relative pl-8 ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${300 + index * 150}ms` }}
                >
                     <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-teal-400 to-sky-400 rounded-l-lg"></div>
                    <h3 className="text-xl font-bold text-teal-800">{point.heading}</h3>
                    <p className="text-teal-700 mt-2">{point.text}</p>
                </div>
            ))}
        </div>
    </div>
);


const EndSlide: React.FC<{ title: string, isActive: boolean, hasBeenSeen: boolean }> = ({ title, isActive, hasBeenSeen }) => (
    <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-gradient-to-br from-sky-50 to-teal-50 relative overflow-hidden">
        <div aria-hidden="true" className="absolute -top-16 -left-16 w-64 h-64 bg-sky-200 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div aria-hidden="true" className="absolute -bottom-24 -right-10 w-72 h-72 bg-teal-200 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <h1 className={`text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500 relative z-10 ${!hasBeenSeen ? 'opacity-0' : ''} ${isActive ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '150ms' }}>
            {title}
        </h1>
    </div>
);

export const Slide: React.FC<SlideProps> = ({ content, isActive, hasBeenSeen }) => {
  switch (content.type) {
    case 'title':
      return <TitleSlide title={content.title} subtitle={content.subtitle} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'image_text_split':
        return <ImageTextSplitSlide title={content.title} imageUrl={content.imageUrl} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'list':
      return <ListSlide title={content.title} points={content.points as SlidePoint[]} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'vision':
      return <VisionSlide title={content.title} vision={content.vision} mission={content.mission} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'roadmap':
        return <RoadmapSlide title={content.title} points={content.points as SlidePoint[]} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'grid':
        return <GridSlide title={content.title} points={content.points as string[]} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'career':
        return <CareerSlide title={content.title} points={content.points as SlidePoint[]} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    case 'end':
      return <EndSlide title={content.title} isActive={isActive} hasBeenSeen={hasBeenSeen} />;
    default:
      return <div>Unknown slide type</div>;
  }
};
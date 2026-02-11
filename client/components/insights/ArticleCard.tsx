import { useState } from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  readTime: string;
  image?: string;
}

export default function ArticleCard({
  title,
  description,
  readTime,
  image,
}: ArticleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 h-full flex flex-col cursor-pointer"
    >
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        {!image && (
          <div className="text-primary/40 text-center">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
        {isExpanded && (
          <p className="text-gray-700 flex-grow mb-6 leading-relaxed text-base animate-fadeIn">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between pt-6 border-t border-white/40 mt-auto">
          <a
            href="#"
            onClick={(e) => e.stopPropagation()}
            className="text-primary font-semibold hover:text-primary/70 transition-colors"
          >
            Read Article →
          </a>
          <span className="text-gray-600 text-sm">{readTime}</span>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

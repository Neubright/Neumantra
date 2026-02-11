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
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
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

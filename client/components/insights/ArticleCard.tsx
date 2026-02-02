interface ArticleCardProps {
  title: string;
  description: string;
  readTime: string;
}

export default function ArticleCard({
  title,
  description,
  readTime,
}: ArticleCardProps) {
  return (
    <div className="backdrop-blur-xl bg-white/30 border-2 border-white/80 rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:bg-white/40 hover:border-white/100 h-full flex flex-col">
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-700 flex-grow mb-6 leading-relaxed text-base">
        {description}
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-white/40">
        <a
          href="#"
          className="text-accent font-semibold hover:text-red-700 transition-colors"
        >
          Read Article →
        </a>
        <span className="text-gray-600 text-sm">{readTime}</span>
      </div>
    </div>
  );
}

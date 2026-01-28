interface ArticleCardProps {
  title: string;
  description: string;
  readTime: string;
}

export default function ArticleCard({ title, description, readTime }: ArticleCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
      <h3 className="text-xl font-bold text-primary mb-4">
        {title}
      </h3>
      <p className="text-gray-700 flex-grow mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <a
          href="#"
          className="text-accent font-semibold hover:text-red-700 transition-colors"
        >
          Read Article →
        </a>
        <span className="text-gray-500 text-sm">{readTime}</span>
      </div>
    </div>
  );
}

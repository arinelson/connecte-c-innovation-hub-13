
const ArticleSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse mb-8" />
          <div className="w-3/4 h-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
          <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;

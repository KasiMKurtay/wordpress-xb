

const Title = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      <div className="relative">
        <div className="relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-wider">
            WordPress 
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">XB Development</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 opacity-40 -z-0"></span>
            </span>
            <span className="block md:inline-block mt-2 md:mt-0 md:ml-4 text-gray-700">
              
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <p className="text-lg text-gray-600">
              Premium quality plugins for your WordPress site
            </p>
            <div className="flex items-center">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
                <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full animate-pulse"></span>
                {0} items available
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;

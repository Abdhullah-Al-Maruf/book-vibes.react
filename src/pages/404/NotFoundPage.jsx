import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 py-8 lg:py-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          
          {/* Illustration / Image Area */}
          <div className="mb-6 flex justify-center">
            {/* You can replace this SVG with an <img src="/your-image.png" alt="404" className="max-w-md w-full" /> */}
            <svg
              className="w-full max-w-lg h-auto text-primary-600 dark:text-primary-500"
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract Background Shapes */}
              <circle cx="300" cy="200" r="150" fill="currentColor" fillOpacity="0.1" />
              <circle cx="450" cy="100" r="80" fill="currentColor" fillOpacity="0.05" />
              
              {/* 404 Text Art */}
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="sans-serif"
                fontSize="120"
                fontWeight="bold"
                fill="currentColor"
                className="text-gray-200 dark:text-gray-700"
              >
                404
              </text>
              
              {/* Floating Elements */}
              <rect x="100" y="100" width="40" height="40" rx="8" fill="#3B82F6" opacity="0.8" className="animate-bounce" style={{ animationDuration: '3s' }} />
              <circle cx="500" cy="300" r="20" fill="#8B5CF6" opacity="0.8" className="animate-pulse" />
              <path d="M150 300 L200 350 L100 350 Z" fill="#10B981" opacity="0.6" className="animate-bounce" style={{ animationDuration: '4s' }} />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          
          {/* Subheadline */}
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          
          {/* Description */}
          <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {/* 
               If using flowbite-react, replace the <a> tags below with:
               <Button color="blue" href="/">Back to Homepage</Button>
            */}
            <a
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back to Homepage
            </a>
            
            <a
              href="/contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
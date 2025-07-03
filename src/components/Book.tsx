const Book = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
        <div className="h-48 overflow-hidden bg-blue-500">
          <img
            src="https://placehold.co/600x400/transparent/FFF"
            alt="Project 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Website Redesign
          </h3>
          <p className="mt-2 text-gray-600">
            Complete redesign of corporate website with improved UX and modern
            aesthetics.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              Web Design
            </span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
              UX
            </span>
          </div>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View case study
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Book;

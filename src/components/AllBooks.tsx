import { Link } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Borrow from "@/pages/borrowbookpage/Borrow";

const AllBooks = () => {
  const book = {
    bookId: "adjhlkjwa54a63",
  };

  return (
    <>
      <section className="px-4 py-12 sm:px-6 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              All Books
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Check out some of our recent collections here.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  Complete redesign of corporate website with improved UX and
                  modern aesthetics.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    Web Design
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    UX
                  </span>
                  <Link to={"/create-book"}>
                    <button>Add a book</button>
                  </Link>
                </div>
                <Link
                  to={"#"}
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Borrow This book
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
                </Link>
                <Borrow bookId={book.bookId} />
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden bg-green-500">
                <img
                  src="https://placehold.co/600x400/transparent/FFF"
                  alt="Project 2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mobile Application
                </h3>
                <p className="mt-2 text-gray-600">
                  Cross-platform mobile app for health tracking with real-time
                  analytics.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                    React Native
                  </span>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    Health Tech
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

            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden bg-purple-500">
                <img
                  src="https://placehold.co/600x400/transparent/FFF"
                  alt="Project 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  E-commerce Platform
                </h3>
                <p className="mt-2 text-gray-600">
                  Custom e-commerce solution with integrated payment processing
                  and inventory management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                    E-commerce
                  </span>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    Payment Gateway
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
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden bg-purple-500">
                <img
                  src="https://placehold.co/600x400/transparent/FFF"
                  alt="Project 3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  E-commerce Platform
                </h3>
                <p className="mt-2 text-gray-600">
                  Custom e-commerce solution with integrated payment processing
                  and inventory management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
                    E-commerce
                  </span>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">
                    Payment Gateway
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
          </div>

          {/* 
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
            >
              {" "}
              View all projects{" "}
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AllBooks;

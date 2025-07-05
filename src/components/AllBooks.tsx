import { Link } from "react-router";
import { useGetBooksQuery } from "@/redux/features/book/booksApi";
import Book from "./Book";

const AllBooks = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  if (isLoading) return <p className="text-center mt-10">Loading books...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load books.</p>
    );

  return (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books?.map((book) => (
            <Book key={book._id || book.bookId} book={book} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/create-book"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Add a New Book
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;

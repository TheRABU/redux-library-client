import Borrow from "@/pages/borrowbookpage/Borrow";
import type { BookInterface } from "@/types";
import { Link } from "react-router";

interface BookProps {
  book: BookInterface;
}

const Book = ({ book }: BookProps) => {
  const {
    title,
    author,
    genre,
    isbn,
    copies,
    availability,
    description,
    bookId,
    _id,
    bookImgUrl,
  } = book;

  const id = _id || bookId; // Fallback for MongoDB or local data

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden bg-blue-500">
        <img
          src={
            bookImgUrl ||
            "https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?t=st=1751633563~exp=1751637163~hmac=75f26072c8faf2c42f1d7af1c43257fe845b5c4d850ba29a4132dffd4bfb0223&w=740"
          }
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-3 text-sm text-gray-700">
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>ISBN:</strong> {isbn}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Copies: {copies}
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            {availability ? "Available" : "Unavailable"}
          </span>
          <Link
            to={`/books/${id}`}
            className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
          >
            View this book
          </Link>
        </div>
        <div className="mt-4">
          <Borrow book={book} />
        </div>
      </div>
    </div>
  );
};

export default Book;

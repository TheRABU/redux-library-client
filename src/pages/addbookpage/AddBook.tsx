import { useDispatch } from "react-redux";

import AppDispatch from "@/redux/store"; // If you have typed dispatch
import { useRef } from "react";
import { addBook } from "@/redux/features/book/bookSlice";

const AddBook = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const isbn = form.isbn.value.trim();
    const genre = form.genre.value; // Updated select name
    const description = form.description.value.trim(); // Updated textarea name
    const quantity = form.quantity.value; // Updated select name
    const availability = form.availability.value === "available"; // true/false based on select

    // Create book object
    const newBook = {
      title,
      author,
      genre,
      isbn,
      copies: Number(quantity),
      availability,
      description,
    };
    console.log(newBook);
    // Dispatch the action
    dispatch(addBook(newBook));

    // Optional: reset form
    form.reset();
  };

  return (
    <section className="w-full lg:max-w-7xl px-0 lg:px-28">
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg mb-8">
        <div className="mt-10 text-center font-bold">Add your book</div>
        <div className="mt-3 text-center text-4xl font-bold">
          Add your book for sale or publish
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                required
                className="input-style"
                placeholder="Title *"
              />
              <input
                type="text"
                name="author"
                required
                className="input-style"
                placeholder="Author *"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                name="isbn"
                required
                className="input-style w-full"
                placeholder="ISBN *"
              />
            </div>

            {/* Genre */}
            <div className="my-6 flex gap-4">
              <select name="genre" required className="select-style w-1/2">
                <option value="">Select Genre</option>
                <option value="Thriller">Thriller</option>
                <option value="Novel">Novel</option>
              </select>

              {/* Availability */}
              <select
                name="availability"
                required
                className="select-style w-1/2"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>

              {/* Quantity */}
              <select name="quantity" required className="select-style w-1/2">
                <option value="">Select quantity</option>
                <option value="1">1 copy</option>
                <option value="5">5 copies</option>
                <option value="10">10 copies</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <textarea
                name="description"
                rows={5}
                placeholder="Description"
                className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-700"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;

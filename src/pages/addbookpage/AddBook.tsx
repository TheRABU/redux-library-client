import { toast } from "react-hot-toast";
import { useAddBookMutation } from "@/redux/features/book/booksApi";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";

const AddBook = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // let availability = form.availability.value;
    // if (availability.value === "available") {
    //   availability = true;
    // } else {
    //   availability = false;
    // }
    const availability =
      (form.elements.namedItem("availability") as HTMLSelectElement).value ===
      "true";
    const newBook = {
      title: (
        form.elements.namedItem("title") as HTMLInputElement
      ).value.trim(),
      author: (
        form.elements.namedItem("author") as HTMLInputElement
      ).value.trim(),
      genre: (
        form.elements.namedItem("genre") as HTMLSelectElement
      ).value.toUpperCase(), // this gave me error because in the backend bloody typescript enum was UPPERCASE LETTERS!!!!
      isbn: (form.elements.namedItem("isbn") as HTMLInputElement).value.trim(),
      description: (
        form.elements.namedItem("description") as HTMLTextAreaElement
      ).value.trim(),
      copies: Number(
        (form.elements.namedItem("quantity") as HTMLSelectElement).value
      ),
      available: availability,
    };

    try {
      await addBook(newBook).unwrap();

      form.reset();
      navigate("/");
      toast.success("Book added successfully!");
    } catch (err) {
      toast.error("Failed to add book.");
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
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
                <option value="fiction">FICTION</option>
                <option value="non_fiction">NON_FICTION</option>
                <option value="science">SCIENCE</option>
                <option value="history">HISTORY</option>
                <option value="biography">BIOGRAPHY</option>
                <option value="fantasy">FANTASY</option>
              </select>

              {/* Av</script>ailability */}
              <select
                name="availability"
                required
                className="select-style w-1/2"
              >
                <option value="true">Available</option>
                <option value="false">Unavailable</option>
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
      <Toaster />
    </section>
  );
};

export default AddBook;

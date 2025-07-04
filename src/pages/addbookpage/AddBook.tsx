import { toast } from "react-hot-toast";
import { useAddBookMutation } from "@/redux/features/book/booksApi";
import { useNavigate } from "react-router";

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
    const availability = form.availability.value === "true";
    const newBook = {
      title: form.title.value.trim(),
      author: form.author.value.trim(),
      genre: form.genre.value,
      isbn: form.isbn.value.trim(),
      description: form.description.value.trim(),
      copies: Number(form.quantity.value),
      availability: availability,
    };
    console.log(newBook);

    try {
      await addBook(newBook).unwrap();
      toast.success("Book added successfully!");
      form.reset();
      navigate("/");
    } catch (err) {
      toast.error("Failed to add book.");
      console.error(err);
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
    </section>
  );
};

export default AddBook;

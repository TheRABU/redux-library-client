const AddBook = () => {
  return (
    <>
      <section className="w-full lg:max-w-7xl px-0 lg:px-28">
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg mb-8">
          <div className="mt-10 text-center font-bold">Add your book</div>
          <div className="mt-3 text-center text-4xl font-bold">
            Add your book for sale or publish
          </div>
          <div className="p-8">
            <form>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="title"
                  className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Title *"
                />
                <input
                  type="text"
                  name="author"
                  className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Author *"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="isbn"
                  className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="ISBN *"
                />
              </div>
              <div className="my-6 flex gap-4">
                <select
                  name="select"
                  id="select"
                  className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option className="font-semibold text-slate-300">
                    Select Genre
                  </option>
                  <option className="font-semibold text-slate-300">
                    Thriller
                  </option>
                  <option className="font-semibold text-slate-300">
                    Novel
                  </option>
                </select>
                <select
                  name="select"
                  id="select"
                  className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option className="font-semibold text-slate-300">
                    For sale
                  </option>
                  <option className="font-semibold text-slate-300">
                    For Borrow/Lend
                  </option>
                </select>
                <select
                  name="select"
                  id="select"
                  className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                >
                  <option className="font-semibold text-slate-300">
                    Select quantity
                  </option>
                  <option className="font-semibold text-slate-300">
                    5 copies
                  </option>
                </select>
              </div>
              <div className="">
                <textarea
                  name="textarea"
                  id="text"
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
                >
                  Description
                </textarea>
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
    </>
  );
};

export default AddBook;

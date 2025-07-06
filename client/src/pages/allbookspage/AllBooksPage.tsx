import { useGetBooksQuery } from "@/redux/features/book/booksApi";
import { Link } from "react-router";

const AllBooksPage = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  if (isLoading) return <p className="text-center mt-10">Loading books...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load books.</p>
    );
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="px-2 mb-12 mx-auto py-8 max-w-4xl">
          <header>
            <h2 className="mb-4 font-semibold dark:text-gray-100 text-2xl text-center">
              Books You May Like
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            {books?.map((book, idx) => (
              <article
                key={idx}
                className="flex border rounded dark:border-gray-700/50 dark:bg-gray-800 max-w-md"
              >
                <img
                  className="object-cover w-[140px] h-[200px] rounded-l"
                  loading="lazy"
                  src={
                    book.imgUrl
                      ? book.imgUrl
                      : "http://books.google.com/books/content?id=jg8VvObwjM8C&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api"
                  }
                  alt="Anselm Kiefer"
                  width="140"
                  height="200"
                />
                <div className="flex flex-col justify-between flex-1 p-2">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold dark:text-white line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                      {book.description}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      - {book.author}
                    </p>
                  </div>
                  <div className="flex items-center justify-end gap-2 dark:text-gray-300 flex-wrap">
                    <a
                      target="_blank"
                      href=""
                      className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                      aria-label="Buy on Amazon for 189₹"
                    >
                      <img
                        src="https://www.svgrepo.com/show/349584/amazon.svg"
                        className="w-5 h-5"
                        alt=""
                        width="20"
                        height="20"
                      />
                      <span>Quantity {book.copies}</span>
                    </a>
                    <a
                      target="_blank"
                      href=""
                      className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                      aria-label="Buy on Flipkart for 150₹"
                    >
                      <img
                        src="https://www.svgrepo.com/show/162476/flipkart.svg"
                        className="w-5 h-5"
                        alt=""
                        width="20"
                        height="20"
                      />
                      <span>
                        {book.available ? "Available" : "Not Available"}
                      </span>
                    </a>
                    <Link to={`/books/${book._id}`}>View Details</Link>
                  </div>
                </div>
              </article>
            ))}

            {/* <article className="flex border rounded dark:border-gray-700/50 dark:bg-gray-800 max-w-md">
              <img
                className="object-cover w-[140px] h-[200px] rounded-l"
                loading="lazy"
                src="http://books.google.com/books/content?id=LEV2RAAACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;source=gbs_api"
                alt="Math Jokes 4 Mathy Folks"
                width="140"
                height="200"
              />
              <div className="flex flex-col justify-between flex-1 p-2">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold dark:text-white line-clamp-2">
                    Math Jokes 4 Mathy Folks
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    Professor and Mathemagician, Harvey Mudd College, Claremont,
                    CA --
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    -G. Patrick Vennebush
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2 dark:text-gray-300 flex-wrap">
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                    aria-label="Buy on Amazon for 340₹"
                  >
                    <img
                      src="https://www.svgrepo.com/show/349584/amazon.svg"
                      className="w-5 h-5"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>340₹</span>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                    aria-label="Buy on Flipkart for 499₹"
                  >
                    <img
                      src="https://www.svgrepo.com/show/162476/flipkart.svg"
                      className="w-5 h-5"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>499₹</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="flex border rounded dark:border-gray-700/50 dark:bg-gray-800 max-w-md">
              <img
                className="object-cover w-[140px] h-[200px] rounded-l"
                loading="lazy"
                src="http://books.google.com/books/content?id=y9yoDQAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api"
                alt="2 Peg ke Baad"
                width="140"
                height="200"
              />
              <div className="flex flex-col justify-between flex-1 p-2">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold dark:text-white line-clamp-2">
                    2 Peg ke Baad
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    2 Peg Ke Baad brings together 14 short stories that happened
                    after 2 pegs, in an inebriated state. World's greatest
                    stories are created when people are high – masterpieces are
                    painted, universal truths are realised, models on billboards
                    are befriended, lovers are united, butts are kicked,
                    confessions are made, and relationships are sorted.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    -Nikita Lalwani
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2 dark:text-gray-300 flex-wrap">
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                    aria-label="Buy on Amazon for 445₹"
                  >
                    <img
                      src="https://www.svgrepo.com/show/349584/amazon.svg"
                      className="w-5 h-5"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>445₹</span>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                    aria-label="Buy on Flipkart for 344₹"
                  >
                    <img
                      src="https://www.svgrepo.com/show/162476/flipkart.svg"
                      className="w-5 h-5"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>344₹</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="flex border rounded dark:border-gray-700/50 dark:bg-gray-800 max-w-md">
              <img
                className="object-cover w-[140px] h-[200px] rounded-l"
                loading="lazy"
                src="http://books.google.com/books/content?id=nFtmEAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=5&amp;edge=curl&amp;source=gbs_api"
                alt="Love Unlocked"
                width="140"
                height="200"
              />
              <div className="flex flex-col justify-between flex-1 p-2">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold dark:text-white line-clamp-2">
                    Love Unlocked
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    Young and dreamy, Priyanka wants to break free from her
                    middle className life to live in the lap of luxury. She is
                    longing for a partner who can pamper her by giving a
                    comfortable life. Sincere and practical, Varun is looking
                    for a companion who can accept and embrace his family.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    -Kavita Bhatnagar
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2 dark:text-gray-300 flex-wrap">
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                    aria-label="Buy on Amazon for 500₹"
                  >
                    <img
                      src="https://www.svgrepo.com/show/349584/amazon.svg"
                      className="w-5 h-5"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>500₹</span>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center gap-1 px-2 py-1 border rounded dark:border-gray-700"
                    aria-label="Buy on Flipkart for 232₹"
                  >
                    <img
                      src="https://www.svgrepo.com/show/162476/flipkart.svg"
                      className="w-5 h-5"
                      alt=""
                      width="20"
                      height="20"
                    />
                    <span>232₹</span>
                  </a>
                </div>
              </div>
            </article> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBooksPage;

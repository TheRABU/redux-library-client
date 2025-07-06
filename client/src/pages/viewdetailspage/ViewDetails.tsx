import { useGetBookByIdQuery } from "@/redux/features/book/booksApi";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router";
import Borrow from "../borrowbookpage/Borrow";
import EditBookForm from "@/components/EditBookForm";
import DeleteModal from "@/components/DeleteModal";

const ViewDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id);
  const book = data?.data;

  // the delete/edit button's closing opening

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError || !book || !id)
    return <p className="text-center mt-10">Book not found.</p>;

  const showPendingWorkToast = () => {
    return toast.error("This feature is still under development");
  };
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={
                    book.imgUrl
                      ? book.imgUrl
                      : "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  }
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button
                    onClick={showPendingWorkToast}
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Buy Now
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <Borrow
                    bookId={id}
                    title={book.title}
                    isbn={book.isbn}
                    copies={book.copies}
                  />
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {book.title} | By Author:{" "}
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {book.author}
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                ISBN{book.isbn}
              </p>
              <div className="flex mb-4">
                {/* <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    $29.99
                  </span>
                </div> */}
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Copies Available {book.copies}
                  </span>

                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock {book.copies}
                  </span>
                </div>
              </div>
              {/* <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div> */}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Book Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {book.description}
                </p>
              </div>
              <div className="flex justify-center items-center px-3 gap-x-5">
                {/* <Button variant="outline">
                  Edit Book
                  <EditBookForm />
                </Button> */}
                <EditBookForm book={book} />
                <DeleteModal bookId={id} bookTitle={book.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ViewDetails;

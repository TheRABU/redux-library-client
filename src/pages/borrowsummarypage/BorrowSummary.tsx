import { useGetAllBorrowsQuery } from "@/redux/features/book/borrowBooksApi";

const BorrowSummary = () => {
  const { data: borrows, isLoading, isError } = useGetAllBorrowsQuery();
  console.log("All Borrows", borrows);
  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load borrow summary.
      </p>
    );

  return (
    <>
      <div className="w-full h-auto flex flex-col bg-white dark:bg-gray-900">
        <div className="w-full flex items-center justify-between">
          <header className="py-4 flex items-start  flex-col">
            <div className="flex items-start gap-2">
              <div>
                <h1 className="text-xl font-bold text-center ml-10">
                  Your Borrowed Books
                </h1>
                <h5 className="text-sm text-gray-600"></h5>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col overflow-y-auto h-full">
          <table className="min-w-full bg-white border undefined">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 h-6 sticky top-0 z-10 transition-all ease-in-out ">
              <tr>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-8"></th>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200">Book Title</th>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200">ISBN</th>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200">
                  Date of borrow
                </th>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200">Due Date</th>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200">
                  Total Quantity
                </th>
                <th className="px-2 2xl:px-6 py-3 bg-gray-200 w-6"></th>
              </tr>
            </thead>
            <tbody className="select-none">
              {borrows.data?.map((borrow, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-6 py-1.5 text-center">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          borrow.bookImg
                            ? borrow.bookImg
                            : "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                        }
                        alt="Book"
                        className="aspect-square rounded-lg object-cover h-16"
                      />
                      <p className="font-bold">{borrow.title}</p>
                    </div>
                  </td>
                  <td className="px-6 py-1.5 text-sm text-center">
                    {borrow.isbn}
                  </td>
                  <td className="px-6 py-1.5 text-sm text-center">
                    {borrow.createdAt}
                  </td>
                  <td className="px-6 py-1.5 text-sm text-center">
                    {borrow.dueDate}
                  </td>
                  <td className="px-6 py-1.5 text-sm text-center">
                    {borrow.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BorrowSummary;

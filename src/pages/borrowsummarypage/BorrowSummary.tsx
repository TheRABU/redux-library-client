const BorrowSummary = () => {
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
            <tbody className="undefined select-none">
              <tr className="border-b">
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/amethgalarcio.appspot.com/o/images%2FCaptura%20de%20pantalla%202024-11-08%20151438.png?alt=media&amp;token=60ba8e16-f724-49d2-9e34-8c812ccd212b"
                      alt="image"
                      className="aspect-square rounded-lg object-cover h-16"
                    />
                    <p className="font-bold">Book Title</p>
                  </div>
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  ISBN NUMBER
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  mar, 5 nov 2024
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  apr, 5 2024
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  quantity number
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/amethgalarcio.appspot.com/o/images%2FCaptura%20de%20pantalla%202024-11-08%20151438.png?alt=media&amp;token=60ba8e16-f724-49d2-9e34-8c812ccd212b"
                      alt="image"
                      className="aspect-square rounded-lg object-cover h-16"
                    />
                    <p className="font-bold">Book Title</p>
                  </div>
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  ISBN NUMBER
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  mar, 5 nov 2024
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  apr, 5 2024
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  quantity number
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/amethgalarcio.appspot.com/o/images%2FCaptura%20de%20pantalla%202024-11-08%20151438.png?alt=media&amp;token=60ba8e16-f724-49d2-9e34-8c812ccd212b"
                      alt="image"
                      className="aspect-square rounded-lg object-cover h-16"
                    />
                    <p className="font-bold">Book Title</p>
                  </div>
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  ISBN NUMBER
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  mar, 5 nov 2024
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  apr, 5 2024
                </td>
                <td className="px-6 py-1.5 whitespace-nowrap text-sm  text-center">
                  quantity number
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BorrowSummary;

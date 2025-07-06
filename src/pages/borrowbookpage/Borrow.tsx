import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
import { Input } from "../../components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { useBorrowBookMutation } from "@/redux/features/book/borrowBooksApi";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";

// baler bookProps
interface BorrowProps {
  bookId: string | undefined;
  title: string;
  isbn: string;
  copies?: number;
  _id?: string;
}

const Borrow = (book: BorrowProps) => {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);

  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const quantity = form.quantity.value;

    if (quantity > (book.copies ?? 0)) {
      toast.error("Not enough copies available to borrow.");
      return;
    }
    if (!date) {
      toast.error("Please select a due date.");
      return;
    }
    const dueDate = date.toISOString();

    try {
      // await borrowBook({
      //   bookId: book.bookId ?? book._id,
      //   title: book.title,
      //   quantity,
      //   dueDate,
      // }).unwrap();
      const borrowData = {
        bookId: book.bookId,
        title: book.title,
        quantity,
        dueDate,
      };
      await borrowBook(borrowData);
      toast.success("Book borrowed successfully!");
      setDate(undefined);
      setOpen(false);
      form.reset();
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to borrow book.");
    }
  };

  return (
    <>
      {/* my version using tailwindflex */}
      {/* <div className="w-full max-w-lg mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6">Book Name</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  name="expiration-date"
                  id="expiration-date"
                  placeholder="MM / YY"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="quantity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="0 copies"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* this one is from shadcn */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Borrow this Book</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>{book.title}</DialogTitle>
              <Label htmlFor="book-title">Submit your details</Label>
              <DialogDescription>
                Add your details here in order to borrow a book. You must select
                the due date and quantity of copies.
              </DialogDescription>
            </DialogHeader>

            {/* Quantity input */}
            <div className="my-4">
              <p className="text-md text-slate-700 mb-2">
                Available copies: {book.copies}
              </p>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                name="quantity"
                min={1}
                type="number"
                placeholder="Enter number of copies"
                required
              />
            </div>

            {/* Calendar */}
            <div className="my-4">
              <Label>Due Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Submit Button */}
            <DialogFooter>
              <Button type="submit">Borrow</Button>
            </DialogFooter>
          </form>
        </DialogContent>
        <Toaster />
      </Dialog>
    </>
  );
};

export default Borrow;

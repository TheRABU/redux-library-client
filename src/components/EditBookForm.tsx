import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useUpdateBookMutation } from "@/redux/features/book/booksApi";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

interface Book {
  _id?: string;
  title?: string;
  author?: string;
  genre?: string;
  description?: string;
  copies?: number;
}

interface EditBookFormProps {
  book: Book;
}

const EditBookForm = ({ book }: EditBookFormProps) => {
  const [open, setOpen] = useState(false);
  // const { id } = useParams();
  const navigate = useNavigate();
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = (
      form.elements.namedItem("title") as HTMLInputElement
    ).value.trim();
    const author = (
      form.elements.namedItem("author") as HTMLInputElement
    ).value.trim();
    const genre = (
      form.elements.namedItem("genre") as HTMLInputElement
    ).value.trim();
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value.trim();
    const copies = Number(
      (form.elements.namedItem("copies") as HTMLInputElement).value
    );

    const updatedData = {
      title,
      author,
      genre,
      description,
      copies,
    };

    try {
      await updateBook({
        id: book._id || "",
        data: updatedData,
      }).unwrap();

      setOpen(false);
      navigate("/");
      toast.success("Updated book successfully");
    } catch (error) {
      console.error("Failed to update book:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Book Details</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogDescription>
              Modify your details and click on the update button.
            </DialogDescription>
          </DialogHeader>

          <div className="my-4">
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              type="text"
              defaultValue={book.title}
              placeholder="Enter new Title"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="author">Author</Label>
            <Input
              name="author"
              type="text"
              defaultValue={book.author}
              placeholder="Enter new Author"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="genre">Genre</Label>
            <Input
              name="genre"
              type="text"
              defaultValue={book.genre}
              placeholder="Enter Genre"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="description">Description</Label>
            <Input
              name="description"
              type="text"
              defaultValue={book.description}
              placeholder="Enter Description"
              required
            />
          </div>

          <div className="my-4">
            <Label htmlFor="copies">Copies</Label>
            <Input
              name="copies"
              type="number"
              defaultValue={book.copies}
              min={1}
              placeholder="Enter number of copies"
              required
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Book"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
};

export default EditBookForm;

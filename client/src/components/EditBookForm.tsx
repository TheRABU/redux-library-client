import { useState } from "react";
import { useNavigate, useParams } from "react-router";
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
import type { BookInterface } from "@/types";
import toast from "react-hot-toast";

// interface EditBookFormProps {
//   book: BookInterface;
// }

const EditBookForm = ({ book }) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const genre = form.genre.value.trim();
    const description = form.description.value.trim();
    const copies = Number(form.copies.value);

    const updatedData = {
      title,
      author,
      genre,
      description,
      copies,
    };

    try {
      await updateBook({
        id: book._id,
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

          {/* Title */}
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

          {/* Author */}
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

          {/* Genre */}
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

          {/* Description */}
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

          {/* Copies */}
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

          {/* Submit Button */}
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Book"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookForm;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDeleteBookMutation } from "@/redux/features/book/booksApi";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

interface DeleteModalProps {
  bookId: string;
  bookTitle: string;
}

const DeleteModal = ({ bookId, bookTitle }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  const navigate = useNavigate();
  console.log("bookId which i am sending to backend", bookId);
  const handleDelete = async () => {
    try {
      await deleteBook(bookId).unwrap();
      setOpen(false);
      navigate("/");
      toast.success("Book deleted successfully");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <strong>{bookTitle}</strong> from the library.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Yes, Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
};

export default DeleteModal;

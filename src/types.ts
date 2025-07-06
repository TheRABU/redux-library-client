export interface BookInterface {
  _id?: string;
  bookId?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
  description?: string;
  bookImgUrl?: string;
  imgUrl?: string;
}

export interface BorrowRecord {
  _id?: string;
  bookId: string;
  bookImg: string;
  title: string;
  isbn: string;
  quantity: number;
  dueDate: string;
  createdAt?: Date;
}

export interface BorrowSummary {
  bookTitle: string;
  isbn: string;
  totalQuantityBorrowed: number;
}

# 📚 Book Borrowing System — Client (Frontend)

This is the **React-based client-side** application of the **Book Borrowing System**, designed to interact with the backend API for managing books, borrowing, and user-friendly summaries. The UI is built with **React**, **Tailwind CSS**, and **ShadCN UI** components for a modern experience.

---

## 🚀 Features

- 📖 View all available books
- 🟢 Borrow a book with selected due date and quantity
- 📅 Date picker with calendar UI (ShadCN Calendar)
- ✅ Real-time form validation (copy limits, due date)
- 📊 Summary page showing borrowed books and quantities
- 🔄 Live data updates using **Redux Toolkit Query (RTK Query)**
- 🎨 Responsive and clean UI with TailwindCSS and ShadCN components

---

## 🧱 Tech Stack

- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Redux Toolkit & RTK Query**
- **React Router DOM**
- **Date-fns** for date formatting
- **React Hot Toast** for notifications

---

## 📂 Project Structure
      src/
      ├── components/ # UI components (Buttons, Cards, Inputs)
      ├── pages/ # Page components like Home, Summary
      ├── redux/ # Redux slices and RTK Query API
      │ └── features/
      ├── assets/ # Images, icons, etc.
      ├── App.tsx # Main app and routes
      ├── main.tsx # React entry point
      └── index.css # Global styles (Tailwind)

📅 Borrow Workflow
User clicks "Borrow this Book"

A Dialog opens with quantity and due date input

Selected due date is formatted as YYYY-MM-DD before submission

Data is posted to backend

Book copies are updated and a toast confirms success

🛠 How to Run Locally
1. Clone the Repository
   ```
   git clone https://github.com/yourusername/book-borrowing-client.git
   cd book-borrowing-client
   ```
2. Install Dependencies
   ```
   npm install
    # or
   yarn
   ```
3. Start the Dev Server
   ```
   npm run dev
    # or
   yarn dev
Make sure the backend server is running on http://localhost:5000


🔗 API Integration
The client communicates with the backend at:
```
http://localhost:5000/api
```
API endpoints used:

POST /api/borrow — Borrow a book

GET /api/borrow — Get all borrow records

GET /api/borrow-summary — Get borrowed book summaries

These are configured using RTK Query inside redux/features/book/borrowBooksApi.ts



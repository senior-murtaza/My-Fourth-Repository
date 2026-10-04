import { useState } from "react";

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      category: "Self Development",
    },
    {
      id: 2,
      title: "The Hobbit",
      category: "Fantasy",
    },
  ]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Fantasy");
  const [search, setSearch] = useState("");

  function addBook(e) {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        category,
      },
    ]);

    setTitle("");
  }

  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="page">
      <h1>Book Manager</h1>

      <form onSubmit={addBook}>
        <input
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Fantasy</option>
          <option>Programming</option>
          <option>Self Development</option>
          <option>History</option>
        </select>

        <button>Add Book</button>
      </form>

      <input
        className="search"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBooks.map((book) => (
        <div className="book" key={book.id}>
          <div>
            <h3>{book.title}</h3>
            <p>{book.category}</p>
          </div>

          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Books;

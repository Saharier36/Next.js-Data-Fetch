import BookCard from "@/components/BookCard";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", {next: {revalidate: 10}});
  const books = await res.json();
  return (
    <div className="max-w-6xl py-10 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksPage;

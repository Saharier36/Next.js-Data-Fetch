export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/books");
    const books = await res.json()

    return books.map(book => ({bookId: book.id}))
}
const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();
  const { title, author, price, category, rating, stock, description } = book;
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-96 bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p className="text-sm text-gray-500">By {author}</p>

          <div className="badge badge-primary">{category}</div>

          <p className="text-sm mt-2">{description}</p>

          <div className="flex justify-between mt-3 text-sm">
            <span>⭐ {rating}</span>
            <span>📦 {stock}</span>
          </div>

          <div className="text-xl font-bold mt-2">৳ {price}</div>

          <div className="card-actions justify-end mt-3">
            <button className="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

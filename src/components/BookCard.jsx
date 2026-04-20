import Link from "next/link";

const BookCard = ({book}) => {
    const { title, author, price } = book;
    return (
      <div className="card w-96 bg-black card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{author}</p>
          <p>${price}</p>
          <div className="justify-end card-actions">
            <Link href={`/books/${book.id}`} className="btn btn-primary">Show Details</Link>
          </div>
        </div>
      </div>
    );
};

export default BookCard;
import { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import CardBooks from "../CardBooks/CardBooks";


import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ListCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const q = query(collection(db, "booksCollection"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setBooks(docs);
    };
    getBooks();
  }, []);

  return (
    <div className="BooksListContainer">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <Link
              to={`/detail/${book.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardBooks data={book} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListCard;
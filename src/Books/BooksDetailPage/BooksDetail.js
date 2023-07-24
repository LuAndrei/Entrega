import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBooks from "../CardBooks/CardBooks";


import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const BooksDetail = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const q = query(
        collection(db, "BooksCollection"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setBookData(docs);
    };
    getBooks();
  }, [id]);

  return (
    <div className="DetailContainer">
      {bookData.map((data) => {
        return (
          <div key={data.id}>
            <CardBooks data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default BooksDetail;

import { useEffect, useState } from "react";
import axiosInstance from "../authentication/axiosInstance";
import { Container, Row } from "react-bootstrap";
import Book from "./Book";

const Books = () => {
  const [booksArray, setBooksArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isbn: "",
    pagesCount: "",
    author: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/api/v1/books")
      .then((data) => {
        console.log(data);
        setBooksArray(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  if (isLoading) {
    return <div>DATA IS LOADING</div>;
  }

  return (
    <>
      <Container>
        <Row>
          {booksArray.map((book) => {
            return <Book key={book.id} response={book} />;
          })}
        </Row>
      </Container>
      Books
    </>
  );
};
export default Books;

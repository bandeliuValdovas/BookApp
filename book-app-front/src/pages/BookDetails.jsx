import axiosInstance from "../authentication/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const BookDetails = () => {

  const [book, setBook] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const onEditBookButton = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/book/${id}`)
      .then((data) => {
        setBook(data.data.book);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteBook = (id) =>{
    console.log("donor id",book.id)
           

    axiosInstance
    .delete(`/api/v1/book/${id}`)
    .then((response)=>{
        console.log("delete response", response.data);
        alert("deleted successfully");
    })
    .catch((error)=>{
        console.log(error)
    })
}




  if (isLoading) {
    return <div>DATA IS LOADING</div>;
  }

  const { name, description, author, pagesCount, isbn } = book;

  return (
    <>
      <Card style={{ margin: "10vh" }}>
        {/* <Col >
                        <img src={image} alt="picture" />
                    </Col> */}

        <h5>Title</h5>
        <p>{name}</p>
        <p>Description: {description}</p>
        <p>Isbn: {isbn}</p>
        <p>Author: {author}</p>
        <p>Pages Count: {pagesCount}</p>
        <Button variant="warning" onClick={()=>onEditBookButton("/editbook/", {state: book})}>Edit Book</Button>
        <Button variant="danger" onClick={()=>deleteBook(id)}>Delete</Button>
      </Card>
    </>
  );
};
export default BookDetails;

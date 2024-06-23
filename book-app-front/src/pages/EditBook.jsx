import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../authentication/axiosInstance";
import { useLocation } from "react-router-dom";

const EditBook = () => {
  const location = useLocation();
  const data = location.state;
  const [formData, setFormData] = useState({
    name: data.name,
    description: data.description,
    author: data.author,
    pagesCount: data.pagesCount,
    isbn: data.isbn,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleForm = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const editBook = (event) => {
    event.preventDefault();
    axiosInstance
      .patch(`/api/v1/book/${data.id}`, {
        name: formData.name,
        description: formData.description,
        author: formData.author,
        pagesCount: formData.pagesCount,
        isbn: formData.isbn,
      })
      .then((response) => {
        console.log(response);
        alert("Book Edited successfully!");
      })
      .catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log("error message:  ", errorMessage);
        console.log(error.response.data.detail);
      });
  };

  return (
    <Form onSubmit={editBook}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Control
          defaultValue={data.name}
          type="text"
          name="name"
          placeholder="Enter book title"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control
          defaultValue={data.description}
          type="text"
          placeholder="Enter description"
          name="description"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Control
          defaultValue={data.author}
          type="text"
          placeholder="Enter author"
          name="author"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPagesCount">
        <Form.Control
          defaultValue={data.pagesCount}
          type="number"
          placeholder="Enter pages count"
          name="pagesCount"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIsbn">
        <Form.Control
          defaultValue={data.isbn}
          type="text"
          placeholder="Enter ISBN"
          name="isbn"
          onChange={handleForm}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Edit book
      </Button>
      <Button>Cancel</Button>
      {/* {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>} */}
    </Form>
  );
};

export default EditBook;

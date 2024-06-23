import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../authentication/axiosInstance";

const RegisterBook = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    author: "",
    pagesCount: "",
    isbn: "",
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleForm = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const addBook = (event) => {
    event.preventDefault();

    axiosInstance.post("/api/v1/book",{
        name: formData.name,
        description: formData.description,
        author: formData.author,
        pagesCount: formData.pagesCount,
        isbn: formData.isbn
    }).then((response) => {
        console.log(response);
        alert("Book created!");
    }).catch((error) => {
        setErrorMessage(error.response.data.detail);
        console.log("error message:  ", errorMessage);
        console.log(error.response.data.detail);
    });
  };

  return (
    <Form onSubmit={addBook}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter book title"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Control
          type="text"
          placeholder="Enter author"
          name="author"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPagesCount">
        <Form.Control
          type="number"
          placeholder="Enter pages count"
          name="pagesCount"
          onChange={handleForm}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIsbn">
        <Form.Control
          type="text"
          placeholder="Enter ISBN"
          name="isbn"
          onChange={handleForm}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Add book
      </Button>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </Form>
  );
};

export default RegisterBook;

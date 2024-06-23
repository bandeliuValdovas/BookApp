import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { id, name, author, pagesCount } = book;
  const onShowDetailsButton = useNavigate();

  Book.propTypes = {
    book: PropTypes.object,
  };

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Author: {author}</Card.Text>
            <Card.Text>Pages Count: {pagesCount}</Card.Text>
            <Button
              variant="primary"
              onClick={() => onShowDetailsButton(`/book/${id}`)}
            >
              Details
            </Button>
            {/* <Button
                            variant='danger'
                            onClick={() => onDeleteButtonClick(donor)}>Delete</Button> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Book;

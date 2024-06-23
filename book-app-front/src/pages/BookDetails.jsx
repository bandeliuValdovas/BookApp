import axiosInstance from "../authentication/axiosInstance";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const BookDetails = () => {
    const [book, setBook] = useState();
    const [isLoading, setIsLoading] = useState(true);


    const { id } = useParams();

    useEffect(() => {
        axiosInstance
            .get(`/api/v1/book/${id}`)
            .then((data) => {
                setBook(data.data.book);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })

    }, [id])

    if (isLoading) {
        return <div>DATA IS LOADING</div>;
    }

    const { name, description, author, pagesCount, isbn } = book;

    return (
        <>
        <Card style={{margin: 'auto'}}>{/* <Col >
                        <img src={image} alt="picture" />
                    </Col> */}
                    
                        <h5>Title</h5>
                        <p>{name}</p>
                        <p>Description: {description}</p>
                        <p>Isbn: {isbn}</p>
                        <p>Author: {author}</p>
                        <p>Pages Count: {pagesCount}</p>
               
</Card>



 

        </>
    )
};
export default BookDetails;
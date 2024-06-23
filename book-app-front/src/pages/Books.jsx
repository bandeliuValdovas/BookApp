import { useEffect, useState } from "react";
import axiosInstance from "../authentication/axiosInstance";
import Book from "./Book";
import PaginationSettings from "../components/PaginationSettings";
import ChangePage from "../components/ChangePage";
import { Container, Row } from "react-bootstrap";

const defaultPagination = {
  page: 0,
  limit: 5,
  sortBy: "name",
  sortDesc: "true",
  searchedField: null,
};

const Books = () => {
  const [booksArray, setBooksArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paginationSettings, setPaginationSettings] =
    useState(defaultPagination);
  const [firstPage, setFirstPage] = useState();
  const [lastPage, setLastPage] = useState();
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    axiosInstance
      .get(
        `/api/v1/books?page=${
          paginationSettings.page
        }&listSize=${paginationSettings.limit}&sortBy=${
          paginationSettings.sortBy
        }&sortDesc=${paginationSettings.sortDesc}${
          paginationSettings.searchedField
            ? "&contains=" + paginationSettings.searchedField
            : ""
        }`
      )
      .then((data) => {
        setFirstPage(data.data.first);
        setLastPage(data.data.last);
        setTotalPages(data.data.totalPages);
        setBooksArray(data.data.content);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [
    paginationSettings.page,
    paginationSettings.limit,
    paginationSettings.sortBy,
    paginationSettings.sortDesc,
    paginationSettings.searchedField,
  ]);

  if (isLoading) {
    return <div>DATA IS LOADING</div>;
  }

  return (
    <div>
      <div>
        <div>
          <ChangePage
            pagination={paginationSettings}
            setPagination={setPaginationSettings}
            availablePageNumber={totalPages}
          />
        </div>
        <PaginationSettings
          pagination={paginationSettings}
          setPagination={setPaginationSettings}
          availablePageNumber={totalPages}
          limitObjectName={"books"}
          sortFieldOptions={
            <>
              <option value="name">book title</option>
              <option value="author">author</option>
              <option value="pagesCount">pages count</option>
            </>
          }
          searchByFieldName=""
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </div>
      <Container>
        <Row>
          {booksArray.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </Row>
      </Container>
      <div>
        <ChangePage
          pagination={paginationSettings}
          setPagination={setPaginationSettings}
          availablePageNumber={totalPages}
        />
      </div>
    </div>
  );
};
export default Books;

import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [listBooksByShelf, setListBooksByShelf] = useState({});

  return (
    <div className="app">
      <Loading isLoading={isLoading} />
      <div className="list-books">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default HomePage;

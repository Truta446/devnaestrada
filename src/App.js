import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";

import Landing from "./screens/Landing.jsx";
import Loading from "./components/Elements/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  } , []);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      {isLoading ?
        <Loading /> :
        <Landing />
      }
    </>
  );
}


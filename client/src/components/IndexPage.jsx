import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import SearchFilter from "./SearchFilter";
import Table from "./Table";
import Loader from "./Loader";
import Footer from "./Footer";

const IndexPage = () => {
  const size = 5;
  const [task, setTask] = useState(null); // task according to the assignment
  const [query, setQuery] = useState(""); // query to fetch
  const [dropdown, setDropdown] = useState(false);
  const [page, setPage] = useState(1); // pagination
  const [userData, setUserData] = useState([]); // populate with the data fetched from backend
  const [loader, setLoader] = useState(false);

  // on page reload or task changing
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/");
        setUserData([...data]);
      } catch (error) {
        alert("Some error occured while loading. Please try again.");
      }
    };
    getData();
  }, []);

  const handleBtnClick = async (e) => {
    setLoader(true);
    console.log(e.target.name, " clicked");
    setTask(e.target.name);
    setQuery(e.target.innerHTML);
    setPage(1);
    setDropdown(false);
    try {
      const { data } = await axios.get(`/${e.target.name}`, {
        params: { page: 1, size },
      });
      setUserData([...data]);
    } catch (error) {
      alert(
        "Somer error occured while fetching details, please try again after some time"
      );
    } finally {
      setLoader(false);
    }
  };

  const prevClick = async () => {
    setLoader(true);
    if (page === 1) {
      alert("Reached end of page.");
      setLoader(false);
      return;
    }
    setPage((prev) => prev - 1);
    try {
      const { data } = await axios.get(`/${task}`, {
        params: { page: page - 1, size },
      });
      setUserData([...data]);
    } catch (error) {
      alert(
        "Somer error occured while fetching details, please try again after some time"
      );
    } finally {
      setLoader(false);
    }
  };
  const nextClick = async () => {
    setLoader(true);
    if (task === "task5" || userData.length < 5) {
      alert("Reached end of page.");
      setLoader(false);
      return;
    }
    setPage(page + 1);
    try {
      const { data } = await axios.get(`/${task}`, {
        params: { page: page + 1, size: size },
      });
      setUserData([...data]);
    } catch (error) {
      alert(
        "Somer error occured while fetching details, please try again after some time"
      );
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col justify-between min-h-screen py-4 px-16">
      {loader && <Loader />}
      <Header />
      <div className="flex-1">
      <SearchFilter
        query={query}
        dropdown={dropdown}
        setDropdown={setDropdown}
        handleBtnClick={handleBtnClick}
      />
      {userData.length > 0 && (
        <Table
          userData={userData}
          page={page}
          size={size}
          prevClick={prevClick}
          nextClick={nextClick}
          task={task}
        />
        )}
        </div>
        <Footer />
    </div>
  );
};

export default IndexPage;

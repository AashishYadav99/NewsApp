import { useEffect, useState } from "react";
import Card from "./Card";
import logo from "../image/logo.png"

function NewsApp() {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("india");
  const [error, setError] = useState(""); 
  const API_KEY= import.meta.env.VITE_API_KEY;

  const getNewsData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data"); 
      }
      const data = await response.json();
      setNewsData(data.articles);
      setError(""); 
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to fetch news data. Please try again later."); 
    }
  };

  useEffect(() => {
    getNewsData();
  }, [search]);

  const searchData = (e) => {
    setSearch(e.target.value);
  };

  const filterData = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <header className="bg-red-800 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <img className="rounded-xl w-40" src={logo} alt="" />
          <div className="flex mt-4 md:mt-0">
            <input
              value={search}
              onChange={searchData}
              type="text"
              placeholder="Search here"
              className="p-2 border border-gray-400 rounded-l-lg w-full md:w-64"
            />
            <button
              onClick={getNewsData}
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center gap-4 flex-wrap my-8 px-4">
        <button
          type="button"
          onClick={filterData}
          value="sports"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Sports
        </button>
        <button
          onClick={filterData}
          value="politics"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Politics
        </button>
        <button
          onClick={filterData}
          value="health"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Health
        </button>
        <button
          onClick={filterData}
          value="entertainment"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Entertainment
        </button>
        <button
          onClick={filterData}
          value="technology"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Technology
        </button>
      </div>

      <div className=" items-center whitespace-nowrap animate-marquee">
      <h1 className="text-center font-bold text-red-600 text-2xl ">Latest Headlines</h1>
      </div>

      {error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <Card data={newsData} />
      )}
    </>
  );
}

export default NewsApp;

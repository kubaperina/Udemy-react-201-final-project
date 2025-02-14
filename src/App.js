import "./App.css";
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import ErrorView from "./components/ErrorView";
import { Routes, Route } from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=ac08ec95493355af0c3613204cb28bcb`)
      .then(response => response.json())
      .then(data => {
          setSearchResults(data.results) 
      })
      
    }
  }, [searchText])


  return (
    <div>
      <Navbar 
      //searchText={searchText} 
      setSearchText={setSearchText} 
      inputText={inputText} 
      setInputText={setInputText}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </div>
  );
}

export default App;

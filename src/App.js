import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<ShowBookList />}></Route>
            <Route path="/create-book" element={<CreateBook />}></Route>
            <Route path="/edit-book/:id" element={<UpdateBookInfo />}></Route>
            <Route path="/show-book/:id" element={<ShowBookDetails />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

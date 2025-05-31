import React from "react";
import { Routes, Route } from "react-router-dom";
import Topics from "./pages/topiccard/Topiccard";
import BlogList from "./pages/Bloglist/Bloglist";
import BlogDetail from "./pages/Blogdetails/Blogdetail";

function App() {
  return (
    <Routes>
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/:topicName" element={<BlogList />} />
      <Route path="/topics/:topicName/:blogId" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;

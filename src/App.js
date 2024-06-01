import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./Intro/intro";
import NullEditor from "./Editor/NullEditor";
import Editor from "./Editor/Editor";
import Create from "./CreateNew/create";
import Content from "./Editor/NewContent";
import Config from "./Editor/NewConfig";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="editor" element={<NullEditor/>} />
        <Route path="create" element={<Create/>} />
        <Route path="create/new" element={<Editor/>} />
        <Route path="create/new/content" element={<Content/>} />
        <Route path="create/new/config" element={<Config/>} />
      </Routes>
    </Router>
  );
}

export default App;

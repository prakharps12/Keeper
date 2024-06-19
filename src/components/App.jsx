import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";

function App() {
  return (
    <div>
      <Heading />
      {notes.map((note) => {
        return <Note title={note.title} content={note.content} />;
      })}
      {/* <Note title="present title " content="present content" /> */}
      <Footer />
    </div>
  );
}

export default App;

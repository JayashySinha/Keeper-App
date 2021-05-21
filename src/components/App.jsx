import React from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes.js";


function app(){
    return (
        <div>
        <Header />
        {notes.map(note =>(
          <Note 
            key={note.key}
            title={note.title}
            content={note.content}
          />
        ))

        }
        
        <Footer />
      </div>
    );
}

export default app;
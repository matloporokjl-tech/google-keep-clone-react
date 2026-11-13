import { useState } from "react"; 

import Navbar from "./components/Navbar/Navbar"; 
import Sidebar from "./components/Sidebar/Sidebar"; 
import Form from "./components/Form/Form"; 
import Notes from "./components/Notes/Notes";

 function App() { 
    const [notes, setNotes] = useState([ 
        { 
            id: 1,
            title: "Welcome to Google Keep, powered by React!", 
            text: "Created this note, yay!", 
            color: "#66c5cc", 
            pinned: false, 
        }, 
        {
             id: 2, 
             title: "Welcome to Google Keep, powered by React!", 
             text: "Created this note, yay!", 
             color: "#f6cf71",
             pinned: false, 
            },
             {
                id: 3,
                title: "Welcome to Google Keep, powered by React!",
                text: "Created this note, yay!", 
                color: "#aecbfa",
                pinned: true,
                 }, 

                 { 
                id: 4, 
                title: "2026 needs to end!",
                text: "It's been October forever!", 
                color: "#f28b82", 
                pinned: true, 
                }, 
            ]); 
            function changeNoteColor(id, color) { 
                setNotes((previousNotes) => 
                    previousNotes.map((note) =>
                         note.id === id 
                ? { ...note, color: color }
                 : note 
                ) ); } 
                function togglePin(id) { 
                    setNotes((previousNotes) => 
                        previousNotes.map((note) => 
                            note.id === id 
                    ? { ...note, pinned: !note.pinned }
                     : note
                     ) ); } 
                     const sortedNotes = [...notes].sort( 
                        (a, b) => Number(b.pinned) - Number(a.pinned)
                     ); 
                     return ( <div className="app"> 
                     <Navbar /> 
                     <Sidebar /> 
                     <main className="main-content"> 
                        <Form /> 
                     <div className="notes-grid"> 
                        {sortedNotes.map((note) => ( 
                            <Notes 
                            key={note.id} 
                            note={note}
                            onChangeColor={changeNoteColor} 
                            onTogglePin={togglePin} 
                            /> 
                        ))}
                         </div>
                          </main>
                           </div>
                            );
                         }
                          export default App;
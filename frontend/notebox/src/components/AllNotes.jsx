import { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import axios from "axios";

export default function AllNotes() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await axios.get("http://localhost:5000/api/notes");
      setNotes(allNotes.data);
    };

    fetchNotes();
  }, []);

  return (
    <div className="max-w-4xl p-4 mt-1 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.length > 0 &&
        notes.map((note) => (
          <NoteCard note={note} setNotes={setNotes} key={note._id} className="mx-auto md:mx-auto" />
        ))}
    </div>
  );
}

import { useState } from "react";
import { useNotes } from "./context/NotesContext";

import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import TagFilter from "./components/TagFilter";
import NotesList from "./components/NotesList";
import Archive from "./components/Archive";
import Trash from "./components/Trash";

function App() {
  const { notes } = useNotes();

  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Get unique tags
  const tags = [...new Set(notes.map((note) => note.tag).filter(Boolean))];

  // Search + Tag Filter
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase());

    const matchesTag =
      selectedTag === "" || note.tag === selectedTag;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <NoteForm />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <TagFilter
          tags={tags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        <NotesList notes={filteredNotes} />

        <Archive />

        <Trash />

      </div>
    </div>
  );
}

export default App;
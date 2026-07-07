import { useNotes } from "../context/NotesContext";
import NoteCard from "./NoteCard";

function NotesList({ notes }) {
  const { notes: allNotes } = useNotes();

  const displayNotes = (notes || allNotes)
    .filter((note) => !note.trashed && !note.archived)
    .sort((a, b) => Number(b.pinned) - Number(a.pinned));

  if (displayNotes.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md p-10 text-center">
        <p className="text-gray-500 text-lg">
          No notes found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}

export default NotesList;
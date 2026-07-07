import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NoteModal from "./NoteModal";

function NoteCard({ note }) {
  const {
    deleteNote,
    togglePin,
    toggleArchive,
  } = useNotes();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

        <div className="flex justify-between items-center">

          <h3 className="text-xl font-semibold">
            {note.title}
          </h3>

          {note.pinned && (
            <span className="text-yellow-500 text-xl">
              📌
            </span>
          )}

        </div>

        <p className="text-gray-600 mt-3">
          {note.description}
        </p>

        {note.tag && (
          <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            #{note.tag}
          </span>
        )}

        <div className="flex flex-wrap gap-2 mt-5">

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-3 py-2 rounded-lg"
          >
            Details
          </button>

          <button
            onClick={() => togglePin(note.id)}
            className="bg-yellow-500 text-white px-3 py-2 rounded-lg"
          >
            {note.pinned ? "Unpin" : "Pin"}
          </button>

          <button
            onClick={() => toggleArchive(note.id)}
            className="bg-gray-600 text-white px-3 py-2 rounded-lg"
          >
            {note.archived ? "Unarchive" : "Archive"}
          </button>

          <button
            onClick={() => deleteNote(note.id)}
            className="bg-red-500 text-white px-3 py-2 rounded-lg"
          >
            Trash
          </button>

        </div>

      </div>

      {showModal && (
        <NoteModal
          note={note}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default NoteCard;
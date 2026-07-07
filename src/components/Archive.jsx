import { useNotes } from "../context/NotesContext";

function Archive() {
  const { notes, toggleArchive, deleteNote } = useNotes();

  const archivedNotes = notes.filter(
    (note) => note.archived && !note.trashed
  );

  if (archivedNotes.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Archived Notes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archivedNotes.map((note) => (
          <div
            key={note.id}
            className="bg-gray-100 rounded-xl shadow-md p-5"
          >
            <h3 className="text-lg font-semibold">
              {note.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {note.description}
            </p>

            {note.tag && (
              <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                #{note.tag}
              </span>
            )}

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => toggleArchive(note.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Unarchive
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Move to Trash
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Archive;
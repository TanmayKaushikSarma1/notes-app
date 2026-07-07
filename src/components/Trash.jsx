import { useNotes } from "../context/NotesContext";

function Trash() {
  const {
    notes,
    restoreNote,
    removeNote,
  } = useNotes();

  const trashed = notes.filter(
    (note) => note.trashed
  );

  if (trashed.length === 0) return null;

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-5">
        Trash
      </h2>

      <div className="grid gap-4">

        {trashed.map((note) => (
          <div
            key={note.id}
            className="bg-red-50 border rounded-lg p-4"
          >

            <h3 className="font-semibold">
              {note.title}
            </h3>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() =>
                  restoreNote(note.id)
                }
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Restore
              </button>

              <button
                onClick={() =>
                  removeNote(note.id)
                }
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete Forever
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Trash;
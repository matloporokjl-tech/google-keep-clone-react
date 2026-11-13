
import Notes from "../Notes/Notes";
import "./NotesGrid.css";

function NotesGrid({
  notes = [],
  onColorChange,
  onTogglePin
}) {
 
  const sortedNotes = [...notes].sort(
    (a, b) => Number(b.pinned) - Number(a.pinned)
  );

  return (
    <div className="notes-grid">
      {sortedNotes.map((note) => (
        <Notes
          key={note.id}
          note={note}
          onColorChange={onColorChange}
          onTogglePin={onTogglePin}
        />
      ))}
    </div>
  );
}

export default NotesGrid;


import './NoteList.scss';

const NoteList = (props) => {

  return (
    <div className="NoteList">
      <div className="newNoteBtn" onClick={props.newNote}>New Note +</div>
      {props.data.filter(note => note.folder === props.currentFolder._id).map(note => (
        <div className="note" onClick={props.selectNote} key={note._id} data-id={note._id}>{note.title}</div>
      ))}
    </div>
  );
}

export default NoteList;

import './NoteList.scss';

const NoteList = (props) => {

  return (
    <div className="NoteList">
      <div className="newNoteBtn" onClick={() => props.getData(props.routes.createNote, {folder: props.currentFolder._id})}>New Note +</div>
      {props.data.filter(note => {
        return note.folder === props.currentFolder._id
      }).map(note => (
        <div className={props.currentNote._id === note._id ? "note active" : "note"} onClick={props.selectNote} key={note._id} data-id={note._id}>{note.title}</div>
      ))}
    </div>
  );
}

export default NoteList;

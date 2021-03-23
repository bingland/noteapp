import './NoteList.scss';

const NoteList = (props) => {

  return (
    <div className="NoteList">
      {props.data.map(note => (
        <div className="note" key={note._id} data-id={note._id}>{note.title}</div>
      ))}
    </div>
  );
}

export default NoteList;

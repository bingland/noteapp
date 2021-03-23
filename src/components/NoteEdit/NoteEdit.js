import React from 'react';
import './NoteEdit.scss';

const NoteEdit = (props) => {

  //console.log(props.currentNote.title)

  return (
    <div className="NoteEdit">
      {props.currentNote.title !== undefined ? 
        <div className="noteEditBox" data-id={props.currentNote._id}>
          <input 
            className="noteEditTitle" 
            onChange={props.editNote}
            type="text" 
            value={props.currentNote.title} 
            placeholder="Enter note title..."
          />
          <div className="noteEditDate">{props.currentNote.date}</div>
          <div folder="noteEditFolder">{props.currentNote.folder}</div>
          <textarea 
            className="noteEditDate" 
            value={props.currentNote.body}
            placeholder="Enter note body text..."
          />

        </div>
      : 
      <p>Select a note...</p>}
    </div>
  );
}

export default NoteEdit;

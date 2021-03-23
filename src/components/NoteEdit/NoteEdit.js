import React from 'react';
import './NoteEdit.scss';

const NoteEdit = (props) => {

  return (
    <div className="NoteEdit">
      {props.currentNote.title !== undefined ? 
        <div className="noteEditBox" data-id={props.currentNote._id}>
          <button className="deleteNoteBtn">Delete Note</button>
          <button className="saveNoteBtn">Save Note</button>
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
            className="noteEditBody" 
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

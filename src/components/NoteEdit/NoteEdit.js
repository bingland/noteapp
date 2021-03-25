import React from 'react';
import './NoteEdit.scss';

const NoteEdit = (props) => {

  return (
    <div className="NoteEdit">
      {props.currentNote.title !== undefined ? 
        <div className="noteEditBox" data-id={props.currentNote._id}>
          <button onClick={() => props.getData(props.routes.deleteNote, {id: props.currentNote._id})} className="deleteNoteBtn">Delete Note</button>
          <button onClick={() => props.getData(props.routes.editNote, {
            id: props.currentNote._id,
            title: props.currentNote.title,
            body: props.currentNote.body,
            folder: props.currentNote.folder
          })} className="saveNoteBtn">Save Note</button>
          <input 
            className="noteEditTitle" 
            onChange={props.editNote}
            type="text" 
            value={props.currentNote.title} 
            placeholder="Enter note title..."
          />
          <div className="noteEditDate">{props.getFullDate(props.currentNote.date)}</div>
          <div folder="noteEditFolder">{props.currentFolder.name}</div>
          <textarea 
            className="noteEditBody" 
            value={props.currentNote.body}
            placeholder="Enter note body text..."
            onChange={props.editNote}
          />

        </div>
      : 
      <p className="selectMessage">Select a note...</p>}
    </div>
  );
}

export default NoteEdit;

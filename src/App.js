import { useState, useEffect } from 'react'
import FolderList from './components/FolderList/FolderList'
import NoteList from './components/NoteList/NoteList'
import NoteEdit from './components/NoteEdit/NoteEdit'

import './App.scss';

function App() {

  const [folderData, setFolderData] = useState([])
  const [noteData, setNoteData] = useState([])
  const [currentNote, setCurrentNote] = useState({})
  const [currentFolder, setCurrentFolder] = useState({})

  const handleAllFolderRes = (data) => {
    console.log(data)
    setFolderData(data)
    let notes = []
    data.forEach(folder => {
      console.log(folder)
      folder.notes.forEach(note => notes.push(note))
    })
    console.log(notes)
    setNoteData(notes)
    // set current folder to the first folder if it hasn't been set
    if (currentFolder.title === undefined) {
      console.log('setting...')
      setCurrentFolder(data[0])
    }
    console.log(data)
  }

  const routes = {
    // note controllers
    getNote: { url: '/api/note', method: 'GET', handleData: data => {
      console.log(data)
    }},
    getAllNotes: { url: '/api/notes', method: 'GET', handleData: data => {
      console.log(data)
    }},
    createNote: { url: '/api/note', method: 'POST', handleData: handleAllFolderRes},
    editNote: { url: '/api/note', method: 'PUT', handleData: handleAllFolderRes},
    deleteNote: { url: '/api/note', method: 'DELETE', handleData: handleAllFolderRes},
    // folder controllers,
    getFolder: { url: '/api/folder', method: 'GET', handleData: data => {
      console.log(data)
    }},
    getAllFolders: { url: '/api/folders', method: 'GET', handleData: handleAllFolderRes}
  }

  const getData = (route, params) => {
    let addonUrl = params !== undefined ? Object.keys(params).map(key => `${key}=${params[key]}`).join('&') : ''
    let url = addonUrl !== '' ? route.url + '?' + addonUrl : route.url
    console.log(url)

    //fetch('/api/note?folder=60524c1394586ed2fbc602db&title=My Cool Note&body=my text&id=6052b762926cb13d0e896c86', {
    fetch(url, {
      method: route.method,
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
      .then(response => response.json())
      .then(data => route.handleData(data))
  }

  const selectNote = (e) => {
    console.log(noteData.find(note => e.target.getAttribute('data-id') === note._id))
    setCurrentNote(noteData.find(note => e.target.getAttribute('data-id') === note._id))
  }

  const editNote = (e) => {
    let newNote = currentNote
    if (e.target.className === 'noteEditTitle') {
      newNote.title = e.target.value
    }
    if (e.target.className === 'noteEditBody') {
      newNote.body = e.target.value
    }
    setCurrentNote(JSON.parse(JSON.stringify(newNote)))
  }

  // convert unix time into english
  const getFullDate = (UNIX_timestamp) => {
    let a = new Date(UNIX_timestamp)
    console.log(UNIX_timestamp)
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let year = a.getFullYear()
    let month = months[a.getMonth()]
    let date = a.getDate()
    let hour = a.getHours()
    let min = a.getMinutes()
    // modify these values to adjust to what you need
    let time = `${month} ${date}, ${year} at ${hour}:${min}`
    return time
  }

  useEffect(() => getData(routes.getAllFolders), [])

  return (
    <div className="App">
      <div className="DisplayArea">
        <FolderList 
          data={folderData} 
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
        />
        <NoteList 
          data={noteData} 
          selectNote={selectNote}
          routes={routes}
          getData={getData} 
          currentFolder={currentFolder}
          currentNote={currentNote}
        />
        <NoteEdit 
          currentNote={currentNote} 
          editNote={editNote}
          routes={routes}
          getData={getData}
          getFullDate={getFullDate}
        />
      </div>
      
    </div>
  );
}

export default App;

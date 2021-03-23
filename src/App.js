import { useState, useEffect }from 'react'
import FolderList from './components/FolderList/FolderList'
import NoteList from './components/NoteList/NoteList'
import NoteEdit from './components/NoteEdit/NoteEdit'

import './App.scss';

function App() {

  const [folderData, setFolderData] = useState([])
  const [noteData, setNoteData] = useState([])
  const [currentNote, setCurrentNote] = useState({})

  const routes = {
    // note controllers
    getNote: { url: '/api/note', method: 'GET', handleData: data => {
      console.log(data)
    }},
    getAllNotes: { url: '/api/notes', method: 'GET', handleData: data => {
      console.log(data)
    }},
    createNote: { url: '/api/note', method: 'POST', handleData: data => {
      console.log(data)
    }},
    editNote: { url: '/api/note', method: 'PUT', handleData: data => {
      console.log(data)
    }},
    deleteNote: { url: '/api/note', method: 'DELETE', handleData: data => {
      console.log(data)
    }},
    // folder controllers,
    getFolder: { url: '/api/folder', method: 'GET', handleData: data => {
      console.log(data)
    }},
    getAllFolders: { url: '/api/folders', method: 'GET', handleData: data => {
      setFolderData(data)
      let notes = []
      data.forEach(folder => {
        folder.notes.forEach(note => notes.push(note))
      })
      setNoteData(notes)
      console.log(data)
    }}
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

  useEffect(() => getData(routes.getAllFolders), [])

  return (
    <div className="App">
      <div className="DisplayArea">
        <FolderList data={folderData} />
        <NoteList data={noteData} />
        <NoteEdit />
      </div>
      
    </div>
  );
}

export default App;

# noteapp
Full stack note app for DGM 4790. Check out the live site by clicking [here.](https://noteapp-bingland.herokuapp.com/)

## Endpoints

### Note endpoints

#### Get note by id through ```/api/note```

Requires the note id of the note you want to get. 

Example GET request URL:
```
noteapp-bingland.herokuapp.com/api/note&id=60524c3094586ed2fbc602dc
```
The server will return the note that matches with the ID.

#### Get all notes through ```/api/notes```

No required parameters.

Example GET request URL:
```
noteapp-bingland.herokuapp.com/api/notes
```
The server will return an array of all notes.

#### Create note through ```/api/note```

A POST request to ```/api/note``` only requires the folder that you want to make the Note in. This is because properties such as the title, body, and the date are all created by the server since it's just a blank note. 

Example POST request URL:
```
noteapp-bingland.herokuapp.com/note?folder=60595e688c98f45cdf5b2bfd
```
The server will return an array of the folders on the database, with each of their respective notes.

#### Edit note through ```/api/note```

A PUT request to ```/api/note``` requires title, body, folder id, and note id attributes. The note that you want to edit is found using the note id, and will change the title, body and folder according to what you send through the URL. 

Example POST request URL:
```
noteapp-bingland.herokuapp.com/api/note?title=Pug Facts&body=The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail.&folder=60595e688c98f45cdf5b2bfd&id=60595f0c8c9675cf6bca47f5
```
The server will return an array of the folders on the database, with each of their respective notes.

#### Delete note through ```/api/note```

A DELETE request to ```/api/note``` requires the note id of the note you want to delete. 

Example POST request URL:
```
noteapp-bingland.herokuapp.com/api/note?id=60595eb68c9675cf6bca47f4
```
The server will return an array of the folders on the database, with each of their respective notes.

### Folder endpoints

#### Get folder by id through ```/api/folder```

Requires the folder id of the folder you want to get. 

Example GET request URL:
```
noteapp-bingland.herokuapp.com/api/folder?id=60595e688c98f45cdf5b2bfd
```
The server will return the folder that matches the id that you gave it.

#### Get all folders through ```/api/folders```

No required parameters.

Example GET request URL:
```
noteapp-bingland.herokuapp.com/api/folders
```
The server will return an array of all folders with their respective notes.

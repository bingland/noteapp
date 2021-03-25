import './FolderList.scss';

const FolderList = (props) => {

  return (
    <div className="FolderList">
      <div className="folderTitle">Folders</div>
      {props.data.map(folder => (
        <div 
          className={props.currentFolder.name === folder.name ? "folder active" : "folder"} 
          key={folder._id} 
          data-id={folder._id}
          onClick={() => { props.setCurrentFolder(folder) }}
        >{folder.name}</div>
      ))}
    </div>
  );
}

export default FolderList;

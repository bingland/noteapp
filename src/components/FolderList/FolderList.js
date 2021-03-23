import './FolderList.scss';

const FolderList = (props) => {

  return (
    <div className="FolderList">
      {props.data.map(folder => (
          <div className="folder" key={folder._id} data-id={folder._id}>{folder.name}</div>
      ))}
    </div>
  );
}

export default FolderList;

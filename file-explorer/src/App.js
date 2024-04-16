import { useState } from 'react';
import './App.css';
import FileExplorer from './components/fileExplorer/FileExplorer';
import { fileExplorerDummyData } from './data/dummyData';
import { onFileAdd, onFileExpand } from './utils';

function App() {
  const [fileExaplorerData, setFileExplorerData] = useState([
    {
      id: Date.now(),
      isFolder: true,
      isExpanded: false,
      name: 'root',
      files: [],
    },
  ]);

  const handleFolderExpand = (id, btnForce) => {
    const updatedFileData = onFileExpand(fileExaplorerData, id, btnForce);
    setFileExplorerData(updatedFileData);
  };

  const onNewFileAdd = (id, name, type) => {
    let fileObj;
    if (type === 'folder') {
      fileObj = {
        id: Date.now(),
        isFolder: true,
        isExpanded: false,
        files: [],
        name: name,
      };
    } else {
      fileObj = {
        id: Date.now(),
        isFolder: false,
        name: name,
      };
    }
    const updatedFileData = onFileAdd(fileExaplorerData, fileObj, id);
    console.log('updatedFileData', updatedFileData);
    setFileExplorerData(updatedFileData);
  };

  return (
    <>
      {fileExaplorerData.map((fileData) => (
        <FileExplorer
          key={fileData.id}
          fileData={fileData}
          handleFolderExpand={handleFolderExpand}
          onNewFileAdd={onNewFileAdd}
        />
      ))}
    </>
  );
}

export default App;

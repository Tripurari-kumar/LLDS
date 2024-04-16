import React, { useState } from 'react';
import './FileExplorer.css';

function FileExplorer({ fileData, handleFolderExpand, onNewFileAdd }) {
  const [AddBtnClicked, setAddBtnClicked] = useState('');
  const onFolderExpand = (id, btnforce) => {
    handleFolderExpand(id, btnforce);
  };

  const onFileAdd = (id, name, type) => {
    onNewFileAdd(id, name, type);
  };

  return (
    <div>
      {fileData.isFolder ? (
        <>
          <div className='folder' onClick={() => onFolderExpand(fileData.id)}>
            <div>{fileData.name}</div>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAddBtnClicked('file');
                  onFolderExpand(fileData.id, true);
                }}
              >
                Add file
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAddBtnClicked('folder');
                  onFolderExpand(fileData.id, true);
                }}
              >
                Add Folder
              </button>
            </div>
          </div>
          {AddBtnClicked && (
            <div style={{ paddingLeft: '20px' }}>
              <input
                type='text'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setAddBtnClicked(false);
                    onFileAdd(fileData.id, e.target.value, AddBtnClicked);
                  }
                }}
              />
            </div>
          )}

          <div style={{ paddingLeft: '20px' }}>
            {fileData.isExpanded &&
              fileData.files.map((fileData) => (
                <FileExplorer
                  key={fileData.id}
                  fileData={fileData}
                  handleFolderExpand={handleFolderExpand}
                  onNewFileAdd={onNewFileAdd}
                />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className='file'>{fileData.name}</div>
        </>
      )}
    </div>
  );
}

export default FileExplorer;

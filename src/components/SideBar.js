import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {

  const [folderId, setFolderId] = useState(props.currentFolderId);

  useEffect(() => {
    setFolderId(props.currentFolderId)
  }, [props])

  return (
    <>
      <h1>SideBar</h1>
      <ul>
        {props.folders.map((folder, i) => (folder.id === folderId ?
          (
            <li>
              <p>Folder!!! {i}</p>
              <p>Name: {folder.name}</p>
              <Link to={`/folder/${folder.id}`} onClick={() => props.setCurrentFolderId(folder.id)}>folder link</Link>
            </li>
          ) : (
            <li>
              <p>Folder {i}</p>
              <p>Name: {folder.name}</p>
              <Link to={`/folder/${folder.id}`} onClick={() => props.setCurrentFolderId(folder.id)}>folder link</Link>
            </li>
          )
        ))}
      </ul>
    </>
  )
}
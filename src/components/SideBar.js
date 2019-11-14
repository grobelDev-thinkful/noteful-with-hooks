import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {

  const [folderId, setFolderId] = useState(props.currentFolderId);
  // const [currentNote, setCurrentNote]

  useEffect(() => {
    setFolderId(props.currentFolderId)
  }, [props])

  if (props.currentNote) {

    let folder = props.folders.find(folder => folder.id === props.currentNote.folderId);

    return (
      <>
        <h1>SideBar</h1>
        <ul>
          <li>
            {/* <p>Folder {i}</p> */}
            <p>Folder: {folder.name}</p>
            <Link to={`/`} onClick={() => props.handleSetCurrentFolderId(false)}>Go Back!</Link>
          </li>

          {/* {props.folders.map((folder, i) => (folder.id === folderId ?
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
          ))} */}
        </ul>
      </>
    );
  } else {
    console.log('folder says no note');
  }

  return (
    <>
      <h1>SideBar</h1>
      <ul>
        {props.folders.map((folder, i) => (folder.id === folderId ?
          (
            <li>
              {/* <p>Folder!!! {i}</p> */}
              <p>Folder: {folder.name} - (Selected)</p>
              <Link to={`/folder/${folder.id}`} onClick={() => props.handleSetCurrentFolderId(folder.id)}>folder link</Link>
            </li>
          ) : (
            <li>
              {/* <p>Folder {i}</p> */}
              <p>Folder: {folder.name}</p>
              <Link to={`/folder/${folder.id}`} onClick={() => props.handleSetCurrentFolderId(folder.id)}>folder link</Link>
            </li>
          )
        ))}
      </ul>
    </>
  )
}
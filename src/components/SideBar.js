import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {
  console.log('we got the folders');
  console.log(props.folders);
  return (
    <>
      <h1>SideBar</h1>
      <ul>
        {props.folders.map((folder, i) => (
          // <p>{JSON.stringify(folder)}</p>
          <li>
            <p>Folder {i}</p>
            <p>Name: {folder.name}</p>
          </li>
        )
        )}
      </ul>
    </>
  )
}
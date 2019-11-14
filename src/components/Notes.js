import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Notes(props) {


  let filteredNotes = props.notes.filter(note => note.folderId === props.currentFolderId);

  function getFolderNameByFolderId(folderId) {
    return props.folders.find(folder => folder.id === folderId).name;
  }

  if (props.currentNote) {
    // props.setCurrentNote()
    let note = props.currentNote;
    return (
      <>
        <li><Link onClick={() => props.handleSetCurrentNote(note)}>{note.name} - [{getFolderNameByFolderId(note.folderId)}]</Link></li>
        <p>{note.content}</p>
      </>
    )
  } else {
    console.log('no current note');
  }

  if (props.currentFolderId) {
    return (
      filteredNotes.map(note => (
        <li><Link onClick={() => props.handleSetCurrentNote(note)}>{note.name} - [{getFolderNameByFolderId(note.folderId)}]</Link></li>
      ))
    )
  } else {
    return (
      props.notes.map(note => (
        <li><Link onClick={() => props.handleSetCurrentNote(note)}>{note.name} - [{getFolderNameByFolderId(note.folderId)}]</Link></li>
      ))
    );
  }

}
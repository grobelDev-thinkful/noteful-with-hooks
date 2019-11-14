import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'

import dummyStore from './dummy-store.js';
// import HomePage from './pages/HomePage.js';
import SideBar from './components/SideBar.js';
import Notes from './components/Notes.js';

// import FolderPage from './pages/FolderPage.js';
// import UserPage from './pages/UserPage';




export default function App() {

  // Initial State
  const [folders, setFolders] = useState(dummyStore.folders);
  const [notes, setNotes] = useState(dummyStore.notes);
  const [currentFolderId, setCurrentFolderId] = useState(false);
  const [currentNote, setCurrentNote] = useState(false);

  const handleSetCurrentNote = note => {
    setCurrentFolderId(false);
    setCurrentNote(note);
  }

  const handleSetCurrentFolderId = folderId => {
    setCurrentFolderId(folderId);
    setCurrentNote(false);
  }

  function renderSideBar() {
    return (
      <Switch>
        <Route
          exact path={["/", "/folder", "/folder/:folderId"]}
          render={(props) => (
            <SideBar
              folders={folders}
              currentFolderId={currentFolderId}
              handleSetCurrentFolderId={handleSetCurrentFolderId}
              currentNote={currentNote}
              {...props}
            />
          )}
        />
      </Switch>
    )
  }

  function renderNotes() {


    return (
      <Notes
        notes={notes}
        currentNote={currentNote}
        handleSetCurrentNote={handleSetCurrentNote}
        folders={folders}
        currentFolderId={currentFolderId}
        handleSetCurrentFolderId={handleSetCurrentFolderId}
      ></Notes>
    )


  }

  // Key is using render instead of 'component'.
  return (
    <>
      <Header>
        <Link to="/" onClick={() => setCurrentFolderId(false)}>Noteful</Link>
      </Header>
      <Container>
        <LeftContainer>
          {renderSideBar()}
        </LeftContainer>
        <RightContainer>
          <h1>Notes:</h1>
          {renderNotes()}
        </RightContainer>
      </Container>
    </>
  );
}

// CSS
const Header = styled.header`
  text-align: center;
`;
const Container = styled.div`
  display: flex;
`;
const LeftContainer = styled.div`
  flex-grow: 1;
  padding: 5px;
`;
const RightContainer = styled.div`
  flex-grow: 4;
  padding: 5px;
`;
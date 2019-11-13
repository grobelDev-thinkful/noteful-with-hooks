import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar.js'
import styled from 'styled-components'
import dummyStore from '../dummy-store.js';

const Container = styled.div`
  display: flex;
`;

export default function FolderPage(props) {
  console.log('we got the folders');
  console.log(props.folders);
  return (
    <div className="container">
      <h1>Folder Page</h1>
      <Container>
        <SideBar folders={dummyStore.folders}></SideBar>
        <p>
          <Link to="/">HomePage</Link>
        </p>
      </Container>

    </div>
  )
}
import { StatusBar } from 'expo-status-bar';
import React from 'react';

/** IMPORT USER */
import Routes from './src/routes/stack';

function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#171717' />
      <Routes />
    </>
  );
}

export default App;
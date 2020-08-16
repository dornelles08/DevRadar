import { StatusBar, YellowBox } from 'react-native';
import React from 'react';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}
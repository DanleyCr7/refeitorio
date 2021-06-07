import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Routes from './routes';
import Menu from './pages/menu';

export default class App extends Component {
  render() {
    return <Routes />
  }
};
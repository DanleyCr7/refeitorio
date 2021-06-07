import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { Colors } from '../../config/colors';

const WIDTH = Dimensions.get('window').width;

export const Box = styled.View`
  flex: 1;
  width: ${WIDTH - 20};
  background-color: ${Colors.BOX};
  padding: 20px;
  margin-vertical: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #999;
  align-items: center;
`;
import React from 'react';
import {
	Text
} from 'react-native';

export default ({ filtered, total }) =>
  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{filtered} out of {total}</Text>
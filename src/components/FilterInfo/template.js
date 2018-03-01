import React from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default ({ filtered, total, resetFilter }) =>
  <View>
    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{filtered} out of {total}</Text>
    <TouchableHighlight onPress={() => resetFilter()}>
      <Text>Reset</Text>
    </TouchableHighlight>
  </View>
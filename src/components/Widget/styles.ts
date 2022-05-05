import { StyleSheet } from 'react-native';

import { getBottomSpace } from'react-native-iphone-x-helper';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.brand,
    borderRadius: 24,

    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    right: 16,

    height: 48,
    width: 48,
  }
});
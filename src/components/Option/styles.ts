import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    marginHorizontal:8,
    height: 112,
    width: 104,

    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  image: {
    height: 40,
    width: 40,
  },

  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    marginTop: 8
  }
});
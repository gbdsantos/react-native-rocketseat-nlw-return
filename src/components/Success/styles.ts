import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  image: {
    marginBottom: 10,
    marginTop: 42,
    height: 36,
    width: 36,
  },
  
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.colors.text_primary,
    fontSize: 20,
    marginBottom: 24,
  },

  button: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 56,
    paddingHorizontal: 24,
    height: 40,
  },

  buttonTitle: {
    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  title: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.medium,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  }
});

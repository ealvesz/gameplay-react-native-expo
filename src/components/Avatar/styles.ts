import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    position: 'relative',
    padding: 2,
  },
  innerBox: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: theme.colors.secondary60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialsText: {
    fontFamily: theme.fonts.heading,
    fontSize: 18,
    color: theme.colors.heading,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  statusBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.colors.background,
  }
});

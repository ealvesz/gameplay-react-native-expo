import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
    padding: 1,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    position: 'relative',
  },
  checkedIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: theme.fonts.text,
    color: theme.colors.body,
    fontSize: 11,
    marginTop: 2,
    textAlign: 'center',
  }
});

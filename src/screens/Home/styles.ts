import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 24,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    flexDirection: 'row',
  },
  userGreeting: {
    fontFamily: theme.fonts.title,
    fontSize: 20,
    color: theme.colors.heading,
  },
  username: {
    fontFamily: theme.fonts.title,
    fontSize: 20,
    color: theme.colors.heading,
    fontWeight: 'bold',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  message: {
    fontFamily: theme.fonts.text,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  categoriesSection: {
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  sectionSubtitle: {
    fontFamily: theme.fonts.text,
    color: theme.colors.highlight,
    fontSize: 11,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  matchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  matchesTitle: {
    fontFamily: theme.fonts.title,
    color: theme.colors.heading,
    fontSize: 18,
    fontWeight: 'bold',
  },
  matchesBadge: {
    backgroundColor: theme.colors.secondary60,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  matchesTotal: {
    fontFamily: theme.fonts.text,
    color: theme.colors.highlight,
    fontSize: 12,
  },
  matchesList: {
    marginTop: 4,
  }
});

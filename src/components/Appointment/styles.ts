import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: theme.colors.secondary60,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  content: {
    flex: 1,
    marginLeft: 14,
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryBadge: {
    backgroundColor: 'rgba(229, 28, 68, 0.12)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  category: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  gameSubtitle: {
    fontFamily: theme.fonts.text,
    color: theme.colors.highlight,
    fontSize: 12,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateIcon: {
    marginRight: 6,
  },
  date: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.heading,
    fontSize: 12,
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  player: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    fontWeight: '600',
  }
});

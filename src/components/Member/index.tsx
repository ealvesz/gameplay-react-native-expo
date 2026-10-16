import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export type MemberProps = {
  id: string;
  username: string;
  initials: string;
  status: 'online' | 'busy';
  role: string;
};

type Props = {
  data: MemberProps;
};

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Text style={styles.initialsText}>{data.initials}</Text>
        </View>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: isOnline ? theme.colors.on : theme.colors.busy }
          ]}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.username}>{data.username}</Text>
        <Text style={styles.statusText}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{data.role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: theme.colors.secondary60,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  initialsText: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: theme.colors.secondary60,
  },
  info: {
    flex: 1,
  },
  username: {
    color: theme.colors.heading,
    fontSize: 15,
    fontFamily: theme.fonts.heading,
    fontWeight: 'bold',
  },
  statusText: {
    color: theme.colors.highlight,
    fontSize: 12,
    marginTop: 2,
  },
  badge: {
    backgroundColor: 'rgba(229, 28, 68, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  badgeText: {
    color: theme.colors.primary,
    fontSize: 10,
    fontFamily: theme.fonts.medium,
    fontWeight: 'bold',
  }
});

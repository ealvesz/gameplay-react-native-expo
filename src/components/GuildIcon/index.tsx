import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

type Props = {
  iconName?: keyof typeof Feather.glyphMap;
};

export function GuildIcon({ iconName = 'shield' }: Props) {
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={28} color={theme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  }
});

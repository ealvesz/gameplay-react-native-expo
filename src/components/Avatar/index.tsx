import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
  initials: string;
  isOnline?: boolean;
};

export function Avatar({ initials, isOnline = true }: Props) {
  const { secondary50, secondary70, primary } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[primary, secondary70]}>
      <View style={styles.innerBox}>
        <Text style={styles.initialsText}>{initials}</Text>
      </View>
      <View
        style={[
          styles.statusBadge,
          { backgroundColor: isOnline ? theme.colors.on : theme.colors.busy }
        ]}
      />
    </LinearGradient>
  );
}

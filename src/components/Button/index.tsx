import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  iconName?: keyof typeof Feather.glyphMap;
};

export function Button({ title, iconName, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      {iconName && (
        <View style={styles.iconContainer}>
          <Feather name={iconName} size={18} color={theme.colors.heading} />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

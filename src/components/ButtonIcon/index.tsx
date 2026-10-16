import React from 'react';
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome5 name="discord" size={22} color={theme.colors.heading} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

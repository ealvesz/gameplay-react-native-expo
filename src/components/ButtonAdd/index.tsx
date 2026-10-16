import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Feather name="plus" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
}

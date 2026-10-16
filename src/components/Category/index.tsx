import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  subtitle?: string;
  iconName: string;
  checked?: boolean;
};

export function Category({ title, subtitle, iconName, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <LinearGradient
        style={styles.container}
        colors={checked ? [theme.colors.primary, theme.colors.line] : [theme.colors.secondary50, theme.colors.secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.7 }]}
          colors={[theme.colors.secondary60, theme.colors.secondary50]}
        >
          {checked && <View style={styles.checkedIndicator} />}
          <View style={styles.iconContainer}>
            <Feather
              name={(iconName as any) || 'award'}
              size={24}
              color={checked ? theme.colors.primary : theme.colors.highlight}
            />
          </View>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
}

import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      keyboardType="numeric"
      maxLength={2}
      placeholderTextColor={theme.colors.highlight}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.secondary60,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.heading,
    fontSize: 16,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  }
});

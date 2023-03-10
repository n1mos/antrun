import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress(): void;
}

const Button = ({ title, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6a1ad4',
    paddingVertical: 20,
    borderRadius: 4,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default Button;

import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { AppointmentItemProps } from '../../@types/navigation';

type Props = TouchableOpacityProps & {
  data: AppointmentItemProps;
};

export function Appointment({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <GuildIcon />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.category}>{data.category}</Text>
          </View>
        </View>

        <Text style={styles.gameSubtitle}>{data.game}</Text>

        <View style={styles.footer}>
          <View style={styles.dateInfo}>
            <Feather name="calendar" size={13} color={theme.colors.primary} style={styles.dateIcon} />
            <Text style={styles.date}>{data.date}</Text>
          </View>

          <View style={styles.playersInfo}>
            <View
              style={[
                styles.statusPoint,
                { backgroundColor: data.isHost ? theme.colors.on : theme.colors.primary }
              ]}
            />
            <Text style={[styles.player, { color: data.isHost ? theme.colors.on : theme.colors.primary }]}>
              {data.isHost ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
      <Feather name="chevron-right" size={18} color={theme.colors.highlight} />
    </TouchableOpacity>
  );
}

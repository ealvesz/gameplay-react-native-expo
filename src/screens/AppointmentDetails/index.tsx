import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Member, MemberProps } from '../../components/Member';
import { AppointmentItemProps } from '../../@types/navigation';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type RouteParams = {
  appointment: AppointmentItemProps;
};

export function AppointmentDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { appointment } = route.params as RouteParams;

  const membersMock: MemberProps[] = [
    {
      id: '1',
      username: 'Rodrigo Gonçalves',
      initials: 'RG',
      status: 'online',
      role: 'LENDÁRIO'
    },
    {
      id: '2',
      username: 'Diego Fernandes',
      initials: 'DF',
      status: 'online',
      role: 'LENDÁRIO'
    },
    {
      id: '3',
      username: 'Maik Brito',
      initials: 'MB',
      status: 'busy',
      role: 'CONVIDADO'
    }
  ];

  function handleScheduleNew() {
    navigation.navigate('AppointmentCreate', {
      guild: {
        id: appointment.id,
        name: appointment.name,
        icon: appointment.icon,
      }
    });
  }

  function handleEnterMatch() {
    Alert.alert('Partida', 'Conectando ao canal de voz e servidor do Discord!');
  }

  return (
    <Background>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={20} color={theme.colors.heading} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>DETALHES DA PARTIDA</Text>
        <TouchableOpacity onPress={() => Alert.alert('Compartilhar', 'Link do convite copiado!')} style={styles.backButton}>
          <Feather name="share-2" size={18} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.bannerContainer}>
        <View style={styles.badgeOnline}>
          <View style={styles.greenDot} />
          <Text style={styles.badgeOnlineText}>SERVIDOR ATIVO</Text>
        </View>
        <Text style={styles.title}>{appointment.name}</Text>
        <Text style={styles.subtitle}>{appointment.description}</Text>
      </View>

      <View style={styles.rulesCard}>
        <View style={styles.rulesHeader}>
          <View style={styles.rulesTitleRow}>
            <Feather name="shield" size={14} color={theme.colors.primary} style={{ marginRight: 6 }} />
            <Text style={styles.rulesTitle}>MODO {appointment.category.toUpperCase()}</Text>
          </View>
          <Text style={styles.rulesCount}>3 ONLINE de 8 inscritos</Text>
        </View>
        <Text style={styles.rulesText}>
          Regra da sala: Comunicação obrigatória via canal de voz tático. Proibido condutas antijogo ou toxicidade.
        </Text>
      </View>

      <View style={styles.membersSection}>
        <View style={styles.membersHeader}>
          <Text style={styles.membersTitle}>JOGADORES</Text>
          <Text style={styles.membersTotal}>Total {membersMock.length}</Text>
        </View>

        <FlatList
          data={membersMock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Member data={item} />}
          showsVerticalScrollIndicator={false}
          style={styles.membersList}
        />
      </View>

      <View style={styles.footer}>
        <Button title="ENTRAR NA PARTIDA" iconName="play" onPress={handleEnterMatch} />
        <TouchableOpacity style={styles.secondaryButton} onPress={handleScheduleNew} activeOpacity={0.8}>
          <Feather name="calendar" size={16} color={theme.colors.heading} style={{ marginRight: 8 }} />
          <Text style={styles.secondaryButtonText}>AGENDAR NOVA PARTIDA NESTE SERVIDOR</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

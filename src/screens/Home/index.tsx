import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Background } from '../../components/Background';
import { Avatar } from '../../components/Avatar';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { AppointmentItemProps } from '../../@types/navigation';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState('1');

  const appointmentsMock: AppointmentItemProps[] = [
    {
      id: '1',
      name: 'Lendários',
      game: 'League of Legends',
      icon: 'shield',
      category: 'Ranqueada',
      date: '18/06 às 20:30h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
      isHost: true,
    },
    {
      id: '2',
      name: 'Yeah Boy',
      game: 'Valorant',
      icon: 'crosshair',
      category: 'Duelo 1x1',
      date: '19/06 às 19:00h',
      description: 'Disputa de mira direta no servidor privado de Valorant.',
      isHost: false,
    },
    {
      id: '3',
      name: 'Bando de Loucos',
      game: 'CS:GO',
      icon: 'smile',
      category: 'Diversão',
      date: '20/06 às 21:00h',
      description: 'Lobby aberto para diversão e skins novas.',
      isHost: true,
    }
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(item: AppointmentItemProps) {
    navigation.navigate('AppointmentDetails', { appointment: item });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.user}>
          <Avatar initials="RG" isOnline />
          <View>
            <View style={styles.greeting}>
              <Text style={styles.userGreeting}>Olá, </Text>
              <Text style={styles.username}>Rodrigo</Text>
            </View>
            <View style={styles.messageRow}>
              <Text style={styles.message}>Hoje é dia de vitória</Text>
              <Feather name="flag" size={12} color={theme.colors.on} style={{ marginLeft: 6 }} />
            </View>
          </View>
        </View>

        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <View style={styles.categoriesSection}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>MODOS DE PARTIDA</Text>
          <Text style={styles.sectionSubtitle}>SELEÇÃO LIVRE</Text>
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.matchesHeader}>
          <Text style={styles.matchesTitle}>Partidas agendadas</Text>
          <View style={styles.matchesBadge}>
            <Text style={styles.matchesTotal}>Total 3</Text>
          </View>
        </View>

        <FlatList
          data={appointmentsMock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => handleAppointmentDetails(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={styles.matchesList}
        />
      </View>
    </Background>
  );
}

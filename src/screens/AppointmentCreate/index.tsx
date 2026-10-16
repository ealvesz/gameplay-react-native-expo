import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon';
import { CategorySelect } from '../../components/CategorySelect';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppointmentCreate() {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as { guild?: { id: string; name: string; icon: string } } | undefined;

  const [category, setCategory] = useState('1');
  const [day, setDay] = useState('22');
  const [month, setMonth] = useState('07');
  const [hour, setHour] = useState('20');
  const [minute, setMinute] = useState('30');
  const [description, setDescription] = useState('');

  const selectedGuild = routeParams?.guild || {
    id: '1',
    name: 'Lendários',
    icon: 'shield',
  };

  function handleCreateAppointment() {
    if (!day || !month || !hour || !minute) {
      Alert.alert('Atenção', 'Preencha a data e o horário da partida.');
      return;
    }

    Alert.alert(
      'Partida Agendada!',
      `Servidor: ${selectedGuild.name}\nData: ${day}/${month} às ${hour}:${minute}h`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home')
        }
      ]
    );
  }

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Feather name="arrow-left" size={20} color={theme.colors.heading} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>AGENDAMENTO</Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Servidor Selecionado */}
          <View style={styles.serverCard}>
            <GuildIcon />
            <View style={styles.serverInfo}>
              <Text style={styles.serverName}>{selectedGuild.name}</Text>
              <View style={styles.statusRow}>
                <View style={styles.greenDot} />
                <Text style={styles.serverStatus}>Servidor Selecionado</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={20} color={theme.colors.highlight} />
          </View>

          <View style={styles.sectionTitleRow}>
            <Text style={styles.label}>CATEGORIA</Text>
            <Text style={styles.subLabel}>SELECIONE UMA</Text>
          </View>

          <CategorySelect
            categorySelected={category}
            setCategory={setCategory}
          />

          <View style={styles.form}>
            {/* Data e Horário */}
            <View style={styles.row}>
              <View>
                <Text style={styles.fieldLabel}>DIA E MÊS</Text>
                <View style={styles.timeInputsRow}>
                  <SmallInput value={day} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput value={month} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={styles.fieldLabel}>HORÁRIO</Text>
                <View style={styles.timeInputsRow}>
                  <SmallInput value={hour} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput value={minute} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={styles.timezoneRow}>
              <Feather name="clock" size={12} color={theme.colors.highlight} style={{ marginRight: 6 }} />
              <Text style={styles.timezoneHint}>
                Partida programada no horário de Brasília (UTC-3)
              </Text>
            </View>

            {/* Descrição */}
            <View style={styles.descriptionHeader}>
              <Text style={styles.fieldLabel}>DESCRIÇÃO</Text>
              <Text style={styles.counter}>{description.length} / 100 MAX</Text>
            </View>

            <TextInput
              style={styles.textArea}
              multiline
              maxLength={100}
              numberOfLines={4}
              placeholder="Descreva os detalhes da jogatina..."
              placeholderTextColor={theme.colors.highlight}
              value={description}
              onChangeText={setDescription}
            />

            <View style={styles.lobbyInfoCard}>
              <View style={styles.lobbyTag}>
                <Text style={styles.lobbyTagText}>EU +3</Text>
              </View>
              <View style={styles.lobbyDetails}>
                <Text style={styles.lobbyTitle}>Vagas na Equipe</Text>
                <Text style={styles.lobbySub}>Lobby aberto para membros</Text>
              </View>
              <View style={styles.squadBadge}>
                <Text style={styles.squadBadgeText}>SQUAD 4X4</Text>
              </View>
            </View>

            <View style={styles.footer}>
              <Button title="AGENDAR" iconName="check-circle" onPress={handleCreateAppointment} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}

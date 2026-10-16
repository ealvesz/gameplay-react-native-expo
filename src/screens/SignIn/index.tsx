import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        <View style={styles.heroGraphic}>
          <View style={styles.badgeTop}>
            <View style={styles.dotPulse} />
            <Text style={styles.badgeTopText}>NLW TOGETHER</Text>
          </View>
          <View style={styles.gamepadIconWrapper}>
            <Feather name="play-circle" size={96} color={theme.colors.primary} />
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{'\n'}
            e organize suas{'\n'}
            <Text style={styles.titleHighlight}>jogatinas</Text>
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos a qualquer momento.
          </Text>

          <View style={styles.statsCard}>
            <View style={styles.statsLeft}>
              <Feather name="activity" size={16} color={theme.colors.primary} style={{ marginRight: 8 }} />
              <Text style={styles.statsText}>42 salas de esquadrão ativas</Text>
            </View>
            <View style={styles.badgeLive}>
              <Text style={styles.badgeLiveText}>ON</Text>
            </View>
          </View>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={handleSignIn}
          />

          <Text style={styles.disclaimer}>
            Acesso rápido e seguro através dos seus servidores.
          </Text>
        </View>
      </View>
    </Background>
  );
}

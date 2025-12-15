import { useAuth } from '@/components/contex/auth-context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PerfilScreen: React.FC = () => {
  const { userEmail, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Usuario</Text>
      
      <Text style={styles.emailLabel}>Email ingresado:</Text>
      <Text style={styles.emailText}>{userEmail || 'No hay email registrado.'}</Text> 

      <View style={styles.separator} />

      <Text onPress={logout} style={styles.logoutButton}>
        Cerrar Sesión
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40 },
  emailLabel: { fontSize: 16, color: 'gray', marginBottom: 5 },
  emailText: { fontSize: 20, fontWeight: '600', color: '#068b39ff' },
  separator: { height: 1, width: '80%', backgroundColor: '#ccc', marginVertical: 30 },
  logoutButton: { color: 'red', fontSize: 16, fontWeight: 'bold' }
});

export default PerfilScreen;
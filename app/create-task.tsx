import { useTasks } from '@/components/contex/task-context';
import { pickImage } from '@/services/file-photo-service';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

type SelectedImage = {
  uri: string;
  base64?: string | null;
};

const CreateTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<SelectedImage | null>(null);
  const { addTask } = useTasks();

  const handlePickImage = async () => {
    const result = await pickImage();
    if (result) {
      setImage(result);
    }
  };

  const handleCreateTask = async () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Debes escribir un título');
      return;
    }

    const newTask = {
      title: title,
      completed: false,
      location: {
          latitude: -33.4489,
          longitude: -70.6693
      },
      photoUri: image ? image.uri : "" 
    };

    await addTask(newTask);
    Alert.alert('Éxito', 'Tarea creada');
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Nueva Tarea</Text>

        <View style={styles.formCard}>
          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Comprar donas"
            value={title}
            onChangeText={setTitle}
          />

          <Pressable style={styles.photoButton} onPress={handlePickImage}>
            <MaterialCommunityIcons name="camera" size={24} color="#fff" />
            <Text style={styles.photoButtonText}>
              {image ? 'Cambiar Foto' : 'Seleccionar Foto'}
            </Text>
          </Pressable>

          {image && image.uri ? (
            <View style={styles.imagePreviewContainer}>
              <Image 
                source={{ uri: image.uri }} 
                style={styles.imagePreview} 
              />
            </View>
          ) : null}

          <Pressable style={styles.createButton} onPress={handleCreateTask}>
            <Text style={styles.createButtonText}>CREAR TAREA</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  scrollContainer: { padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#f9c235', textAlign: 'center', marginBottom: 20 },
  formCard: { backgroundColor: 'white', padding: 20, borderRadius: 15 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 15 },
  photoButton: { flexDirection: 'row', backgroundColor: '#3498db', padding: 10, borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 15 },
  photoButtonText: { color: 'white', marginLeft: 10, fontWeight: 'bold' },
  imagePreviewContainer: { alignItems: 'center', marginBottom: 15 },
  imagePreview: { width: 200, height: 200, borderRadius: 10, resizeMode: 'cover' },
  createButton: { backgroundColor: '#068b39ff', padding: 15, borderRadius: 10, alignItems: 'center' },
  createButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default CreateTaskScreen;
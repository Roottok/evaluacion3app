import { useAuth } from '@/components/contex/auth-context';
import { useTasks } from '@/components/contex/task-context';
import { Task } from '@/types/Task';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

const TaskItem = ({ task, toggleTask, deleteTask }: { task: Task, toggleTask: (id: string, status: boolean) => void, deleteTask: (id: string) => void }) => (
    <View style={styles.taskItem}>
        <Pressable onPress={() => toggleTask(task.id, task.completed)} style={styles.checkbox}>
            <MaterialCommunityIcons 
                name={task.completed ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'} 
                size={24} 
                color={task.completed ? '#068b39ff' : '#ccc'} 
            />
        </Pressable>
        
        <View style={styles.taskContent}>
            <Text style={[styles.taskTitle, task.completed && styles.completedTaskTitle]}>
                {task.title}
            </Text>
            <View style={styles.metadata}>
                <Text style={styles.locationText}>
                    Ubicación: Lat {task.location?.latitude.toFixed(4)}, Lon {task.location?.longitude.toFixed(4)}
                </Text>
            </View>
        </View>
        
        {task.photoUri && (
            <Image source={{ uri: task.photoUri }} style={styles.taskImage} />
        )}

        <Pressable onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
             <MaterialCommunityIcons name="delete" size={24} color="red" />
        </Pressable>
    </View>
);

const ListHeader = ({ onLogout }: { onLogout: () => void }) => (
    <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
            <View style={{ width: 24 }} /> 
            <Text style={styles.headerTitle}>🍩Springfield APP🍩</Text>
            <Pressable onPress={onLogout}>
                <MaterialCommunityIcons name="logout" size={24} color="#d9534f" />
            </Pressable>
        </View>
        <Text style={styles.headerSubtitle}>Lista de Tareas (Evaluación 3)</Text>
    </View>
);

const TaskListScreen: React.FC = () => {
    const { tasks, loading, toggleTask, deleteTask } = useTasks();
    const { logout } = useAuth();

    if (loading && tasks.length === 0) {
        return <View style={styles.container}><Text style={styles.loadingText}>Cargando tareas...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <TaskItem task={item} toggleTask={toggleTask} deleteTask={deleteTask} />}
                ListEmptyComponent={() => <Text style={styles.emptyText}>No tienes tareas pendientes. ¡Crea una!</Text>}
                ListHeaderComponent={<ListHeader onLogout={logout} />}
                contentContainerStyle={tasks.length === 0 ? styles.listEmpty : undefined}
                style={{ width: '100%', paddingHorizontal: 10 }}
            />

            <Pressable 
                style={styles.addButton} 
                onPress={() => router.push('/create-task')}
            >
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f0f0', paddingTop: 10 },
    headerContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 8,
    },
    headerTop: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#f9c235',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    loadingText: { fontSize: 18, textAlign: 'center', marginTop: 50 },
    listEmpty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    emptyText: { fontSize: 18, color: '#666', textAlign: 'center', paddingVertical: 40 },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    checkbox: { marginRight: 10 },
    taskContent: { flex: 1, marginRight: 10 },
    taskTitle: { fontSize: 16, fontWeight: '500' },
    completedTaskTitle: { textDecorationLine: 'line-through', color: '#888' },
    metadata: { marginTop: 5 },
    locationText: { fontSize: 10, color: '#888', fontStyle: 'italic' },
    taskImage: { width: 50, height: 50, borderRadius: 5, resizeMode: 'cover', marginRight: 10 },
    deleteButton: { padding: 5, marginLeft: 10 },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#068b39ff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    addButtonText: { fontSize: 30, color: '#fff', lineHeight: 30 },
});

export default TaskListScreen;
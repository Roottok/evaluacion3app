import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ExploreScreen: React.FC = () => {
    const [count, setCount] = useState(0);
    const [effectTrigger, setEffectTrigger] = useState(false);

    useEffect(() => {
        if (count > 0) {
            console.log(`[Efecto 1 - COHETE]: El contador ha alcanzado el valor: ${count}`);
        }
        if (typeof document !== 'undefined') {
            document.title = `Cohetes: ${count}`;
        }
    }, [count]);

    useEffect(() => {
        console.log(`[Efecto 2 - BRILLO]: El botón de efecto se ha cambiado a: ${effectTrigger ? 'Activado' : 'Desactivado'}`);
    }, [effectTrigger]);


    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleEffectToggle = () => {
        setEffectTrigger(p => !p);
    };

    return (
        <View style={styles.container}>
            
            <Text style={styles.counterText}>
                {count} 🚀
            </Text>

            <Pressable style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>INCREMENTAR</Text>
            </Pressable>
            
            <View style={styles.separator} />

            <Text style={styles.effectStatusText}>
                Color: 
                <Text style={{ fontWeight: 'bold', color: effectTrigger ? '#FFD700' : '#1E90FF' }}>
                    {effectTrigger ? ' AMARILLO' : ' AZUL'}
                </Text>
            </Text>

            <Pressable 
                style={[
                    styles.secondaryButton, 
                    { backgroundColor: effectTrigger ? '#FFD700' : '#1E90FF' }
                ]} 
                onPress={handleEffectToggle}
            >
                <Text style={[styles.secondaryButtonText, { color: effectTrigger ? '#333' : '#ffffff' }]}>
                    CAMBIAR ✨
                </Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff' 
    },
    counterText: { 
        fontSize: 60, 
        fontWeight: 'bold', 
        marginBottom: 30,
        color: '#333'
    },
    button: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#068b39ff',
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
    separator: {
        height: 1,
        width: '50%',
        backgroundColor: '#ccc',
        marginVertical: 40,
    },
    effectStatusText: {
        fontSize: 18,
        marginBottom: 15,
        color: '#555',
    },
    secondaryButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        elevation: 3,
    },
    secondaryButtonText: {
        fontSize: 16,
        fontWeight: '600',
    }
});

export default ExploreScreen;
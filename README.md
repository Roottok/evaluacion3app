# 📱 PROYECTO EVA-LIBRERIA | EVALUACIÓN 3

## 📌 Informe General del Proyecto

Esta aplicación móvil, **"EVA-Libreria"**, es la continuación de la Evaluación 1. Fue desarrollada utilizando **React Native**, **Expo** y **TypeScript**, manteniendo el flujo de autenticación seguro e implementando un módulo completo de **Lista de Tareas (To-Do List)**.

CONSUMO API 

***

## ⚙️ Requisitos Técnicos Implementados (Evaluación 2)

### 1. Funcionalidades de Tareas (TODO List)

* **Creación de Tareas:** Se capturan y asocian a la tarea:
    * Título.
    * Foto (obtenida mediante `expo-image-picker`).
    * Localización (coordenadas GPS obtenidas mediante `expo-location`).
* **Gestión de Estado:** Implementación del `TaskContext` para manejar la lista de tareas de forma centralizada.
* **Visibilidad por Usuario:** Las tareas se asocian al `userEmail` actual, y solo son visibles por el usuario que inició sesión.
* **Interacción:** Se implementó la lógica para **Eliminar tareas** y **Marcar/Desmarcar** tareas como completadas.

### 2. Persistencia y Archivos 💾

* **Persistencia Local:** Los datos de la lista de tareas (título, ubicación, estado) se guardan de forma persistente utilizando **`AsyncStorage`**.
* **Almacenamiento de Fotos:** La lógica inicial de `expo-file-system` para guardar las fotos en el sistema de archivos local se implementó. *[Enlace al video]* demuestra que la foto se carga correctamente en la tarea.

### 3. Sistema de Autenticación Evaluacion 3

* **Login Seguro:** La autenticación se realiza con la autenticacion API
* **Estructura de Rutas:** Se mantiene la navegación modular con **Expo Router** y las pestañas **Home** (Lista de Tareas) y **Perfil** (muestra el email).

### Reflexión sobre el Uso de Herramientas de Asistencia 🤖
Para la realización de esta Evaluación 2, se utilizó una **Herramienta de Asistencia con Inteligencia Artificial (IA)** como apoyo en las siguientes áreas:
1.  **Arquitectura de Contextos:** Diseño del patrón de `Provider` anidados (`AuthContext` y `TaskContext`) y la gestión de flujos de datos asíncronos (`AsyncStorage`).
2.  **Integración de APIs Nativas:** Generación de la estructura base para el manejo de permisos y la captura de datos con `expo-location` y `expo-image-picker`.
3.  **Solución de Race Conditions:** Implementación del patrón `useEffect` en la pantalla de Login para resolver los problemas de redirección asíncrona de Expo Router.

La IA fue empleada como herramienta de consulta para optimizar las estructuras de código y asegurar el cumplimiento de las buenas prácticas de React y TypeScript.

***

## 🚀 Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone
    cd eva-libreria
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    npx expo install @react-native-async-storage/async-storage expo-location expo-image-picker expo-file-system
    ```

3.  **Iniciar la aplicación:**
    ```bash
    npx expo start
    ```
    Escanea el código QR desde la aplicación **Expo Go** en un dispositivo móvil o emulador.


---
## Integrantes
-Eduardo Hormazabal A.
-Jesus Mujica M.
-Maria Puen C.
## 🔗 Enlaces de Entrega

| Detalle | Enlace |
| :--- | :--- |
| **Repositorio GIT** | https://github.com/Roottok/eva2desarrolloaplicaciones |
| **Video Demostrativo** | https://www.loom.com/share/79e118b0b37243d3b4e8280c80510d55 |
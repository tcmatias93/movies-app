# Welcome to your movies app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Descripción

En esta primera etapa se utilizó:

- axios
- react-native-reanimated-carousel
- tailwindcss
- @tanstack/react-query

En una primera etapa del proyecto se utilizó axios para hacer las peticiones de get a la API para traer las películas. Se utilizó tailwindcss para facilitar el diseño de la app. se utilizó react-native-reanimated-carousel para crear el carrusel principal ya que el resto se creó con FlatList de react-native y se utilizo @tanstack/react-query para mantener la información de la petición y no tener que hacer una solicitud de los datos todo el tiempo.

## Description

In this first stage we used:

- axios
- react-native-carousel-reanimated
- tailwind
- @tanstack/react-query

In the first stage of the project, axios was used to make get requests to the API to bring the movies. Tailwindcss was used to facilitate the design of the application. used react-native-reanimated-carousel to create the main carousel since the rest was created with react-native's FlatList and used @tanstack/react-query to keep the request information and not have to make a request the data all the time.

# react-native-use-form-lite

[![npm version](https://img.shields.io/npm/v/react-native-use-form-lite.svg?style=flat-square)](https://www.npmjs.com/package/react-native-use-form-lite)
[![GitHub Repo](https://img.shields.io/badge/GitHub-repository-blue?style=flat-square&logo=github)](https://github.com/urian121/react-native-use-form-lite)
[![npm](https://img.shields.io/npm/dt/react-native-use-form-lite.svg)](https://www.npmjs.com/package/react-native-use-form-lite)

Un **Custom Hook** simple, liviano y flexible para manejar formularios en **React Native** de forma rápida y sencilla.


## 🌍 ¿Qué es `react-native-use-form-lite`?

`react-native-use-form-lite` es un pequeño hook (`useForm`) que facilita la captura y manejo de datos en formularios de **React Native**, eliminando la necesidad de escribir manualmente funciones de `onChangeText`, `onValueChange`, etc., para cada campo.

Ideal para proyectos que necesitan formularios dinámicos sin complicaciones.


## ✨ ¿Qué problema soluciona?

- Simplifica la administración de estados en formularios.
- Evita crear múltiples funciones `onChange` para cada input.
- Soporta diferentes tipos de inputs (`TextInput`, `Picker`, `Switch`, etc.).
- Mejora la legibilidad y escalabilidad de tus formularios.
- Facilita el mantenimiento de formularios medianos a grandes.

## 📦 Instalación

```bash
npm install react-native-use-form-lite
```


## 🔧 Uso Básico

```tsx
import { StyleSheet, View, TextInput, Switch, Button } from 'react-native';
import { useForm } from 'react-native-use-form-lite';
// Nota: Para usar el componente Picker, debes instalar el paquete '@react-native-picker/picker' 
// npm install @react-native-picker/picker
import { Picker } from '@react-native-picker/picker';

const MyForm = () => {
  const { formData, register, resetForm, getEmptyFields } = useForm({
    name:'',
    email: '',
    isActive: false,
    selectedOption: '',
  });


  const handleSubmit = () => {
    // Imprime los datos del formulario en la consola al enviar
    console.log(formData);

    // obtener campos vacios
    const emptyFields = getEmptyFields();
    console.log(emptyFields); // Muestra los campos vacíos
  };

  return (
    <>
      <TextInput 
      placeholder="Name" {...register('name')} 
      />

      <TextInput
        placeholder="Correo electrónico"
        {...register('email')}
      />

      <Switch
        {...register('isActive', { type: 'switch' })}
      />

      <Picker
          {...register('selectedOption', { type: 'select' })}
        >
          <Picker.Item label="Colombia" value="CO-1" />
          <Picker.Item label="México" value="MX-2" />
          <Picker.Item label="Venezuela" value="VE-3" />
          <Picker.Item label="Argentina" value="AR-4" />
          <Picker.Item label="Chile" value="CL-5" />
          <Picker.Item label="Perú" value="PE-6" />
          <Picker.Item label="España" value="ES-7" />
          <Picker.Item label="Brasil" value="BR-8" />
          <Picker.Item label="Ecuador" value="EC-9" />
          <Picker.Item label="Bolivia" value="BO-10" />
      </Picker>

      <Button title="Enviar" onPress={handleSubmit} />
      <Button title="Resetear" onPress={resetForm} />
    </>
  );
};
```

## 🌟 Propiedades y funciones de `useForm`

1. **`formData`**:  
   Es el estado actual del formulario, que contiene los valores de los campos. Se actualiza automáticamente con las interacciones del usuario.
   ```js
   {
     name: 'John Doe',
     email: 'john.doe@example.com',
     isActive: true,
     selectedOption: 'US'
   }
   ```

2. **`register`**:  
   Es una función que conecta los campos del formulario al estado de `useForm`. Se pasa al componente como `props` para manejar los valores y cambios de cada campo.
   ```tsx
   <TextInput placeholder="Name" {...register('name')} />
   ```

3. **`resetForm`**:  
   Es una función que reinicia todos los campos del formulario a su estado inicial definido en `useForm`.
   ```tsx
   <Button title="Resetear" onPress={resetForm} />
   ```

### Estado inicial del formulario (`initialState`):

El objeto `{ name: '', email: '', isActive: false, selectedOption: '' }` es el **estado inicial** de los campos del formulario. Cada clave corresponde a un campo del formulario, y el valor es el valor inicial de ese campo.

- **`name`**: Campo de texto para el nombre, inicialmente vacío.
- **`email`**: Campo de texto para el correo electrónico, inicialmente vacío.
- **`isActive`**: Campo tipo `Switch`, inicialmente `false`.
- **`selectedOption`**: Campo tipo `select` o `Picker`, inicialmente vacío.


## 🧠 ¿Cómo funciona `register`?

Dependiendo del tipo de campo que declares, `register` conecta automáticamente el input con el estado:

- `type: 'text'` → Asocia `onChangeText`
- `type: 'select'` → Asocia `onValueChange` (ideal para Picker)
- `type: 'switch'` → Asocia `onValueChange` (ideal para Switch)
- Si no defines `type`, por defecto asume que es un `TextInput`.

## 🌟 Ventajas

- ✅ **Fácil integración** en proyectos nuevos o existentes.
- ✅ **Compatible** con `TextInput`, `Switch`, `Picker`, y otros componentes nativos.
- ✅ **Extensible** para otros tipos de inputs personalizados.
- ✅ **Escrito en TypeScript** 📄 para un tipado fuerte y autocompletado.
- ✅ **Súper liviano**.


## 📈 Ideal para:

- Formularios simples o dinámicos en React Native.
- Aplicaciones que requieren manejo de múltiples campos de forma sencilla.
- Proyectos que buscan una solución minimalista para formularios sin instalar librerías pesadas.


## 👨‍💻 Desarrollador

**Urian Viera**  
🌐 [urianviera.com](https://www.urianviera.com)  
📺 [YouTube](https://www.youtube.com/WebDeveloperUrianViera)  
💌 [urian1213viera@gmail.com](mailto:urian1213viera@gmail.com)  
☕ [¡Apóyame en PayPal!](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)

## Copyright

© 2025 Urian Viera. Todos los derechos reservados.


## 📜 Licencia

Distribuido bajo la licencia **MIT**.

[![GitHub Repo](https://img.shields.io/badge/GitHub-urian121/react--native--use--form--lite-000?logo=github&style=flat-square)](https://github.com/urian121/react-native-use-form-lite)


## Agradecimientos

¡Gracias a todos los **Devs** 👨‍💻 que han utilizado y contribuido al desarrollo de **react-native-use-form-lite**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.

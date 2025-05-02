# react-native-use-form-lite

[![npm version](https://img.shields.io/npm/v/react-native-use-form-lite.svg?style=flat-square)](https://www.npmjs.com/package/react-native-use-form-lite)
[![GitHub Repo](https://img.shields.io/badge/GitHub-repository-blue?style=flat-square&logo=github)](https://github.com/urian121/react-native-use-form-lite)
[![npm](https://img.shields.io/npm/dt/react-native-use-form-lite.svg)](https://www.npmjs.com/package/react-native-use-form-lite)

Un **Custom Hook** moderno, intuitivo, liviano y flexible para manejar formularios en **React Native** de forma rápida y sencilla.


## 🌍 ¿Qué es `react-native-use-form-lite`?

`react-native-use-form-lite` es un pequeño hook (`useFormLite`) que facilita la captura y manejo de datos en formularios de **React Native**, eliminando la necesidad de escribir manualmente funciones de `onChangeText`, `onValueChange`, etc., para cada campo.

Ideal para proyectos que necesitan formularios dinámicos sin complicaciones.


## ✨ ¿Qué problema soluciona?

- ✅ Simplifica la administración de estados en formularios.
- ✅ Evita crear múltiples funciones `onChange` para cada input.
- ✅ Soporta diferentes tipos de inputs (`TextInput`, `Picker`, `Switch`, etc.).
- ✅ Mejora la legibilidad y escalabilidad de tus formularios.
- ✅ Facilita el mantenimiento de formularios medianos a grandes.


## 📦 Instalación

```bash
npm install react-native-use-form-lite
```


## 🔧 Uso Básico

```tsx
import { StyleSheet, View, TextInput, Switch, Button } from 'react-native';
import { useFormLite } from 'react-native-use-form-lite';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker

const MyForm = () => {
  const { formData, register, resetForm, getEmptyFields } = useFormLite({
    name:'',
    email: '',
    isActive: false,
    selectedOption: '',
  });

  const handleSubmit = () => {

    // Imprime los datos del formulario en la consola al enviar
    console.log(formData);

    // Obtener campos vacios
    const emptyFields = getEmptyFields();
    console.log(emptyFields);
  };

  return (
    <>
      <TextInput placeholder="Name" {...register('name')} />
      <TextInput placeholder="Correo electrónico" {...register('email')} />
      <Switch {...register('isActive', { type: 'switch' })} />
      <Picker {...register('selectedOption', { type: 'select' })}>
        <Picker.Item label="Colombia" value="CO" />
        <Picker.Item label="México" value="MX" />
        <Picker.Item label="Venezuela" value="VE" />
      </Picker>
      <Button title="Enviar" onPress={handleSubmit} />
      <Button title="Resetear" onPress={resetForm} />
    </>
  );
};
```

## 🧩 API del Hook `useFormLite`

### `formData`
Estado actual del formulario:

```ts
{
  name: 'Urian Viera',
  email: 'urian@example.com',
  isActive: true,
  selectedOption: 'US'
}
```

### `register(fieldName, options?)`
Conecta un campo con el estado del formulario.

```tsx
<TextInput {...register('name')} />
<Switch {...register('isActive', { type: 'switch' })} />
<Picker {...register('selectedOption', { type: 'select' })} />
```

### `resetForm()`
Restablece el formulario a su estado inicial.

### `getEmptyFields()`
Retorna un array con los nombres de los campos vacíos.


## 🧠 ¿Cómo funciona `register`?

Según el tipo de input:

- `TextInput` → `type: 'text'` (predeterminado)
- `Picker` → `type: 'select'`
- `Switch` → `type: 'switch'`

Esto permite que los eventos `onChangeText` o `onValueChange` se asocien automáticamente.


## ✅ Ventajas

- Ligero y fácil de usar.
- Compatible con múltiples componentes de React Native.
- Sin dependencias externas innecesarias.
- Escrito en TypeScript para mejor DX.


## 📈 Ideal para:

- Formularios pequeños y medianos.
- Proyectos que buscan simplicidad.
- Casos donde no se necesita una librería pesada de formularios.


## 👨‍💻 Desarrollador

**Urian Viera**  
🌐 [urianviera.com](https://www.urianviera.com)  
📺 [YouTube](https://www.youtube.com/WebDeveloperUrianViera)  
💌 [urian1213viera@gmail.com](mailto:urian1213viera@gmail.com)  
☕ [¡Apóyame en PayPal!](https://www.paypal.com/donate/?hosted_button_id=4SV78MQJJH3VE)


## 📜 Licencia

Distribuido bajo la licencia **MIT**.


## 🙌 Agradecimientos

¡Gracias a todos los **Devs** 👨‍💻 que han utilizado y contribuido al desarrollo de **react-native-use-form-lite**! Su apoyo y retroalimentación son fundamentales para mejorar continuamente este paquete.

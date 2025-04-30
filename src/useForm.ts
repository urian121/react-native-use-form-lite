import { useState } from 'react';

/**
 * Representa el estado general del formulario.
 * Cada campo puede ser de cualquier tipo de dato.
 */
type FormState = Record<string, any>;

/**
 * Opciones adicionales para el registro de un campo.
 * Permite definir el tipo de input para personalizar los handlers.
 */
interface RegisterOptions {
    type?: 'text' | 'select' | 'switch';
}

/**
 * Custom hook para manejar formularios de manera sencilla en React Native.
 * @param initialState Estado inicial del formulario (campos y valores).
 */
export function useForm(initialState: FormState = {}) {
    const [formData, setFormData] = useState<FormState>({ ...initialState });

    /**
     * Actualiza un campo específico del formulario.
     * @param key Nombre del campo.
     * @param value Nuevo valor del campo.
     */
    const onChange = (key: string, value: any) => {
        setFormData((prevState: FormState) => ({ ...prevState, [key]: value }));
    };

    /**
     * Reinicia el formulario a su estado inicial.
     */
    const resetForm = () => setFormData(initialState);


    /**
     * Asocia un campo del formulario con un input, select o switch.
     * Devuelve las props necesarias para conectar el componente al formulario.
     * @param key Nombre del campo.
     * @param options Opciones para definir el tipo de input.
     * @returns Props para el componente correspondiente.
     */
    const register = (key: string, options: RegisterOptions = {}) => {
        if (options.type === 'select') {
            return {
                selectedValue: formData[key],
                onValueChange: (value: any) => onChange(key, value),
            };
        }
        if (options.type === 'switch') {
            return {
                value: formData[key],
                onValueChange: (value: any) => onChange(key, value),
            };
        }

        // Default para inputs de texto
        return {
            value: formData[key],
            onChangeText: (text: string) => onChange(key, text),
        };
    };

    /**
     * Función para capturar los campos vacíos del formulario.
     * Recorre todos los campos del formulario y verifica si hay algún campo vacío.
     * Retorna un objeto con las claves de los campos vacíos.
     */
    const getEmptyFields = () => {
        const emptyFields: Record<string, string> = {};

        Object.keys(formData).forEach(key => {
            if (formData[key] === '' || formData[key] === null || formData[key] === undefined) {
                emptyFields[key] = 'Este campo está vacío';
            }
        });

        return emptyFields;
    };


    return {
        formData,   // Estado actual del formulario
        onChange,   // Función para actualizar manualmente un campo
        resetForm,  // Función para resetear el formulario
        register,   // Función para registrar inputs automáticamente,
        getEmptyFields, // Función para obtener los campos vacíos
    };
}
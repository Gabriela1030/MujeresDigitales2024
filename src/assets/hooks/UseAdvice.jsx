// Importamos los hooks necesarios
import { useState, useEffect } from 'react';
import axios from 'axios';

// Hook personalizado para obtener el consejo
export const useAdvice = () => {
    const [advice, setAdvice] = useState({ id: 0, advice: '' });
    const [error, setError] = useState(null);

    // Función para obtener un consejo desde la API
    const fetchAdvice = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            const adviceData = response.data.slip;
            setAdvice(adviceData);
            setError(null);  // Reiniciar error si se obtiene un consejo correctamente
        } catch (err) {
            setError("No fue posible obtener el consejo, inténtalo más tarde.");
            console.error("Error al obtener el consejo", err);
        }
    };

    // Obtenemos un consejo al cargar el componente
    useEffect(() => {
        fetchAdvice();
    }, []);

    return { advice, fetchAdvice, error };
};

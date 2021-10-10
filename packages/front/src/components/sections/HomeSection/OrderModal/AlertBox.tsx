import React from 'react';
import { Alert } from 'react-bootstrap';

export const AlertBox = ({ status }) => {
    if (status) {
        return (
            <Alert variant='success'>
                <Alert.Heading>Rezerwacja przebiegła poprawnie</Alert.Heading>
                <p>
                    Email potwierdzający rezerwację został wysłany. Na jego podstawie
                    możliwe jest dokonanie edycji.
                </p>
            </Alert>
        );
    } else {
        return (
            <Alert variant='danger'>
                <Alert.Heading>Błąd</Alert.Heading>
                <p>Coś poszło nie tak!</p>
            </Alert>
        );
    }
};

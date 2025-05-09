import React from 'react';
import { Button } from 'react-bootstrap';

const Botao = ({ texto, aoClicar }) => {
    return (
        <Button onClick={aoClicar} variant='primary'>
            {texto}
        </Button>
    );
}

export default Botao;
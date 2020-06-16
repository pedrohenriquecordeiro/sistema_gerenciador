import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

/* referencia - site do EY */

const HomeClient = () => {
    const history = useHistory()
    return (
        <Container>
            <h1>you are logged</h1>
        </Container>
    )
}
export default HomeClient;
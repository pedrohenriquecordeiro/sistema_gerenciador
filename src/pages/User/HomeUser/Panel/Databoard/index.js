import React from 'react'

import { GoGear} from 'react-icons/go'
import { Container } from './styles'

export default function DataBoard() {
    return (
        <Container>
            <div className='message'>
                <span><GoGear size={30} /></span>
                <p>Página em Construção</p>
            </div>
        </Container>
    )
}

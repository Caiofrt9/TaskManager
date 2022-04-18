import React from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { Container, Label } from './styles'

function Card() {
 
  return (
    <Container>
      <header>
        <Label color='#7159c1'/>
      </header>
      <p>Fazer migração completa de servidor</p>
    </Container>
  )
}

export default Card 
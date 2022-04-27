import { Fragment } from 'react'
import styled from 'styled-components'

// Components
import Box from './Box'

const Board = ({ length }) => {
    return (
        <Container length={length}>
            {Array.from({ length: 6 }).map((item, i) => {
                return (
                    <Fragment key={i}>
                        {Array.from({ length }).map((item, j) => {
                            return (
                                <Box
                                    length={length}
                                    key={`box-${j}`}
                                    row={i}
                                    column={j}
                                />
                            )
                        })}
                    </Fragment>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    width: 300px;
    /* background-color: red; // DEBUG COLOR */
    display: grid;
    grid-template-columns: repeat(${(props) => props.length}, 1fr);
`

export default Board

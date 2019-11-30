import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class List extends Component {
    state = {
        items: [
            { id: uuid(), name: 'eggs' },
            { id: uuid(), name: 'meat' },
            { id: uuid(), name: 'steak' }
        ]
    }

    render() {
        const { items } = this.state
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter item: ')
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }))
                        }
                    }}>
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping--list">
                        {items.map(({ id, name }) => (
                            <CSSTransition
                                key={id}
                                timeout={600}
                                classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={ () => {
                                            this.setState((state) => {
                                                return { items: state.items.filter(item => item.id != id) }
                                            })
                                        }}
                                    >
                                        &times;
                                    </Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container >
        )
    }
}

export default List;
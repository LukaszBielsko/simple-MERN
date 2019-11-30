import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';

import {getItems} from '../actions/itemActions';

class ShopList extends Component {

    render() {
        const { items } = this.props.items
        console.log(items)
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


const mapStateToProps = state => {
    return {
        items: state.item
    }
} 

const mapDispatchToProps = dispatch => {
    getItems: dispatch(getItems)
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopList);
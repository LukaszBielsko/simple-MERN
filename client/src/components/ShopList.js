import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import { getItems, deleteItem } from '../actions/itemActions';

class ShopList extends Component {

    /* this is wrong as it just returns object
       this is imported from itemActions and not dispatched
       if this  
     onDeleteClick = id => deleteItem(id) 
    */

    onDeleteClick = id => this.props.deleteItem(id)


    render() {

        /* if left like this i get typeError: items.map is not a function
        const { items } = this.props
        but when logged it is an array
        when in debbugger tried to call map on it 
        i got 
        map is not a function at eval 
        nope - i was getting an object not an array {items: []}*/

        const { items } = this.props.items

        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={null}>
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
                                        onClick={this.onDeleteClick.bind(this, id)}
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
    return {
        getItems: () => dispatch(getItems()),
        deleteItem: id => dispatch(deleteItem(id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopList);
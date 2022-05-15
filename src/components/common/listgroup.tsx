import React, { Component } from 'react';


interface ListGroupProps {
    items : any,
    onItemSelect : () =>  void,
    valueProperty : any,
    textProperty : any,
}


class ListGroup extends Component<ListGroupProps> {
    public static defaultProps = {
        textProperty : 'name',
        valueProperty : '_id'
    };

    render() { 
        const {items, textProperty, valueProperty} = this.props;
        return ( 
            <ul className="list-group">
                {items.map((item: { [x: string]: string | number; }) => 
                                        <li 
                                            key={item[valueProperty]} 
                                            className='list-group-item'
                                            style={{cursor:'pointer'}}>
                                            {item[textProperty]}
                                        </li>)}
            </ul>
        );
    }
}
 
export default ListGroup;
import React, { Component } from 'react';


interface ListGroupProps {
    items : any,
    onItemSelect : (item: any) =>  void,
    valueProperty : any,
    textProperty : any,
    selectedItem : any,
}


class ListGroup extends Component<ListGroupProps> {
    public static defaultProps = {
        textProperty : 'name',
        valueProperty : '_id'
    };

    render() { 
        const {items, textProperty, valueProperty, selectedItem, onItemSelect} = this.props;

        return ( 
            <ul className="list-group">
                {items.map((item: { [x: string]: string | number; }) => 
                                        <li 
                                            onClick={() => onItemSelect(item)}
                                            key={item[valueProperty]} 
                                            className={(selectedItem === item)?"list-group-item active":"list-group-item"}
                                            style={{cursor:'pointer'}}>
                                            {item[textProperty]}
                                        </li>)}
            </ul>
        );
    }
}
 
export default ListGroup;
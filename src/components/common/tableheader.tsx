import React, {Component} from 'react';

interface TableHeaderProps {
    columns : {path? : string, label? : string, key? : string}[],
    sortColumn : {path: string, order : boolean | "asc" | "desc"},
    onSort : (sortColumn : {path: string, order : boolean | "asc" | "desc"}) => void,
}
 
interface TableHeaderState {
}
 
class TableHeader extends React.Component<TableHeaderProps, TableHeaderState> {
    
    raiseSort = (path : string | undefined) => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) {
             sortColumn.order = (sortColumn.order === "asc" ? "desc" : "asc")
        } else {
            if (path !== undefined)
                sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
   }

    render() { 
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => <th key={column.path || column.key}
                                                    onClick={()=>this.raiseSort(column.path)}>
                                                    {column.label}</th>)}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;
import React, {Component} from 'react';
import TableBody from './tableBody';
import TableHeader from './tableheader';


const Table = (props: any) => {
    const {columns, sortColumn, onSort, data} = this.props
    return (
        <table className="table">
            <TableHeader 
                    columns={columns} 
                    sortColumn={sortColumn} 
                    onSort={onSort}/>
            <TableBody data={data} columns={columns}/>
        </table>
    )
}

export default Table;
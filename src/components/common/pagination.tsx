import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

interface PaginationProps {
    pageSize : number,
    itemCount : number,
    currentPage: number,
    onPageChange : (page : number) => void,
}
 
interface PaginationState {
}
 
class Pagination extends React.Component<PaginationProps, PaginationState> {
    
    render() { 
        const {itemCount, pageSize, currentPage, onPageChange} = this.props;
        const pageCount = Math.ceil(itemCount / pageSize);
        if (pageCount === 1) return null;
        const pages = _.range(1, pageCount+1);

        return (
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {pages.map(page => 
                                        <li 
                                            key={page} 
                                            className={(page === currentPage) ? "page-item active":"page-item"}>
                                            <a 
                                                onClick={() => onPageChange(page)} 
                                                className='page-link'>{page}
                                            </a>
                                        </li>)}
                    </ul>
                </nav>
        );
    }
}
 
/*
if you are not using typescript we have interface for this 
Pagination.propTypes = {
    pageSize : PropTypes.number.isRequired,
    itemCount : PropTypes.number.isRequired,
    currentPage : PropTypes.number.isRequired,
    onPageChage : PropTypes.func.isRequired
}
*/

export default Pagination;
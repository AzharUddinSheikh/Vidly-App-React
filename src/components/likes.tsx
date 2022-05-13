import React, { Component } from 'react';

interface LikeProps {
    liked:boolean | undefined,
    onClick: (movie : any) => void,
}

class Likes  extends Component<LikeProps> {

    getClasses = () : string | undefined => {
        let classes = "fa fa-heart";
        classes += (this.props.liked) ? "" : "-o";
        return classes;
    }

    render() { 
        return (  
            <i onClick={this.props.onClick} style={{cursor:"pointer"}} className={this.getClasses()} aria-hidden="true"></i>
        );
    }
}
 
export default Likes;

import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css'
const PostList = ({posts, onDelete}) => {
    const elems = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                 <PostListItem {...itemProps}
                 onDelete={() => onDelete(id)}/>
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elems}
        </ListGroup>
    )
}

export default PostList;
import React from 'react';

const UserInput = (props) => {
    return (
        <div className={props.section}>
            <label>Title:</label>
            <input type="text" onChange={props.changed} placeholder="Type a Title" className="title" />
            <label>Content:</label>
            <input type="text" onChange={props.changed} placeholder="Type a Content" className="content" />
        </div>
    );
}

export default UserInput;
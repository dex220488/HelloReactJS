import React from 'react';
import UserInput from './UserInput';

const UserOutput = (props) => {
    return (
        <div className={props.section}>
            <UserInput changed={props.changed} section={props.section} />
            <h3>{props.title}</h3>
            <p>
                {props.content}
            </p>
        </div>
    );
}

export default UserOutput;
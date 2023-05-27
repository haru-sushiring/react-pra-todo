import React from "react";
import classnames from 'classnames';

function Filter({ value, onChange }) {
    const handleClick = (key, e) => {
        e.preventDefault();
        onChange(key);
    };

    return (
        <div className="panel-tabs">
            <a
                href="#"
                onClick={handleClick.bind(null, 'ALL')}
                className={classnames({ 'is-active': value === 'ALL'})}
            >ALL</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'TODO')}
                className={classnames({ 'is-active': value === 'TODO'})}
            >ToDo</a>
            <a
                href="#"
                onClick={handleClick.bind(null, 'DONE')}
                className={classnames({ 'is-active': value === 'DONE'})}
            >Done</a>
        </div>
    );
}

export default Filter;
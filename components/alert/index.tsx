import React, { useEffect, useRef, useState } from 'react';

export default function Alert(props: {
    type: 'lightbulb' | 'memo'
    children?: React.ReactNode
}) {
    const [className, setClassName] = useState('');
    const [title, setTitle] = useState(<></>);

    useEffect(() => {
        if (props.type == 'lightbulb') {
            setClassName('md-alert-success');
            setTitle(
                <p className="alert-title">
                    <span className="docon docon-lightbulb" aria-hidden="true"> &nbsp; </span>
                    提示
                </p>
            );
        } else if (props.type == 'memo') {
            setClassName('md-alert-info');
            setTitle(
                <p className="alert-title">
                    <span className="docon docon-memo" aria-hidden="true"> &nbsp; </span>
                    备注
                </p>
            );
        } else {
            setTitle(<></>);
        }
    }, [props.type]);

    return (
        <div className={`nx-mt-6 ${className}`}>
            {title}
            {props.children}
        </div>
    );
}

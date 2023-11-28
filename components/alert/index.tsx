import React, { useEffect, useRef, useState } from 'react';

interface TypeDefinition {
    'note': string[],
    'tip': string[],
    'important': string[],
    'warning': string[],
}

const types: TypeDefinition = {
    'note': ['md-alert-info', 'docon-memo', 'Note'],
    'tip': ['md-alert-success', 'docon-lightbulb', 'Tip'],
    'important': ['md-alert-primary', 'docon-information', 'Important'],
    'warning': ['md-alert-warning', 'docon-warning', 'Warning'],
};

function Alert(props: {
    type: keyof TypeDefinition,
    children?: React.ReactNode,
}) {
    const [className, setClassName] = useState('');
    const [title, setTitle] = useState(<></>);

    useEffect(() => {
        const type = types[props.type];
        if (type) {
            setClassName(type[0]);
            setTitle(
                <p className="alert-title">
                    <span className={`docon ${type[1]}`} aria-hidden="true"> &nbsp; </span>
                    {type[2]}
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

export function Note(props: {
    children?: React.ReactNode,
}) {
    return <Alert type="note">{props.children}</Alert>
}
export function Tip(props: {
    children?: React.ReactNode,
}) {
    return <Alert type="tip">{props.children}</Alert>
}
export function Important(props: {
    children?: React.ReactNode,
}) {
    return <Alert type="important">{props.children}</Alert>
}
export function Warning(props: {
    children?: React.ReactNode,
}) {
    return <Alert type="warning">{props.children}</Alert>
}

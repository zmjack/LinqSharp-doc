import React from 'react';

export function TextCenter(props: {
    children?: React.ReactNode,
}) {
    return (
        <div
            style={{
                textAlign: 'center',
                marginBottom: 8,
            }}
        >
            {props.children}
        </div>
    );
}

export function TextTitle(props: {
    children?: React.ReactNode,
}) {
    return (
        <>
            <h1
                className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100"
                style={{
                    textAlign: 'center',
                }}
            >
                {props.children}
            </h1>
            <hr style={{ marginBottom: 18 }} />
        </>
    );
}

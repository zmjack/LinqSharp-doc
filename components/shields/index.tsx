import React from 'react';

const style = {
    display: 'inline-block',
    marginLeft: 4,
    marginRight: 4,
};

export function SiteBadge(props: {
    label: string,
    text: string,
    link: string,
}
) {
    return (
        <a href={props.link} rel="nofollow" style={style}>
            <img src={`https://img.shields.io/badge/${props.label}-${props.text}-orange`} />
        </a>
    );
}

export function NuGetBadge(props: {
    package: string,
    type?: 'download' | 'version'
    label?: string,
}) {
    const _label = props.label ?? props.package;
    const _type = props.type == 'download' ? 'dt' : 'v';
    return (
        <a href={`https://www.nuget.org/packages/${props.package}`} rel="nofollow" style={style}>
            <img src={`https://img.shields.io/nuget/${_type}/${props.package}.svg?logo=nuget&label=${_label}`} />
        </a>
    );
}

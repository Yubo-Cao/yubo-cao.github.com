import React from 'react';
import Icon from './Icon';

export default function Icons(props: {
    names?: string[];
    children?: string;
    from?: 'md' | 'fa' | 'mdi' | 'image';
    type?:
        | 'rounded'
        | 'sharp'
        | 'outlined'
        | 'brand'
        | 'classic'
        | 'regular'
        | 'solid';
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
    grade?: -25 | 0 | 200;
    size?: number;
    iconSize?: number;
    wrap?: boolean;
    fill?: boolean;
    className?: string;
    iconClassName?: string;
    wrapClassName?: string;
    alt?: string;
}) {
    let names =
        props.names ||
        props.children
            ?.split(/(\s+|,)/)
            ?.filter((v) => v !== '' && v !== ' ' && v !== ',') ||
        [];
    if (names.length === 0) throw new Error('No icon name provided');
    return (
        <div className={`flex items-center gap-2 ${props.className || ''}`}>
            {names.map((name, i) => {
                return React.createElement(Icon, {
                    key: i,
                    name: name,
                    ...props,
                    className: props.iconClassName
                });
            })}
        </div>
    );
}

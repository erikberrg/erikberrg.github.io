import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    className?: string;
}

export default function Title({ children, className = '' }: TitleProps) {
    return (
        <div className={`flex items-center pt-24 pb-12 ${className}`}>
            <h1 className="md:text-5xl text-4xl font-medium">{children}</h1>
        </div>
    );
}
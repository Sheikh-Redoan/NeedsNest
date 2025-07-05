import React from 'react'

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className = '' }: Readonly<ContainerProps>) => {
    return (
        <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
            {children}
        </div>
    )
}

export default Container
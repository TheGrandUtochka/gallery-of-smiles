interface WrapperProps {
    children?: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <div className='container mx-auto py-4 px-2'>
            { children }
        </div>
    )
}
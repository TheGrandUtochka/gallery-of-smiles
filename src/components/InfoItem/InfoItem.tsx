interface InfoItemProps {
    icon?: string;
    text?: string;
    children?: React.ReactNode;
}

export default function NavItem({ icon, text, children }: InfoItemProps) {
    return (
        <div className='font-medium relative flex items-center text-black transition duration-500' >
            <img className='w-6 h-6 mr-2' src={icon} alt={text}/>
            <div>
                {text}
            </div>
            {children}
        </div>
    );
}
interface InfoItemProps {
    icon?: string;
    text?: string;
    children?: React.ReactNode;
}

export default function NavItem({ icon, text, children }: InfoItemProps) {
    return (
        <div className='flex items-center' >
            <img className='w-6 h-6 mr-2' src={icon} alt={text}/>
            <div>
                {text}
            </div>
            {children}
        </div>
    );
}
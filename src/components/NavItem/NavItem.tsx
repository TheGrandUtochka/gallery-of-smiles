interface NavItemProps {
    title?: string;
}

export default function NavItem({ title }: NavItemProps) {
    return (
        <div className='relative'>
            <div className="flex space-x-2 cursor-pointer">
                <div className='bg-neutral-200 font-medium px-3 py-2 text-black transition duration-500 rounded-full border-2 border-white hover:border-bright-blue'>
                    {title}
                </div>
            </div>
        </div>
    );
}
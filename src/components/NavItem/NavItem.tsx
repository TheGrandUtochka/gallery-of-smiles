import {Link} from "@tanstack/react-router";

interface NavItemProps {
    title?: string;
    link?: string;
}

export default function NavItem({ title, link }: NavItemProps) {
    return (
        <Link to={link}>
            <div className='relative'>
                <div className="flex space-x-2 cursor-pointer">
                    <div
                        className='bg-white hover:bg-gray font-medium px-3 py-2 text-black transition duration-500 rounded-full'>
                        {title}
                    </div>
                </div>
            </div>
        </Link>

    );
}
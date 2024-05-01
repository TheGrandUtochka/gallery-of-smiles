import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavItem from "../NavItem/NavItem.tsx";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='absolute z-10 top-0 w-full flex justify-end'>
                <button onClick={toggleMenu} className="z-20 mt-1.5">
                    {isOpen ? <XIcon className='border-solid border-2 border-bright-blue h-8 w-8'/> :
                        <MenuIcon className='border-solid border-2 border-bright-blue h-8 w-8'/>}
                </button>
                <nav
                    className={`w-full mt-12 bg-white transition-transform duration-500 ease-in-out ${isOpen ? 'absolute' : 'hidden'}`}>
                    <NavItem title='О клинике'/>
                    <NavItem title='Услуги'/>
                    <NavItem title='Цены'/>
                    <NavItem title='Врачи'/>
                    <NavItem title='Отзывы'/>
                    <NavItem title='Контакты'/>
                </nav>
        </div>
    );
}

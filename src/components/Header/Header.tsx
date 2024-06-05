import logo from '../../assets/logo.svg';
import NavItem from '../NavItem/NavItem.tsx';
import { Link } from "@tanstack/react-router";
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='sticky top-0 bg-pale-silver rounded-b-3xl py-2 px-4 md:px-12'>
            <header className='flex justify-between items-center z-50 w-full'>
                <Link to='/' className='mt-1'>
                    <img src={logo} width={300} alt="Галерея улыбок" />
                </Link>
                <button className="lg:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
                <nav className={`hidden lg:flex space-x-6`}>
                    <NavItem title='О клинике' />
                    <NavItem title='Услуги' />
                    <NavItem title='Цены' link='/price-list' />
                    <NavItem title='Врачи' />
                    <NavItem title='Отзывы' />
                    <NavItem title='Контакты' link='/contacts' />
                </nav>
            </header>
            {/* что-то потом сделать с даблкодингом */}
            {isMenuOpen && (
                <nav className='flex flex-col items-center justify-center space-y-4 mt-4 lg:hidden'>
                    <NavItem title='О клинике' />
                    <NavItem title='Услуги' />
                    <NavItem title='Цены' link='/price-list' />
                    <NavItem title='Врачи' />
                    <NavItem title='Отзывы' />
                    <NavItem title='Контакты' link='/contacts' />
                </nav>
            )}
        </div>
    );
}

import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavItem from "../NavItem/NavItem.tsx";
import InfoItem from "../InfoItem/InfoItem.tsx";
import mapPin from "../../assets/icons/map-pin.svg";
import phone from "../../assets/icons/phone.svg";
import clock from "../../assets/icons/clock.svg";

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
                    <InfoItem icon={mapPin} text='г. Екатеринбург, ул. Авиационная, д. 57'/>
                    <InfoItem icon={phone}>
                        <a href='tel:+78005553535'>+7 (800) 555-35-35</a>
                    </InfoItem>
                    <InfoItem icon={clock} text='Пн-Вс 8:00-21:00'/>
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

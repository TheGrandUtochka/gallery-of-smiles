import logo from '../../assets/logo.svg';
import mapPin from '../../assets/icons/map-pin.svg'
import phone from '../../assets/icons/phone.svg';
import clock from '../../assets/icons/clock.svg';
import NavItem from '../NavItem/NavItem.tsx'
import InfoItem from '../InfoItem/InfoItem.tsx'
import BurgerMenu from '../BurgerMenu/BurgerMenu.tsx'
import {Link} from "@tanstack/react-router";

export default function Header() {

    return (
        <>
            <header className='sticky block top-0 py-2 z-50 w-full bg-white border-b-2 border-neutral-200'>
                <div className='z-10 justify-center lg:flex lg:space-x-6'>
                    <Link to='/' className='mt-1'>
                        <img src={logo} width={300} height={300} alt="Галерея улыбок"/>
                    </Link>
                    <nav className={`max-lg:hidden flex space-x-6 justify-end w-full`}>
                        <NavItem
                            title='О клинике'
                        />
                        <NavItem title='Услуги'/>
                        <NavItem
                            title='Цены'
                            link='/price-list'
                        />
                        <NavItem title='Врачи'/>
                        <NavItem title='Отзывы'/>
                        <NavItem title='Контакты'/>
                    </nav>
                    <nav className='lg:hidden'>
                        <BurgerMenu/>
                    </nav>
                </div>
            </header>
            <nav className='py-2 flex max-lg:flex-col lg:space-x-6 hover:fill-bright-blue'>
                <InfoItem icon={mapPin} text='г. Екатеринбург, ул. Авиационная, д. 57'/>
                <InfoItem icon={phone}>
                    <a href='tel:+78005553535'>+7 (800) 555-35-35</a>
                </InfoItem>
                <InfoItem icon={clock} text='Пн-Вс 8:00-21:00'/>
            </nav>
        </>
    )
        ;
}

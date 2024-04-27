import logo from '../../assets/logo.svg';
import mapPin from '../../assets/icons/map-pin.svg'
import phone from '../../assets/icons/phone.svg';
import clock from '../../assets/icons/clock.svg';
import NavItem from '../NavItem/NavItem.tsx'
import InfoItem from '../InfoItem/InfoItem.tsx'

export default function Header() {
    return (
        <header className='flex flex-col items-center w-full'>
            <div className='relative z-10 flex items-center justify-between space-x-6 w-full py-3 '>
                <a href='#'>
                    <img src={logo} width={300} height={300} alt="Галерея улыбок"/>
                </a>
                <nav className='flex items-center space-x-6 hover:fill-bright-blue'>
                    <InfoItem icon={mapPin} text='г. Екатеринбург, ул. Авиационная, д. 57'/>
                    <InfoItem icon={phone}>
                        <a href='tel:+78005553535'>+7 (800) 555-35-35</a>
                    </InfoItem>
                    <InfoItem icon={clock} text='Пн-Вс 8:00-21:00'/>
                </nav>
            </div>
            <nav className='flex space-x-6 items-center justify-center py-3 w-full'>
                <NavItem title='О клинике'/>
                <NavItem title='Услуги'/>
                <NavItem title='Цены'/>
                <NavItem title='Врачи'/>
                <NavItem title='Отзывы'/>
                <NavItem title='Контакты'/>
            </nav>
        </header>
    )
}
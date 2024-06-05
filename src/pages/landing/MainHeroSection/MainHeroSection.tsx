import Button from '../../../components/Button/Button.tsx'
import serviceBanner from '../../../assets/images/service-banner.png'
import InfoItem from "../../../components/InfoItem/InfoItem.tsx";
import mapPin from "../../../assets/icons/map-pin.svg";
import phone from "../../../assets/icons/phone.svg";
import clock from "../../../assets/icons/clock.svg";

export default function MainHeroSection() {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full bg-rich-mahogany rounded-3xl'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 '>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                    Цена
                    <br />
                    Качество
                    <br />
                    Галерея улыбок
                </h1>
                <p className='text-white text-gray-600 text-base md:text-lg lg:text-xl mt-6 mb-8 md:my-12'>
                    <InfoItem icon={mapPin} text='г. Екатеринбург, ул. Авиационная, д. 57'/>
                    <InfoItem icon={phone}>
                        <a href='tel:+79582349133'>+7 (958) 234-91-33</a>
                    </InfoItem>
                    <InfoItem icon={clock} text='Пн-Вс 8:00-21:00'/>
                </p>
                <Button
                    color="bg-deep-purple-black"
                    link="#"
                    className='inline-flex text-2xl hover:bg-black'
                    buttonText="Записаться на приём"/>

            </div>
            <div className='w-full lg:max-w-lg xl:max-w-xl px-4 py-0 lg:p-0'>
                <img src={serviceBanner} alt='Услуги' className='w-full h-auto' loading="lazy"/>
                <a href="https://www.freepik.com/free-psd/3d-illustration-stomatology-dentistry_36026353.htm#fromView=search&page=2&position=14&uuid=b61f45a7-d4b1-49d9-80dc-bf889b57c2ba" className='text-bright-blue text-transparent'>Image
                    by freepik</a>
            </div>
        </section>
    );
}

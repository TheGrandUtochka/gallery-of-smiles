import Maps from "../../../components/Maps/Maps.tsx";
import InfoItem from "../../../components/InfoItem/InfoItem.tsx";
import mapPin from "../../../assets/icons/map-pin.svg";
import phone from "../../../assets/icons/phone.svg";
import whatsapp from "../../../assets/icons/whatsapp.svg";

export default function ContactsSection() {
    return (
        <section className='flex-col lg:flex-row justify-between bg-pale-silver py-8 rounded-3xl'>
            <h1 className='px-4 lg:px-8 xl:px-12 py-8 text-deep-purple-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                Контакты
            </h1>
            <div
                className='grid-cols-2 items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 pb-8 lg:flex-1'>
                <nav
                    className='text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none bg-white rounded-3xl'>
                    <InfoItem
                        icon={mapPin}>
                        <a href='https://yandex.ru/maps/-/CDVxAFpm' target='_blank'>
                            г. Екатеринбург, ул. Авиационная, д. 57
                        </a>
                    </InfoItem>
                    <InfoItem icon={phone}>
                    <a href='tel:+73432923331' target='_blank'>+7 (343) 292-33-31</a>
                    </InfoItem>
                    <InfoItem icon={phone}>
                        <a href='tel:+79582349133' target='_blank'>+79582349133</a>
                    </InfoItem>
                    <InfoItem icon={whatsapp}>
                        <a href='https://wa.me/79582349133' target='_blank'>+79582349133</a>
                    </InfoItem>
                    <InfoItem icon={phone}>
                        <a href='mailto:ulybka.2021@bk.ru' target='_blank'>ulybka.2021@bk.ru</a>
                    </InfoItem>
                </nav>
                <div className='lg:flex-1 w-full rounded-3xl overflow-hidden'>
                    <Maps/>
                </div>
            </div>

        </section>
    );
}

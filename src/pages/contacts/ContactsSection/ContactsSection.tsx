import Maps from "../../../components/Maps/Maps.tsx";

export default function ContactsSection() {
    return (
        <section className='flex-col lg:flex-row bg-pale-silver py-8 rounded-3xl'>
            <h1 className='max-lg:text-center px-4 lg:px-8 xl:px-12 py-8 text-deep-purple-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                Контакты
            </h1>
            <div
                className='grid-cols-2 px-4 lg:px-8 xl:px-12 pb-8 lg:flex-1'>
                <nav
                    className='px-4 lg:px-8 xl:px-12 py-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none bg-white rounded-3xl'>
                    <div className='max-lg:text-center font-medium relative flex-col items-center text-black'>
                        <p className='my-2'>
                            Адрес: <a className='transition duration-500 hover:text-soft-beige cursor-pointer' href='https://yandex.ru/maps/-/CDVxAFpm' target='_blank'>г. Екатеринбург, ул. Авиационная, д. 57</a>
                        </p>
                        <p className='my-2'>
                            Телефон: <a className='transition duration-500 hover:text-soft-beige cursor-pointer' href='tel:+73432923331' target='_blank'>+7 (343) 292-33-31</a> | <a className='transition duration-500 hover:text-soft-beige cursor-pointer' href='tel:+79582349133' target='_blank'>+79582349133</a>
                        </p>
                        <p className='my-2'>
                            Whatsapp: <a className='transition duration-500 hover:text-soft-beige cursor-pointer' href='https://wa.me/79582349133' target='_blank'>+79582349133</a>
                        </p>
                        <p className='my-2'>
                            Telegram: <a className='transition duration-500 hover:text-soft-beige cursor-pointer' href='https://t.me/gallerysmiles96' target='_blank'>@gallerysmiles96</a>
                        </p>
                        <p className='my-2'>
                            E-mail: <a className='transition duration-500 hover:text-soft-beige cursor-pointer' href='mailto:ulybka.2021@bk.ru' target='_blank'>ulybka.2021@bk.ru</a>
                        </p>
                    </div>
                </nav>
                <div className='lg:flex-1 w-full rounded-3xl overflow-hidden'>
                    <Maps/>
                </div>
            </div>
        </section>
    );
}

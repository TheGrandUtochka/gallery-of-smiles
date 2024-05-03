export default function PricesHeroSection() {
    return (
        <section className='flex-col lg:flex-row bg-pale-silver py-8 rounded-3xl'>
            <h1 className='max-lg:text-center px-4 lg:px-8 xl:px-12 py-8 text-deep-purple-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                Прайс-лист
            </h1>
            <div
                className='pb-12 px-4 lg:px-8 xl:px-12'>

            </div>
            <div
                className='px-4 lg:px-8 xl:px-12'>
                <nav
                    className='px-4 lg:px-8 xl:px-12 py-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none bg-white rounded-3xl'>
                    <div className='max-lg:text-center font-medium relative flex-col items-center text-black'>
                        <a className='transition duration-500 hover:text-soft-beige cursor-pointer'
                           href='/src/assets/docs/pricelist.pdf' target='_blank'>Скачать прайс-лист (.pdf)</a>
                    </div>
                </nav>
            </div>
        </section>
    );
}

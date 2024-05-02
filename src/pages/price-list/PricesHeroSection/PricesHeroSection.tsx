import Button from '../../../components/Button/Button.tsx'
import priceListBanner from '../../../assets/images/price-list-banner.png'

export default function PricesHeroSection() {
    return (
        <section className='flex flex-col-reverse items-center lg:flex-row lg:justify-between w-full bg-purple-800 rounded-t-full md:rounded-l'>
            <div className='flex flex-col text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 '>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                    Прайс-лист
                </h1>
                <p className='text-white text-gray-600 text-base md:text-lg lg:text-xl my-6 md:my-6'>
                    Наши цены вас приятно удивят!
                </p>
                <Button
                    color="bg-bright-orange"
                    link="#"
                    className='inline-flex text-2xl hover:bg-orange-700'
                    buttonText="Записаться на приём" />
            </div>
            <div className='w-full lg:max-w-lg xl:max-w-xl px-24 py-8'>
                <img src={priceListBanner} alt='Прайс-лист' className='' loading="lazy"/>
            </div>
        </section>
    );
}

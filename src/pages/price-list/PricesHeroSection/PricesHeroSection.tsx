import Button from '../../../components/Button/Button.tsx'
import priceListBanner from '../../../assets/images/price-list-banner.png'

export default function PricesHeroSection() {
    return (
        <section
            className='flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full bg-dark-green rounded-3xl'>
            <div
                className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 '>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                    Прайс-лист
                </h1>
                <p className='text-white text-gray-600 text-base md:text-lg lg:text-xl mt-6 mb-8 md:my-12'>
                    Наши цены вас приятно удивят!
                </p>
                <Button
                    color="bg-deep-purple-black"
                    link="#"
                    className='inline-flex text-2xl hover:bg-black'
                    buttonText="Записаться на приём"/>

            </div>
            <div className='w-full lg:max-w-lg xl:max-w-xl py-0 lg:p-0'>
                <img src={priceListBanner} alt='Услуги' className='"w-full ml-36 my-2 w-2/3 p-4' loading="lazy"/>
                <a href="https://www.freepik.com/free-psd/3d-illustration-stomatology-dentistry_36026353.htm#fromView=search&page=2&position=14&uuid=b61f45a7-d4b1-49d9-80dc-bf889b57c2ba"
                   className='text-bright-blue text-transparent'>Image
                    by freepik</a>
            </div>
        </section>
    );
}

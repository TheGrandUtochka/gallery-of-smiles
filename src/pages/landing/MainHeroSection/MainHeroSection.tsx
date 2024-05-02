import Button from '../../../components/Button/Button.tsx'
import serviceBanner from '../../../assets/images/service-banner.png'

export default function MainHeroSection() {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full bg-bright-blue rounded-t-full md:rounded-l'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 '>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                    Цена
                    <br />
                    Качество
                    <br />
                    Галерея улыбок
                </h1>
                <p className='text-white text-gray-600 text-base md:text-lg lg:text-xl mt-6 mb-8 md:my-12'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button
                        color="bg-bright-orange"
                        link="#"
                        className='inline-flex text-2xl hover:bg-orange-700'
                        buttonText="Записаться на приём" />

            </div>
            <div className='w-full lg:max-w-lg xl:max-w-xl px-4 py-0 lg:p-0'>
                <img src={serviceBanner} alt='Услуги' className='w-full h-auto' loading="lazy"/>
                <a href="https://www.freepik.com/free-psd/3d-illustration-stomatology-dentistry_36026353.htm#fromView=search&page=2&position=14&uuid=b61f45a7-d4b1-49d9-80dc-bf889b57c2ba" className='text-bright-blue text-transparent'>Image
                    by freepik</a>
            </div>
        </section>
    );
}

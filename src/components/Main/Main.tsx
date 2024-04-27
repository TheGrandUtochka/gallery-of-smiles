import Button from '../../components/Button/Button.tsx'
import serviceBanner from '../../assets/images/service-banner.png'
export default function Main() {
    return (
        <section className='w-full flex mt-6'>
            <div className='relative font-bold text-black xl:text-left mt-12 md:text-center md:justify-center'>
                <h1 className='xl:text-8xl md:text-5xl mt-12 whitespace-pre-line'>
                    {'Цена\nКачество\nГалерея улыбок'}
                </h1>
                <p className='text-gray text-lg my-12 whitespace-pre-line w-full max-w-96'>
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </p>
                <Button isFilled={true}>Записаться на приём</Button>
            </div>
            <div className='flex ml-40 mt-28'>
                <img src={serviceBanner} alt={'зубик'}/>
            </div>
        </section>
    );
}

import Button from '../../../components/Button/Button.tsx';
import reviewBanner from '../../../assets/images/review-banner.png';
import yandexLogo from '../../../assets/icons/yandex-logo.svg';
import twoGisLogo from '../../../assets/icons/2gis-logo.svg';
import flampLogo from '../../../assets/icons/flamp-logo.svg';

export default function MainReviewSection() {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full bg-deep-purple-black rounded-3xl'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 '>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                    Отзывы крайне важны для нас!
                </h1>
                <p className='text-white text-gray-600 text-base md:text-lg lg:text-xl mt-6 mb-8 md:my-12'>
                    Ознакомьтесь с отзывами клиентов, которые подтверждают качество наших услуг!
                </p>
                <div className='flex space-x-4'>
                    <Button
                        color="bg-white"
                        link="https://yandex.ru/maps/org/galereya_ulybok/152033203695/reviews/"
                        className='inline-flex text-2xl hover:bg-red-200 transition duration-500'
                        icon={yandexLogo}
                        target="_blank"
                    />
                    <Button
                        color="bg-white"
                        link="https://2gis.ru/ekaterinburg/firm/70000001040028653/tab/reviews"
                        className='inline-flex text-2xl hover:bg-green-200 transition duration-500'
                        icon={twoGisLogo}
                        target="_blank"
                    />
                    <Button
                        color="bg-white"
                        link="https://ekaterinburg.flamp.ru/firm/galereya_ulybok-70000001040028653"
                        className='inline-flex text-2xl hover:bg-blue-200 transition duration-500'
                        icon={flampLogo}
                        target="_blank"
                    />
                </div>
            </div>
            <div className='w-full lg:max-w-lg xl:max-w-xl px-4 py-0 lg:p-0'>
                <img src={reviewBanner} alt='Отзывы' className='w-full h-auto' loading="lazy"/>
            </div>
        </section>
    );
}

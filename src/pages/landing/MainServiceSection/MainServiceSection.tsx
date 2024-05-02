import Card from '../../../components/Card/Card.tsx'
import CustomSlider from '../../../components/CustomSlider/CustomSlider.tsx';
import services from "./services.ts";

export default function MainServiceSection() {
    return (
            <section className='flex-col lg:flex-row lg:justify-between bg-pale-silver py-8 rounded-3xl'>
                <div
                    className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 pb-8 '>
                    <h2 className='mb-6 text-deep-purple-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                        Наши услуги
                    </h2>
                </div>
                <div className='rounded-lg h-auto'>
                    <CustomSlider>
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                href={service.href}
                                imageSource={service.imageSource}
                                heading={service.heading}
                                description={service.description}/>
                        ))}
                    </CustomSlider>
                </div>
            </section>
    );
}

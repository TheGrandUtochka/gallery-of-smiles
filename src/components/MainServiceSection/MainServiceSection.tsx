import Button from '../../components/Button/Button.tsx'
import Card from '../../components/Card/Card.tsx'
import doctorPatient from '../../assets/images/doctor-patient.jpg'
import closeUpDentistInstruments from '../../assets/images/close-up-dentist-instruments.jpg'
import dentalImplatation from '../../assets/images/implatation.jpg'
import CustomSlider from "../CustomSlider/CustomSlider.tsx";

export default function MainServiceSection() {

    const services = [
        {
            href: '#',
            imageSource: doctorPatient,
            heading: 'Консультация',
            description: 'Наши высококвалифицированные специалисты помогут вам понять, какие именно стоматологические процедуры будут вам необходимы.',
            buttonText: 'Узнать подробнее'
        },
        {
            href: '#',
            imageSource: closeUpDentistInstruments,
            heading: 'Терапия',
            description: 'Эффективное лечение кариеса зубов, пульпита, периодонтита, пародонтоза, а также всех болезней слизистой оболочки полости рта.',
            buttonText: 'Узнать подробнее'
        },
        {
            href: '#',
            imageSource: dentalImplatation,
            heading: 'Имплатанция',
            description: 'Внедрение в челюстную ткань специального стоматологического штифта, выполняющего в дальнейшем роль корня зуба.',
            buttonText: 'Узнать подробнее'
        },
        {
            href: '#',
            imageSource: dentalImplatation,
            heading: 'Имплатанция',
            description: 'Внедрение в челюстную ткань специального стоматологического штифта, выполняющего в дальнейшем роль корня зуба.',
            buttonText: 'Узнать подробнее'
        },
        {
            href: '#',
            imageSource: dentalImplatation,
            heading: 'Имплатанция',
            description: 'Внедрение в челюстную ткань специального стоматологического штифта, выполняющего в дальнейшем роль корня зуба.',
            buttonText: 'Узнать подробнее'
        },
        {
            href: '#',
            imageSource: dentalImplatation,
            heading: 'Имплатанция',
            description: 'Внедрение в челюстную ткань специального стоматологического штифта, выполняющего в дальнейшем роль корня зуба.',
            buttonText: 'Узнать подробнее'
        },

    ];


    return (
            <section className='flex-col lg:flex-row lg:justify-between bg-dark-blue py-8'>
                <div
                    className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 pb-8 '>
                    <h2 className='mb-6 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
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
                                description={service.description}
                                buttonText={service.buttonText}/>
                        ))}
                    </CustomSlider>
                </div>
            </section>
    );
}

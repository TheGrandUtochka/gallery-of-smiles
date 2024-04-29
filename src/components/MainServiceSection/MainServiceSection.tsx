import Button from '../../components/Button/Button.tsx'
import Card from '../../components/Card/Card.tsx'
import doctorPatient from '../../assets/images/doctor-patient.jpg'
import closeUpDentistInstruments from '../../assets/images/close-up-dentist-instruments.jpg'

export default function MainServiceSection() {
    return (
        <section className='flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full bg-dark-blue'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 xl:px-12 py-8 '>
                <h2 className='mb-6 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                    Наши услуги
                </h2>
                <ul className='flex mr-2'>
                    <Card
                            href={'#'}
                            imageSource={doctorPatient}
                            imageAlt={'Консультация'}
                            heading={'Консультация'}
                            description={'Наши высококвалифицированные специалисты помогут вам понять, какие именно стоматологические процедуры будут вам необходимы.'}
                            buttonText={'Узнать подробнее'}
                    />
                    <Card
                            href={'#'}
                            imageSource={closeUpDentistInstruments}
                            imageAlt={'Терапия'}
                            heading={'Терапия'}
                            description={'Эффективное лечение кариеса зубов, пульпита, периодонтита, пародонтоза, а также всех болезней слизистой оболочки полости рта.'}
                            buttonText={'Узнать подробнее'}
                    />
                    <Card
                            href={'#'}
                            imageSource={doctorPatient}
                            imageAlt={'#'}
                            heading={'Консультация'}
                            description={'Наши высококвалифицированные специалисты помогут вам понять, какие именно стоматологические процедуры будут вам необходимы.'}
                            buttonText={'Узнать подробнее'}
                    />
                </ul>
            </div>
        </section>
    );
}

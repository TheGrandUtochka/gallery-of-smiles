import doctorPatient from "../../assets/images/doctor-patient.jpg";
import closeUpDentistInstruments from "../../assets/images/close-up-dentist-instruments.jpg";
import dentalImplatation from "../../assets/images/implatation.jpg";
import dentalSurgery from "../../assets/images/dental-surgery.jpg";
import dentalWhitening from "../../assets/images/dental-whitening.jpg";
import dentalPrevention from "../../assets/images/dental-prevention.jpg";

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
        imageSource: dentalSurgery,
        heading: 'Хирургия',
        description: 'Операции в непосредстенной полости рта и на челюсти, удаление зубов и лишних образований, а также лечение травм челюсти.',
        buttonText: 'Узнать подробнее'
    },
    {
        href: '#',
        imageSource: dentalWhitening,
        heading: 'Отбеливание',
        description: 'Очищение эмали зубов от налета и восстановление, либо изменение цвета дентина путем применения современных активных веществ-агентов.',
        buttonText: 'Узнать подробнее'
    },
    {
        href: '#',
        imageSource: dentalPrevention,
        heading: 'Профилактика',
        description: 'Любые требующиеся мероприятия, направленные на предупреждение заболеваний зубочелюстной системы.',
        buttonText: 'Узнать подробнее'
    },
];

export default services;
import Button from '../../components/Button/Button.tsx'

interface CardProps {
    href: string;
    imageSource: string;
    heading: string;
    description: string;
    buttonText: string;
}

export default function MainServiceSection({ href, imageSource, heading, description, buttonText }: CardProps) {
    return (
        <div className="px-4 py-4 mx-2 lg:mx-3 text-center bg-white rounded-lg">
            <img src={imageSource} alt={heading} className="w-full h-56 object-cover rounded-t-lg"/>
            <div>
                <h3 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">{heading}</h3>
                <p className="mb-4 text-gray-600">{description}</p>
                <a href={href}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bright-blue rounded-full hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300">
                    {buttonText}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <Button isFilled={true} hasBorder={false}>Записаться на приём</Button>
            </div>
        </div>
    );
}
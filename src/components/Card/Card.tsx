import Button from '../../components/Button/Button.tsx'

interface CardProps {
    href: string;
    imageSource: string;
    imageAlt: string;
    heading: string;
    description: string;
    buttonText: string;
}

export default function MainServiceSection({ href, imageSource, imageAlt, heading, description, buttonText }: CardProps) {
    return (
        <div className="max-w-sm mr-4 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={href}>
                <img className='object-cover aspect-square rounded-t-lg' src={imageSource} alt={imageAlt} />
            </a>
            <div className="p-5">
                <a href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {heading}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                    {description}
                </p>
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
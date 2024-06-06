import Button from '../../components/Button/Button.tsx'
import arrowRight from '../../assets/icons/arrow-right.svg'

interface CardProps {
    href: string;
    imageSource: string;
    heading: string;
    description: string;
}

export default function Card({ href, imageSource, heading, description}: CardProps) {
    return (
        <div className="px-4 py-4 mx-2 text-center bg-white rounded-lg">
            <img src={imageSource} alt={heading} className="w-full h-56 object-cover rounded-lg"/>
            <div className=''>
                <h3 className="my-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                    <a href={href}>
                        {heading}
                    </a>
                </h3>
                <p className="mb-4 text-gray-600">{description}</p>
                <div className='lg:space-x-2 max-lg:space-y-2 justify-center'>
                    <Button
                        color="bg-deep-purple-black text-white"
                        link="#"
                        iconSrc={arrowRight}
                        className='inline-flex hover:bg-black'
                        buttonText="Узнать подробнее" />
                    <Button
                        color="bg-deep-purple-black text-white"
                        link="#"
                        className='inline-flex hover:bg-black'
                        buttonText="Записаться на приём" />
                </div>
            </div>
        </div>
    );
}
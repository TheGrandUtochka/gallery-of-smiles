interface ButtonProps {
    color?: string;
    link?: string;
    iconSrc?: string; // Путь к изображению или SVG
    className?: string;
    buttonText?: string;
}

const Button: React.FC<ButtonProps> = ({ color, link, iconSrc, className = '', buttonText }) => {
    // Стили для кнопки с учетом настроек цвета и при наведении
    const buttonStyles = `transition duration-500 ${color} font-bold text-white px-3 py-2 mx-0 rounded-lg cursor-pointer ${className}`;

    return (
        <a href={link} className={buttonStyles}>
            {buttonText}
            {iconSrc && <img src={iconSrc} alt="Icon" className="inline-block ml-2" />}
        </a>
    );
};

export default Button;

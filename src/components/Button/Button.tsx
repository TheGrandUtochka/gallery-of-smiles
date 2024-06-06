import {Link} from "@tanstack/react-router";

interface ButtonProps {
    color?: string;
    link?: string;
    iconSrc?: string; // Путь к изображению или SVG
    className?: string;
    buttonText?: string;
    icon?: string;
    target?: string;
}

const Button: React.FC<ButtonProps> = ({ color, link, className, buttonText, icon,target }) => {
    return (
        <Link to={link} target={target} className={`inline-flex items-center ${color} ${className} px-4 py-2 rounded-lg`}>
            {icon && <img src={icon} alt="icon" className="w-24 h-10"/>}
            {buttonText}
        </Link>
    );
};


export default Button;

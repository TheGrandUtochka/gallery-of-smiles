interface ButtonProps {
    children?: React.ReactNode;
    hasBorder: false;
    isFilled: false;
}

const borderStyles = 'border-2 border-bright-blue rounded-full';
const filledStyles = 'transition duration-500 bg-bright-orange font-bold text-white py-4 px-6 mx-0 hover:bg-white hover:text-black rounded-full';

export default function Button({ hasBorder, isFilled, children }: ButtonProps) {
    return (
        <button className={`px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>
            { children }
        </button>
    );
}
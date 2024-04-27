interface ButtonProps {
    children?: React.ReactNode;
    hasBorder: false;
    isFilled: false;
}

const borderStyles = 'border-2 border-bright-blue rounded-full';
const filledStyles = 'transition duration-500 text-white bg-bright-blue rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-black border-2 border-bright-blue rounded-full';

export default function Button({ hasBorder, isFilled, children }: ButtonProps) {
    return (
        <button className={`text-white px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>
            { children }
        </button>
    );
}
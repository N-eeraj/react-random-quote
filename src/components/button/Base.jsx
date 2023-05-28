export const BaseButton = ({children, handleClick}) => {
    return (
        <button
            className="py-2 px-5 bg-indigo-400 text-white rounded-md duration-300 hover:bg-indigo-500"
            onClick={handleClick}>
            {children}
        </button>
    )
}

export default BaseButton
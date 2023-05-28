import Icon from "../Icon"

const IconButton = ({ icon, handleClick }) => {
    return (
        <button
            className="flex justify-center items-center w-8 h-8 p-1 text-indigo-400 border-2 border-indigo-400 rounded-full overflow-hidden duration-300 hover:bg-indigo-400 hover:text-white hover:border-indigo-400"
            onClick={handleClick}>

                <Icon icon={icon} />
        </button>
    )
}

export default IconButton
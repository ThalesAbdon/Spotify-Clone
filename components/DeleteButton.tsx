import { IoMdTrash } from "react-icons/io";


const customButtonStyle = `
  transition
  opacity-0
  rounded-full
  absolut
  drop-shadow-md
  translate
  translate-y-1/4
  group-hover:opacity-100
  hover:scale-110  
`;

const DeleteButton = () => {
  return (
    <button className={customButtonStyle}>
      <span>
        <IoMdTrash style={{fontSize: '48px', color: '#ECECEC'}} className="text-black"/>
      </span>
    </button>
  );
};

export default DeleteButton;

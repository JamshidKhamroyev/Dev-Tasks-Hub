import { useDispatch, useSelector } from "react-redux";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { oncloseLogin, oncloseRegister } from "../../reducers/modalReducer";

const Modal = ({ children, type }) => {
  const { isOpenLogin, isOpenRegister } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  if (!isOpenLogin && !isOpenRegister) return null;

  const onCloseHandler = () => {
    if (type === "login") {
      dispatch(oncloseLogin());
    } else {
      dispatch(oncloseRegister());
    }
  };

  const renderIcon = () => {
    if (type === "login") {
      return <FaSignInAlt className="text-indigo-400 text-2xl mr-2" />;
    }
    if (type === "register") {
      return <FaUserPlus className="text-indigo-400 text-2xl mr-2" />;
    }
    return null;
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onCloseHandler} 
    >
      <div
        className="bg-white rounded-lg shadow-lg p-5 relative w-full max-w-lg"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            {renderIcon()}
            <h1 className="text-xl font-semibold capitalize text-black">
              {type}
            </h1>
          </div>
          <button
            onClick={onCloseHandler}
            className="text-gray-500 cursor-pointer hover:text-black text-4xl"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
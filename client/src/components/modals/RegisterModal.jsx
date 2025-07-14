import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaLock, FaUser, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import { onOpenLogin, oncloseRegister } from "../../reducers/modalReducer";
import Modal from "./Modal";
import { api } from "../../api";
import { toast } from "react-toastify";

const RegisterModal = () => {
  const { isOpenRegister } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpenRegister) {
      setFullName('');
      setEmail('');
      setPassword('');
      setIsPassword(true);
      setLoading(false);
    }
  }, [isOpenRegister]);

  if (!isOpenRegister) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/api/auth/register", { fullName, email, password });
      toast.success("Muvaffaqiyatli ro'yxatdan o'tildi");
      setEmail("")
      setPassword("")
      setFullName("")
      dispatch(onOpenLogin())
    } catch (err) {
      const data = err.response?.data;

      if (data?.details && Array.isArray(data.details)) {
        data.details.forEach(detail => toast.error(detail));
      } else {
        toast.error(data?.message || "Xatolik yuz berdi");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal type="register">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-black mb-1">
            To‘liq ism
          </label>
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="fullName"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="Firstname Lastname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
            Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
            Parol
          </label>
          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type={isPassword ? 'password' : 'text'}
              id="password"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="size-4 absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer outline-none"
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-indigo-400 hover:bg-indigo-500 text-white py-2 rounded shadow ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {loading && (
            <FaSpinner className="animate-spin h-4 w-4" />
          )}
          {loading ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
        </button>

        <div className="text-center text-sm mt-4">
          <span className="text-gray-600 mr-2">Hisobingiz bormi?</span>
          <span
            onClick={() => dispatch(onOpenLogin())}
            role="button"
            className="text-indigo-400 cursor-pointer hover:text-indigo-500 font-medium"
          >
            Login
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterModal;
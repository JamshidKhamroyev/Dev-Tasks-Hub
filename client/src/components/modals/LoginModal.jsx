import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import { onOpenRegister, oncloseLogin } from "../../reducers/modalReducer";
import Modal from "./Modal";
import { api } from "../../api";
import { toast } from "react-toastify";

const LoginModal = () => {
  const { isOpenLogin } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpenLogin) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/api/auth/login", { email, password });
      toast.success("Muvaffaqiyatli kirildi");
      dispatch(oncloseLogin())
      setEmail("")
      setPassword("")
    } catch (err) {
      toast.error(err.response?.data?.message || "Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal type="login">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
            Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
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
              type="password"
              id="password"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-indigo-400 hover:bg-indigo-500 text-white py-2 rounded shadow ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading && (
            <FaSpinner className="animate-spin h-4 w-4" />
          )}
          {loading ? "Yuklanmoqda..." : "Kirish"}
        </button>

        <div className="text-center text-sm mt-4">
          <span className="text-gray-600">Hisobingiz yo‘qmi? </span>
          <span
            onClick={() => dispatch(onOpenRegister())}
            role="button"
            className="text-indigo-400 hover:text-indigo-500 cursor-pointer font-medium"
          >
            Ro‘yxatdan o‘tish
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
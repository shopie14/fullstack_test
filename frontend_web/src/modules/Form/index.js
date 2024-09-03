import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const Form = ({ isLoginPage = true }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    no_whatsApp: "",
    kota: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      username: isLoginPage ? "" : prevData.username,
      password: "",
      no_whatsApp: "",
      kota: "",
    }));
  }, [isLoginPage]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Data yang dikirim:", data);

    try {
      const apiUrl = `http://localhost:8000/api/users/${
        isLoginPage ? "login" : "register"
      }`;
      console.log("API URL:", apiUrl);

      const res = await axios.post(apiUrl, data);

      console.log("Response dari server:", res.data);

      if (res.status === 200 || res.status === 201) {
        const { tokenData, message } = res.data;
        console.log("Response message:", message);
        console.log("Response payload:", tokenData);

        if (isLoginPage) {
          if (tokenData && tokenData.token) {
            Cookies.set("user_token", tokenData.token);
            localStorage.setItem("user_token", tokenData.token);
            toast.success("Login berhasil!");
            setTimeout(() => navigate("/"), 2000);
          } else {
            toast.error("Token tidak ditemukan!");
            // console.error("Token tidak ditemukan di tokenData");
          }
        } else {
          toast.success("Registrasi berhasil! Silakan login.");
          setTimeout(() => navigate("/users/login"), 2000);
        }
      } else {
        toast.error(`Gagal dengan status: ${res.status}`);
        // console.error("Respon gagal dengan status:", res.status);
      }
    } catch (error) {
      toast.error(
        `Terjadi kesalahan: ${
          error.response ? error.response.data : error.message
        }`
      );
      // console.error(
      //   "Axios error:",
      //   error.response ? error.response.data : error.message
      // );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary-light h-screen flex items-center justify-center">
      <div className="bg-white h-[600px] w-[600px] shadow-lg rounded-lg flex flex-col items-center justify-center">
        <div className="text-4xl font-extrabold">
          Welcome 👋 {isLoginPage && "Back"}
        </div>
        <div className="text-2xl font-light mb-8">
          {isLoginPage
            ? "Silahkan login terlebih dahulu!"
            : "Silahkan daftar terlebih dahulu!"}
        </div>

        <form
          className="flex flex-col items-center w-full"
          onSubmit={handleSubmit}
        >
          {isLoginPage && (
            <>
              <Input
                label="Username"
                name="username"
                placeholder="Masukan username"
                className="mb-3 w-[50%]"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Masukan password"
                className="mb-3 w-[50%]"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </>
          )}

          {!isLoginPage && (
            <>
              <Input
                label="Username"
                name="username"
                placeholder="Masukan username"
                className="mb-3 w-[50%]"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
              />
              <Input
                label="Password"
                name="password"
                placeholder="Masukan password"
                className="mb-3 w-[50%]"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <Input
                label="No WhatsApp"
                name="no_whatsapp"
                placeholder="Masukan no WhatsApp"
                className="mb-3 w-[50%]"
                value={data.no_whatsapp}
                onChange={(e) =>
                  setData({ ...data, no_whatsapp: e.target.value })
                }
              />

              <Input
                label="Kota"
                name="kota"
                placeholder="Masukan kota"
                className="mb-3 w-[50%]"
                value={data.kota}
                onChange={(e) => setData({ ...data, kota: e.target.value })}
              />
            </>
          )}
          <Button
            label={isLoginPage ? "Login" : "Daftar"}
            className="mb-3 w-1/2 mt-7"
            type="submit"
            disabled={loading}
          />
          {loading && (
            <ClipLoader color="#123abc" loading={loading} size={50} />
          )}
        </form>
        <div className="mt-4">
          {isLoginPage ? (
            <>
              Belum punya akun?{" "}
              <span
                className="text-primary cursor-pointer underline"
                onClick={() => navigate("/users/register")}
              >
                Daftar
              </span>
            </>
          ) : (
            <>
              Sudah punya akun?{" "}
              <span
                className="text-primary cursor-pointer underline"
                onClick={() => navigate("/users/login")}
              >
                Login
              </span>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;

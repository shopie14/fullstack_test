import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Form = ({ isLoginPage = true }) => {
  const [data, setData] = useState({
    ...(!isLoginPage && {
      username: "",
    }),
    password: "",
    no_whatsApp: "",
    kota: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    // Navigasi ke halaman berikutnya berdasarkan kondisi tertentu
    if (isLoginPage) {
      navigate("/dashboard");
    } else {
      navigate("/login");
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
          {!isLoginPage && (
            <>
              <Input
                label="No WhatsApp"
                name="number"
                placeholder="Masukan no WhatsApp"
                className="mb-3 w-[50%]"
                value={data.no_whatsApp}
                onChange={(e) =>
                  setData({ ...data, no_whatsApp: e.target.value })
                }
              />
              <Input
                label="Kota"
                name="city"
                placeholder="Masukan kota"
                className="mb-3 w-[50%]"
                value={data.kota}
                onChange={(e) => setData({ ...data, kota: e.target.value })}
              />
            </>
          )}
          <Button
            label={isLoginPage ? "Login" : "Daftar"}
            className="mb-3 w-[50%] mt-7"
            type="submit"
          />
        </form>
        <div className="mt-4">
          {isLoginPage ? (
            <>
              Belum punya akun?{" "}
              <span
                className="text-primary cursor-pointer underline"
                onClick={() => navigate("/users/daftar")}
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
    </div>
  );
};

export default Form;

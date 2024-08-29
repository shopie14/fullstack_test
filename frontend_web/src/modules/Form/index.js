import Button from "../../components/Button";
import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white h-[600px] w-[600px]  shadow-lg rounded-lg flex flex-col items-center justify-center">
      <div className="text-4xl font-extrabold">Hai 👋</div>
      <div className="text-2xl font-light mb-8">
        Silahkan daftar terlebih dahulu!
      </div>
      <Input
        label="Username"
        name="name"
        placeholder="Masukan username"
        className="mb-3"
      />
      <Input
        label="Password"
        name="password"
        placeholder="Masukan password"
        className="mb-3"
      />
      <Input
        label="No WhatsApp"
        name="number"
        placeholder="Masukan no whatsApp"
        className="mb-3"
      />
      <Input
        label="Kota"
        name="text"
        placeholder="Masukan kota"
        className="mb-12"
      />
      <Button label="Daftar" className="w-3/6 mb-3" />
      <div className="">
        Sudah punya akun?{" "}
        <span className="text-primary cursor-pointer underline">
          Login disini!
        </span>
      </div>
    </div>
  );
};

export default Form;

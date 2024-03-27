import React, { FormEvent } from "react";
import InputRightIcon from "../../components/input/InputRightIcon";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import ButtonIconGoogle from "../../components/button/ButtonIconGoogle";
import TitleLogo from "../../components/title/TitleLogo";
import { FE_AUTH_REGISTER } from "../../constants/feEndpoint";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex justify-center mx-5 mt-24 md:mt-32">
      <div className="border p-10 rounded-md shadow-md w-96">
        <TitleLogo title="Login" />
        <form action="#" onSubmit={handleLogin}>
          <InputRightIcon
            label="Email"
            name="email"
            type="email"
            placeHolder="Masukkan Email Anda"
            required={true}
            icon="envelope"
          />
          <InputRightIcon
            label="Password"
            name="password"
            type="password"
            placeHolder="Masukkan Password Anda"
            required={true}
            icon="lock"
          />
          <div className="mt-10">
            <ButtonPrimary label="Masuk" type="submit" />
          </div>
          <div className="mt-5">
            <ButtonIconGoogle label="Masuk Dengan Google" type="button" />
          </div>
          <hr className="border border-primary my-5" />
          <div className="mt-5">
            <p className="text-gray-600 text-center">
              Belum Punya Akun?
              <a href={FE_AUTH_REGISTER} className="ms-2 a-primary">
                Daftar
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { FormEvent } from "react";
import TitleLogo from "../../components/title/TitleLogo";
import InputRightIcon from "../../components/input/InputRightIcon";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { FE_AUTH_LOGIN } from "../../constants/feEndpoint";

const Register: React.FC = () => {
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("success");
  };

  return (
    <div className="flex justify-center mx-5 mt-24 md:mt-16">
      <div className="border p-10 rounded-md shadow-md w-96">
        <TitleLogo title="Daftar" />
        <form action="#" onSubmit={handleRegister}>
          <InputRightIcon
            label="Nama Lengkap"
            name="name"
            type="text"
            placeHolder="Masukkan Nama Anda"
            required={true}
            icon="user"
          />
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
          <InputRightIcon
            label="Ulangi Password"
            name="repeatPassword"
            type="password"
            placeHolder="Ulangi Password Anda"
            required={true}
            icon="lock"
          />
          <div className="mt-10">
            <ButtonPrimary label="Daftar" type="submit" />
          </div>
          <div className="mt-5">
            <p className="text-gray-600 text-center">
              Sudah Punya Akun?
              <a
                href={FE_AUTH_LOGIN}
                className="ms-2 text-primary hover:text-primary_hover transition-all duration-300 ease-in"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

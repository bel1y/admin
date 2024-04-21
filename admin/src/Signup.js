import React, { useEffect, useState } from "react";
import "./signin.css";
import logo from "./logo.svg";
import { HiUserAdd } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiMail, CiLock, CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import axios from "axios";

export default function Signup() {
  const [data, setData] = useState([]);

  function Signup12() {
    var namePost = document.querySelector("#name12").value;
    var email = document.querySelector("#email12").value;
    var passwordd = document.querySelector("#password12").value;

    var formdata = new FormData();

    formdata.append("fullname", namePost);
    formdata.append("email", email);
    formdata.append("password", passwordd);

    axios
    .post(`https://backent-admin-oyin-html-css.onrender.com/auth/v1/users/admin`, formdata)
    .then((res) => {
      localStorage.setItem("info", JSON.stringify(res.data))
      window.location = "/admin"

    })
    .catch((err) => {
      alert('Такой аккаунт с таким "email" уже существует ');
    });

  }
      function OpenSignin() {
      window.location = "/"
    }
  return (
    <div className="Signin">
      <div className="nav">
        <img src={logo} alt="" />
        <p>
          У вас уже есть учетная запись? <span onClick={()=>OpenSignin()}>Войти</span>
        </p>
      </div>
      <div className="signin">
        <div className="kotta-signin">
          <div className="first-signin">
            <div className="kotta-person">
              <div className="person-signin">
                <div className="person-signin2">
                  <HiUserAdd className="IoPerson" />
                </div>
              </div>
            </div>
            <div className="text-signin2">
              <p>Создайте новую учетную запись</p>
              <span>Введите свои данные для регистрации.</span>
            </div>
          </div>
          <hr />
          <div className="second-signin">
            <p>
              Полное имя <span className="second-signup">*</span>
            </p>
            <div className="input-email">
              <CiUser />
              <input id="name12" placeholder="James Brown" type="text" />
            </div>
            <p className="password-text">
              Адрес электронной почты <span className="second-signup">*</span>
            </p>
            <div className="input-email">
              <CiMail />
              <input id="email12" placeholder="hello@world.com" type="text" />
            </div>
            <p className="password-text">
              Пароль <span className="second-signup">*</span>
            </p>
            <div className="input-password">
              <CiLock />
              <input
                id="password12"
                placeholder="• • • • • • • • • • "
                type="password"
              />
              <FaRegEye />
            </div>

            <button onClick={()=>Signup12()}>Войти</button>
          </div>
        </div>
      </div>
      <div className="little-footer-signin2">
        <p>© 2023 Mozg</p>
        <p>
          <RiGlobalLine /> РУ <IoChevronDownOutline />
        </p>
      </div>
    </div>
  );
}

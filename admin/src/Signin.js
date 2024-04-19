import React, { useEffect, useState } from 'react'
import "./signin.css"
import logo from "./logo.svg"
import { IoPerson, IoChevronDownOutline  } from "react-icons/io5";
import { CiMail, CiLock } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import axios from 'axios';
import { RiGlobalLine } from "react-icons/ri";

export default function Signin() {

  const [data, setData] = useState([]);


  function Signin12() {
    var formdata = new FormData();
    formdata.append("email", document.querySelector("#email").value);
    formdata.append("password", document.querySelector("#password").value);


      axios
      .post(`https://backent-admin-oyin-html-css.onrender.com/auth/v1/login`, formdata)
      .then((res) => {
        alert("good")
      })
      .catch((err) => {
        alert('Не правильная электронная почта или пароль');
      });
  }
  return (
    <div className='Signin'>
        <div className="nav">
          <img src={logo} alt="" />
          <p>У вас ещё нет учетная запись? <span >Регистрация</span></p>
        </div>
        <div className="signin">
          <div className="kotta-signin">
                   <div className="first-signin">
          <div className="kotta-person">
          <div className="person-signin">
              <div className="person-signin2">
                <IoPerson className='IoPerson'/> 
              </div>
           
            </div>
          </div>
            <div className="text-signin">
              <p>Войдите в свой аккаунт</p>
              <span>Введите свои данные для входа.</span>
            </div>
          </div>
          <hr />
          <div className="second-signin">
            <p >Адрес электронной почты</p> 
            <div className="input-email">
            <CiMail />
            <input id='email' placeholder='hello@world.com' type="text" />
            </div>
            <p className='password-text'>Пароль</p>
            <div className="input-password">
            <CiLock />
            <input id='password' placeholder='• • • • • • • • • • ' type="password" />
            <FaRegEye />
            </div>
            <div className="forget-password-signin">
<div className="chekbox-signin">
  <input type="checkbox" />
  <p>Оставаться  в системе</p>
</div>
<div className="chekbox-signin2 ">
  <p>Забыли пароль?</p>
</div>

            </div>
            <button onClick={()=>Signin12()}>Войти</button>
          </div>   
          </div>

        </div>
        <div className="little-footer-signin">
          <p>© 2023 Mozg</p>
          <p><RiGlobalLine /> РУ <IoChevronDownOutline /></p>
        </div>
    </div>
  )
}

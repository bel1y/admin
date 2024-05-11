import React, { useEffect, useState } from 'react'
import "./signin.css"
import logo from "./logo.svg"
import { IoPerson, IoChevronDownOutline  } from "react-icons/io5";
import { CiMail, CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { RiGlobalLine } from "react-icons/ri";


export default function Signin() {

  const [data, setData] = useState([]);


  function Signin12() {
    var formdata = new FormData();
    formdata.append("email", document.querySelector("#email").value);
    formdata.append("password", document.querySelector("#password").value);


      axios
      .post(`https://api.web1000.ru/auth/v1/login`, formdata)
      .then((res) => {
        localStorage.setItem("info", JSON.stringify(res.data))
        if (res.data.type == 1) {
          window.location="/admin"
        }
        else{
          alert("Вы не админ")
        }
      })
      .catch((err) => {
        alert('Не правильная электронная почта или пароль');
      });
  }
  function OpenSignup() {
    window.location = "/signup"
  }

  function viewPassore() {
    document.querySelector(".FaRegEyeSlash").style="display:block"
    document.querySelector(".FaRegEye").style="display:none"
    document.querySelector("#password").type="text"
  }
  function noviewPassore() {
    document.querySelector(".FaRegEye").style="display:block"
    document.querySelector(".FaRegEyeSlash").style="display:none"
    document.querySelector("#password").type="password"
  }


  return (
    <div className='Signin'>
  <div className="nav">
          <img src={logo} alt="" />
          <p>У вас ещё нет учетная запись? <span onClick={()=>OpenSignup()}>Регистрация</span></p>
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
            <input id='password' placeholder='password' type="password" />
            <FaRegEye className='FaRegEye' onClick={()=>viewPassore()}/>
            <FaRegEyeSlash className='FaRegEyeSlash' onClick={()=>noviewPassore()}/>
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
          <p>© 2024 Mozg</p>
          <p><RiGlobalLine /> РУ 
          {/* <IoChevronDownOutline /> */}
          </p>
        </div>

      
    </div>
  )
}

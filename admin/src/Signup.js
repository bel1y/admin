import React from 'react'
import "./signin.css"
import logo from "./logo.svg"
import { HiUserAdd } from "react-icons/hi";
import { IoChevronDownOutline } from "react-icons/io5";
import { CiMail, CiLock, CiUser  } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

export default function Signin() {
  return (
    <div className='Signin'>
        <div className="nav">
          <img src={logo} alt="" />
          <p>У вас уже есть учетная запись? <a href="#">Войти</a></p>
        </div>
        <div className="signin">
          <div className="kotta-signin">
                   <div className="first-signin">
          <div className="kotta-person">
          <div className="person-signin">
              <div className="person-signin2">
                <HiUserAdd className='IoPerson'/> 
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
          <p >Полное имя <span className='second-signup'>*</span></p> 
            <div className="input-email">
            <CiUser  />
            <input placeholder='James Brown' type="text" />
            </div>
            <p className='password-text'>Адрес электронной почты <span className='second-signup'>*</span></p> 
            <div className="input-email">
            <CiMail />
            <input placeholder='hello@world.com' type="text" />
            </div>
            <p className='password-text'>Пароль <span className='second-signup'>*</span></p>
            <div className="input-password">
            <CiLock />
            <input placeholder='• • • • • • • • • • ' type="password" />
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
            <button>Войти</button>
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

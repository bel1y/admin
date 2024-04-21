import React, {useState, useEffect} from 'react'
import { CiSearch, CiCalendar, CiEdit   } from "react-icons/ci";
import { FaRegBell, FaSortDown, FaSort   } from "react-icons/fa";
import "./admin.css"
import imglogo from './Avatar.svg'
import { IoFilterSharp, IoChevronDownOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import axios from 'axios';
import { VscKebabVertical } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Admin() {

    const [data, setData] = useState([]);
    const [game, setGame] = useState([]);

useEffect(() => {
axios.get('https://api.abbas.uz/api/v1/game_user/all')
.then(res=>{
    setData(res.data)
})
.catch(err=>{

})
})

function OpenFilter() {
document.querySelector(".filter-little-modal").classList.toggle("filter-little-modal_1")
    document.querySelector(".filter-little-modal1").style="display:none"
    document.querySelector(".filter-little-modal2").style="display:none"

}
function OpenSortirovka() {
    document.querySelector(".filter-little-modal1").classList.toggle("filter-little-modal_2")
    // document.querySelector(".filter-little-modal").style="display:none"
    document.querySelector(".filter-little-modal2").style="display:none"
}
function OpenFilterMonth() {
    
    document.querySelector(".filter-little-modal2").style="display:block"
    document.querySelector(".filter-little-modal1").style="display:none"
    document.querySelector(".filter-little-modal").style="display:none"
}

function BgcChange() {
document.querySelector(".show-point-admin1").style="background:#E2EEFA"
}

function OpenKategoriya(id) {
for (let i = 0; i < document.querySelectorAll('.close-kategoriya').length; i++) {
  if(id==i){
   document.querySelectorAll('.close-kategoriya')[i].style="display:block"
    document.querySelectorAll('.open-kategoriya')[i].style="display:none"
    document.querySelectorAll('.show-point-admin2')[i].style="display:flex" 
  }else{
    document.querySelectorAll('.close-kategoriya')[i].style="display:none"
    document.querySelectorAll('.open-kategoriya')[i].style="display:block"
    document.querySelectorAll('.show-point-admin2')[i].style="display:none"
  }
    
}
    

}
function CloseKategoriya(id) {
         document.querySelectorAll('.close-kategoriya')[id].style="display:none"
        document.querySelectorAll('.open-kategoriya')[id].style="display:block"
        document.querySelectorAll('.show-point-admin2')[id].style="display:none"  
}

  return (
    <div>
        <div className="for_main">
        <div className="search-admin-pan">
            <div className="input-serch-admin">
            <CiSearch />
                <input placeholder='Search...' type="text" />
            </div>
            <div className="bell-admin-pan">
            <FaRegBell /> 
            <div className="user-admin-pan">
                <img src={imglogo} className='img-user-admin' alt="" />
            <p>Sophia</p>
            <FaSortDown />
            </div>
            </div>
        </div>
        <hr className='admin-hr'/>
        <div className="rayting-admin">
            <p className='rayting-admin-p'>Рейтинг</p>
            <div className="filter-admin" onClick={()=>OpenFilterMonth()}>
            <CiCalendar />
            <p>6 месяцев</p>
            <IoChevronDownOutline  className='IoChevronDownOutline1'/>
            <div className="filter-little-modal2">
                <p className='filter-balls'>1 месяц</p>
                <p className='filter-balls'>2 месяцев</p>
                <p className='filter-balls'>3 месяцев</p>
                <p className='filter-balls'>4 месяцев</p>
                <p className='filter-balls'>5 месяцев</p>
                <p className='filter-balls'>6 месяцев</p>
                <p className='filter-balls'>7 месяцев</p>
                <p className='filter-balls'>8 месяцев</p>
                <p className='filter-balls'>9 месяцев</p>
                <p className='filter-balls'>10 месяцев</p>
                <p className='filter-balls'>11 месяцев</p>
                <p className='filter-balls'>1 год</p>
            </div>
            </div>
        </div>
        <div className="search-filter-admin">
            <div className="search-input-admin">
            <CiSearch/>
            <input type="text" placeholder='Поиск' />
            </div>
            <div className="for_filter">
            <div className="filter-admin-pan" onClick={()=>OpenFilter()}>
                 <IoFilterSharp />
            <p>Фильтр </p>
            <div className="filter-little-modal">
                <p className='type-filter'>Фильтр</p>
                <p className='filter-balls'>баллы - от и до</p>
                <p className='filter-balls'>время - от и до</p>
                <p className='filter-balls'>Корректурная проба</p>
                <p className='filter-balls'>Выбери подходящее выражение</p>
                <p className='filter-balls'>Таблица Шульте</p>
                <p className='filter-balls'>Расставь предметы</p>
                <p className='filter-balls'>Сосчитай фигуры</p>
                <p className='filter-balls'>Поиск букв</p>
                <p className='filter-balls'>Пары по картинкам</p>
                <p className='filter-balls'>Выбери вид сверху</p>
                <p className='filter-balls'>Правильный маршрут</p>
            </div>
            </div>
            </div>
          <div className="sortirovka-admin-pan" onClick={()=>OpenSortirovka()}>
          <GoSortDesc />
          <p>Сортировка</p>
          <p><IoChevronDownOutline className='IoChevronDownOutline'/></p>
          <div className="filter-little-modal1">
                <p className='type-filter'>по дате прохождения</p>
                <p className='filter-balls'>Cначала старые</p>
                <p className='filter-balls'>Cначала новые </p>
                <hr />
                <p className='type-filter'>По количеству баллов</p>
                <p className='filter-balls'>Максимум</p>
                <p className='filter-balls'>Минимум</p>
                <hr />
                <p className='type-filter'>По количеству времени</p>
                <p className='filter-balls'>Максимум, потраченному на диа </p>
                <p className='filter-balls'>Минимум, потраченному на диа </p>
            </div>
          </div>
        </div>
        <table className='table-admin'> 
             <tr className='show-point-admin'>
            <th className='wdth-bolishuchun'><p>Порядковый номер</p>
                <FaSort /></th>
            <th className='wdth-bolishuchun'><p>Имя участника</p>
            <FaSort /></th>
            <th className='wdth-bolishuchun'><p>Очки</p>
            <FaSort /></th>
            <th className='wdth-bolishuchun'><p>Общая время</p>
            <FaSort /></th>
            <th className='VscKebabVertical'> </th>
          </tr>
          {data.map((item,key)=>{
           return <>
          <tr className='show-point-admin1'>
            <td className='wdth-bolishuchun'>
                <input type="checkbox" onClick={()=>BgcChange()}/> 
            #{item.id}
            </td>
            <td className='img-name-login-admin-pan wdth-bolishuchun'>
            <div className="img-users-admin">
                    <img src={item.image} alt="" />
                </div>
                <div className="name-mail-users-admin">
                    <p>{item.fullname}</p>
                    <span>{item.email}</span>
                </div>
            </td>
            <td className='users-point-admin wdth-bolishuchun'>
            <p>1642</p>
            <span className='open-kategoriya' onClick={()=>OpenKategoriya(key)}>Показать по диагностике</span>
            <span className='close-kategoriya' onClick={()=>CloseKategoriya(key)}>Скрыть</span>
            </td>
            <td className='wdth-bolishuchun'>
            <p>05 мин 42 сек</p>
            </td>
            <td className='VscKebabVertical'>
                <VscKebabVertical />
                <div className="delete-change-admin">
                    <span>Параметры</span>
                    <p><CiEdit className='CiEdit'/> Изменить</p>
                    <p><RiDeleteBin6Line className='RiDeleteBin6Line'/> удалить</p>
                </div>
                </td>
            </tr>
            <tr className='show-point-admin2'>
            <td className='wdth-bolishuchun'>

            </td>
            <td className='game-kategoriya-admin wdth-bolishuchun'>
           <p>Корректурная проба</p>
           <p>Выбери подходящее выражение</p>
           <p>Таблица Шульте</p>
           <p>Сосчитай фигуры</p>
           <p>Расставь предметы</p>
           <p>Поиск букв</p>
           <p>Пары по картинкам</p>
           <p>Выбери вид сверху</p>
           <p>Правильный маршрут</p>
            </td>
            <td className='game-kategoriya-admin wdth-bolishuchun'>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            <p>1642</p>
            </td>
            <td className='game-kategoriya-admin wdth-bolishuchun'>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            <p>05 мин 42 сек</p>
            </td>
            <td className='VscKebabVertical'> </td>
            </tr>
            </>
        })}

        </table>
        </div>
    </div>
  )
}

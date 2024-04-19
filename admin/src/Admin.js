import React, {useState, useEffect} from 'react'
import { CiSearch, CiCalendar  } from "react-icons/ci";
import { FaRegBell, FaSortDown, FaSort   } from "react-icons/fa";
import "./admin.css"
import imglogo from './Avatar.svg'
import { IoFilterSharp, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import axios from 'axios';

export default function Admin() {

    const [data, setData] = useState([]);

useEffect(() => {
axios.get('https://backent-admin-oyin-html-css.onrender.com/auth/v1/users')
.then(res=>{
    setData(res.data)
})
.catch(err=>{
    alert("d")
})
})

function OpenFilter() {
    
    document.querySelector(".filter-little-modal").style="display:block"
    document.querySelector(".filter-little-modal1").style="display:none"
    document.querySelector(".filter-little-moda2").style="display:none"

}
function OpenSortirovka() {
    
    document.querySelector(".filter-little-modal").style="display:none"
    document.querySelector(".filter-little-modal1").style="display:block"
    document.querySelector(".filter-little-moda2").style="display:none"
    document.querySelector(".IoChevronDownOutline").style="display:none"
    document.querySelector(".IoChevronUpOutline").style="display:block"
}
function OpenFilterMonth() {
    
    document.querySelector(".filter-little-modal2").style="display:block"
    document.querySelector(".filter-little-modal1").style="display:none"
    document.querySelector(".filter-little-modal").style="display:none"
    document.querySelector(".IoChevronDownOutline1").style="display:none"
    document.querySelector(".IoChevronUpOutline1").style="display:block"
}

  return (
    <div>
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
            <IoChevronUpOutline className='IoChevronUpOutline1'/>
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
          <div className="sortirovka-admin-pan" onClick={()=>OpenSortirovka()}>
          <GoSortDesc />
          <p>Сортировка</p>
          <p><IoChevronDownOutline className='IoChevronDownOutline'/></p>
          <p><IoChevronUpOutline className='IoChevronUpOutline'/></p>
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
        <div className="show-point-admin">
        <div className="big-div-admin-pan">
        <div className="poryadok-nomer">
                <p>Порядковый номер</p>
                <FaSort />
            </div>
        <div className="users-name">
            <p>Имя участника</p>
            <FaSort />
        </div>
        </div>
        <div className="big-div-admin-pan2">
        <div className="users-point">
            <p>Очки</p>
            <FaSort />
        </div>
        <div className="users-all-time">
            <p>Общая время</p>
            <FaSort />
        </div>
        </div>
        </div>
        <div className="users-point-admin-panel">
       
            {data.map(item=>{
                return <>
                <div className="big-div-admin-pan3">
            <div className="users-id-admin">
                <input type="checkbox" />
                <p># {item.id}</p>
            </div>
                 <div className="users-info-admin">
                <div className="img-users-admin">
                    <img src={item.image} alt="" />
                </div>
                <div className="name-mail-users-admin">
                    <p>{item.name}</p>
                    <span>{item.email}</span>
                </div>
            </div>
             </div>
                </>
            })}
           
           
            <div className="big-div-admin-pan4">
                <div className="users-point-admin">
                    <p>1642</p>
                    <span>Показать по диагностике</span>
                </div>
                <div className="users-all-time-admin">
                    <p>05 мин 42 сек</p>
                </div>
            </div>
        </div>
    </div>
  )
}

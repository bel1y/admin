import React, {useState, useEffect} from 'react'
import { CiSearch, CiCalendar, CiEdit   } from "react-icons/ci";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaRegBell, FaSortDown, FaSort } from "react-icons/fa";
import "./admin.css"
import imglogo from './Avatar.svg'
import { IoFilterSharp, IoChevronDownOutline, IoClose  } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import axios from 'axios';
import { VscKebabVertical } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

export default function Admin() {
   
    const [data1, setData1] = useState({});
    const [data, setData] = useState([]);
  const [org_data,orgSetData]=useState([])
    function getUserGamesByUserId(userId, months) {
        const user = data.find(u => u.id === userId);
      
        if (!user) {
          return null; // User not found
        }
      
        const currentDate = new Date();
        const startDate = new Date(currentDate.getTime() - months * 30 * 24 * 60 * 60 * 1000);
     
        const filteredUserGames = user.user_game.filter(game => {
          const gameDate = new Date(game.time_create);
          return gameDate >= startDate;
        });
        return filteredUserGames;
      }

function filterMonth(month){
    if(month==1){
       document.querySelector('.filter-admin p').innerHTML=`${month} месяц`  
    }
    if(month==12){
        document.querySelector('.filter-admin p').innerHTML=`1 год`  
     }
     if(month!=12 && month!=1){
        document.querySelector('.filter-admin p').innerHTML=`${month} месяцев`  
     }
   
    axios.get('https://api.abbas.uz/api/v1/game_user/all')
.then(res=>{
for (let i = 0; i < res.data.length; i++) {
   res.data[i]=getUserGamesByUserId(res.data[i],month)
}
    for (let i = 0; i < res.data.length; i++) {     
    res.data[i].gl_res=allResult(res.data[i].user_game)
for (let j = 0; j < res.data[i].user_game.length; j++) {
    res.data[i].user_game[j].gl_res=oneResult(res.data[i].user_game[j].game_number,res.data[i].user_game)
}

}
    setData(res.data)
orgSetData(res.data)

})
.catch(err=>{

})
}

useEffect(() => {
    if(localStorage.getItem("info")){
        setData1(JSON.parse(localStorage.getItem("info")))
    }
axios.get('https://api.abbas.uz/api/v1/game_user/all')
.then(res=>{
    for (let i = 0; i < res.data.length; i++) {
    res.data[i].gl_res=allResult(res.data[i].user_game)
for (let j = 0; j < res.data[i].user_game.length; j++) {
    res.data[i].user_game[j].gl_res=oneResult(res.data[i].user_game[j].game_number,res.data[i].user_game)
}

}
setData(res.data)
orgSetData(res.data)
console.log(res.data, "sell");
})
.catch(err=>{

})


JSON.parse(localStorage.getItem("info", setData1))


},[])
function searchdata(e) {
    var a=e.target.value
    console.log(a);
var d=[...org_data]
setData(d.filter(item=>((item.fullname).includes(a) || (item.email).includes(a))))  
}
function sordData_time() {
    var people=[...data]
    people.sort((a, b) => a.gl_res.time - b.gl_res.time);
setData(people)
}
function sordData_time_revel() {
    var people=[...data]
    people.sort((a, b) => b.gl_res.time-a.gl_res.time);
setData(people)
}
function sortByTimeUpdate() {
    var data1=[...data]
    console.log("asdas");
     data1.sort((a, b) => new Date(a.time_update) - new Date(b.time_update));
     setData(data1)
  }
  function sortByTimeUpdateRevel() {
    var data1=[...data]
    console.log("asdas");

     data1.sort((a, b) =>  new Date(b.time_update)- new Date(a.time_update) );
     setData(data1)
  }
    
function sordData_ball() {
    var people=[...data]
    people.sort((a, b) => b.gl_res.score - a.gl_res.score);
setData(people)
}
function sordData_ball_revel() {
    var people=[...data]
    people.sort((a, b) => a.gl_res.score-b.gl_res.score);
setData(people)
}
function filterGame(id) {
    axios.get('https://api.abbas.uz/api/v1/game_user/all')
    .then(res=>{
   for (let i = 0; i < res.data.length; i++) {
    var a=res.data[i].user_game.filter(item=>(item.game_number==id))
      res.data[i].user_game=a
    }
        for (let i = 0; i < res.data.length; i++) {     
        res.data[i].gl_res=allResult(res.data[i].user_game)
    for (let j = 0; j < res.data[i].user_game.length; j++) {
        res.data[i].user_game[j].gl_res=oneResult(res.data[i].user_game[j].game_number,res.data[i].user_game)
    }
    }
    
   
        setData(res.data)
    orgSetData(res.data)
    
    })
    .catch(err=>{
    
    })
    var game=[...org_data]
    
   setData(game)
}
function oneHTML(id,item,type){
if(type=="sec"){
  if((item.user_game.filter(item1=>item1.game_number==id)).length>0){
   return (item.user_game.filter(item1=>item1.game_number==id))[0].gl_res.sec

}else{
    return "0"
}
}
if(type=="min"){
    if((item.user_game.filter(item1=>item1.game_number==id)).length>0){
        return (item.user_game.filter(item1=>item1.game_number==id))[0].gl_res.min
     
     }else{
         return "0"
     }
}
if(type=="score"){
    if((item.user_game.filter(item1=>item1.game_number==id)).length>0){
        return (item.user_game.filter(item1=>item1.game_number==id))[0].gl_res.score
     
     }else{
         return "0"
     }
}
}
function OpenFilter() {
document.querySelector(".filter-little-modal").classList.toggle("filter-little-modal_1")
    document.querySelector(".filter-little-modal1").style="display:none"
    document.querySelector(".filter-little-modal2").style="display:none"

}
function OpenSortirovka() {
    document.querySelector(".filter-little-modal1").classList.toggle("filter-little-modal_2")
    document.querySelector(".filter-little-modal").style="display:none"
    document.querySelector(".filter-little-modal2").style="display:none"
}
function OpenFilterMonth() {
    document.querySelector(".filter-little-modal2").classList.toggle("filter-little-modal_3")
    document.querySelector(".filter-little-modal1").style="display:none"
    document.querySelector(".filter-little-modal").style="display:none"
}

function BgcChange(id) {
    for (let i = 0; i < document.querySelectorAll(".show-point-admin1").length; i++) {
        if(id==i){
            document.querySelectorAll(".show-point-admin1")[i].classList.toggle("filter-little-modal_5")
        }else{

        }
          
      }
}

function allResult(data){
    var time=0
    var score=0
    for (let i = 0; i < data.length; i++) {
      time=time+(data[i].time)*1
      score=score+(data[i].result)*1
    }
        var min=(time/60).toFixed(0)
    var sec=(((time/60)%1)*60).toFixed(0)

return {time,score,sec,min}
}

function oneResult(id,data) {
 var d=data.filter(item=>item.game_number==id)
var send_data=allResult(d)
return send_data
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

function openEditDelete(id){
    for (let i = 0; i < document.querySelectorAll(".delete-change-admin").length; i++) {
        if(id==i){
            document.querySelectorAll(".delete-change-admin")[i].classList.toggle("filter-little-modal_4")
        }else{

        }
          
      }
    
}

function openEdit(id){
    document.querySelector(".big-modal-for-edit-admin").style="display:flex"
    localStorage.setItem("id", id)
}
function closeEdit(){
    document.querySelector(".big-modal-for-edit-admin").style="display:none"
}

function openQuit() {
    document.querySelector(".Quit-from-akk").classList.toggle("Quit-akk")
}
function quitakk() {
    window.location="/"
    localStorage.clear("info")
}

function DeleteAccaunt(id) {
    
    axios.delete(`https://api.abbas.uz/auth/v1/users/${id}`)
    .then(res=>{

        axios.get('https://api.abbas.uz/api/v1/game_user/all')
        .then(res=>{
       for (let i = 0; i < res.data.length; i++) {
        var a=res.data[i].user_game.filter(item=>(item.game_number==id))
          res.data[i].user_game=a
        }
            for (let i = 0; i < res.data.length; i++) {     
            res.data[i].gl_res=allResult(res.data[i].user_game)
        for (let j = 0; j < res.data[i].user_game.length; j++) {
            res.data[i].user_game[j].gl_res=oneResult(res.data[i].user_game[j].game_number,res.data[i].user_game)
        }
        }
        
       
            setData(res.data)
        orgSetData(res.data)
        
        })
        .catch(err=>{
        
        })
    })
    .catch(err=>{
        alert("bad")
    })

}

function EditAccount(id) {
    var formdata = new FormData();
    formdata.append("email", document.querySelector("#email-admin").value);
    formdata.append("password", document.querySelector("#password-admin").value);
    formdata.append("image", document.querySelector("#image-admin").value);
    formdata.append("fullname", document.querySelector("#name-admin").value);


    axios.put(`https://api.abbas.uz/auth/v1/users/${localStorage.getItem("id")}`, formdata)
    .then(res=>{

        document.querySelector(".big-modal-for-edit-admin").style="display:none"

        axios.get('https://api.abbas.uz/api/v1/game_user/all')
        .then(res=>{
       for (let i = 0; i < res.data.length; i++) {
        var a=res.data[i].user_game.filter(item=>(item.game_number==id))
          res.data[i].user_game=a
        }
            for (let i = 0; i < res.data.length; i++) {     
            res.data[i].gl_res=allResult(res.data[i].user_game)
        for (let j = 0; j < res.data[i].user_game.length; j++) {
            res.data[i].user_game[j].gl_res=oneResult(res.data[i].user_game[j].game_number,res.data[i].user_game)
        }
        }
        
       
            setData(res.data)
        orgSetData(res.data)
        
        })
        .catch(err=>{
        
        })
    })
    .catch(err=>{
        alert("Вы не смогли изменить данные")
        document.querySelector(".big-modal-for-edit-admin").style="display:none"
    })
}


  return (
    <div>
        <div className="big-modal-for-edit-admin">
            <IoClose onClick={()=>closeEdit()} className='IoClose'/>
            <div className="modal-for-edit-admin">
                <h2>Изменение Данных Игрока</h2>
                <div className="inputs-edit-admin">
                    <div className="input-edit-admin">
                    <p>Изоброжение <span>*</span></p>
                    <input className='type-file-admin' id='image-admin' type="file" />
                    </div>
                    <div className="input-edit-admin">
                    <p>Имя <span>*</span></p>
                    <input type="text" id='name-admin' placeholder='Имя'/>
                    </div>
                </div>
                <div className="inputs-edit-admin">
                    <div className="input-edit-admin">
                    <p>Эмаил <span>*</span></p>
                    <input type="text" id='email-admin' placeholder='Эмаил'/>
                    </div>
                    <div className="input-edit-admin">
                    <p>Пароль <span>*</span></p>
                    <input type="password" id='password-admin' placeholder='password'/>
                    </div>
                </div>
                <button onClick={()=>EditAccount(localStorage.getItem("id"))}>Изменить</button>
            </div>
        </div>
        <div className="for_main">
        <div className="search-admin-pan" >
        <div className="input-serch-admin">
            <CiSearch />
                <input placeholder='Search...' onKeyUp={(e)=>searchdata(e)} type="text" />
            </div>
            <div className="user-admin-pan" onClick={()=>openQuit()}>
                <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' className='img-user-admin' alt="" />

            <p>{data1.fullname}</p>
            
            <FaSortDown />
            <div className="Quit-from-akk" onClick={()=>quitakk()}>
                <p> <FaPersonWalkingDashedLineArrowRight className='FaPersonWalkingDashedLineArrowRight'/> Выйти</p>
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
                <p className='filter-balls' onClick={()=>filterMonth(1)} >1 месяц</p>
                <p className='filter-balls'  onClick={()=>filterMonth(2)} >2 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(3)} >3 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(4)} >4 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(5)} >5 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(6)} >6 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(7)} >7 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(8)} >8 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(9)} >9 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(10)} >10 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(11)} >11 месяцев</p>
                <p className='filter-balls'  onClick={()=>filterMonth(12)} >1 год</p>
            </div>
            </div>
        </div>
        <div className="search-filter-admin">
            <div className="search-input-admin">
            <CiSearch/>
            <input type="text" onKeyUp={(e)=>{searchdata(e)}} placeholder='Поиск' />
            </div>
            <div className="for_filter">
            <div className="filter-admin-pan" onClick={()=>OpenFilter()}>
                 <IoFilterSharp />
            <p>Фильтр </p>
            <div className="filter-little-modal">
                <p className='type-filter'>Фильтр</p>
                <p className='filter-balls' onClick={()=>{sordData_ball()}} >баллы - от и до</p>
                <p onClick={()=>sordData_time()} className='filter-balls'>время - от и до</p>
                <p className='filter-balls' onClick={()=>filterGame(1)}>Корректурная проба</p>
                <p className='filter-balls'  onClick={()=>filterGame(2)}>Выбери подходящее выражение</p>
                <p className='filter-balls'  onClick={()=>filterGame(3)}>Таблица Шульте</p>
                <p className='filter-balls'  onClick={()=>filterGame(4)}>Расставь предметы</p>
                <p className='filter-balls'  onClick={()=>filterGame(5)}>Сосчитай фигуры</p>
                <p className='filter-balls'  onClick={()=>filterGame(6)}>Поиск букв</p>
                <p className='filter-balls'  onClick={()=>filterGame(7)}>Пары по картинкам</p>
                <p className='filter-balls'  onClick={()=>filterGame(8)}>Выбери вид сверху</p>
                <p className='filter-balls'  onClick={()=>filterGame(9)}>Правильный маршрут</p>
            </div>
            </div>
            </div>
          <div className="sortirovka-admin-pan" onClick={()=>OpenSortirovka()}>
          <GoSortDesc />
          <p>Сортировка</p>
          <p><IoChevronDownOutline className='IoChevronDownOutline'/></p>
          <div className="filter-little-modal1">
                <p className='type-filter'>по дате прохождения</p>
                <p className='filter-balls' onClick={()=>sortByTimeUpdateRevel()}>Cначала старые</p>
                <p className='filter-balls' onClick={()=>sortByTimeUpdate()}>Cначала новые </p>
                <hr />
                <p className='type-filter'>По количеству баллов</p>
                <p className='filter-balls' onClick={()=>sordData_ball()} >Максимум</p>
                <p className='filter-balls' onClick={()=>{sordData_ball_revel()}} >Минимум</p>
                <hr />
                <p className='type-filter'>По количеству времени</p>
                <p className='filter-balls' onClick={()=>sordData_time_revel()} >Максимум, потраченному на диа </p>
                <p onClick={()=>{sordData_time()}} className='filter-balls'>Минимум, потраченному на диа </p>
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
                <input type="checkbox" onClick={()=>BgcChange(key)}/> 
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
            <p>{item.gl_res.score}</p>
            <span className='open-kategoriya' onClick={()=>OpenKategoriya(key)}>Показать по диагностике</span>
            <span className='close-kategoriya' onClick={()=>CloseKategoriya(key)}>Скрыть</span>
            </td>
            <td className='wdth-bolishuchun'>
            <p>{item.gl_res.min} мин {item.gl_res.sec} сек</p>
            </td>
            <td className='VscKebabVertical'>
                <VscKebabVertical onClick={()=>openEditDelete(key)}/>
                <div className="delete-change-admin">
                    <span>Параметры</span>
                    <p onClick={()=>openEdit(item.id)}><FiEdit3 className='FiEdit3' /> Изменить</p>
                    <p onClick={()=>DeleteAccaunt(item.id)}><RiDeleteBin6Line className='RiDeleteBin6Line'  /> удалить</p>
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
            <p>{oneHTML(1,item,"score")}</p>
            <p>{oneHTML(2,item,"score")}</p>
            <p>{oneHTML(3,item,"score")}</p>
            <p>{oneHTML(4,item,"score")}</p>
            <p>{oneHTML(5,item,"score")}</p>
            <p>{oneHTML(6,item,"score")}</p>
            <p>{oneHTML(7,item,"score")}</p>
            <p>{oneHTML(8,item,"score")}</p>
            <p>{oneHTML(9,item,"score")}</p>
            </td>
            <td className='game-kategoriya-admin wdth-bolishuchun'>
            <p>{oneHTML(1,item,"min")} мин {oneHTML(1,item,"sec")} сек</p>
            <p>{oneHTML(2,item,"min")} мин {oneHTML(2,item,"sec")} сек</p>
            <p>{oneHTML(3,item,"min")} мин {oneHTML(3,item,"sec")} сек</p>
            <p>{oneHTML(4,item,"min")} мин {oneHTML(4,item,"sec")} сек</p>
            <p>{oneHTML(5,item,"min")} мин {oneHTML(5,item,"sec")} сек</p>
            <p>{oneHTML(6,item,"min")} мин {oneHTML(6,item,"sec")} сек</p>
            <p>{oneHTML(7,item,"min")} мин {oneHTML(7,item,"sec")} сек</p>
            <p>{oneHTML(8,item,"min")} мин {oneHTML(8,item,"sec")} сек</p>
            <p>{oneHTML(9,item,"min")} мин {oneHTML(9,item,"sec")} сек</p>
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

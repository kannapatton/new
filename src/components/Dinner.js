import { useState } from 'react';
// import './App.css';
import axios from 'axios';

function Dinner() {
//set states
const [sunday, setSunday] = useState('');
const [monday, setMonday] = useState('');
const [tuesday, setTuesday] = useState('');
const [wednesday, setWednesday] = useState('');
const [thursday, setThursday] = useState('');
const [friday, setFriday] = useState('');
const [saturday, setSaturday] = useState('');

const [menuList, setMenuList] = useState([]);
const addMenu = () =>{
  axios.post('http://localhost:3009/create',{
    //body object to be sent to back end
    sunday: sunday,
    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday
  }).then(() =>{
  setMenuList([...menuList, {
    sunday: sunday,
    monday: monday,
    tuesday: tuesday,
    wednesday: wednesday,
    thursday: thursday,
    friday: friday,
    saturday: saturday
  },
]);
});
};
const getMenu = () => {
  axios.get('http://localhost:3009/menu', {
  }).then((response)=> {
    setMenuList(response.data);
  });
};
const deleteMenu = (iddinner) =>{
  axios.delete(`http://localhost:3009/delete/${iddinner}`).then((response)=>{
    setMenuList(menuList.filter((val)=>{
      return val.iddinner !== iddinner;
    }))
  })
};
  return (
    <div className="App">
     <div className='information'>
      <label>Sunday:</label>
      <input type="text"
      onChange={(event) => {
        setSunday(event.target.value);
      }} />
      <label>Monday:</label>
      <input type="text"
      onChange={(event) => {
        setMonday(event.target.value);
      }} />
      <label>Tuesday:</label>
      <input type="text"
      onChange={(event) => {
        setTuesday(event.target.value);
      }} />
      <label>Wednesday:</label>
      <input type="text"
      onChange={(event) => {
        setWednesday(event.target.value);
      }} />
      <label>Thursday:</label>
      <input type="text"
      onChange={(event) => {
        setThursday(event.target.value);
      }} />
      <label>Friday:</label>
      <input type="text"
      onChange={(event) => {
        setFriday(event.target.value);
      }} />
      <label>Saturday:</label>
      <input type="text"
      onChange={(event) => {
        setSaturday (event.target.value);
      }} />
            <button onClick={addMenu}>Add Menu</button>
     </div>
     <br></br>
     <button onClick={getMenu}>Show Menu</button>
      {menuList.map((val, key)=> {
        return <div className='menu'>
          <h3>Sunday: {val.sunday}</h3>
          <h3>Monday: {val.monday}</h3>
          <h3>Tuesday: {val.tuesday}</h3>
          <h3>Wednesday: {val.wednesday}</h3>
          <h3>Thursday: {val.thursday}</h3>
          <h3>Friday: {val.friday}</h3>
          <h3>Saturday: {val.saturday}</h3>
          <button onClick={()=>{deleteMenu(val.iddinner);}}>Delete</button>

        </div>
          
      })}
    </div>
  );
}

export default Dinner;

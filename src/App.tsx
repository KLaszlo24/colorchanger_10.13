import { useState } from "react";

function App() {
  const [szin, setSzin] = useState("#ffffff")

  function Szinvaltas(){
    const randomSzin = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    setSzin("#" + randomSzin);
  }


  return (
    <div style={
          {backgroundColor: szin,
            height: "100vh",
            width: "100vw"
          }}>
      <Fejlec></Fejlec>
      <button onClick={Szinvaltas} >Szinvaltas</button>

      <Lablec LablecNev="ColorChanger" tema="masodikfeladat"></Lablec>
    </div>
  )
}

function Fejlec(){
  return <>
    <header>
      <p>ColorChanger</p>
    </header>
  </>
}

/*
function Szinvalto(){
  const [szin, setSzin] = useState("#ffffff")

  function Szinvaltas(){
    const randomSzin = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    setSzin("#" + randomSzin);
  }

  return<>
    <button style={
        {backgroundColor: szin}
      } onClick={Szinvaltas} >Szinvaltas</button>
  </>

}
*/

interface LablecProps{
  LablecNev: string,
  tema: string,
}

function Lablec({LablecNev, tema}: LablecProps){
  return <>
    <footer>
      <hr />

      <p>Név: {LablecNev}</p>
      <p>Téma: {tema}</p>
    </footer>
  </>
}



export default App


import './App.css';
import { useState } from 'react';

function App() {
  const [Name, setName] = useState("")
  const [Stat, setStat] = useState('')
  const [Eco, setEco] = useState('')
  const [Ba, setBa] = useState('')
  const [English, setEnglish] = useState('')
  const [editIndex, setEditIndex] = useState(-1)

  const [data, setData] = useState([{ name: 'test', Stat: '55', Eco: '44', Ba: '66', English: '99', Total: 250, Per: 85 }])

  const submit = () => {
    console.log({ name: Name, Stat: Stat, Eco: Eco, Ba: Ba, English: English, Total: (parseInt(Stat) + parseInt(Eco) + parseInt(Ba) + parseInt(English)), Per: (parseInt(Stat) + parseInt(Eco) + parseInt(Ba) + parseInt(English)) / 4, });

    let copyData = [...data]

    let obj = { name: Name, Stat: Stat, Eco: Eco, Ba: Ba, English: English, Total: (parseInt(Stat) + parseInt(Eco) + parseInt(Ba) + parseInt(English)), Per: (parseInt(Stat) + parseInt(Eco) + parseInt(Ba) + parseInt(English)) / 4, }

    if (editIndex >= 0) {
      copyData.splice(editIndex, 1, obj)
      setEditIndex(-1)
    }
    else {
      copyData.push(obj)
    }
    setData(copyData)
    setName('')
    setStat('')
    setEco('')
    setBa('')
    setEnglish('')
  }

  const deletHandler = (index) => {
    let copyData = [...data]
    copyData.splice(index, 1)
    setData(copyData)
  }

  const editHandler = (index) => {
    let currentData = data[index];
    setName(currentData.name)
    setStat(currentData.Stat)
    setEco(currentData.Eco)
    setBa(currentData.Ba)
    setEnglish(currentData.English)
    setEditIndex(index)
  }

  return (
    <div className='App'>
      <input type="text" value={Name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" value={Stat} placeholder="Stat" onChange={(e) => setStat(e.target.value)} />
      <input type="number" value={Eco} placeholder="Eco" onChange={(e) => setEco(e.target.value)} />
      <input type="number" value={Ba} placeholder="Ba" onChange={(e) => setBa(e.target.value)} />
      <input type="number" value={English} placeholder="English" onChange={(e) => setEnglish(e.target.value)} /><br />
      <button className='submit' onClick={submit}>Submit</button>
      <center>
        <table border={1.5}>
          <tr>
            <th colSpan={9}>STUDENT RESULT</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>Stat</td>
            <td>Eco</td>
            <td>Ba</td>
            <td>Eng.</td>
            <td>Total</td>
            <td>Per.</td>
            <td>Edit</td>
            <td>delete</td>
          </tr>
          {
            data.map((el, index) => {
              return <tr>
                <td>{el.name}</td>
                <td>{el.Stat}</td>
                <td>{el.Eco}</td>
                <td>{el.Ba}</td>
                <td>{el.English}</td>
                <td>{el.Total}</td>
                <td>{el.Per}</td>
                <td><button onClick={() => editHandler(index)}>edit</button></td>
                <td><button onClick={() => deletHandler(index)}>delete</button></td>
              </tr>
            })
          }
        </table>
      </center>
    </div>
  );
}

export default App;
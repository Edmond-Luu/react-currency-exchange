import React from "react"
import Form from "./Form"

function App() {

  const [fromVal, setFromVal] = React.useState()
  const [fromSel, setFromSel] = React.useState("usd")

  const [toVal, setToVal] = React.useState()
  const [toSel, setToSel] = React.useState("eur")

  const [currKey, setCurrKey] = React.useState([])
  const [currFull, setCurrFull] = React.useState([])

  const [convData, setConvData] = React.useState("")
  const [reverse, setReverse] = React.useState(false)



  React.useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
      .then(res => res.json())
      .then(data => {
        setCurrKey([...Object.keys(data)])
        setCurrFull([...Object.values(data)])
      })
  }, [])


  React.useEffect(() => {

    if (!reverse) {
      setToVal()
      async function fetchDataNor() {
        await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromSel}/${toSel}.json`)
          .then(res => res.json())
          .then(data => setConvData([...Object.values(data)][1]))
        const convRes = parseFloat(fromVal) * convData
        setToVal(convRes)
      }

      if (fromVal) {
        fetchDataNor()
      }
    } else {
      setFromVal()
      async function fetchDataRev() {
        await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${toSel}/${fromSel}.json`)
          .then(res => res.json())
          .then(data => setConvData([...Object.values(data)][1]))
        const convRes = parseFloat(toVal) * convData
        setFromVal(convRes)
      }

      if (toVal) {
        fetchDataRev()
      }

    }
  }, [fromVal, fromSel, toVal, toSel])


  function handleChange(event) {
    const { name, value } = event.target;
    name === "fromVal" ? setFromVal(value) :
      name === "toVal" ? setToVal(value) :
        name === "fromSel" ? setFromSel(value) :
          setToSel(value)
  }

  function toggle(event) {
    const { name } = event.target;
    name === "fromVal" ? setReverse(false) : setReverse(true)
  }

  return (
    <div className="App">
      <h1>React - Currency Converter</h1>
      <Form
        handleChange={handleChange}
        fromVal={fromVal}
        fromSel={fromSel}
        toVal={toVal}
        toSel={toSel}
        currKey={currKey}
        currFull={currFull}
        toggle={toggle}
      />

      <p>Made completely from scratch with ❤️ by <a href="https://edmond-luu.github.io">Edmond Luu</a></p>
    </div>
  );
}

export default App;

import React from "react"
import Form from "./Form"

function App() {

  const [val, setVal] = React.useState <number> (1)
  const [inverse, setInverse] = React.useState <boolean> (false)
  const [rate, setRate] = React.useState <number> (0)

  const [fromSel, setFromSel] = React.useState("")
  const [toSel, setToSel] = React.useState("")

  const [allCurr, setAllCurr] = React.useState <{}[]> ([])
  const [currNames, setCurrNames] = React.useState([])


  let toVal, fromVal
  if (val != null) {
    if (!inverse) {
      fromVal = val
      toVal = val * rate
    } else {
      toVal = val
      fromVal = toVal / rate
    }
  }

  React.useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json")
      .then(res => res.json())
      .then(data => {
        const initial = Object.keys(Object.values(data)[1])[80]
        setFromSel(Object.keys(data)[1])
        setToSel(initial)
        setAllCurr([...Object.keys(Object.values(data)[1])])
        setRate(Object.values(data)[1][initial])
      })
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json")
      .then(res => res.json())
      .then(data => setCurrNames([...Object.values(data)]))
  }, [])

  React.useEffect(() => {
    if (fromSel != null && toSel != null) {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromSel}.min.json`)
        .then(res => res.json())
        .then(data => {
          setRate(Object.values(data)[1][toSel])
        })
    }
  }, [fromSel, toSel])

  function handleFromChange(event: {target: {valueAsNumber: number}}) {
    setVal(event.target.valueAsNumber)
    setInverse(false)
  }

  function handleToChange(event: {target: {valueAsNumber: number}}) {
    setVal(event.target.valueAsNumber)
    setInverse(true)
  }

  return (
    <div className="app" >
      <div className="box">
        <div className="fromForm">
          <h1 className="title">React - Currency Exchange</h1>
          <Form
            handleChange={handleFromChange}
            val={fromVal}
            selVal={fromSel}
            selChange={event => setFromSel(event.target.value)}
            allCurr={allCurr}
            currNames={currNames}
          // currFull={currFull}
          />
        </div>

        <div className="toForm">
          <Form
            handleChange={handleToChange}
            val={toVal}
            selVal={toSel}
            selChange={event => setToSel(event.target.value)}
            allCurr={allCurr}
            currNames={currNames}
          />
        </div>
      </div>
      <div id="footer">
        <p>Made completely from scratch with ❤️ by <a href="https://edmond-luu.github.io" target="_blank" rel="noreferrer">Edmond Luu</a></p>
      </div>
    </div>
  );
}

export default App;

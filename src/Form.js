import React from "react"

export default function Form(props) {


    const optArray = []
    
    for (let i = 0; i < props.currKey.length; i++){
        optArray.push(<option value={props.currKey[i]} key={props.currKey[i]}> {props.currFull[i]}  ({props.currKey[i].toUpperCase()})</option>)
    }



    return (
        <form>
            <input type="number" name="fromVal" id="from" min={0} value={props.fromVal} onChange={props.handleChange} onClick={props.toggle}/>

            <select name="fromSel" value={props.fromSel} onChange={props.handleChange}>
                {optArray}

            </select>

            <div className="spacer">
                ➡️
            </div>

            <input type="number" name="toVal" value={props.toVal} onChange={props.handleChange} onClick={props.toggle}/>
            <select name="toSel" value={props.toSel} onChange={props.handleChange}>

                {optArray}

            </select>

        </form >
    )
}

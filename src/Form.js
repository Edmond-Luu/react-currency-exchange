import React from "react"

export default function Form(props) {


    const optArray = []

    for (let i = 0; i < props.allCurr.length; i++) {
        optArray.push(<option value={props.allCurr[i]} key={props.allCurr[i]}> {props.allCurr[i].toUpperCase()} - {props.currNames[i]}</option>)
    }


    return (
        <form>
            <input className="input is-medium is-success" type="number" min={0} value={props.val} onChange={props.handleChange} />

            <div className="select is-info is-medium">
                <select value={props.selVal} onChange={props.selChange}>
                    {optArray}

                </select>
            </div>

        </form >
    )
}

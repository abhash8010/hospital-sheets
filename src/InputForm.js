import React, { useReducer, useState } from 'react'
import "./App.css"
import { AppSheet } from './AppSheet'
import { useContext } from 'react';
import Markdown from './Markdown';

function loginReducer(state, action) {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.field]: action.value

            }
        case 'clear':
            return {
                ...state,
                doctorName: "",
                name: "",
                condition: "",
                date: ""
            }

        default:
            break;
    }
}

const initialState = {
    doctorName: "",
    name: "",
    condition: "",
    date: "",
}


function InputForm({ number, setNumber }) {
    const [title, setTitle] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const SheetID = "0";
    const { name, condition, date, doctorName } = state
    //Calling the value of doc from main app useing useContext
    const doc = useContext(AppSheet)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!doc) {
            console.error('Document not loaded')
            return
        }
        const newRow = { Name: `${name}`, Date: `${date}`, Condition: `${condition}`, CheckedBy: `${doctorName}` }
        try {
            const sheet = doc.sheetsById[SheetID];
            await sheet.addRow(newRow);
        }
        catch (e) {
            console.log("Error:", e)
        }
        // window.location.reload()
        dispatch({ type: 'clear' })
        setNumber(number + 1)

    }
    function handleTitleChange() {
        var genderCheck = document.getElementById('gender').checked;
        var marriedCheck = document.getElementById('married').checked;
        if (genderCheck === true) {
            setTitle('Mr.');
            setPronoun('He');
        } else {
            setPronoun('She')
            if (marriedCheck === true) {
                setTitle('Mrs.');
            } else {
                setTitle('Ms.');
            }
        }
    }
    function resetValues() {
        dispatch({ type: "clear" })
    }
    return (
        <div className="form-markdown-display">
            <form onSubmit={handleSubmit} className="print-display">
                <div className="form-elements">
                    <label htmlFor="gender">Gender: </label>
                    <div className="gender-radio">
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name="gender" value="Male" onChange={handleTitleChange} id="gender" />
                        <label htmlFor="Female">Female</label>
                        <input type="radio" name="gender" value="Female" onChange={handleTitleChange} />
                    </div>
                    <div className="married">y
                        <label>Married: </label><br />
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="married" value="Yes" id="married" onChange={handleTitleChange} />
                        <label htmlFor="yes">No</label>
                        <input type="radio" name="married" value="No" onChange={handleTitleChange} />
                    </div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" onChange={e => dispatch({ type: "field", field: "name", value: e.target.value })} required />
                    <label htmlFor="contion">Condition: </label>
                    <textarea name="condition" id="condition" cols="30" rows="10" onChange={e => dispatch({ type: "field", field: "condition", value: e.target.value })} required></textarea>
                    <label htmlFor="dob" >Date of Birth: </label>
                    <input type="date" onChange={e => dispatch({ type: "field", field: "date", value: e.target.value })} />
                    <label htmlFor="doctor-name">Checked by:</label>
                    <input type="text" onChange={e => dispatch({ type: "field", field: "doctorName", value: e.target.value })} required />
                    < div className="buttons" >
                        <button type="submit" disabled={doc === null}>Submit</button>
                        <button type="reset" value="Reset" onClick={resetValues}>Create New</button>
                    </div>
                </div>
            </form>
            <div className="markdown-component">
                <Markdown name={name} condition={condition} date={date} doctorName={doctorName} title={title} pronoun={pronoun} />
            </div>
        </div >
    )
}

export default InputForm
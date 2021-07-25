import React, { useContext, useEffect, useState } from 'react'
import { AppSheet } from './AppSheet';
import InputForm from './InputForm'
function RowReader() {
    const [number, setNumber] = useState(0)
    const [rowInfo, setRowInfo] = useState([]);
    const doc = useContext(AppSheet)
    const [globalRows, setGlobalRows] = useState('');
    const SheetID = "0";
    useEffect(() => {
        const read = async () => {
            const sheet = await doc.sheetsById[SheetID];
            const rows = await sheet.getRows()
            setGlobalRows(rows)
            const userData = rows.map(row => {
                console.log(row)
                return {
                    name: row.Name,
                    condition: row.Condition,
                    date: row.Date,
                    doctor: row.CheckedBy
                }
            });
            setRowInfo(userData)
        }
        read();
    }, [doc.sheetsById, number])

    const handleDelete = async (i) => {
        if (window.confirm("Confirm deleting this record?")) {
            await globalRows[i].delete();
            setNumber(number + 1)
        }
    }

    return (
        <div>
            <InputForm number={number} setNumber={setNumber} />
            <table className="table-display">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Condition</th>
                        <th>DOB</th>
                        <th>Doctor</th>
                        <th>Delete</th>
                    </tr>
                    {rowInfo.map((data, i) => {
                        return (<tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.condition}</td>
                            <td>{data.date}</td>
                            <td>{data.doctor}</td>
                            <td><button onClick={() => { handleDelete(i) }}>Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default RowReader
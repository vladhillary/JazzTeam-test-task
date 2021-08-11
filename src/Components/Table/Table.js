import React, { useState, useEffect } from 'react'
import './table.css'
import TrComponent from './TrComponent'

function Table() {

    const [dataUser, setDataUser] = useState(null)
    const [editCell, setEditCell] = useState(null)
    const [inputEdit, setInputEdit] = useState('')
    const [selectedRow, setSelectedRow] = useState(0)

    let thHeadContent;

    const onChangeInputEdit = (e) => {
        setInputEdit(e.target.value)
    }
    const cancelEdit = () => {
        setEditCell(null)
        setInputEdit('')
    }

    const fetchData = async () => {

        const response = await fetch('http:/db.json')
        const parsedResp = await response.json()

        setDataUser(parsedResp)

    }

    useEffect(() => {

        fetchData()

    }, [])

    if (dataUser) {

        thHeadContent = Object.keys(dataUser[0]).slice(2)

    }

    const markForRow = (e) => {

        if (e.target.nodeName === 'TD') {

            const id = e.target.id

            dataUser.forEach(item => {
                if (item.id === +id) {
                    item.checked = !item.checked
                }
            })
            setDataUser(dataUser)
        }
    }

    const editForCell = (e, cell) => {

        const id = e.target.id
        const cellContent = cell

        setEditCell({ id, cellContent })

    }

    const addEditToCell = (cellContent, id, itemField) => {


        const editIndex = dataUser.findIndex((item) => {

            return item.id === id
        })

        const itemToedit = dataUser[editIndex]
        const upDatedItem = { ...itemToedit, [itemField]: cellContent }
        const firstPart = dataUser.slice(0, editIndex)
        const secondPart = dataUser.slice(editIndex + 1)
        const upDatedUsers = [...firstPart, upDatedItem, ...secondPart]


        setDataUser(upDatedUsers)
        setInputEdit('')
    }

    const amountSelectedRows = () => {

        let amoutSeleced = 0
        dataUser.forEach(item => {

            if (item.checked) {
                amoutSeleced++
            }
        })

        return amoutSeleced

    }

    if (dataUser) {

        const amoutSeleced = amountSelectedRows()

        if (amoutSeleced !== selectedRow) setSelectedRow(amoutSeleced)

    }

    return (
        <div className='container_table'>

            <h2>Our Employees :</h2>
            <div className='table_wrapper'>
                <table>
                    <thead>
                        <tr>
                            <th className='number_of_employee'>№</th>
                            {thHeadContent !== undefined ? thHeadContent.map((item) => {
                                return <th className='th_for_head' key={item}>{item}</th>
                            })
                                : null}
                        </tr>
                    </thead>
                    <tbody onClick={markForRow}>
                        {dataUser !== null ?
                            dataUser.map((item) => {
                                return <TrComponent
                                    key={item.id + item}
                                    items={item}
                                    editForCell={editForCell}
                                    editCell={editCell}
                                    onChangeInputEdit={onChangeInputEdit}
                                    inputEdit={inputEdit}
                                    addEditToCell={addEditToCell}
                                    cancelEdit={cancelEdit}
                                />
                            })
                            : null
                        }
                    </tbody>
                </table>
            </div>
            <div className='table_panel_state'>
                <p className='amount_of_seleced_rows'>Amount of selected rows: {selectedRow}</p>
                <p className='total_amout_of_data'>Total employees: {dataUser?.length}</p>
            </div>

        </div>
    )
}

export default Table

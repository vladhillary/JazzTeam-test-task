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

            let id = e.target.id

            let newDataUser = [...dataUser]
            newDataUser.forEach(item => {
                if (item.id === +id) {
                    item.checked = !item.checked
                }
            })
            setDataUser(newDataUser)
        }
    }

    const editForCell = (e, cell) => {

        let id = e.target.id
        let cellContent = cell

        setEditCell({ id, cellContent })

    }

    const addEditToCell = (cellContent, id, oldContent) => {

        let idCell = id
        let nextContent = cellContent
        let prevContent = oldContent

        let newDataUser = [...dataUser]

        newDataUser.forEach(item => {

            if (item.id === +idCell) {

                let obj = item

                obj[Symbol.iterator] = function (n = 29) {

                    let i = 0
                    return {
                        next() {
                            if (i < n) {
                                return { value: ++i, done: false }
                            }
                            return { value: undefined, done: true }
                        }
                    }
                }

                for (let value in obj) {

                    if (item[value] === prevContent) {
                        item[value] = nextContent
                    }
                }
            }
        })

        setInputEdit('')
    }

    const amountSelectedRows = () => {

        let newDataUser = [...dataUser]
        let amoutSeleced = 0
        newDataUser.forEach(item => {

            if (item.checked) {
                amoutSeleced++
            }
        })

        return amoutSeleced

    }

    if (dataUser) {

        let amoutSeleced = amountSelectedRows()

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

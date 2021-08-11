import React from 'react'
import TdComponent from './TdComponent'

function TrComponent({ items, editForCell, editCell, onChangeInputEdit, inputEdit, addEditToCell, cancelEdit }) {

    const itemOFData = items

    const arrOfEntries = Object.entries(itemOFData).slice(2)



    return (
        <tr className={items.checked ? 'mark' : null}>
            <th className='number_of_employee'>{items.id}</th>
            {arrOfEntries.map(([itemField, key], index) => {

                return <TdComponent
                    item={itemOFData}
                    key={itemField + index}
                    itemField={itemField}
                    editForCell={editForCell}
                    editCell={editCell}
                    onChangeInputEdit={onChangeInputEdit}
                    inputEdit={inputEdit}
                    addEditToCell={addEditToCell}
                    cancelEdit={cancelEdit}
                />
            })}
        </tr>
    )
}

export default TrComponent

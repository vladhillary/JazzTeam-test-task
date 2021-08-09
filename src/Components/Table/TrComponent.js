import React from 'react'
import TdComponent from './TdComponent'

function TrComponent({ items, editForCell, editCell, onChangeInputEdit, inputEdit, addEditToCell, cancelEdit }) {

    let itemOFData = items

    let arrOfKeys = Object.keys(itemOFData).slice(2)

    return (
        <tr className={items.checked ? 'mark' : null}>
            <th className='number_of_employee'>{items.id}</th>
                    {arrOfKeys.map((item, index)=>{
                        return  <TdComponent
                        item={itemOFData}
                        key={item+index}
                        itemField={item}
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

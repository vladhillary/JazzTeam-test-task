import React from 'react'

function TdComponent({ item, itemField, editForCell, editCell, onChangeInputEdit, inputEdit, addEditToCell, cancelEdit }) {
    return (
        <>
            
            <td onDoubleClick={(e) => editForCell(e, item[itemField])} id={item.id}>
                {item[itemField]}
                {+editCell?.id === item.id && editCell?.cellContent === item[itemField] ?
                    <div className='edit'>
                        <input type='text'
                            className='input_edit'
                            placeholder='type edit'
                            onChange={onChangeInputEdit}
                            value={inputEdit}
                        />
                        <button
                            onClick={() => addEditToCell(inputEdit, item.id, item[itemField])}
                            className='edit_ok_btn'>OK</button>
                        <button
                            onClick={cancelEdit}
                            className='edit_cancel_btn'>Cancel</button>
                    </div>
                    : null}
            </td>
        </>
    )
}

export default TdComponent

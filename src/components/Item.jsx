import React, { useState } from "react";

function Item({ item, deleteItem, editItem }) {
    return (
        <li className="crud-item">
            <span className="item-text">{item.value}</span>
            <div className="buttons-container">
                <button className="btn-edit" onClick={() => editItem(item)}>Editar</button>
                <button className="btn-delete" onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
        </li>
    );
}

export default Item;
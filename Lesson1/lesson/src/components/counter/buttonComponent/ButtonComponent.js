import React from 'react';

const x = 5;

const ButtonComponent = ({ handleModalOpen, isModalOpen }) => {
    return (
        <button type="button" onClick={() => handleModalOpen(x)}>{isModalOpen ? "Hide" : "Show"}</button>
    );
}

export default ButtonComponent;
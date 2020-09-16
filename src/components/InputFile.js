import React, { useState } from 'react';

const InputFile = ({ dataImage, setDataImage }) => {

    const [inputValue, setInputValue] = useState({});

    const handleFileChange = ({ target }) => {
        const image = (target.files[0])
        setInputValue(image)
        let readear = new FileReader()
        readear.onload = (({ target }) => {
            setDataImage(target.result)
        })
        readear.readAsDataURL(image)
    }
    return (
        <>
            <div className="input-group mb-3">

                <div className="custom-file">
                    <input type="file" className="custom-file-input" onChange={handleFileChange} />
                    <label className="custom-file-label" id="label-input">{inputValue.name}</label>
                </div>
            </div>


        </>
    );
}

export default InputFile;

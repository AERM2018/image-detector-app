import React, { useEffect, useRef, useState } from 'react';
import * as ml5 from 'ml5'
import { analyzeImage } from './helpers/analyzeImage';

const ImageDetectorApp = () => {

    const btn = useRef("btn-add")
    const [dataImage, setDataImage] = useState(null);
    const [prediction, setPrediction] = useState({ loading: true });
    const { label, confidence, loading } = prediction

    const handleClick = () => {

        btn.current.addEventListener('change', ({ target }) => {
            const image = target.files[0]

            let readear = new FileReader()

            readear.onload = (({ target }) => {
                setDataImage(target.result)
            })
            readear.readAsDataURL(image)

        })
    }

    useEffect(() => {
        if (dataImage) {
            analyzeImage().then(res => {
                setPrediction({
                    loading: false,
                    ...res
                })
            })
        }
    }, [dataImage]);

    return (
        <div>

            <img id="img" src={(!dataImage) ? "./assets/images/img-icon.png" : dataImage} alt="Imagen" style={{ maxWidth: 450 }} />
            {(!loading) && <h4>{`${label} --> ${confidence * 100}%`}</h4>}

            <input
                type="file"
                onClick={handleClick}
                ref={btn}
            />
        </div>
    );
}

export default ImageDetectorApp;

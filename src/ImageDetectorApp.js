import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as ml5 from 'ml5'

const ImageDetectorApp = () => {

    const btn = useRef("btn-add")
    const [dataImage, setDataImage] = useState(null);
    const [prediction, setPrediction] = useState({loading:true});
    const {label,confidence,loading} = prediction
    const analyzeImage = () => {
        const classifier = ml5.imageClassifier('MobileNet', (load, error) => {
            console.log("modelo cargado")
        });
        classifier.classify(document.getElementById("img"), (err, results) => {
            if(results){
                const first = results[0]
                setPrediction(
                    {loading:false,
                    ...first}
                )
               
            }
        })

    }

    const handleClick = ()=>{
        
        btn.current.addEventListener('change',({target})=>{
            const image = target.files[0]

            let readear = new FileReader()

            readear.onload= (({target})=>{
                setDataImage(target.result)
            })  
            readear.readAsDataURL(image)

        })
    }

    useEffect(() => {
        dataImage && analyzeImage()
    }, [dataImage]);

    return (
        <div>
            {console.log(!!dataImage)}
            <img id="img" src={(!dataImage) ? "./assets/images/img-icon.png" : dataImage} alt="Imagen" style={{maxWidth:450}}/>
            {(!loading) &&  <h4>{`${label} --> ${confidence*100}%`}</h4>}

            <input
                type="file"
                onClick={handleClick}
                ref={btn}
            />
        </div>
    );
}

export default ImageDetectorApp;

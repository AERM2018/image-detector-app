import { useEffect, useState } from 'react';
import { analyzeImage } from '../helpers/analyzeImage';

export const usePrediction = (img) => {
   
    const [prediction, setPrediction] = useState({ data: [], loading: false });
    useEffect(() => {
        if (img) {
            setPrediction({ data: [], loading: true })
            analyzeImage().then(res => {
                setPrediction({
                    loading: false,
                    data: res
                })
            })
        }
    }, [img]);

    return prediction
}


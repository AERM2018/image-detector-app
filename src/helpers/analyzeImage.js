
import * as ml5 from 'ml5'

export const analyzeImage = async(img) => {
   
    const model = await ml5.imageClassifier('MobileNet');
    const results = await model.classify(document.getElementById("img"))

    return results;
}
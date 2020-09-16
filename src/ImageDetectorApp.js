import React, { useEffect, useState } from 'react';
import InputFile from './components/InputFile';
import TableResults from './components/TableResults';
import { analyzeImage } from './helpers/analyzeImage';
import { usePrediction } from './hooks/usePrediction';

const ImageDetectorApp = () => {

    const [dataImage, setDataImage] = useState(null);
    const { data, loading } = usePrediction(dataImage)



    return (
        <div className="m-5">

            <h1>ml5.js + React.js</h1>
            <div className="row mt-3">
                <div className="col-5">

                    <img className="rounded " id="img" src={(!dataImage) ? "./assets/images/img-icon.png" : dataImage} alt="Imagen" style={{ maxWidth: 450 }} />

                </div>

                <div className="col-5">
                    <InputFile dataImage={dataImage} setDataImage={setDataImage} />
                    {/* <button className="btn btn-primary">analyzeImage</button> */}

                    {
                        (data.length === 0 && !loading) && <div className="alert alert-primary"> Seleccione una imagen, por favor</div>
                    }
                    {
                        (loading)
                            ? <div class="text-center">
                                <div class="spinner-border m-5 text-primary" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            : <TableResults info={data} />


                    }
                </div>



            </div>
        </div>
    );
}

export default ImageDetectorApp;

import React from 'react';

const TableResults = ({ info }) => {

    
    
        return(
            <>
                <ul className="list-group list-group-flush">
                    {
                        info.map(({ label, confidence }) => {
                            confidence = (confidence*100).toFixed(2)
                            return  ( < li
                                             className = "list-group-item text-capitalize" 
                                             key={label}
                                        >
                                        <p><b>{label}</b>: {confidence}%</p></li
                                    >)
                        })
                }

            </ul>

        </>
    );
}

export default TableResults;

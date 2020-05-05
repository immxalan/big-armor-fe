import React from 'react'
import { DataSetCreater } from '../../helpers/CreateRadarData';

function Legend(props: { legend: { datasets: { backgroundColor: string, label: string }[] } }) {
    console.log("this is props.legend", props)
    return (
        <div>
            {props.legend.datasets.map((dataset: { backgroundColor: string, label: string }) => {
                return (
                    <div key={dataset.label}>
                        <p>this will be our legend component</p>
                        <p style={{ backgroundColor: `${dataset.backgroundColor}` }}>
                            {dataset.label}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Legend;

import React from 'react';
import style from './loader.module.scss';
import { ThreeCircles } from 'react-loader-spinner';

function Loader({ size }) {
    return (
        <div className={style.loader}>
            <ThreeCircles
                height={size ? size : "45"}
                width={size ? size : "45"}
                color="#306cce"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    )
}

export default Loader;
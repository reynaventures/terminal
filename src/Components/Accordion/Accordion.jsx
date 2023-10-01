import React, { useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { useSpring, animated } from "react-spring";
import style from './Accordion.module.scss';

function Accordion(props) {
    const [open, setOpen] = useState(false);
    //toggle accordion function
    let toggleHandler = (e) => {
        //switch state
        setOpen(!open);
    };
    //open animation with react spring

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "90px" },
        to: { opacity: "1", maxHeight: open ? "650px" : window.innerWidth < 767 ? "50px" : "90px" },
        config: { duration: "400" }
    });

  //rotate animation
    const iconAnimation = useSpring({
        from: {
        transform: "rotate(0deg)",
        color: "#2962ef"
        },
        to: {
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        color: "#2962ef"
        },
        config: { duration: "10" }
    });

    return (
        <animated.div className={style.accordion__item} style={openAnimation} onClick={toggleHandler}>
            <div className={style.accordion__header}>
                <h4>{props.title}</h4>
                <animated.i style={iconAnimation}>
                    <IoIosArrowDown />
                </animated.i>
            </div>
            <p className={style.accordion__content}>{props.text}</p>
        </animated.div>
    );
}

export default Accordion;
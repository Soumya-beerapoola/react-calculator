import React, { useState } from "react";


function Calculator() {

    const numArray2 = [
        {
            display: "7",
            value: "7"
        },
        {
            display: "8",
            value: "8"
        },
        {
            display: "9",
            value: "9"
        },
        {
            display: "%",
            value: "/"
        },
        {
            display: "4",
            value: "4"
        },
        {
            display: "5",
            value: "5"
        },
        {
            display: "6",
            value: "6"
        },
        {
            display: "x",
            value: "*"
        },
        {
            display: "1",
            value: "1"
        },
        {
            display: "2",
            value: "2"
        },
        {
            display: "3",
            value: "3"
        },
        {
            display: "-",
            value: "-"
        },
        {
            display: "0",
            value: "0"
        },
        {
            display: ".",
            value: "."
        },
        {
            display: "+",
            value: "+"
        },
        {
            display: "=",
            value: "="
        },
    ]

    const [displayNum, setdisplayNum] = useState({display: "0",value: "0"});

    const getValue = (boxValue) => {
       const {display,value} = displayNum;
       const {display:displayBox,value:valueBox} = boxValue;
        if (value === "0") {
            setdisplayNum({ display: displayBox, value: valueBox });
        }
        else {
            setdisplayNum({
                display: display + displayBox,
                value: value + valueBox
            });
        }
        if (valueBox === "=") {
            finalResult(value)
        }
    }

    const finalResult = (num) => {
        const result = eval(num);
        setdisplayNum({ display: result, value: result });
    }

    return (
        <div className="main">
            <div className="upperBox">{displayNum.display}</div>
            {numArray2.map((e) => <div className="numbers" key={e.display} onClick={() => getValue(e)} >{e.display}</div>)}
        </div>
    )

}

export default Calculator;
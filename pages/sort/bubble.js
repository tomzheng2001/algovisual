import { useEffect, useState } from "react";
import reactDom from "react-dom";

const Bubble = () => {

    const [array, setArray] = useState("");
    const [vals, setVals] = useState([]);

    const handleChange = e => {
        setArray(e.target.value)
    }

    const onClick = () => {
        const arr = array.split(" ");
        for (let x in arr) {
            arr[x] = parseInt(arr[x])
        }
        setVals(arr)
    }

    const bubbleSort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j+1] = temp
                    setVals(arr)
                  }
            }
        }
    }

    return <div>
        <input onChange={handleChange} value={array} type="text" />
        <button onClick={onClick}>Submit</button>
        <button onClick={() => bubbleSort(vals)}>Sort</button>
        <div className="bars">
            {vals.map((elem, i) => 
                <span>
                    <svg className="bar" width="30" height={elem*3}>
                        <rect />
                    </svg>
                    <h2>{elem}</h2>
                </span>
            )}
        </div>
    </div>;
}

export default Bubble;
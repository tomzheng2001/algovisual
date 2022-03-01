import { useEffect, useState } from "react";
import reactDom from "react-dom";

const Bubble = () => {
  const [array, setArray] = useState("");
  const [vals, setVals] = useState([]);

  const CUTOFF = 30;

  const handleChange = (e) => {
    setArray(e.target.value);
  };

  const onClick = () => {
    setVals([]);
    const arr = array.split(" ");
    for (let x in arr) {
      arr[x] = parseInt(arr[x]);
    }
    setVals(arr);
    console.log(arr);
  };

  const swapBars = (e1, e2) => {
    var tempH = e1.style.height;
    var tempT = e1.childNodes[0].textContent;
    e1.style.height = e2.style.height;
    e1.childNodes[0].textContent = e2.childNodes[0].textContent;
    e2.style.height = tempH;
    e2.childNodes[0].textContent = tempT;
  };

  const generateRandomArray = (l) => {
    var arr = [];
    for (var i = 0; i < l; i++) {
      arr.push(Math.floor(Math.random() * 50) + 1);
    }
    arr = arr.join(" ");
    setArray(arr);
    const arr2 = arr.split(" ");
    for (let x in arr2) {
      arr2[x] = parseInt(arr2[x]);
    }
    setVals(arr2);
  };

  const waitAnimation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 1000 - document.getElementById("myRange").value);
    });
  };

  const bubbleSort = async (arr) => {
    const b = document.querySelectorAll(".bars__bar");
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        b[j].style.background = "cyan";
        b[j + 1].style.background = "cyan";
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          await waitAnimation();
          setVals(arr);
          swapBars(b[j], b[j + 1]);
        }
        b[j].style.background = "red";
        b[j + 1].style.background = "red";
      }
    }
    setArray("");
  };

  return (
    <div className="sort">
      <div className="sort__bars">
        <h1>Bubble Sort</h1>
        <div className="bars">
          {vals.map((elem, i) => (
            <div
              className="bars__bar"
              key={i}
              style={{ height: `${10 + elem}rem` }}
            >
              {vals.length <= CUTOFF ? (
                <p className="bars__bar-num">{elem}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="sort__menu">
        <input
          type="range"
          min="1"
          max="1000"
          className="slider"
          id="myRange"
        />
        <input onChange={handleChange} value={array} type="text" />
        <button onClick={() => generateRandomArray(30)}>Generate Random</button>
        <button onClick={onClick}>Submit</button>
        <button onClick={() => bubbleSort(vals)}>Sort</button>
      </div>
    </div>
  );
};

export default Bubble;

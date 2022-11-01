// const nowTime =
//     document.getElementById("nowTime");
// const nowTime2 =
//     document.getElementById("nowTime2");
// const nowTime3 =
//     document.getElementById("nowTime3");
// // nowTime.setAttribute("disable", "disable");
// // nowTime2.setAttribute("disable", "disable");
// // nowTime3.setAttribute("disable", "disable");

// const setTime1 =
//     document.getElementById("setTime1");
// const setTime2 =
//     document.getElementById("setTime2");
// const setTime3 =
//     document.getElementById("setTime3");
// const startTimer =
//     document.getElementById("startTimer");

// let timer1;
// let timer2;
// let timer3;
// let i = 0;
// let i2 = 0;
// let i3 = 0;

// const init = () => {
//     startTimer.disabled = false;
//     setTime1.disabled = true;
//     setTime2.disabled = true;
//     setTime3.disabled = true;
// };
// init();

// startTimer.addEventListener("click", () => {
//     startTimer.disabled = true;
//     setTime1.disabled = false;
//     setTime2.disabled = false;
//     setTime3.disabled = false;
//     clearInterval(timer1);
//     timer1 = setInterval(() => {
//         countUp1();
//     }, 100);
//     clearInterval(timer2);
//     timer2 = setInterval(() => {
//         countUp2();
//     }, 100);
//     clearInterval(timer3);
//     timer3 = setInterval(() => {
//         countUp3();
//     }, 100);
// });

// const countUp1 = () => {
//     if (i === 9) {
//         i = 0;
//     } else {
//         i += 1;
//     }
//     nowTime.textContent = `${i}`;
// };
// const countUp2 = () => {
//     if (i2 === 9) {
//         i2 = 0;
//     } else {
//         i2 += 1;
//     }
//     nowTime2.textContent = `${i2}`;
// };
// const countUp3 = () => {
//     if (i3 === 9) {
//         i3 = 0;
//     } else {
//         i3 += 1;
//     }
//     nowTime3.textContent = `${i3}`;
// };

// setTime1.addEventListener("click", () => {
//     clearInterval(timer1);
//     setTime1.disabled = true;
//     judge();
// });
// setTime2.addEventListener("click", () => {
//     clearInterval(timer2);
//     setTime2.disabled = true;
//     judge();
// });
// setTime3.addEventListener("click", () => {
//     clearInterval(timer3);
//     setTime3.disabled = true;
//     judge();
// });

// const judge = () => {
//     if (
//         setTime1.disabled === true &&
//         setTime2.disabled === true &&
//         setTime3.disabled === true
//     ) {
//         if (
//             nowTime.textContent ===
//                 nowTime2.textContent &&
//             nowTime.textContent ===
//                 nowTime3.textContent
//         ) {
//             alert("成功です！");
//         } else {
//             alert("再挑戦してね！");
//         }
//         init();
//     }
// };

// challenge
const nowTime =
    document.getElementById("nowTime");
const nowTime2 =
    document.getElementById("nowTime2");
const nowTime3 =
    document.getElementById("nowTime3");
const nowTime4 =
    document.getElementById("nowTime4");
const nowTime5 =
    document.getElementById("nowTime5");
const nowTime6 =
    document.getElementById("nowTime6");
const nowTime7 =
    document.getElementById("nowTime7");
const nowTime8 =
    document.getElementById("nowTime8");
const nowTime9 =
    document.getElementById("nowTime9");
const startTimer =
    document.getElementById("startTimer");
const setTime1 =
    document.getElementById("setTime1");
const setTime2 =
    document.getElementById("setTime2");
const setTime3 =
    document.getElementById("setTime3");

const init = () => {
    startTimer.disabled = false;
    setTime1.disabled = true;
    setTime2.disabled = true;
    setTime3.disabled = true;
};
init();

let i = 0;
const countUp1 = () => {
    if (i === 9) {
        i = 0;
    } else {
        i += 1;
    }
    if (i >= 2) {
        nowTime4.textContent = `${i - 2}`;
        nowTime.textContent = `${i - 1}`;
        nowTime7.textContent = `${i}`;
    } else if ((i = 1)) {
        nowTime4.textContent = `${9}`;
        nowTime.textContent = `${i - 1}`;
        nowTime7.textContent = `${i}`;
    } else if ((i = 0)) {
        nowTime4.textContent = `${8}`;
        nowTime.textContent = `${9}`;
        nowTime7.textContent = `${i}`;
    }
};
let i2 = 0;
const countUp2 = () => {
    if (i2 === 9) {
        i2 = 0;
    } else {
        i2 += 1;
    }
    if (i2 >= 2) {
        nowTime5.textContent = `${i2 - 2}`;
        nowTime2.textContent = `${i2 - 1}`;
        nowTime8.textContent = `${i2}`;
    } else if ((i2 = 1)) {
        nowTime5.textContent = `${9}`;
        nowTime2.textContent = `${i2 - 1}`;
        nowTime8.textContent = `${i2}`;
    } else if ((i2 = 0)) {
        nowTime5.textContent = `${8}`;
        nowTime2.textContent = `${9}`;
        nowTime8.textContent = `${i2}`;
    }
};
let i3 = 0;
const countUp3 = () => {
    if (i3 === 9) {
        i3 = 0;
    } else {
        i3 += 1;
    }
    if (i3 >= 2) {
        nowTime6.textContent = `${i3 - 2}`;
        nowTime3.textContent = `${i3 - 1}`;
        nowTime9.textContent = `${i3}`;
    } else if ((i3 = 1)) {
        nowTime6.textContent = `${9}`;
        nowTime3.textContent = `${i3 - 1}`;
        nowTime9.textContent = `${i3}`;
    } else if ((i3 = 0)) {
        nowTime6.textContent = `${8}`;
        nowTime3.textContent = `${9}`;
        nowTime9.textContent = `${i3}`;
    }
};

let timer1;
const leftNum = () => {
    setTime1.disabled = false;
    clearInterval(timer1);
    timer1 = setInterval(() => {
        countUp1();
    }, 100);
};

let timer2;
const centerNum = () => {
    setTime2.disabled = false;
    clearInterval(timer2);
    timer2 = setInterval(() => {
        countUp2();
    }, 100);
};

let timer3;
const rightNum = () => {
    setTime3.disabled = false;
    clearInterval(timer3);
    timer3 = setInterval(() => {
        countUp3();
    }, 100);
};

startTimer.addEventListener("click", () => {
    startTimer.disabled = true;
    leftNum();
    centerNum();
    rightNum();
});

const judge = () => {
    if (
        setTime1.disabled === true &&
        setTime2.disabled === true &&
        setTime3.disabled === true
    ) {
        if (
            (nowTime4.textContent ===
                nowTime5.textContent &&
                nowTime4.textContent ===
                    nowTime6.textContent) ||
            (nowTime4.textContent ===
                nowTime2.textContent &&
                nowTime4.textContent ===
                    nowTime9.textContent) ||
            (nowTime6.textContent ===
                nowTime2.textContent &&
                nowTime6.textContent ===
                    nowTime7.textContent)
        ) {
            alert("成功です！");
        } else {
            alert("再度挑戦してね！");
        }
        init();
    }
};

setTime1.addEventListener("click", () => {
    clearInterval(timer1);
    setTime1.disabled = true;
    judge();
});
setTime2.addEventListener("click", () => {
    clearInterval(timer2);
    setTime2.disabled = true;
    judge();
});
setTime3.addEventListener("click", () => {
    clearInterval(timer3);
    setTime3.disabled = true;
    judge();
});

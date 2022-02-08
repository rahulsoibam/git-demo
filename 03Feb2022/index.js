var a = 10;

while (true) {
    if (true) {
        if (true) {
            if (true) {
                if (true) {
                    if (true) {
                        if (true) {
                            let a = "hello";
                        }
                    }
                }
            }
        }
    }
    break;
    var b = 20;
    var a = "hello";
    console.log(a);
    break;
}

console.log(a);
console.log(b);

function add5(x, y) {}

const add6 = function (x) {};

const add7 = (x) => {};

function optArg(a, b) {
    if (b === undefined) {
        console.log(a);
    } else {
        console.log(a, b);
    }
}

optArg(10);

optArg(10, 20);

function defArg(a = 10, b = 10) {
    console.log(a, b);
}

defArg(100, 200);

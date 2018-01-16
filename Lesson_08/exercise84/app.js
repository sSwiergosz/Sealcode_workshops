function main() {
    let x = 5;
    x--;
    debugger;
    x = fun(x);
    let y = 0;
    for (let i = 0; i < x; i++) {
        console.log(i);
        y++;
        debugger;
    };
    debugger;
    console.log(y);
}

function fun(x) {
    return x--;
}

window.onload = main;

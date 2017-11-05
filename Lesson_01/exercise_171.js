function circle(angle, r, pi = 3.14) {
    return (angle * pi * Math.pow(r, 2)) / 360;
}

console.log(circle(45, 2));
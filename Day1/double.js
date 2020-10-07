function double (a) {
    let sum =[]
    for(let i =0; i<a.length;i++) {
        sum = a[i] * 2;
        a[i] =sum;
    }
    console.log(a);
}
let arr =[1, 2, 3]
double(arr);

function doubles(c) {
    return c.map((d) => d*2)
}
console.log(doubles(arr))

function add (num) {
    return num.reduce((acc, prev) => acc + prev);
}
let n = [1, 2, 3];
console.log(add(n));
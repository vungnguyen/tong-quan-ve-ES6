function geek() {
    for (let i = 0;i <= 10; i+=2) {
        console.log(i + '')
    }
    console.log( " For...of");
    for (let i of ['Hanoi', 5,2022]) {
        console.log(i + '')
    }
    console.log('For ... in');
    let obj = {
        name: 'vung',
        age: 28
    }
    for (let i in obj) {
        console.log(obj[i] + '');
    }
}
geek();


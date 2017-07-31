function wash(resolve){
    console.log('start 1');
    setTimeout(()=>{
        console.log('1 finished!');
        resolve('1 finished product.');
    }, 2000);
}

function hang(clothes){
    console.log('start 2');
    /*...晾衣服中...*/
    console.log('2 finished!');
    return '2 finished product.';
}

function dry(clothes){
    console.log('start 3');
    /*...晾干中...*/
    console.log('3 finished!');
    return '3 finished product';
}

function pickup(clothes){
    console.log('4 finished!');
    /*...收衣服中...*/
    console.log('4 finished product.');
}

var promise = new Promise(wash);
promise.then(hang).then(dry).then(pickup);
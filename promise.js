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
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log('2 finished!');
        resolve('2 finished product.');
    }, 3000);
    });
}

function dry(clothes){
    console.log('start 3');
    /*...晾干中...*/
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log('3 finished!');
        resolve('3 finished product');
    }, 3000)
    });
}

function pickup(clothes){
    console.log('4 finished!');
    /*...收衣服中...*/
    setTimeout(()=>{
        console.log('4 finished product.');
    }, 3000)
    
}

var promise = new Promise(wash);
promise.then(hang).then(dry).then(pickup);

function myPromise(fn){
    const missions = [];
    var value = null;

    



}


function myPromise(fn){
    const missions = [];//
    var value = null;

    fn(resolve);

    //当传入的方法中调用resolve(value)时，异步执行mission
    function resolve(_return_value){
        state = 'fulfilled';
        value = _return_value;
        setTimeout(()=>{
            missions.forEach(mission=>{
                mission(value);
            })
        }, 0);

    }

    this.then = function(mission){
        if(state === 'fulfilled'){
            mission(value);
        }else{
            missions.push(mission);
        }
    }
}

function wash(resolve){
    console.log('Start Washing...');
    console.log('Finished Washing!');
    resolve('A pile of cleaned clothes!');
}

function hang(clothes){
    console.log('start 2');
    /*...晾衣服中...*/
    return new Promise(resolve=>{
        setTimeout(()=>{
        console.log(clothes + '2 finished!');
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

var promise = new myPromise(wash);
setTimeout(()=>{
    promise.then(hang)//added but not run
}, 1000);
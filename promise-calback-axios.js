//callback Örn: setTimeOut
const callbackFunc=(num,callback)=>{
setTimeout(()=>{
    callback(num)
},5000);
}

const newVal=callbackFunc(2,(newVal)=>{
    console.log(newVal)
})

//promise kullanımı:
const promiseFunc1=()=>{
    return new Promise((resolve,reject)=>{
    let settings=true;
    setTimeout(()=>{
        if(settings) resolve(num)
        reject(new Error('Hatalı İşlem.....'))
    },3000);
    })
}
const promiseFunc2=()=>{
    return new Promise((resolve,reject)=>{
    let settings=true;
    setTimeout(()=>{
        if(settings) resolve(num)
        reject(new Error('Hatalı İşlem.....'))
    },3000);
    })
}
Promise.all([
    promiseFunc1(2),promiseFunc2(4)
]).then((pr)=>{
    console.log(pr[0])
    console.log(pr[1])
}).catch(err=>console.log(err))
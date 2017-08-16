/**
 * Created by cyz on 2017/8/16.
 */
"use strict";

let arr=['a','ab','ed','da','a','ed','b']
console.log('输入数组为：'+arr)
main(arr);

function find(collection,element){
    for(let item of collection){
        if(item ==element){
            return element
        }
    }
    return false;
}

function printResult(arr){
    let result=''
    arr.map(function(item){
        result +=' '+item
    })
    console.log(result);

}
function main(collection){
    let temp_result=[];
    let result =[];
    collection.map(function(item){
        let finded = find(temp_result,item)
        if (finded){
            result.push(item);
        }else{
            temp_result.push(item)
        }
    })
    console.log('重复出现的元素为：')
    printResult(result);

}
function ParseString(str){
    
    const parts = str.split('-')
    
    const a =parseInt(parts[0],10);
    const b = parseInt(parts[1],10);
    
    return [a+1,b+1]
}
function convertToId(a,b){

    let str = String(a-1) + '-' +String (b-1)
    return str;

}

export {ParseString,convertToId}
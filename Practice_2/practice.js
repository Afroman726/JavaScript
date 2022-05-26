//This function takes any word and capatalizes the first letter

function capatalize(text){
    let str = text;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(str2);
}

capatalize("yeet");
// Code your solution here

function findMatching(array, string){
    return array.filter(element => {

        if (element.toLowerCase() == string.toLowerCase()){
            return element;
        }
    });
};

function fuzzyMatch(array, string){
    return array.filter(element => {

        if (element.toLowerCase().charAt(0) == string.toLowerCase().charAt(0) && 
        element.toLowerCase().charAt(1) == string.toLowerCase().charAt(1) || 
        element.toLowerCase().charAt(0) == string.toLowerCase().charAt(0)){
            return element;
        }
    });
}

function matchName(array, string){
    return array.filter(element => {
        if (element.name === string){
            return element;
        }
    })
}
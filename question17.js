

function Result(score){ 
    return score =>80 ? 'excellent'
: score => 60 ? 'good' 
: score => 40 ? 'average' 
: 'average';

}
let grade=Result(48)
console.log(grade);

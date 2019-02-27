
function goodVsEvil(good, evil) {
    var worth = [ [1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10] ];
    var good = good.split(' ').reduce((s,v,i) => s + worth[0][i] * v, 0);
    var evil = evil.split(' ').reduce((s,v,i) => s + worth[1][i] * v, 0);
    console.log('good', good);
    console.log('evil', evil);
    if (good > evil) return "Battle Result: Good triumphs over Evil";
    else if (evil > good) return "Battle Result: Evil eradicates all trace of Good";
    else return "Battle Result: No victor on this battle field";
}
   
goodVsEvil('1 1 1 1 1 10', '1 0 0 1 1 3');
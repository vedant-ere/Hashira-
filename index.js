const fs = require('fs');

function solve(filename) {
    const data = JSON.parse(fs.readFileSync('testCase.json', 'utf8'));
    const { n, k } = data.keys;
    
    let points = [];
    for (let i = 1; i <= n; i++) {
        if (data[i]) {
            const x = i;
            const y = parseInt(data[i].value, parseInt(data[i].base));
            points.push([x, y]);
        }
    }
    
    points = points.slice(0, k);
    
    let c = 0;
    for (let i = 0; i < k; i++) {
        let li = 1;
        for (let j = 0; j < k; j++) {
            if (i !== j) {
                li *= (0 - points[j][0]) / (points[i][0] - points[j][0]);
            }
        }
        c += points[i][1] * li;
    }
    
    return Math.round(c);
}

console.log(solve('testcase1.json'));
console.log(solve('testcase2.json'));
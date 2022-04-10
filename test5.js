let initState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let isChange = true;

const check = (r, c, rCnt, cCnt, list) => {
    if (r == 0 || r == rCnt - 1 || c ==0 || c == cCnt - 1) {
        return;
    }
    const top = list[r - 1][c];
    const bottom = list[r + 1][c];
    const left = list[r][c - 1];
    const right = list[r][c + 1];
    const value = list[r][c];
    if (value > 0 && value <= top && value <= bottom && value <= left && value <= right) {
        list[r][c] += 1;
        isChange = true;
    }
};

const solution = (initState) => {
    let list = initState;
    const rCnt = list.length;
    while(isChange) {
        isChange = false;
        for (let r = 0; r < rCnt; r++) {
            const row = list[r];
            const cCnt = row.length;
            for (let c = 0; c < cCnt; c++) {
                check(r, c, rCnt, cCnt, list);
            }
        }
    }
    return list;
};

const result = solution(initState);

result.forEach(row => {
    const rowString = row.join(" ");
    console.log(rowString);
});
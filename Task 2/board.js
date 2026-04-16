"use strict";
let whiteCell = '⬜';
let blackCell = '⬛';
const x = 8;
const y = 8;
const drawTheChess = () => {
    for (let i = 0; i < x; i++) {
        let row = '';
        for (let j = 0; j < y; j++) {
            if ((i + j) % 2 === 0) {
                row += whiteCell;
            }
            else if ((i + j) % 2 !== 0) {
                row += blackCell;
            }
            ;
        }
        ;
        console.log(row);
    }
    ;
};
drawTheChess();

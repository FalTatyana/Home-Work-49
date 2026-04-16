let whiteCell: string = '⬜';
let blackCell: string = '⬛';

const x: number = 8;
const y: number = 8;

const drawTheChess = () => {
    for (let i: number = 0; i < x; i++) {
        let row: string = '';
        for (let j: number = 0; j < y; j++){
            if ((i + j) % 2 === 0) {
                row += whiteCell;
            } else if ((i + j) % 2 !== 0)  {
                row += blackCell;
            };   
        };
        console.log(row);
    };
};

drawTheChess();
let stringsInput = document.querySelector('.strings');
let columnsInput = document.querySelector('.columns');
let calculator = document.querySelector('.calculator');
let buildBtn = document.querySelector('.build');
let transposeBtn = document.querySelector('.transpose');

buildBtn.addEventListener('click', function () {
    if (document.querySelector('.matrix')) {
        document.querySelector('.matrix').remove();
    }

    if (document.querySelector('.transpose_matrix')) {
        document.querySelector('.transpose_matrix').remove();
    }

    transposeBtn.style = 'display: block';

    let strings = stringsInput.value;
    let columns = columnsInput.value;
    let matrix = document.createElement('div');
    let matrixArr = [];
    let transposeMatrixArr = [];

    matrix.className = 'matrix';
    calculator.prepend(matrix);
    matrix.style.width = `calc(${columns} * 50px)`;

    for (let i = 0; i < strings; i++) {
        matrixArr[i] = [];
        for (let j = 0; j < columns; j++) {
            matrixArr[i][j] = document.createElement('input');
            matrixArr[i][j].className = 'matrix_item';
            matrixArr[i][j].value = "0";
            matrix.append(matrixArr[i][j]);
        }
    }

    let matrixInputs = document.querySelectorAll('.matrix_item');

    transposeBtn.addEventListener('click', function () {
        let k = 0;

        if (document.querySelector('.transpose_matrix')) {
            document.querySelector('.transpose_matrix').remove();
        }

        for (let i = 0; i < strings; i++) {
            for (let j = 0; j < columns; j++) {
                matrixArr[i][j] = +matrixInputs[k].value;
                k++;
            }
        }
        k = 0;

        for (let j = 0; j < columns; j++) {
            transposeMatrixArr[j] = [];
            for (let i = 0; i < strings; i++) {
                transposeMatrixArr[j][i] = matrixArr[i][j];
            }
        }

        let transposeMatrix = document.createElement('div');
        transposeMatrix.className = 'matrix transpose_matrix';
        calculator.append(transposeMatrix);
        transposeMatrix.style.width = `calc(${strings} * 50px)`;

        for (let i = 0; i < columns * strings; i++) {
            let transposeMatrixItem = document.createElement('div');
            transposeMatrix.append(transposeMatrixItem);
            transposeMatrixItem.className = 'matrix_item transpose_matrix_item';
        }

        let transposeMatrixValues = document.querySelectorAll('.transpose_matrix_item');

        for (let j = 0; j < columns; j++) {
            for (let i = 0; i < strings; i++) {
                transposeMatrixValues[k].innerHTML = transposeMatrixArr[j][i];
                k++;
            }
        }
    });
});

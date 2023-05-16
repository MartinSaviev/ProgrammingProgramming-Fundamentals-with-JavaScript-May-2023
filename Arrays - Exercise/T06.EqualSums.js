function rightSumLeftSum(array) {

    let index = 'no';

    for (let i = 0; i < array.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }
        for (let r = i + 1; r < array.length; r++) {
            rightSum += array[r];
        }
        if (leftSum === rightSum) {
            index = i;
        }
    }
    console.log(index);

}
function nonDecreasingSubset(input) {
    let result = [input[0]];

    for (let i = 1; i < input.length; i++) {
        if (input[i] >= result[result.length - 1]) {
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
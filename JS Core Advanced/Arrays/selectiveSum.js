function selectiveSum(array) {
    return array
        .filter((value) => value > 0 && value < 10)
        .reduce((sum, a) => sum + a);
}
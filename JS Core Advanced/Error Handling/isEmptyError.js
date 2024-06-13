function isEmptyError(array)
{
    if (!array.length) {
        throw new Error("Массив пуст.")
    }
}
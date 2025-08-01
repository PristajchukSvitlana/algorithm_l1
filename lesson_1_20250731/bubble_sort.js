function sortBubble(array) {
    let isSorted; // остлеживаем факт обмена
    do {
        isSorted = false;
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                isSorted = true;
            }
        }
        console.log(array);
    } while(isSorted);
    return array;
}

let arr = [22, 5, 1, 3, 2, 50];
console.log(arr);
console.log("Сортировка");
arr = sortBubble(arr);
console.log("После сортировки");
console.log(arr);

//Написать псевдокод и по возможности блок схему для алгоритма:
//сложить три числа и вывести сумму.

// Псевдокод:
// 1. Ввести три числа a, b, c
// 2. Сложить числа: sum = a + b + c
// 3. Вывести сумму: вывести sum        
// Блок-схема:
// ┌─────────────┐
// │ Ввести a, b, c │
// └──────┬──────┘
//        ↓
// ┌─────────────┐
// │  sum = a + b + c │
// └──────┬──────┘
//        ↓
// ┌─────────────┐
// │ Вывести sum │
// └─────────────┘      

// Пример использования:
// Ввод: a = 5, b = 10, c = 15
// Вывод: Сумма = 30
// Пример кода на JavaScript:
function sumThreeNumbers(a, b, c) {
    return a + b + c;
}           
// Пример вызова функции:
console.log(sumThreeNumbers(5, 10, 15)); // Вывод: 30       
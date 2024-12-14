// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

const first = (arr, n = 1) => {
  // Проверка входных данных
  if (!Array.isArray(arr)) {
    throw new TypeError('Первый аргумент должен быть массивом');
  }

  // Нормализация количества элементов
  const count = Math.max(0, Math.min(n, arr.length));
  
  return arr.slice(0, count);
};

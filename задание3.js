// задание 3

// 1. Custom Array.prototype.filter
function filter(array, filterFn, inplace = false) {
    if(inplace) {
        let i = 0;
        while (i < array.length) {
            if (!filterFn(array[i])) {
                array.splice(i, 1);
            } else {
                i++;
            }
        }
        return array;
    } else {
        let filteredArray = [];
        for (let i = 0; i < array.length; i++) {
            if (filterFn(array[i])) {
                filteredArray.push(array[i]);
            }
        }
        return filteredArray;
    }
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words, (word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]


// 2. Ключи и свойства
function solutionFn(obj) {
    const resultObj = {};
    for (let key in obj) {
        const type = typeof obj[key];
        if (resultObj[type]) {
            resultObj[type] += 1;
        } else {
            resultObj[type] = 1;
        }
    }
    return resultObj;
}

const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

const resultObj = solutionFn(initialObj);

console.log(resultObj); // { string: 1, number: 2, object: 2 }


// 3. 1 + '1' === '11'
function sum(a, b) {
    if (typeof a !== 'number') {
        throw new Error('The left operand is not number');
    }
    if (typeof b !== 'number') {
        throw new Error('The right operand is not number');
    }
    return a + b;
}

// Примеры использования
try {
    console.log(sum(2, 3)); // 5
    console.log(sum('2', 3)); // The left operand is not number
    console.log(sum(2, '3')); // The right operand is not number
    console.log(sum('2', '3')); // Operands are not numbers
} catch (error) {
    console.error(error.message);
}


// 4. CVS

function getMinimalCVS(array) {
    const history = [array.slice()];

    function head() {
        return history[history.length - 1];
    }

    function push(item) {
        const newArray = history[history.length - 1].concat(item);
        history.push(newArray);
    }

    function pop() {
        const poppedItem = history[history.length - 1].pop();
        history.push(history[history.length - 1].slice());
        return poppedItem;
    }

    function getHistory() {
        return history.slice();
    }

    return {
        head,
        push,
        pop,
        history: getHistory
    };
}

const cvs = getMinimalCVS(['a', 'b', 'c']);

console.log(cvs.head());    // ['a', 'b', 'c']
console.log(cvs.pop());     // 'c'

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    // ['a', 'b', 'd', 'e']
console.log(cvs.history());    // [ ['a', 'b', 'c'], ['a', 'b'], ['a', 'b', 'd'], ['a', 'b', 'd', 'e'] ]


// 5. Глобальный переключатель

function globalToggle(className) {
    const elements = document.querySelectorAll('.' + className);

    if (elements.length === 0) {
        return;
    }

    const isDefaultClass = !className.endsWith('_active');

    elements.forEach(element => {
        if (isDefaultClass) {
            element.classList.remove(className);
            element.classList.add(className + '_active');
        } else {
            element.classList.remove(className + '_active');
            element.classList.add(className);
        }
    });
}


// 6. Hit or Run

function hitOrRun(a, b) {
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
  
    let isPrime = true;
    for (let i = 2; i < randomNum; i++) {
      if (randomNum % i === 0) {
        isPrime = false;
        break;
      }
    }
    
    return isPrime ? 'run' : 'hit';
}

const result2 = hitOrRun(10, 20);
console.log(result2);


// 7. Case Converter

function solutionFn(snakeCaseString) {
    return snakeCaseString.replace(/_([a-z])/g, function (match, group1) {
      return group1.toUpperCase();
    });
}
  
// Пример использования
const snakeData = 'data_in_snake_case';
const result3 = solutionFn(snakeData);
console.log(result3);    // dataInSnakeCase


// 8. Антиспам
function isSpam(text, keywords) {
    for (let i = 0; i < keywords.length; i++) {
      if (text.toLowerCase().includes(keywords[i].toLowerCase())) {
        return true;
      }
    }
    return false;
}
  
// Пример использования
const emailText = 'В этом сообщении спам!';
const spamKeywords = ['спам', 'spam'];
const result4 = isSpam(emailText, spamKeywords);
console.log(result4);    // true


// 9. The World!
function theWorld(ms) {
    const start = new Date().getTime();
    const end = start + ms;
    while (new Date().getTime() < end) {
      const remainingSeconds = Math.ceil((end - new Date().getTime()) / 1000);
      console.log(remainingSeconds);
    }
}

// Пример использования
console.log('111');
theWorld(3000);
console.log('222');


// 10. Одноразрядное число
function solutionFn2(nums) {
    while (nums.toString().length > 1) {
      let digits = nums.toString().split('').map(Number);
      nums = digits.reduce((num1, num2) => num1 * num2);
    }
    return nums;
}

// Пример использования
console.log(solutionFn2(4));     // возвращает 4, так как уже одноразрядное
console.log(solutionFn2(42));    // возвращает 8, так как 4 * 2 = 8
console.log(solutionFn2(999));   // возвращает 2, так как 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, и наконец 1 * 2 = 2 
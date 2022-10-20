var a = 122567782;
function findMissingNumbers(arg) {
    var arrayOfNumbers = [];
    var result = [];
    while (Math.floor(arg) != 0) {
        var lastNumber = arg % 10;
        arg = Math.floor(arg / 10);
        arrayOfNumbers.push(lastNumber);
    }
    for (var i = 0; i <= 9; i++) {
        var x = false;
        for (var j = 0; j < arrayOfNumbers.length; j++) {
            if (i == arrayOfNumbers[j]) {
                x = true;
            }
        }
        if (x == false) {
            result.push(i);
        }
    }
    return result;
}
console.log(findMissingNumbers(a));
function some(arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return true;
        }
    }
    return false;
}
console.log(some([2, 4, 5, 'helo'], 4));
// // find()
var find = function (arr, fun) {
    var i = findIndex(arr, fun);
    if (i !== -1) {
        return arr[i];
    }
    return undefined;
};
console.log(find([3, 6, undefined, 7, null], function (val) {
    return val === null;
}));
//findIndex()
function findIndex(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(['ab', 5, 6, 7], function (val) {
    return val === 6;
}));
// forEach()
function forEach(arr, fun) {
    for (var i = 0; i < arr.length; i++) {
        fun(arr[i]);
    }
}
console.log(forEach([5, 1], function (val) {
    console.log(val);
}));
// reverce()
function reverce(arr) {
    var arr1 = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}
console.log(reverce(['hello', 2, '', '265', 'world', [5, 7]]));
function indexOf(str, sub) {
    if ((typeof (sub) !== 'string')) {
        sub = String(sub);
    }
    if (sub.length > str.length) {
        return -1;
    }
    for (var i = 0; i < str.length - sub.length + 1; i++) {
        if (str[i] !== sub[0]) {
            continue;
        }
        var exists = true;
        for (var j = 1; j < sub.length && exists; j++) {
            if (str[i + j] === sub[j]) {
                continue;
            }
            exists = false;
        }
        if (exists === true) {
            return i;
        }
    }
    return -1;
}
console.log(indexOf("hello world undefined", undefined));
//substring()
function substring(str, num1, num2) {
    var substring = "";
    var len = str.length;
    if (num1 < 0 && num2 > len) {
        num1 = 0;
        num2 = len;
    }
    if (num1 < 0) {
        num1 = 0;
    }
    if (num2 > len) {
        num2 = len;
    }
    for (var i = num1; i < num2; i++) {
        substring = substring + str[i];
    }
    return substring;
}
console.log(substring("hello world", 1, 4));
//replace()
function replace(example, pattern, replacement) {
    var b = indexOf(example, pattern);
    var result = substring(example, 0, b) + replacement + substring(example, b + pattern.length, example.length);
    return result;
}
console.log(replace("The quick brown fox jumps over the lazy fox", "fox", 'dog'));
var arr1 = [];
function split(string, separator, arr) {
    if ((typeof (separator) !== 'string') && !(indexOf(string, separator))) {
        arr.push(string);
        return arr;
    }
    if ((typeof (separator) !== 'string')) {
        separator = String(separator);
    }
    if ((string === '' && separator === '')) {
        return arr;
    }
    else if (string === '' && typeof (separator) === 'string') {
        arr.push("");
        return arr;
    }
    var separatorIndex = indexOf(string, separator);
    if (separatorIndex === -1) {
        arr.push(string);
        return arr;
        ;
    }
    else if (separatorIndex || separatorIndex === 0) {
        arr.push(substring(string, 0, separatorIndex));
        arr.push(substring(string, separatorIndex + separator.length, string.length));
        string = substring(string, separatorIndex + separator.length, string.length);
        if (indexOf(string, separator) > 0) {
            arr.pop();
            split(string, separator, arr);
        }
    }
    return arr;
}
console.log(split('hello world 1', 1, arr1));
//trim
function trim(str) {
    var begin = 0;
    var end = str.length - 1;
    while (begin <= end && str.charCodeAt(begin) < 33) {
        ++begin;
    }
    while (end > begin && str.charCodeAt(end) < 33) {
        --end;
    }
    return substring(str, begin, end + 1);
}
console.log(trim("   Angry Bird  "));

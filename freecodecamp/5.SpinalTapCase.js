function spinalCase(str) {
    var reg = /\s+|_+/g;
    // переменная для пробела и подчеркивания.
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    //
    return str.replace(reg, '-').toLowerCase();
    //Заменить пробел и подчеркнуть с помощью -
}

spinalCase('This Is Spinal Tap');
console.log(spinalCase('This Is Spinal Tap'))



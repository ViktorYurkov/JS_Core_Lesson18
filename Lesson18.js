var month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

$(document).ready(function () {
    var i = 0;
    setTimeout(function list() {
        $('li')[i].prepend(month[i]);
        i++;
        if (i>11) return;
        setTimeout(list, 1000);
    }, 1000);
});

setTimeout(function () {
    $('li:odd').css('color','red');
    
}, 12100);


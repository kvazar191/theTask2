let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

console.log('Ваш бюджет на месяц =', money, 'Дата', time);

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

function sumExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
        console.log('Статья расходов', 1 + i, a, '=', b);
    }
}
sumExpenses();
console.log(appData.expenses);

appData.moneyPerDey = (appData.budget / 30).toFixed(); // бюджет на 1 день с округлением

alert('Ежедневный бюджет: ' + appData.moneyPerDey);

if (appData.moneyPerDey < 100 ) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDey > 100 && appData.moneyPerDey < 2000 ) {
        console.log('Средний уровень достатка');
} else if (appData.moneyPerDey > 2000 ) {
            console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}       
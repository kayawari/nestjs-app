// #########################
// カリー化の例
// 複数の引数を受け取る関数を、一つの引数を受け取る一連の関数に分ける
// #########################
function add(x) {
    return function (y) {
        return x + y;
    };
}
var addFive = add(5);
console.log(addFive);
console.log(addFive(3));
console.log(add(5)(3));
var cartItem = [
    { name: 'Tシャツ', price: 2000, category: 'clothes' },
    { name: 'スマホケース', price: 1500, category: 'accessory' },
    { name: 'チョコレート', price: 300, category: 'food' },
    { name: '帽子', price: 2500, category: 'clothes' },
];
// カート内商品の合計金額を計算する関数
function calcCartTotal(items) {
    return items.reduce(function (sum, item) { return sum + item.price; }, 0);
}
// カリー化&部分適用に使う関数等
// 割引を適用する関数
var applyDiscount = function (discoutntRate) { return function (price) {
    return price * (1 - discoutntRate);
}; };
// 税金を追加する関数
var addTax = function (taxRate) { return function (price) { return price * (1 + taxRate); }; };
// 送料を固定額で足す関数
var addShipping = function (shippingCost) { return function (price) {
    return price + shippingCost;
}; };
// 高階関数:pipe
// つまり、関数を引数にして、関数を返す関数
// 複数の関数を順番に実行して最終値を返すパイプライン関数
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (initialValue) {
        return fns.reduce(function (value, fn) { return fn(value); }, initialValue);
    };
}
// 実際に使う例
function checkout(items) {
    var subtotal = calcCartTotal(items);
    // 部分適用で、一部の引数を固定化
    var discount10Percent = applyDiscount(0.1);
    var tax10Percent = addTax(0.1);
    var shipping500Yen = addShipping(500);
    var finalPriceCalculator = pipe(discount10Percent, tax10Percent, shipping500Yen);
    // subtotaに、上記パイプラインを適用した最終価格を求める
    var finalPrice = finalPriceCalculator(subtotal);
    return finalPrice;
}
console.log(checkout(cartItem));

// #########################
// カリー化の例
// 複数の引数を受け取る関数を、一つの引数を受け取る一連の関数に分ける
// #########################
function add(x: number) {
  return function (y: number) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive);
console.log(addFive(3));
console.log(add(5)(3));

// #########################
// 高階関数・カリー化・部分適用のノウハウを利用した例
// #########################

type CartItem = {
  name: string;
  price: number;
  category: string;
};

const cartItem: CartItem[] = [
  { name: 'Tシャツ', price: 2000, category: 'clothes' },
  { name: 'スマホケース', price: 1500, category: 'accessory' },
  { name: 'チョコレート', price: 300, category: 'food' },
  { name: '帽子', price: 2500, category: 'clothes' },
];

// カート内商品の合計金額を計算する関数
function calcCartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// カリー化&部分適用に使う関数等
// 割引を適用する関数
const applyDiscount = (discoutntRate: number) => (price: number) =>
  price * (1 - discoutntRate);

// 税金を追加する関数
const addTax = (taxRate: number) => (price: number) => price * (1 + taxRate);

// 送料を固定額で足す関数
const addShipping = (shippingCost: number) => (price: number) =>
  price + shippingCost;

// 高階関数:pipe
// つまり、関数を引数にして、関数を返す関数
// 複数の関数を順番に実行して最終値を返すパイプライン関数
function pipe<T>(...fns: Array<(arg: T) => T>) {
  return (initialValue: T): T =>
    fns.reduce((value, fn) => fn(value), initialValue);
}

// 実際に使う例
function checkout(items: CartItem[]) {
  const subtotal = calcCartTotal(items);

  // 部分適用で、一部の引数を固定化
  const discount10Percent = applyDiscount(0.1);
  const tax10Percent = addTax(0.1);
  const shipping500Yen = addShipping(500);

  const finalPriceCalculator = pipe(
    discount10Percent,
    tax10Percent,
    shipping500Yen,
  );

  // subtotaに、上記パイプラインを適用した最終価格を求める
  const finalPrice = finalPriceCalculator(subtotal);
  return Math.floor(finalPrice);
}

console.log(checkout(cartItem));

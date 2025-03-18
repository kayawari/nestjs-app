// オーバーロード関数のサンプルコード

// 最初の二つのmakeDate関数は、overload signatureと呼ばれる
// 引数を一つ受け取る関数と、三つ受け取る関数を用意
// 実際の実装の中身が書かれているのが、implementation signatureと呼ばれる。三つ目に書かれてる関数のこと

// implementation signatureは、書いた全てのoverload signatureの互換性をがあるように実装しないといけない。
// 例えば、一部のoverloadの引数の型をサポートしてないとか、返り値を全て網羅できてないとか。

// 公式でも言ってるけど、ユニオンで同じ事が大体できるはずなので、よっぽどでないかぎり利用しなくていいかも。

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1);
// const d4 = makeDate(1, 2); // エラー

console.log(`d1: ${d1}`);
console.log(`d2: ${d2}`);
console.log(`d3: ${d3}`);

// できることならユニオンで書いた方がいいって公式にも書いてある。
// overload signatureが多くなってしまう場合は他の方法を検討する
// ユニオンが書いたケース
function makeDateV2(m: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, m, d);
  } else {
    return new Date(m);
  }
}

const d4 = makeDateV2(12345678);
const d5 = makeDateV2(5, 5, 5);
const d6 = makeDateV2(1);

console.log(`d4: ${d4}`);
console.log(`d5: ${d5}`);
console.log(`d6: ${d6}`);

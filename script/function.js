//!================ REGULAR FUNCTION ==================
function cetakAngka() {
    console.log(90 + 10)
}

cetakAngka() ;

//!================ ARROW FUNCTION ==================
const cetaknama = () => console.log("Ajik Gungde");

cetaknama();

//!================ FUNCTION DENGAN PRAMETER ==================
function penjumlahan(a, b) {
    return a + b;
}
const hasilPenjumlahan = penjumlahan(5, 10);
console.log(hasilPenjumlahan);

// Arrow Function
const perkalian = (a, b) => a * b;
console.log(perkalian(5,10));

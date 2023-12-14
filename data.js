const nama = "gofur";
let usia = 30;

function generateBiodata() {
    if(usia > 10) {
        // INI ADALAH KONDISI PERTAMA
        console.log('anda dewasa')
    } else {
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        console.log(' anda anak anak')
    }
}

console.log(nama)
console.log(usia)

generateBiodata();
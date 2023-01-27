const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require ("cors") //memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini tugas praktikum node 1",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(4000, () => {
    console.log("Server run on port 4000");
})

// Nomor 1
// Bangun Ruang Kubus
app.post("/kubus", (req,res) => {
    let sisi     =  Number(req.body.sisi)

    let luas_permukaan  = 6 * sisi * sisi
    let volume          = sisi * sisi * sisi

    let response = {
        sisi            : sisi,
        luas_permukaan  : luas_permukaan,
        volume          : volume
    }

    res.json(response)
})

// Bangun Ruang Balok
app.post("/balok", (req,res) => {
    let panjang     =  Number(req.body.panjang)
    let lebar       =  Number(req.body.lebar)
    let tinggi      =  Number(req.body.tinggi)

    let luas_permukaan  = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)
    let volume          = panjang * lebar * tinggi

    let response = {
        panjang         : panjang,
        lebar           : lebar,
        tinggi          : tinggi,
        luas_permukaan  : luas_permukaan,
        volume          : volume
    }

    res.json(response)
})

// Bangun Ruang Tabung
app.post("/balok", (req,res) => {
    let tinggi          =  Number(req.body.tinggi)
    let jari_jari       =  Number(req.body.jari_jari)
    let phi             = 22/7

    let luas_permukaan  = 2 * phi * jari_jari * (jari_jari + tinggi)
    let volume          = phi * jari_jari * jari_jari * tinggi

    let response = {
        tinggi          : tinggi,
        jari_jari       : jari_jari,
        phi             : phi,
        luas_permukaan  : luas_permukaan,
        volume          : volume
    }

    res.json(response)
})

// Bangun Ruang Bola
app.post("/bola", (req,res) => {
    let jari_jari       =  Number(req.body.jari_jari)
    let phi             = 22/7

    let luas_permukaan  = 4 * phi * (jari_jari*jari_jari)
    let volume          = 4/3 * phi * (jari_jari*jari_jari*jari_jari)

    let response = {
        jari_jari       : jari_jari,
        luas_permukaan  : luas_permukaan,
        volume          : volume
    }

    res.json(response)
})

// Nomor 2
// Celcius
app.post("/konversi_celcius", (req,res) => {
    let celcius =  Number(req.body.celcius)

    let farenheit = (9/5 * celcius)+32
    let kelvin = celcius + 273.15
    let reamur = 4/5 * celcius

    let response = {
        message     : "konversi suhu celcius",
        celcius:celcius,
        message: "Result : ",
        farenheit: farenheit,
        kelvin: kelvin,
        reamur: reamur
    }

    res.json(response)
})

// Farenheit
app.post("/konversi_Farenheit", (req,res) => {
    let farenheit =  Number(req.body.farenheit)

    let celcius = (farenheit - 32)*5/9
    let kelvin = (farenheit + 459.67) * 5/9
    let reamur = 4/9 * (farenheit - 32)

    let response = {
        message     : "konversi suhu farenheit",
        farenheit: farenheit,
        message: "Result : ",
        celcius:celcius,
        kelvin: kelvin,
        reamur: reamur
    }

    res.json(response)
})

// Kelvin
app.post("/konversi_kelvin", (req,res) => {
    let kelvin =  Number(req.body.kelvin)

    let celcius = kelvin - 273.15
    let farenheit = (kelvin * 9/5) - 459.67
    let reamur = 4/5 * (kelvin - 273)

    let response = {
        message     : "konversi suhu kelvin",
        kelvin: kelvin,
        message: "Result : ",
        celcius:celcius,
        farenheit: farenheit,
        reamur: reamur
    }

    res.json(response)
})

// Reamur
app.post("/konversi_reamur", (req,res) => {
    let reamur =  Number(req.body.reamur)

    let celcius = reamur / 0.8
    let farenheit = (reamur * 2.25) + 32
    let kelvin = (reamur / 0.8) + 273.15

    let response = {
        message     : "konversi suhu reamur",
        reamur:reamur,
        message: "Result : ",
        celcius:celcius,
        farenheit: farenheit,
        kelvin: kelvin
    }

    res.json(response)
})

// Nomor 3
//Desimal
app.post("/decimal", (req,res) => {

    let angka = Number(req.body.angka)
    
    let biner = angka.toString(2)
    let oktal = angka.toString(8)
    let heksadesimal = angka.toString(16)
    
    let response = {
        bildesimal : angka,
        bilbiner : biner,
        biloktal: oktal,
        bilheksadesimal : heksadesimal
    }
    res.json(response)
})

//Biner
app.post("/biner", (req, res) => {

    let angka = Number(req.body.angka) 
    
    let desimal=parseInt(angka,2)
    let oktal=parseInt(angka,2).toString(8)
    let heksadesimal=parseInt(angka,2).toString(16)
    
    let response = {
        bilbiner : angka,
        bildesimal : desimal,
        biloktal: oktal,
        bilheksadesimal : heksadesimal
    }
    res.json(response)
})

//Oktal
app.post("/oktal", (req,res) => {
    
    let angka = Number(req.body.angka) 
        
    let desimal=parseInt(angka,8)
    let biner=parseInt(angka,8).toString(2)
    let heksadesimal=parseInt(angka,8).toString(16)
        
    let response = {
        biloktal : angka,
        bildesimal : desimal,
        bilbiner: biner,
        bilheksadesimal : heksadesimal
    }
    res.json(response)
})

//Heksadesmal
app.post("/heksadesimal", (req,res) => {
  
    let angka = Number(req.body.angka) 
        
    let desimal=parseInt(angka,16)
    let biner=parseInt(angka,16).toString(2)
    let oktal=parseInt(angka,16).toString(8)
        
    let response = {
        bilheksadesimal : angka,
        bildesimal : desimal,
        bilbiner: biner,
        biloktal : oktal
    } 
    res.json(response)
})

//SOAL 4
//kalkulator BMI
app.post("/bmi", (req,res) => {
    
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi) 

    let bmi = berat / (tinggi * tinggi)
    let status = ''

    if(bmi < 18.5) {
        status = "Kekurangan berat badan"
    }
    else if(bmi >= 18.5 && bmi < 25) {
        status = "Normal"
    }
    else if(bmi >= 25 && bmi < 30) {
        status = "Berat badan berlebih"
    }
    else if(bmi >= 30) {
        status = "Kegemukan (Obesitas)"
    }

    let response = {
        berat: berat,   
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }

    console.log(response.berat)
    
    res.json(response)
})

app.listen(4000, ()=>{
    console.log("Selesai");
})
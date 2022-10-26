var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res) {
    res.render('anasayfa', {
        'baslik': 'Ana Sayfa',
        "sayfaBaslik":
        {
            "siteAd": "Mekanbul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar": [
            {
                "ad": "Gloria jeans",
                "adres": "Iyaş AVM ",
                "puan": "4",
                "mesafe": "2km",
                "imkanlar": ["Kahve", "Tatlı"]
            },
            {
                "ad": "Adıyaman Çiğköfte",
                "adres": "Bahçelievler Mahallesi",
                "puan": "5",
                "mesafe": "1km",
                "imkanlar": ["Dürüm", "Doritoslu"]
            }
        ]

    }


    );
}

const mekanBilgisi = function (req, res) {
    res.render('mekanBilgisi',
        {
            'baslik': 'Mekan bilgisi',
            "mekanBaslik": "Gloria jeans",
            "mekanDetay": {
                "ad": "Gloria jeans",
                "adres": "Iyaş AVM",
                "puan": "4",
                "saatler": [
                    {
                        "gunler": "Pazartesi-Cuma",
                        "acilis": "10:00",
                        "kapanis": "02:00",
                        "kapali": "false"
                    },
                    {
                        "gunler": "Cumartesi-Pazar",
                        "acilis": "10:00",
                        "kapanis": "02:00",
                        "kapali": "false"
                    }
                ],
                "imkanlar": ["Kahve", "Tatlı"],
                "koordinatlar": {
                    "enlem": "37.78",
                    "boylam": "30.54"
                },
                "yorumlar":[
                    {
                        "yorumYapan":"Abdullah Mert Ulusoy",
                        "puan":"4",
                        "tarih":"13 Ekim 2022",
                        "yorumMetni":"Kahveler güzel."
                    },
                    {
                        "yorumYapan":"Murat Ulusoy",
                        "puan":"2",
                        "tarih":"20 Ekim 2022",
                        "yorumMetni":"Kahveler berbat."
                    }

                ]

            }

        });
}

const yorumEkle = function (req, res) {
    res.render('yorumEkle', { 'title': 'Yorum Sayfası' });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}

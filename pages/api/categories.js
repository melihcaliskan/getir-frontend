const categories = [
    { id: 0, title: "Damacana", img: "damacana" },
    { id: 1, title: "Yiyecek", img: "yiyecek" },
    { id: 2, title: "Süt & Kahvaltı", img: "sut-kahvalti" },
    { id: 3, title: "Dondurma", img: "dondurma" },
    { id: 4, title: "Bebek", img: "bebek" },
    { id: 5, title: "Su & İçecek", img: "su-icecek" },
    { id: 6, title: "Sebze & Meyve", img: "sebze-meyve" },
    { id: 7, title: "Fırından", img: "firindan" },
    { id: 8, title: "Atıştırmalık", img: "atistirmalik" },
    { id: 9, title: "Ev & Yaşam", img: "ev-yasam" },
    { id: 10, title: "Kişisel Bakım", img: "kisisel-bakim" },
    { id: 11, title: "Teknoloji", img: "teknoloji" },
    { id: 12, title: "Cinsel Sağlık", img: "cinsel-saglik" },
    { id: 13, title: "Evcil Hayvan", img: "evcil-hayvan" },
    { id: 14, title: "Giyim", img: "giyim" },
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(categories))
}
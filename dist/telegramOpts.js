
const startOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [[{
            text: 'Edit Text',
            callback_data: 'edit'}],["işlemler", "döviz"], ["borçlar & alacaklar", "taksitler"], ["kartlarım", "genel ayarlar"]]
    }
}
const islemOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [[{
            text: 'Edit Text',
            // we shall check for this value when we listen
            // for "callback_query"
            callback_data: 'edit'
        }], ["iade al"], ["Günlük İşlemler"], ["Geri"]]
    }
}
const doviOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Dolar"], ["Euro"], ["Bitcoin"], ["Altın"], ["Geri"]]
    }
}
const borcalacakOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Borc Al"], ["Borç Ver"], ["Borçlar Listesi"], ["Geri"]]
    }
}
const taksitOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Taksitli Ürün Al"], ["Taksit Öde"], ["Taksit Listesi"], ["Geri"]]
    }
}
const kartOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Kart Ekle", "Kart Sil"], ["Hesap Kartları"], ["Kredi Kartları"], ["Geri"]]
    }
}
const krediKartOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Aylık Ödeme Tutarı"], ["Limit", "Limit Değiştir"], ["Ödeme Tarihi", "Ödeme Tarihi Değiştir"], ["Aylık Ekstre"], ["Geri"]]
    }
}
const hesapKartOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Hesap Durumu"], ["Aylık Ekstre"], ["Geri"]]
    }
}
const genelOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Maaş Düzenle"], ["Hitap Düzenle"], ["MuhasebeBot Hakkında"], ["Sorun Bildir"], ["Geri"]]
    }
}

const evetHayirOpt = {
    "reply_markup": {
        resize_keyboard: true,
        one_time_keyboard: true,
        "keyboard": [["Evet"], ["Hayır"], ["Geri"]]
    }
};

const numsOpt = {
    "reply_markup": {}
};

export {
    startOpt,
    numsOpt,
    islemOpt,
    evetHayirOpt,
    genelOpt,
    hesapKartOpt,
    krediKartOpt,
    kartOpt,
    doviOpt,
    borcalacakOpt,
    taksitOpt,
}

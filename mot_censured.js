// Liste officielle des mots interdits (mots séparés par des tirets pour éviter les blocages)
const motsMasques = [

    "merde", "mrd", "merdes", "merdeux", "merdique", "emmerde", "emmerdes", "emmerder",
    "con", "cons", "connard", "connards", "conard", "conards", "connasse", "connasses",
    "conasse", "conasses", "salope", "salopes", "salop", "salops", "salopard", "salopards",
    "putain", "putn", "ptn", "putains", "pute", "putes", "putainn", "chier", "chiant",
    "chiante", "chiants", "chiantes", "chr", "batard", "bâtard", "batards", "bâtards",
    "crevard", "crevards", "fumier", "fumiers", "ordure", "ordures", "raclure", "raclures",
    "vermine", "vermines", "pourriture", "pourritures", "dechet", "déchet", "dechets", "déchets",
    "rebut", "rebuts", "lache", "lâche", "traitre", "traître", "traitres", "traîtres",
    "minable", "minables", "nul", "nulle", "nuls", "nulles", "naze", "nazes",
    "loser", "losers", "raté", "rate", "ratés", "rates", "inutile", "inutiles",

    "fdp", "ntm", "tg", "ta gueule", "ta gueul", "tagueule", "gueule", "gueules",
    "blc", "ballec", "bat les couilles", "bats les couilles", "fdm", "mdf",
    "clodo", "clochard", "clochards", "pd", "pds", "pede", "pédé", "pédés",
    "gouine", "gouines", "tarlouze", "tarlouzes", "encule", "enculé", "enculés",
    "enculée", "enculee", "suce", "sucer", "succe", "vtff", "vtf",
    "dégage", "degage", "casse toi", "barre toi", "tepu", "zebi", "wsh", "wesh",
    "baltringue", "baltringues", "racaille", "racailles",

    "abruti", "abrutis", "abrutie", "abruties", "cretin", "crétin", "cretins", "crétins",
    "debile", "débile", "debiles", "débiles", "mongol", "mongols", "mongolien",
    "gogol", "gogols", "idiot", "idiots", "idiote", "idiotes", "conne", "connes",
    "tocard", "tocards", "bouffon", "bouffons", "boloss", "bolos",
    "nique", "niquer", "niquez", "niquera", "baise", "baiser", "baisé",
    "attarde", "attardé", "attardés", "attardee", "attardée",
    "cinglé", "cingle", "cinglées", "dingue", "dingues",
    "taré", "tare", "tarés", "taree", "tarée", "tordu", "tordus",
    "branque", "branques", "fêlé", "fele", "fêlés",
    "timbré", "timbre", "timbrés", "siphonné", "siphonne", "siphonnés",
    "caïd", "caid", "caïds", "caids",

    "bougnoul", "bougnoule", "bougnoules", "nègre", "negre", "negres", "nègres",
    "bicot", "bicots", "chinetoc", "chinetoque", "chinetoques", "feuj",
    "youpin", "youpins", "youpine", "youpines", "raton", "ratons",
    "bamboula", "bamboulas", "noiraud", "noirauds",
    "hitler", "nazi", "nazis", "faf", "fafs", "facho", "fachos",
    "sal race", "sale race", "sale arabe", "sale noir", "sale blanc",
    "sale juif", "sale chinois", "sale gitan", "terroriste", "terroristes", "genocide", "génocide",

    "couille", "couilles", "bite", "bites", "chatte", "chattes", "zizi", "zizis",
    "pénis", "penis", "vagin", "vagins", "cul", "culs", "trou du cul", "tdc",
    "nichon", "nichons", "sein", "seins", "boobs", "boob", "tetons", "tétons",
    "teton", "téton", "fesse", "fesses", "zigounette", "zigounettes",
    "quéquette", "quequette", "quequettes", "zgueg", "zguegue", "zob", "zobs",
    "foufoune", "foufounes", "anus", "phallus",
    "ejacule", "éjacule", "ejaculer", "éjaculer",
    "porno", "pornos", "pornographie", "xxx",

    "je vais te tuer", "je te tue", "tu vas mourir", "t'es mort", "tes mort",
    "creve", "crève", "va crever", "va mourir", "tue toi", "tue-toi",
    "suicide toi", "suicidez vous", "nique ta mere", "nique ta mère",
    "nique ta famille", "mort à", "mort a", "ferme ta gueule",
    "on va te retrouver", "je sais ou t'habites", "tu vas le regretter",

    "tapette", "tapettes", "fiotte", "fiottes", "travelo", "travelos",
    "homophobe", "homophobie", "transphobe", "transphobie",
    "sexiste", "sexistes", "sexisme", "misogyne", "misogynes", "misogynie",
    "salaud", "salauds", "macho", "machos",

    "m3rde", "m€rde", "c0n", "c0nnard", "put1", "put@in", "b1te", "s4lope",
    "f*ck", "fck", "sh1t", "sh!t", "enfoiré", "enfoire", "enfoirés", "enfoires",
    "va te faire foutre", "je t'emmerde", "je t emmerde",
    "emmerdeur", "emmerdeurs", "emmerdeuse", "emmerdeuses"
];

// On exporte la liste nettoyée (sans les tirets) pour que le chat puisse l'utiliser
export const motsInterdits = motsMasques.map(mot => mot.replace(/-/g, ""));
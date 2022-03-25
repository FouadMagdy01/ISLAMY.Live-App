export const  SurahName = (id)=>{
    const SurahList = [
        {
        "id": 1,
        "name": "الفاتحة",
        "transliteration": "Al-Fatihah",
        },
        {
        "id": 2,
        "name": "البقرة",
        "transliteration": "Al-Baqarah",
        },
        {
        "id": 3,
        "name": "آل عمران",
        "transliteration": "Ali 'Imran",
        },
        {
        "id": 4,
        "name": "النساء",
        "transliteration": "An-Nisa",
        },
        {
        "id": 5,
        "name": "المائدة",
        "transliteration": "Al-Ma'idah",
        },
        {
        "id": 6,
        "name": "الأنعام",
        "transliteration": "Al-An'am",
        },
        {
        "id": 7,
        "name": "الأعراف",
        "transliteration": "Al-A'raf",
        },
        {
        "id": 8,
        "name": "الأنفال",
        "transliteration": "Al-Anfal",
        },
        {
        "id": 9,
        "name": "التوبة",
        "transliteration": "At-Tawbah",
        },
        {
        "id": 10,
        "name": "يونس",
        "transliteration": "Yunus",
        },
        {
        "id": 11,
        "name": "هود",
        "transliteration": "Hud",
        },
        {
        "id": 12,
        "name": "يوسف",
        "transliteration": "Yusuf",
        },
        {
        "id": 13,
        "name": "الرعد",
        "transliteration": "Ar-Ra'd",
        },
        {
        "id": 14,
        "name": "ابراهيم",
        "transliteration": "Ibrahim",
        },
        {
        "id": 15,
        "name": "الحجر",
        "transliteration": "Al-Hijr",
        },
        {
        "id": 16,
        "name": "النحل",
        "transliteration": "An-Nahl",
        },
        {
        "id": 17,
        "name": "الإسراء",
        "transliteration": "Al-Isra",
        },
        {
        "id": 18,
        "name": "الكهف",
        "transliteration": "Al-Kahf",
        },
        {
        "id": 19,
        "name": "مريم",
        "transliteration": "Maryam",
        },
        {
        "id": 20,
        "name": "طه",
        "transliteration": "Taha",
        },
        {
        "id": 21,
        "name": "الأنبياء",
        "transliteration": "Al-Anbya",
        },
        {
        "id": 22,
        "name": "الحج",
        "transliteration": "Al-Hajj",
        },
        {
        "id": 23,
        "name": "المؤمنون",
        "transliteration": "Al-Mu'minun",
        },
        {
        "id": 24,
        "name": "النور",
        "transliteration": "An-Nur",
        },
        {
        "id": 25,
        "name": "الفرقان",
        "transliteration": "Al-Furqan",
        },
        {
        "id": 26,
        "name": "الشعراء",
        "transliteration": "Ash-Shu'ara",
        },
        {
        "id": 27,
        "name": "النمل",
        "transliteration": "An-Naml",
        },
        {
        "id": 28,
        "name": "القصص",
        "transliteration": "Al-Qasas",
        },
        {
        "id": 29,
        "name": "العنكبوت",
        "transliteration": "Al-'Ankabut",
        },
        {
        "id": 30,
        "name": "الروم",
        "transliteration": "Ar-Rum",
        },
        {
        "id": 31,
        "name": "لقمان",
        "transliteration": "Luqman",
        },
        {
        "id": 32,
        "name": "السجدة",
        "transliteration": "As-Sajdah",
        },
        {
        "id": 33,
        "name": "الأحزاب",
        "transliteration": "Al-Ahzab",
        },
        {
        "id": 34,
        "name": "سبإ",
        "transliteration": "Saba",
        },
        {
        "id": 35,
        "name": "فاطر",
        "transliteration": "Fatir",
        },
        {
        "id": 36,
        "name": "يس",
        "transliteration": "Ya-Sin",
        },
        {
        "id": 37,
        "name": "الصافات",
        "transliteration": "As-Saffat",
        },
        {
        "id": 38,
        "name": "ص",
        "transliteration": "Sad",
        },
        {
        "id": 39,
        "name": "الزمر",
        "transliteration": "Az-Zumar",
        },
        {
        "id": 40,
        "name": "غافر",
        "transliteration": "Ghafir",
        },
        {
        "id": 41,
        "name": "فصلت",
        "transliteration": "Fussilat",
        },
        {
        "id": 42,
        "name": "الشورى",
        "transliteration": "Ash-Shuraa",
        },
        {
        "id": 43,
        "name": "الزخرف",
        "transliteration": "Az-Zukhruf",
        },
        {
        "id": 44,
        "name": "الدخان",
        "transliteration": "Ad-Dukhan",
        },
        {
        "id": 45,
        "name": "الجاثية",
        "transliteration": "Al-Jathiyah",
        },
        {
        "id": 46,
        "name": "الأحقاف",
        "transliteration": "Al-Ahqaf",
        },
        {
        "id": 47,
        "name": "محمد",
        "transliteration": "Muhammad",
        },
        {
        "id": 48,
        "name": "الفتح",
        "transliteration": "Al-Fath",
        },
        {
        "id": 49,
        "name": "الحجرات",
        "transliteration": "Al-Hujurat",
        },
        {
        "id": 50,
        "name": "ق",
        "transliteration": "Qaf",
        },
        {
        "id": 51,
        "name": "الذاريات",
        "transliteration": "Adh-Dhariyat",
        },
        {
        "id": 52,
        "name": "الطور",
        "transliteration": "At-Tur",
        },
        {
        "id": 53,
        "name": "النجم",
        "transliteration": "An-Najm",
        },
        {
        "id": 54,
        "name": "القمر",
        "transliteration": "Al-Qamar",
        },
        {
        "id": 55,
        "name": "الرحمن",
        "transliteration": "Ar-Rahman",
        },
        {
        "id": 56,
        "name": "الواقعة",
        "transliteration": "Al-Waqi'ah",
        },
        {
        "id": 57,
        "name": "الحديد",
        "transliteration": "Al-Hadid",
        },
        {
        "id": 58,
        "name": "المجادلة",
        "transliteration": "Al-Mujadila",
        },
        {
        "id": 59,
        "name": "الحشر",
        "transliteration": "Al-Hashr",
        },
        {
        "id": 60,
        "name": "الممتحنة",
        "transliteration": "Al-Mumtahanah",
        },
        {
        "id": 61,
        "name": "الصف",
        "transliteration": "As-Saf",
        },
        {
        "id": 62,
        "name": "الجمعة",
        "transliteration": "Al-Jumu'ah",
        },
        {
        "id": 63,
        "name": "المنافقون",
        "transliteration": "Al-Munafiqun",
        },
        {
        "id": 64,
        "name": "التغابن",
        "transliteration": "At-Taghabun",
        },
        {
        "id": 65,
        "name": "الطلاق",
        "transliteration": "At-Talaq",
        },
        {
        "id": 66,
        "name": "التحريم",
        "transliteration": "At-Tahrim",
        },
        {
        "id": 67,
        "name": "الملك",
        "transliteration": "Al-Mulk",
        },
        {
        "id": 68,
        "name": "القلم",
        "transliteration": "Al-Qalam",
        },
        {
        "id": 69,
        "name": "الحاقة",
        "transliteration": "Al-Haqqah",
        },
        {
        "id": 70,
        "name": "المعارج",
        "transliteration": "Al-Ma'arij",
        },
        {
        "id": 71,
        "name": "نوح",
        "transliteration": "Nuh",
        },
        {
        "id": 72,
        "name": "الجن",
        "transliteration": "Al-Jinn",
        },
        {
        "id": 73,
        "name": "المزمل",
        "transliteration": "Al-Muzzammil",
        },
        {
        "id": 74,
        "name": "المدثر",
        "transliteration": "Al-Muddaththir",
        },
        {
        "id": 75,
        "name": "القيامة",
        "transliteration": "Al-Qiyamah",
        },
        {
        "id": 76,
        "name": "الانسان",
        "transliteration": "Al-Insan",
        },
        {
        "id": 77,
        "name": "المرسلات",
        "transliteration": "Al-Mursalat",
        },
        {
        "id": 78,
        "name": "النبإ",
        "transliteration": "An-Naba",
        },
        {
        "id": 79,
        "name": "النازعات",
        "transliteration": "An-Nazi'at",
        },
        {
        "id": 80,
        "name": "عبس",
        "transliteration": "'Abasa",
        },
        {
        "id": 81,
        "name": "التكوير",
        "transliteration": "At-Takwir",
        },
        {
        "id": 82,
        "name": "الإنفطار",
        "transliteration": "Al-Infitar",
        },
        {
        "id": 83,
        "name": "المطففين",
        "transliteration": "Al-Mutaffifin",
        },
        {
        "id": 84,
        "name": "الإنشقاق",
        "transliteration": "Al-Inshiqaq",
        },
        {
        "id": 85,
        "name": "البروج",
        "transliteration": "Al-Buruj",
        },
        {
        "id": 86,
        "name": "الطارق",
        "transliteration": "At-Tariq",
        },
        {
        "id": 87,
        "name": "الأعلى",
        "transliteration": "Al-A'la",
        },
        {
        "id": 88,
        "name": "الغاشية",
        "transliteration": "Al-Ghashiyah",
        },
        {
        "id": 89,
        "name": "الفجر",
        "transliteration": "Al-Fajr",
        },
        {
        "id": 90,
        "name": "البلد",
        "transliteration": "Al-Balad",
        },
        {
        "id": 91,
        "name": "الشمس",
        "transliteration": "Ash-Shams",
        },
        {
        "id": 92,
        "name": "الليل",
        "transliteration": "Al-Layl",
        },
        {
        "id": 93,
        "name": "الضحى",
        "transliteration": "Ad-Duhaa",
        },
        {
        "id": 94,
        "name": "الشرح",
        "transliteration": "Ash-Sharh",
        },
        {
        "id": 95,
        "name": "التين",
        "transliteration": "At-Tin",
        },
        {
        "id": 96,
        "name": "العلق",
        "transliteration": "Al-'Alaq",
        },
        {
        "id": 97,
        "name": "القدر",
        "transliteration": "Al-Qadr",
        },
        {
        "id": 98,
        "name": "البينة",
        "transliteration": "Al-Bayyinah",
        },
        {
        "id": 99,
        "name": "الزلزلة",
        "transliteration": "Az-Zalzalah",
        },
        {
        "id": 100,
        "name": "العاديات",
        "transliteration": "Al-'Adiyat",
        },
        {
        "id": 101,
        "name": "القارعة",
        "transliteration": "Al-Qari'ah",
        },
        {
        "id": 102,
        "name": "التكاثر",
        "transliteration": "At-Takathur",
        },
        {
        "id": 103,
        "name": "العصر",
        "transliteration": "Al-'Asr",
        },
        {
        "id": 104,
        "name": "الهمزة",
        "transliteration": "Al-Humazah",
        },
        {
        "id": 105,
        "name": "الفيل",
        "transliteration": "Al-Fil",
        },
        {
        "id": 106,
        "name": "قريش",
        "transliteration": "Quraysh",
        },
        {
        "id": 107,
        "name": "الماعون",
        "transliteration": "Al-Ma'un",
        },
        {
        "id": 108,
        "name": "الكوثر",
        "transliteration": "Al-Kawthar",
        },
        {
        "id": 109,
        "name": "الكافرون",
        "transliteration": "Al-Kafirun",
        },
        {
        "id": 110,
        "name": "النصر",
        "transliteration": "An-Nasr",
        },
        {
        "id": 111,
        "name": "المسد",
        "transliteration": "Al-Masad",
        },
        {
        "id": 112,
        "name": "الإخلاص",
        "transliteration": "Al-Ikhlas",
        },
        {
        "id": 113,
        "name": "الفلق",
        "transliteration": "Al-Falaq",
        },
        {
        "id": 114,
        "name": "الناس",
        "transliteration": "An-Nas",
        }
        ]
   const surah = SurahList.filter(surah => surah.id === id)
   return(surah)
}
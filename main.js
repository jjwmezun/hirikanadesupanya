const isVowel = require( `./isVowel` );
const isAccentedVowel = require( `./isAccentedVowel` );

const spanishToRomajiMap = {
    "qua": "ka",
    "qui": "ki",
    "que": "ke",
    "quo": "kuo",
    "ca": "ka",
    "ci": "si",
    "cu": "ku",
    "ce": "se",
    "co": "ko",
    "ll": "y",
    "l": "r",
    "ha": "a",
    "hi": "i",
    "hu": "u",
    "he": "e",
    "ho": "o",
    "ja": "ha",
    "ji": "hi",
    "ju": "hu",
    "je": "he",
    "jo": "ho",
    "va": "ba",
    "vi": "bi",
    "vu": "bu",
    "ve": "be",
    "vo": "bo",
    "sci": "si",
    "x": "kusu",
    "ñ": "ny"
};

const removeAccents = ( text ) => text.normalize("NFD").replace( /[\u0300-\u036f]/g, `` );
const spanishSoundsToRomaji = ( text ) => {
    for ( const key in spanishToRomajiMap ) {
        text = text.replace( new RegExp( `${ key }`, `g` ), spanishToRomajiMap[ key ] );
    }
    return text;
};

const katakanaTable = {
    "a": "ア",
    "i": "イ",
    "u": "ウ",
    "e": "エ",
    "o": "オ",
    "ka": "カ",
    "ki": "キ",
    "ku": "ク",
    "ke": "ケ",
    "ko": "コ",
    "sa": "サ",
    "si": "シ",
    "su": "ス",
    "se": "セ",
    "so": "ソ",
    "ta": "タ",
    "ti": "チ",
    "tu": "ツ",
    "te": "テ",
    "to": "ト",
    "na": "ナ",
    "ni": "ニ",
    "nu": "ヌ",
    "ne": "ネ",
    "no": "ノ",
    "ha": "ハ",
    "hi": "ヒ",
    "hu": "フ",
    "he": "ヘ",
    "ho": "ホ",
    "ma": "マ",
    "mi": "ミ",
    "mu": "ム",
    "me": "メ",
    "mo": "モ",
    "ya": "ヤ",
    "yu": "ユ",
    "yo": "ヨ",
    "ra": "ラ",
    "ri": "リ",
    "ru": "ル",
    "re": "レ",
    "ro": "ロ",
    "wa": "ワ",
    "wo": "ヲ",
    "n": "ン",
    "ga": "ガ",
    "gi": "ギ",
    "gu": "グ",
    "ge": "ゲ",
    "go": "ゴ",
    "za": "ザ",
    "zi": "ジ",
    "zu": "ズ",
    "ze": "ゼ",
    "zo": "ゾ",
    "da": "ダ",
    "di": "ヂ",
    "du": "ヅ",
    "de": "デ",
    "do": "ド",
    "ba": "バ",
    "bi": "ビ",
    "bu": "ブ",
    "be": "ベ",
    "bo": "ボ",
    "pa": "パ",
    "pi": "ピ",
    "pu": "プ",
    "pe": "ペ",
    "po": "ポ",
    "kya": "キャ",
    "kyu": "キュ",
    "kyo": "キョ",
    "sya": "シャ",
    "syu": "シュ",
    "syo": "ショ",
    "tya": "チャ",
    "tyu": "チュ",
    "tyo": "チョ",
    "nya": "ニャ",
    "nyu": "ニュ",
    "nyo": "ニョ",
    "hya": "ヒャ",
    "hyu": "ヒュ",
    "hyo": "ヒョ",
    "mya": "ミャ",
    "myu": "ミュ",
    "myo": "ミョ",
    "rya": "リャ",
    "ryu": "リュ",
    "ryo": "リョ",
    "gya": "ギャ",
    "gyu": "ギュ",
    "gyo": "ギョ",
    "zya": "ジャ",
    "zyu": "ジュ",
    "zyo": "ジョ",
    "dya": "ヂャ",
    "dyu": "ヂュ",
    "dyo": "ヂョ",
    "bya": "ビャ",
    "byu": "ビュ",
    "byo": "ビョ",
    "pya": "ピャ",
    "pyu": "ピュ",
    "pyo": "ピョ",
    "fa": "ファ",
    "fi": "フィ",
    "fu": "フ",
    "fe": "フェ",
    "fo": "フォ"
};

const hiriganaTable = {
    "a": "",
    "i": "",
    "u": "",
    "e": "",
    "o": "",
    "ka": "",
    "ki": "",
    "ku": "",
    "ke": "",
    "ko": "",
    "sa": "",
    "si": "",
    "su": "",
    "se": "",
    "so": "",
    "ta": "",
    "ti": "",
    "tu": "",
    "te": "",
    "to": "",
    "na": "",
    "ni": "",
    "nu": "",
    "ne": "",
    "no": "",
    "ha": "",
    "hi": "",
    "hu": "",
    "he": "",
    "ho": "",
    "ma": "",
    "mi": "",
    "mu": "",
    "me": "",
    "mo": "",
    "ya": "",
    "yu": "",
    "yo": "",
    "ra": "",
    "ri": "",
    "ru": "",
    "re": "",
    "ro": "",
    "wa": "",
    "wo": "",
    "n": "",
    "ga": "",
    "gi": "",
    "gu": "",
    "ge": "",
    "go": "",
    "za": "",
    "zi": "",
    "zu": "",
    "ze": "",
    "zo": "",
    "da": "",
    "di": "",
    "du": "",
    "de": "",
    "do": "",
    "ba": "",
    "bi": "",
    "bu": "",
    "be": "",
    "bo": "",
    "pa": "",
    "pi": "",
    "pu": "",
    "pe": "",
    "po": "",
    "kya": "",
    "kyu": "",
    "kyo": "",
    "sya": "",
    "syu": "",
    "syo": "",
    "tya": "",
    "tyu": "",
    "tyo": "",
    "nya": "",
    "nyu": "",
    "nyo": "",
    "hya": "",
    "hyu": "",
    "hyo": "",
    "mya": "",
    "myu": "",
    "myo": "",
    "rya": "",
    "ryu": "",
    "ryo": "",
    "gya": "",
    "gyu": "",
    "gyo": "",
    "zya": "",
    "zyu": "",
    "zyo": "",
    "dya": "",
    "dyu": "",
    "dyo": "",
    "bya": "",
    "byu": "",
    "byo": "",
    "pya": "",
    "pyu": "",
    "pyo": ""
};

if ( process.argv.length !== 3 ) {
    throw "AHHH!";
}

const text = spanishSoundsToRomaji( process.argv[ 2 ] ).split( /\s/ );
const sounds = [];

text.forEach( term => {
    let i = 0;
    let newSound = true;
    let currentSound = ``;
    while ( i < term.length ) {
        const letter = term [ i ];
        if ( newSound ) {
            if ( isVowel( letter ) ) {
                sounds.push( letter );
            }
            else {
                currentSound = letter;
                newSound = false;
            }
        }
        else {
            if ( letter === `y` ) {
                if ( isVowel( term[ i + 1 ] ) ) {
                    sounds.push( `${ currentSound }y${ term[ i + 1 ] }` );
                    currentSound = ``;
                    newSound = true;
                    ++i;
                }
                else {
                    sounds.push( `${ currentSound }i` );
                    currentSound = ``;
                    newSound = true;
                }
            }
            else if ( isVowel( letter ) ) {
                sounds.push( `${ currentSound }${ letter }` );
                currentSound = ``;
                newSound = true;
            }
            else {
                if ( currentSound === `n` ) {
                    sounds.push( currentSound );
                }
                else {
                    sounds.push( `${ currentSound }u` );
                }
                currentSound = letter;
            }
        }
        ++i;
    }
    if ( currentSound !== `` ) {
        if ( currentSound === `n` ) {
            sounds.push( currentSound );
        }
        else {
            sounds.push( `${ currentSound }u` );
        }
    }
});

const kata = sounds.map( sound => {
    let kat = katakanaTable[ removeAccents( sound ) ];
    if ( kat === undefined ) {
        console.log( sound );
    }
    if ( isAccentedVowel( sound[ sound.length - 1 ] ) ) {
        kat = `${ kat }ー`;
    }
    return kat;
});

const final = kata.join( `` );

console.log( sounds.join( ` ` ) );
console.log( final );
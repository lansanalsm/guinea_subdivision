!function(e){function r(o){if(u[o])return u[o].exports;var t=u[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var u={};r.m=e,r.c=u,r.d=function(e,u,o){r.o(e,u)||Object.defineProperty(e,u,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,u){if(1&u&&(e=r(e)),8&u)return e;if(4&u&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&u&&"string"!=typeof e)for(var t in e)r.d(o,t,function(r){return e[r]}.bind(null,t));return o},r.n=function(e){var u=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(u,"a",u),u},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e){e.exports=require("lodash")},function(e,r,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getSousprefectureCodeByName=r.getSousprefectureNameByCode=r.getSousprefecturesByPrefectureName=r.getSousprefecturesAndCodesByPrefectureName=r.getSousprefecturesByPrefectureCode=r.getSousprefecturesAndCodesByPrefectureCode=r.getSousprefectures=r.getSousprefecturesCodes=r.getSousprefecturesAndCodes=r.getPrefectureCodeByName=r.getPrefectureNameByCode=r.getPrefecturesByRegionName=r.getPrefecturesByRegionCode=r.getPrefecturesAndCodesByRegionCode=r.getPrefectures=r.getPrefecturesCodes=r.getPrefecturesAndCodes=r.getRegionCodeByName=r.getRegionNameByCode=r.getRegionsCodes=r.getRegions=r.getRegionsAndCodes=void 0;var o=u(0),t=[{code:"GN-C",region:"Conakry"},{code:"GN-L",region:"Labé"},{code:"GN-K",region:"Kankan"},{code:"GN-F",region:"Faranah"},{code:"GN-M",region:"Mamou"},{code:"GN-D",region:"Kindia"},{code:"GN-B",region:"Boké"},{code:"GN-N",region:"N'Zérékoré"}],s=[{comment:"-----------les prefectures de conakry------------",regionCode:"GN-C",prefectureCode:"CONA",prefecture:"Conakry"},{regionCode:"GN-L",prefectureCode:"KOUB",prefecture:"Koubia"},{regionCode:"GN-L",prefectureCode:"LABE",prefecture:"Labé"},{regionCode:"GN-L",prefectureCode:"LELO",prefecture:"Lélouma"},{regionCode:"GN-L",prefectureCode:"MALI",prefecture:"Mali"},{regionCode:"GN-L",prefectureCode:"TOUG",prefecture:"Tougué"},{comment:"--------- les prefectures de kankan -----------",regionCode:"GN-K",prefectureCode:"KANK",prefecture:"Kankan"},{regionCode:"GN-K",prefectureCode:"KERO",prefecture:"Kérouane"},{regionCode:"GN-K",prefectureCode:"KOUR",prefecture:"Kouroussa"},{regionCode:"GN-K",prefectureCode:"MAND",prefecture:"Mandiana"},{regionCode:"GN-K",prefectureCode:"SIGU",prefecture:"Siguiri"},{comment:"-------- les prefectures de faranah --------------",regionCode:"GN-F",prefectureCode:"DABO",prefecture:"Dabola"},{regionCode:"GN-F",prefectureCode:"DING",prefecture:"Dinguiraye"},{regionCode:"GN-F",prefectureCode:"FARA",prefecture:"Faranah"},{regionCode:"GN-F",prefectureCode:"KISS",prefecture:"Kissidougou"},{comment:"-------------- les prefectures de mamou ------------------",regionCode:"GN-M",prefectureCode:"MAMO",prefecture:"Mamou"},{regionCode:"GN-M",prefectureCode:"DALA",prefecture:"Dalaba"},{regionCode:"GN-M",prefectureCode:"PITA",prefecture:"Pita"},{comment:"------------- les prefectures de kindia ----------",regionCode:"GN-D",prefectureCode:"COYA",prefecture:"Coyah"},{regionCode:"GN-D",prefectureCode:"DUBR",prefecture:"Dubréka"},{regionCode:"GN-D",prefectureCode:"FORE",prefecture:"Forécariah"},{regionCode:"GN-D",prefectureCode:"KIND",prefecture:"Kindia"},{regionCode:"GN-D",prefectureCode:"TELI",prefecture:"Télimélé"},{comment:"------------------- les prefectures de boke ------------------",regionCode:"GN-B",prefectureCode:"BOFF",prefecture:"Boffa"},{regionCode:"GN-B",prefectureCode:"BOKE",prefecture:"Boké"},{regionCode:"GN-B",prefectureCode:"GAOU",prefecture:"Gaoual"},{regionCode:"GN-B",prefectureCode:"KOUN",prefecture:"Koundara"},{regionCode:"GN-B",prefectureCode:"FRIA",prefecture:"Fria"},{comment:"------------- les prefectures de n'zerekore ----------",regionCode:"GN-N",prefectureCode:"BEYL",prefecture:"Beyla"},{regionCode:"GN-N",prefectureCode:"GUEC",prefecture:"Guéckédou"},{regionCode:"GN-N",prefectureCode:"LOLA",prefecture:"Lola"},{regionCode:"GN-N",prefectureCode:"MACE",prefecture:"Macenta"},{regionCode:"GN-N",prefectureCode:"NZER",prefecture:"Nzérékoré"},{regionCode:"GN-N",prefectureCode:"YOMO",prefecture:"Yomou"}],c=[{comment:" --------------- conakry ---------------",prefectureCode:"CONA",sousprefectureCode:"MATO",sousprefecture:"Matoto"},{prefectureCode:"CONA",sousprefectureCode:"RATO",sousprefecture:"Ratoma"},{prefectureCode:"CONA",sousprefectureCode:"KALO",sousprefecture:"Kaloum"},{prefectureCode:"CONA",sousprefectureCode:"DIXI",sousprefecture:"Dixinn"},{prefectureCode:"CONA",sousprefectureCode:"MATA",sousprefecture:"Matam"},{comment:" --------------- koubia ---------------",prefectureCode:"KOUB",sousprefectureCode:"FAFA",sousprefecture:"Fafaya"},{prefectureCode:"KOUB",sousprefectureCode:"GADH",sousprefecture:"Gadha Woundou"},{prefectureCode:"KOUB",sousprefectureCode:"KOUBC",sousprefecture:"Koubia centre"},{prefectureCode:"KOUB",sousprefectureCode:"MATA",sousprefecture:"Matakaou"},{prefectureCode:"KOUB",sousprefectureCode:"MISS",sousprefecture:"Missira"},{prefectureCode:"KOUB",sousprefectureCode:"PILI",sousprefecture:"Pilimini"},{comment:" --------------- Labe ---------------",prefectureCode:"LABE",sousprefectureCode:"LABE",sousprefecture:"Labé Centre"},{prefectureCode:"LABE",sousprefectureCode:"DALE",sousprefecture:"Dalein"},{prefectureCode:"LABE",sousprefectureCode:"DARA",sousprefecture:"Daralabé"},{prefectureCode:"LABE",sousprefectureCode:"DIAR",sousprefecture:"Diari"},{prefectureCode:"LABE",sousprefectureCode:"DION",sousprefecture:"Dionfo"},{prefectureCode:"LABE",sousprefectureCode:"GARA",sousprefecture:"Garambé"},{prefectureCode:"LABE",sousprefectureCode:"HAFI",sousprefecture:"Hafia"},{prefectureCode:"LABE",sousprefectureCode:"NOUS",sousprefecture:"Noussy"},{prefectureCode:"LABE",sousprefectureCode:"POPO",sousprefecture:"Popodara"},{prefectureCode:"LABE",sousprefectureCode:"SANN",sousprefecture:"Sannou"},{prefectureCode:"LABE",sousprefectureCode:"TOUN",sousprefecture:"Tountouroun"},{prefectureCode:"LABE",sousprefectureCode:"KALA",sousprefecture:"Kalan"},{prefectureCode:"LABE",sousprefectureCode:"KOUR",sousprefecture:"Kouramangui"},{comment:" --------------- Kankan ---------------",prefectureCode:"KANK",sousprefectureCode:"KANK",sousprefecture:"Kankan Centre"},{prefectureCode:"KANK",sousprefectureCode:"BALA",sousprefecture:"Balandougou"},{prefectureCode:"KANK",sousprefectureCode:"BARA",sousprefecture:"Baranama"},{prefectureCode:"KANK",sousprefectureCode:"BATE",sousprefecture:"Batè-Nafadji"},{prefectureCode:"KANK",sousprefectureCode:"BOUL",sousprefecture:"Boula"},{prefectureCode:"KANK",sousprefectureCode:"GBEN",sousprefecture:"Gbendou-Baranama"},{prefectureCode:"KANK",sousprefectureCode:"KARF",sousprefecture:"Karfamorya"},{prefectureCode:"KANK",sousprefectureCode:"KOUM",sousprefecture:"Koumban"},{prefectureCode:"KANK",sousprefectureCode:"NAMO",sousprefecture:"Mamouroudou"},{prefectureCode:"KANK",sousprefectureCode:"MISS",sousprefecture:"Missamana"},{prefectureCode:"KANK",sousprefectureCode:"MORI",sousprefecture:"Moribaya"},{prefectureCode:"KANK",sousprefectureCode:"TINT",sousprefecture:"Tintioulen"},{prefectureCode:"KANK",sousprefectureCode:"TOKO",sousprefecture:"Tokounou"},{comment:" --------------- Faranah ---------------",prefectureCode:"FARA",sousprefectureCode:"FARA",sousprefecture:"Faranah Centre"},{prefectureCode:"FARA",sousprefectureCode:"BANI",sousprefecture:"Banian"},{prefectureCode:"FARA",sousprefectureCode:"BIND",sousprefecture:"Bindougou"},{prefectureCode:"FARA",sousprefectureCode:"HERE",sousprefecture:"Hèrmakono"},{prefectureCode:"FARA",sousprefectureCode:"KOBI",sousprefecture:"Kobikoro"},{prefectureCode:"FARA",sousprefectureCode:"MARE",sousprefecture:"Maréla"},{prefectureCode:"FARA",sousprefectureCode:"NIAL",sousprefecture:"Nialia"},{prefectureCode:"FARA",sousprefectureCode:"PASS",sousprefecture:"Passaya"},{prefectureCode:"FARA",sousprefectureCode:"SAND",sousprefecture:"Sandénia"},{prefectureCode:"FARA",sousprefectureCode:"SANG",sousprefecture:"Songoya"},{prefectureCode:"FARA",sousprefectureCode:"TIRO",sousprefecture:"Tiro"},{prefectureCode:"FARA",sousprefectureCode:"TIND",sousprefecture:"Tindo"},{prefectureCode:"KISS",sousprefectureCode:"ALB",sousprefecture:"Albadariah"},{prefectureCode:"KISS",sousprefectureCode:"YOM",sousprefecture:"Yombiro"},{prefectureCode:"KISS",sousprefectureCode:"YEN",sousprefecture:"Yende-Millimou"},{prefectureCode:"KISS",sousprefectureCode:"SAN",sousprefecture:"Sangardo"},{prefectureCode:"KISS",sousprefectureCode:"MAN",sousprefecture:"Manfran"},{prefectureCode:"KISS",sousprefectureCode:"KOUN",sousprefecture:"Koundiatou"},{prefectureCode:"KISS",sousprefectureCode:"KIS",sousprefecture:"kissidougou Centre"},{prefectureCode:"KISS",sousprefectureCode:"GBAN",sousprefecture:"Gbangbadou"},{prefectureCode:"KISS",sousprefectureCode:"BANA",sousprefecture:"Banama"},{prefectureCode:"KISS",sousprefectureCode:"BAR",sousprefecture:"Bardou"},{prefectureCode:"KISS",sousprefectureCode:"BEIN",sousprefecture:"Beindou"},{prefectureCode:"KISS",sousprefectureCode:"FER",sousprefecture:"Fermesadou"},{prefectureCode:"KISS",sousprefectureCode:"FIRA",sousprefecture:"Firawa (Yomadou)"},{prefectureCode:"KERO",sousprefectureCode:"BAN",sousprefecture:"Banankoro"},{prefectureCode:"KERO",sousprefectureCode:"SORO",sousprefecture:"Soromaya"},{prefectureCode:"KERO",sousprefectureCode:"SIBI",sousprefecture:"Sibiribaro"},{prefectureCode:"KERO",sousprefectureCode:"LINK",sousprefecture:"Linko"},{prefectureCode:"KERO",sousprefectureCode:"KOUN",sousprefecture:"Kounsankoro"},{prefectureCode:"KERO",sousprefectureCode:"KOMO",sousprefecture:"Komodou"},{prefectureCode:"KERO",sousprefectureCode:"KEROC",sousprefecture:"Kereouane centre"},{prefectureCode:"KERO",sousprefectureCode:"DAMA",sousprefecture:"Damaro"},{prefectureCode:"KOUR",sousprefectureCode:"BAB",sousprefecture:"Babila"},{prefectureCode:"KOUR",sousprefectureCode:"BAL",sousprefecture:"Balato"},{prefectureCode:"KOUR",sousprefectureCode:"BAN",sousprefecture:"Banfele"},{prefectureCode:"KOUR",sousprefectureCode:"BAR",sousprefecture:"Baro"},{prefectureCode:"KOUR",sousprefectureCode:"CIS",sousprefecture:"Cissela"},{prefectureCode:"KOUR",sousprefectureCode:"DOU",sousprefecture:"Douako"},{prefectureCode:"KOUR",sousprefectureCode:"DOUR",sousprefecture:"Doura"},{prefectureCode:"KOUR",sousprefectureCode:"KIN",sousprefecture:"Kiniero"},{prefectureCode:"KOUR",sousprefectureCode:"KOM",sousprefecture:"Komola-Koura"},{prefectureCode:"KOUR",sousprefectureCode:"KOUMA",sousprefecture:"Koumana"},{prefectureCode:"KOUR",sousprefectureCode:"KOURO",sousprefecture:"Kouroussa centre"},{prefectureCode:"KOUR",sousprefectureCode:"SAN",sousprefecture:"Sanguiana"}],f=(r.getRegionsAndCodes=function(){return(0,o.sortBy)((0,o.uniq)(t),"region")},r.getRegions=function(){return(0,o.sortBy)((0,o.uniq)(t.map(function(e){return e.region})))},r.getRegionsCodes=function(){return(0,o.sortBy)((0,o.uniq)(t.map(function(e){return e.code})))},r.getRegionNameByCode=function(e){var r=null;return t.map(function(u){u.code===e&&(r=u.region)}),r},r.getRegionCodeByName=function(e){var r=null;return t.map(function(u){u.region===e&&(r=u.code)}),r}),p=(r.getPrefecturesAndCodes=function(){return(0,o.sortBy)((0,o.uniq)(s),"prefecture")},r.getPrefecturesCodes=function(){return(0,o.sortBy)((0,o.uniq)(s.map(function(e){return e.prefectureCode})))},r.getPrefectures=function(){return(0,o.sortBy)((0,o.uniq)(s.map(function(e){return e.prefecture})))},r.getPrefecturesAndCodesByRegionCode=function(e){var r=[];return s.map(function(u){u.regionCode===e&&r.push(u)}),(0,o.sortBy)((0,o.uniq)(r))},r.getPrefecturesByRegionCode=function(e){var r=[];return s.map(function(u){u.regionCode===e&&r.push(u.prefecture)}),(0,o.sortBy)((0,o.uniq)(r))},r.getPrefecturesByRegionName=function(e){var r=f(e),u=[];return s.map(function(e){e.regionCode===r&&u.push(e.prefecture)}),(0,o.sortBy)((0,o.uniq)(u))},r.getPrefectureNameByCode=function(e){var r=null;return s.map(function(u){u.prefectureCode===e&&(r=u.prefecture)}),r},r.getPrefectureCodeByName=function(e){var r=null;return s.map(function(u){u.prefecture===e&&(r=u.prefectureCode)}),r});r.getSousprefecturesAndCodes=function(){return(0,o.sortBy)((0,o.uniq)(c),"sousprefecture")},r.getSousprefecturesCodes=function(){return(0,o.sortBy)((0,o.uniq)(c.map(function(e){return e.sousprefectureCode})))},r.getSousprefectures=function(){return(0,o.sortBy)((0,o.uniq)(c.map(function(e){return e.sousprefecture})))},r.getSousprefecturesAndCodesByPrefectureCode=function(e){var r=[];return c.map(function(u){u.prefectureCode===e&&r.push(u)}),(0,o.sortBy)((0,o.uniq)(r))},r.getSousprefecturesByPrefectureCode=function(e){var r=[];return c.map(function(u){u.prefectureCode===e&&r.push(u.sousprefecture)}),(0,o.sortBy)((0,o.uniq)(r))},r.getSousprefecturesAndCodesByPrefectureName=function(e){var r=p(e),u=[];return c.map(function(e){e.prefectureCode===r&&u.push(e)}),(0,o.sortBy)((0,o.uniq)(u))},r.getSousprefecturesByPrefectureName=function(e){var r=p(e),u=[];return c.map(function(e){e.prefectureCode===r&&u.push(e.sousprefecture)}),(0,o.sortBy)((0,o.uniq)(u))},r.getSousprefectureNameByCode=function(e){var r=null;return c.map(function(u){u.sousprefectureCode===e&&(r=u.sousprefecture)}),r},r.getSousprefectureCodeByName=function(e){var r=null;return s.map(function(u){u.sousprefecture===e&&(r=u.sousprefectureCode)}),r}}]);
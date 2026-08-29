# Jídelníček pro tři — návod

Appka počítá pro **Pepču**, **Simču** a **Jožu**. Je to jedna appka pro
všechny, bez účtů a bez přihlašování — kdo ji má, vidí a mění všechno.
Jožovi se plánuje jen oběd.

## Jak to počítá

| | váha | denní příjem | bílkoviny |
|---|---|---|---|
| Pepča (nar. 2. 8. 2001, 186 cm) | 107 kg | **2 323 kcal** | 156 g |
| Simča (nar. 14. 2. 1976, 167 cm) | 77 kg | **1 793 kcal** | 126 g |
| Joža (nar. 14. 2. 1941, 176 cm) | 103 kg | oběd ~500 kcal | — |

Kalorie nevycházejí z žádné obecné rovnice — **stojí na číslech, která
jsi zadal**: Pepča má při 107 kg 2 323 kcal, Simča při 77 kg 1 793.
Z toho si appka spočítala osobní koeficient a při jiné váze drží stejný
poměr. Pepčovi udělá každé kilo rozdíl 11 kcal, Simče 13 kcal.

**Přepínač auto/ručně** je v kartě u příjmu. V režimu *automaticky* jen
přepíšeš váhu a kalorie se dopočítají. Když ťukneš na *ručně*, zadáš
číslo napřímo a appka do něj nesahá — dokud nepřepneš zpátky.

**Joža nemá vlastní výpočet.** Jeho den je 80 % Pepčova a plánuje se
z něj jen oběd. Jeho váha se sleduje, ale do porcí nevstupuje.

Bílkoviny se počítají z **referenční váhy** — nejvýš té, která odpovídá
BMI 25. U Pepči je to 86 kg místo 107, takže 156 g. Z celkové váhy by
vyšlo přes 190 g, což se při 2 323 kcal nedá najíst.

**Tělesný tuk zadáváš v kartě vedle váhy.** Když ho změříte přesněji,
přepiš ho a všechno se přepočítá.

Váhu kohokoliv přepíšeš v kartě nahoře a cíle se hned přepočítají.
Historie se ukládá, takže se pod kartou objeví průběh.

## Jak se v tom chodí

Po spuštění je nahoře **výběr týdne** — šipky doleva a doprava, vedle
číslo týdne a v závorce rozmezí dnů. Pod ním tři dlaždice:

- **Jídelníček** — co se ten týden jí, kdy se co vaří, export do
  kalendáře a tisk
- **Nákupní seznam** — všechno na celý týden, položky jdou odškrtávat
- **Úprava jídelníčku** — skládání, nabídka jídel, čísla lidí, sdílení

Odkudkoliv se vrátíš odkazem *Zpět na rozcestník*. Výběr týdne platí
všude — když přepneš týden a jdeš do nákupního seznamu, je to seznam na
ten týden.

Když se někdo přes týden nezvážil, objeví se pod výběrem týdne tmavý
proužek se jmény. Váhy se zapisují v Úpravě jídelníčku.

## Jak se skládá týden

1. Každý týden má vlastní plán, přepínají se šipkami nahoře.
2. V **Úprava jídelníčku → Skládání týdne** klikni na den a u každého chodu vyber jídlo
   z nabídky.
3. Vedle snídaní a svačin je rozbalovátko **přehodit na…** — prohodí
   to jídlo s vybraným dnem.
4. **Oběd je společný pro dvojici dnů** — vaří se na dva dny. Dvojice jsou
   **Po+Út, St+Čt, Pá samotný, So+Ne**. Změna oběda platí pro celou dvojici.
5. **Polévka se dělá jen o víkendu** — patří k sobotnímu vaření a vydrží
   na neděli. Ve všední dny se řádek polévky vůbec neukáže. Dá se nechat
   prázdná („bez polévky"), nebo si všechny polévky odškrtni v nabídce.
6. **Doplnit prázdná místa** vyplní, co chybí, a nechá být, cos vybral.
   **Složit znovu od nuly** přepíše celý týden.

Automat sahá po bílkovinnějších variantách. Rohlík s marmeládou se sám
nenabídne, ale vybrat se dá.

## Nabídka jídel

Pod skládáním je seznam všech jídel rozdělený po chodech. Co odškrtneš,
zmizí z nabídky — automat to nepoužije a v rozbalovátku se to neobjeví.
U každého je vidět, kolik má porce kalorií a bílkovin, ať se rozhoduje
podle něčeho.

Tlačítka **vše** a **nic** u každé skupiny přepnou celou najednou.
Kdyby ses odškrtal až k prázdné skupině, appka se vrátí ke všem — bez
jediné snídaně by týden složit nešlo.

Jídlo, které je použité v už složeném týdnu, z něj neuteče, i když ho
odškrtneš. V rozbalovátku pak má poznámku „(mimo nabídku)", ať víš, proč
tam je.

## Kolik se vaří

Jídlo vařené na dva dny je na **10 porcí**: Pepča 4× (oběd i večeře, dva dny),
Simča 4×, Joža 2× obědy. V pátek se vaří jen **5 porcí**, protože kryje jediný den. Každý má jinou velikost porce, takže sekce **Kdy co
uvařit** ukazuje rovnou celkové gramáže — zvlášť hlavní jídlo, zvlášť
polévku.

Vaří se v neděli, úterý, čtvrtek a v pátek večer.

## Co je v nabídce

Vedle rychlovek je tam česká klasika: svíčková s knedlíkem, kuřecí řízek
ve strouhance s bramborem, hovězí guláš, kachna se zelím a bramborovým
knedlíkem, špenát se špalíčky. Z polévek bramborová, nudlový vývar
a zeleninová s masem.

## Ranní upozornění pro Simču

Tlačítko **Stáhnout týden do kalendáře** vyrobí soubor `.ics` se sedmi
událostmi na 7:00. V každé je:

- co ten den připravit za svačiny — sobě i Pepčovi, s gramážemi
- co bude druhý den k obědu
- a ve dnech, kdy se vaří, i „dnes večer uvařit"

Simča si soubor otevře a naimportuje do kalendáře. Pak jí to zvoní každé
ráno i bez otevření appky. Nová verze se stahuje ke každému týdnu zvlášť.

## Nákupní seznam

Položky se odškrtávají zaškrtávátkem a **koupené se rovnou schovají**,
takže seznam se cestou po obchodě scvrkává. Nahoře je počítadlo
(„zbývá 12 z 43 položek"). Tlačítkem *ukázat koupené* si je vyvoláš
zpátky, *Zrušit odškrtnutí* vrátí celý seznam.

Co je potřeba dnes nebo zítra, má **červený proužek a štítek** a řadí se
na začátek skupiny. Odškrtnutí platí pro daný týden — příští týden
začíná načisto.

## Upozornění na nákup

Když se blíží vaření a suroviny nejsou koupené, objeví se nahoře tmavý
proužek — na rozcestníku i v seznamu:

> Zítra večer se vaří Losos, brambory, zeleninová směs — chybí losos
> 615 g (5 filetů), brambory 1,2 kg (15 brambor).

Množství je přesně to, co padne do toho jednoho vaření, ne týdenní
součet. Jak věci odškrtáváš, hláška se zkracuje, a když je nakoupeno,
zmizí. Ve dnech, kdy se nevaří, hlásí jen kolik položek zbývá na dnešek
a zítřek.

Upozornění se počítá jen pro **aktuální týden** — když si prohlížíš
příští, appka mlčí.

Vpravo nahoře v seznamu je stav synchronizace: *sesynchronizováno 14:32*, *čeká na
odeslání* nebo *offline — uloží se, až bude signál*.

## Sdílení a nastavení

Postup je stejný jako dřív:

1. Veřejné repo `jidelnicek` s appkou (odsud běží Pages).
2. Privátní repo `jidelnicek-data` na data.
3. Fine-grained token omezený na to datové repo. Pepča **Contents:
   Read and write**, Simča **Contents: Read-only**.
4. V appce vyplň *Uživatel na GitHubu*, *Datový repozitář* a *Token*.

**Většinou nemusíš dělat nic.** Appka se sesynchronizuje sama: při
spuštění, při každém návratu do popředí, a hned jak se telefon připojí
k internetu. Po každé úpravě počká dvě a půl vteřiny (ať to nestřílí při
každém kliknutí) a odešle. Tlačítka *Sdílet* a *Načíst sdílené* zůstala
pro případ, že chceš ručně.

Offline appka funguje normálně — změny se ukládají do telefonu
a odešlou se, jakmile bude signál.

**Když měníte oba naráz**, nepřepíšete se. Každé odškrtnutí i každý
týdenní plán nese vlastní časovou značku a při slučování vyhrává ten
novější zápis, položku po položce. Když jeden odškrtne chleba
a druhý mrkev, zůstanou odškrtnuté obě.

## Gramy a míry

U každé suroviny je váha a v závorce, kolik to zhruba je — „48 g
(4 plátky)", „120 g (1 prso)", „50 g (2 hrsti)", „45 g (9 koleček)".
Počítá se i po čtvrtinách, takže uvidíš „tři čtvrtě mrkve" nebo
„1¼ prsa". Když je množství od celého dílu daleko, závorka se schová
a zůstanou jen gramy — „půl balení" u třetiny balení by lhalo.

Míry jdou doladit — jsou v souboru `index.html` v tabulce `MIRY`, kde
je u každé suroviny gramáž jednoho dílu. Když u vás plátek šunky váží
15 g místo 12, přepíšeš jedno číslo.

## Přesnost

Pepča vychází zhruba na cíl. **Simča je ve všední dny blízko** (kolem
1 430 při cíli 1 380), o víkendu výš (kolem 1 630), protože polévka
přidá jídlo navíc a její den je malý. Není to chyba
výpočtu: víc než polovina jejího dne padne na porci z jídla vařeného na víc dnů
a ta se nedá zmenšit donekonečna, aby z toho pořád bylo jídlo. Když by
to mělo sedět přesněji, musela by z toho jídla brát menší porci než Pepča
a dojídat se jinde — řekni a přenastavím to.

Bílkoviny vycházejí kolem 85 % cíle,
v horším dni i o kus míň. Je to schválně: appka radši nechá porce
vypadat jako jídlo, než aby kvůli číslům naskládala devět plátků šunky
a patnáct gramů chleba. Když den vypadne chudý na bílkoviny, prohoď
druhou večeři za jogurt nebo tvaroh.

## Když upravíš appku

Ve `sw.js` zvyš `VERSION` (teď `v3`) a nahraj oba soubory. Bez toho si
telefon nechá starou verzi.

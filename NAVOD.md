# Jídelníček pro tři — návod

Appka počítá pro **Pepču**, **Simču** a **Jožu**. Pepča skládá týden,
Simča ho vidí a dostane ranní upozornění do kalendáře, Joža má
naplánovaný jen oběd.

## Jak to počítá

| | tuk | aktivní hmota | výdej | příjem | bílkoviny | ubývá |
|---|---|---|---|---|---|---|
| Pepča (186 cm, 106 kg, 25 let) | 30 % | 74 kg | 2 370 | **1 970 kcal** | 148 g | ~0,36 kg/týden |
| Simča (167 cm, 77 kg, 50 let) | 30 % | 54 kg | 1 840 | **1 530 kcal** | 108 g | ~0,28 kg/týden |
| Joža (176 cm, 100 kg, 86 let) | 30 % | 70 kg | 2 260 | **oběd ~370 kcal** | — | — |

Klidový výdej počítá **Katch–McArdle z aktivní tělesné hmoty** — tedy
z váhy bez tuku. Je to přesnější než počítat z celkové váhy, protože
tuk skoro nic nespálí. Když u někoho tuk nevyplníš, spadne to zpátky
na Mifflin–St Jeor podle váhy, výšky a věku. Násobek aktivity je 1,20
(sedavý den při 4 000 krocích) a roste s počtem kroků až na 1,55 při
deseti tisících. Pepča má o ~450 kcal míň, než spálí, Simča o ~300.
**Joža jí tolik, kolik spálí** — v jeho věku je
nechtěný úbytek váhy spojený spíš se ztrátou svalu než s lepším zdravím.
Jestli má hubnout, ať to rozhodne jeho doktor.

**Příjem nikdy neklesne pod klidový metabolismus.** U Pepči i Simči na
tuhle hranici výpočet naráží, takže mají 2 100 a 1 400 místo o něco
nižších čísel. Pod tuhle hranici se dlouhodobě nechodí.

**Když ti spočítané číslo nesedí,** přepiš ho — v kartě je druhé políčko
na denní příjem. Prázdné znamená „spočítej sám". **Joža se počítá jinak.** Jeho porce není podíl jeho vlastního dne, ale
**70 % toho, co má Pepča** — u něj se plánuje jen oběd a rovnice pro
šestaosmdesátiletého člověka stejně sedí špatně. Když má jíst víc nebo
míň, změň to číslo v `index.html` u konstanty `JOZA_PODIL`.

Bílkoviny se počítají **na kilo aktivní hmoty** — 2,0 g při redukci,
1,8 g při udržování. Svalu je jedno, kolik kolem sebe nese tuku, takže
Pepča má 148 g (ze 74 kg aktivní hmoty), ne 190 g z celkové váhy.

**Tělesný tuk zadáváš v kartě vedle váhy.** Když ho změříte přesněji,
přepiš ho a všechno se přepočítá.

Váhu kohokoliv přepíšeš v kartě nahoře a cíle se hned přepočítají.
Historie se ukládá, takže se pod kartou objeví průběh.

## Jak se skládá týden

1. Nahoře přepínáš týdny šipkami. Každý týden má vlastní plán.
2. V **Skládání týdne** klikni na den a u každého chodu vyber jídlo
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

## Role

V **Nastavení** je přepínač *Kdo tuhle appku má*:

- **Pepča** — vidí skládání týdne a může sdílet
- **Simča** — vidí jídelníček, vaření a nákup, skládání se skryje

Přepínač je jen pohodlí. Skutečné zamčení dělá token: Simčin token
vygeneruj s oprávněním **Contents: Read-only** a zapisovat prostě nepůjde.

## Sdílení a nastavení

Postup je stejný jako dřív:

1. Veřejné repo `jidelnicek` s appkou (odsud běží Pages).
2. Privátní repo `jidelnicek-data` na data.
3. Fine-grained token omezený na to datové repo. Pepča **Contents:
   Read and write**, Simča **Contents: Read-only**.
4. V appce vyplň *Uživatel na GitHubu*, *Datový repozitář* a *Token*.

Pepča po složení týdne klikne **Sdílet**, Simča **Načíst sdílené**.
Appka to zkusí stáhnout i sama při každém spuštění.

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

# Kreditní karta

Vizuální ověření správného formátu začínajícího čísla kreditní karty.

- [Zadání](#zadání)
- [Abstrakt](#abstrakt)
- [Rozsah a realizace](#rozsah-a-realizace)


## Zadání
Vytvořte komponentu pro pohodlné zadávání čísla kreditní karty. Komponenta nechť zobrazí vedle sebe čtyři textová pole, každé pro jednu čtveřici čísel. Vždy když uživatel vyplní čtyři čísla do jednoho pole, focus se automaticky přesune na další pole.


## Abstrakt
Naprogramovala jsem formulář, ze kterého se data současně zobrazují na kartě nakódované v HTML a CSS.

Do každého input pole lze zadat pouze 4 číslice, což je ošetřeno validací. Po vyplnění se kurzor automaticky přesune do dalšího inputu.

Při vyplňování čísla karty se uživateli zobrazuje, zda začínající číslo odpovídá pravidlům vydavatelů karet.

Každý vydavatel má jasná pravidla, jak podle čísla karty poznat její typ:

- **MasterCard**: začíná čísly 51—55 nebo 2221—2720.
- **Visa**: začíná číslem 4.
- **American Express**: začíná číslem 34 nebo 37.
- **Discover**: začíná čísly 65, 644—649, nebo 6011.
- **Diners Club**: začíná čísly 36 nebo 55.

Jsou-li splněna pravidla, zobrazí se v levém horním rohu karty logo příslušného vydavatele.
V opačném případě se vedle labelu "*CARD NUMBER*" zobrazí informace o neplatném čísle karty - "*... starting sequence is invalid!*".

Je-li číslo karty kompletní a správné, zobrazí se fiktivní datum platnosti karty. Reálná data nelze použít z důvodu ochrany soukromí.

Ve formuláři lze dále vyplnit jméno držitele karty.

Kliknutím na tlačítko "*CLEAN*" se smaže obsah ze všech input polí.


## Rozsah a realizace
Stručný výčet znalostí, které jsem využila. *Uvádím znalosti týkající se Reactu, které jsem využila v kombinaci s TypeScriptem. HTML/CSS považuji jako samozřejmost.*

- rozdělení aplikace na menší celky do **komponent**
- práce s **useState** a událostí **onChange**, **onClick**
- **useEffect** se závislostmi
- pokročilá komunikace **React Context** (`useContext`)
- přístup k DOM elementům skrze **Hook `useRef`**
- **formulářové prvky** a **obousměrný data binding**

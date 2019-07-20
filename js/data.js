
  const pokemons = [

    {
      "name": "Bulbasaur",
      "type": "Trawiasty / Trujący",
      "evolution": ["BULBASAUR", "Ivysaur", "Venusaur"],
      "description": "Dzięki bulwie zlokalizowanej na grzbiecie Bulbasaura, mogą pobierać energię ze słońca."
    },

    {
      "name": "Ivysaur",
      "type": "Trawiasty / Trujący",
      "evolution": ["Bulbasaur", "IVYSAUR", "Venusaur"],
      "description": "Gdy pąk na jego grzbiecie przygotowuje się do rozkwitu, zaczyna rozsiewać charakterystyczny zapach."
    },

    {
      "name": "Venusaur",
      "type": "Trawiasty / Trujący",
      "evolution": ["Bulbasaur", "Ivysaur", "VENUSAUR"],
      "description": "Pąk na jego grzbiecie całkowicie rozkwita, umożliwiając Venusaurowi użycie pełni swych roślinnych mocy."
    },

    {
      "name": "Charmander",
      "type": "Ognisty",
      "evolution": ["CHARMANDER", "Charmeleon", "Charizard"],
      "description": "Na końcu ogona jego ogona znajduje się płomień. Mówi się, że jeśli ten płomień gaśnie, Pokémon umiera."
    },

    {
      "name": "Charmeleon",
      "type": "Ognisty",
      "evolution": ["Charmander", "CHARMENLEON", "Charizard"],
      "description": "W porównaniu do poprzedniej ewolucji - Charmandera - są to Pokémony niezwykle uparte i impulsywne."
    },

    {
      "name": "Charizard",
      "type": "Ognisty / Powietrzny",
      "evolution": ["Charmander", "Charmeleon", "CHARIZARD"],
      "description": "Są bardzo terytorialne i często staczają między sobą niezwykle zaciekłe walki o obronę własnego terytorium."
    },

    {
      "name": "Squirtle",
      "type": "Wodny",
      "evolution": ["SQUIRTLE", "Wartortle", "Blastoise"],
      "description": "Squirtle są niezwykle towarzyskie oraz przyjaźnie nastawione do swoich trenerów."
    },

    {
      "name": "Wartortle",
      "type": "Wodny",
      "evolution": ["Squirtle", "WARTORTLE", "Blastoise"],
      "description": "Z powodu swej waleczności ich powłoki często noszą ślady licznych bitew w postaci rys na skorupie."
    },

    {
      "name": "Blastoise",
      "type": "Wodny",
      "evolution": ["Squirtle", "Wartortle", "BLASTOISE"],
      "description": "Blastoise może strzelać wodą z armatek z wystarczającą dokładnością na 160 metrów."
    },

    {
      "name": "Caterpie",
      "type": "Robak",
      "evolution": ["CATERPIE", "Metapod", "Butterfree"],
      "description": "W sytuacji zagrożenia z jego czułków wydziela się brzydki zapach."
    },

    {
      "name": "Metapod",
      "type": "Robak",
      "evolution": ["Caterpie", "METAPOD", "Butterfree"],
      "description": "Powłoka pokrywająca jego ciało jest twarda jak stal."
    },

    {
      "name": "Butterfree",
      "type": "Robak / Powietrzny",
      "evolution": ["Caterpie", "Metapod", "BUTTERFREE"],
      "description": "Butterfree spędza większość czasu na zbieraniu nektaru i pyłku z kwiatów przy użyciu zmysłu węchu."
    },

    {
      "name": "Weedle",
      "type": "Robak / Trujący",
      "evolution": ["WEEDLE", "Kakuna", "Beedrill"],
      "description": "Weedle nie jest bardzo silny, ale może pluć lepką nicią, by złapać w nią wrogów."
    },

    {
      "name": "Kakuna",
      "type": "Robak / Trujący",
      "evolution": ["Weedle", "KAKUNA", "Beedrill"],
      "description": "Kakuny głównie nie ruszają się i czekają na rozwój, często zwisając z gałęzi drzew."
    },

    {
      "name": "Beedrill",
      "type": "Robak / Trujący",
      "evolution": ["Weedle", "Kakuna", "BEEDRILL"],
      "description": "Beedrill jest bardzo agresywnym Pokémonem. Nie należy ruszać ich gniazd, bo atakują całą kolonią."
    },

    {
      "name": "Pidgey",
      "type": "Normalny / Powietrzny",
      "evolution": ["PIDGEY", "Pidgeotto", "Pidgeot"],
      "description": "Dzikie Pidgeye można najczęściej spotkać w lasach i na łąkach. Najczęściej jedzą nasiona i ziarna roślin."
    },

    {
      "name": "Pidgeotto",
      "type": "Normalny / Powietrzny",
      "evolution": ["Pidgey", "PIDGEOTTO", "Pidgeot"],
      "description": "Zazwyczaj siedzą w gnieździe i przez większość dnia wypatrują swojej ofiary."
    },

    {
      "name": "Pidgeot",
      "type": "Normalny / Powietrzny",
      "evolution": ["Pidgey", "Pidgeotto", "PIDGEOT"],
      "description": "Są najbardziej agresywną formą wśród swoich ewolucji, ale dalej są uważane za Pokémony łatwe w obyciu."
    },

    {
      "name": "Rattata",
      "type": "Normalny",
      "evolution": ["RATTATA",  "Raticate"],
      "description": "Ten Pokémon zjada wszystko co znajdzie. Znany jest z podkradania jedzenia ludziom."
    },

    {
      "name": "Raticate",
      "type": "Normalny",
      "evolution": ["Rattata",  "RATICATE"],
      "description": "Jego zęby stale rosną i przez to regularnie musi coś podgryzać, by je ścierać."
    },

    {
      "name": "Spearow",
      "type": "Normalny / Powietrzny",
      "evolution": ["SPEAROW", "Fearow"],
      "description": "Spearow jest nieposłuszny i agresywny nawet w stosunku do swoich trenerów."
    },

    {
      "name": "Fearow",
      "type": "Normalny / Powietrzny",
      "evolution": ["Spearow", "FEAROW"],
      "description": "Atakuje wszystkich bez wyraźnego powodu. Jest jeszcze bardziej agresywny niż jego wcześniejsza forma."
    },

    {
      "name": "Ekans",
      "type": "Trujący",
      "evolution": ["EKANS", "Arbok"],
      "description": "Porusza się bezszelestnie w trawie. Ekans jest w stanie przełknąć dużą zdobycz w całości."
    },

    {
      "name": "Arbok",
      "type": "Trujący",
      "evolution": ["Ekans", "ARBOK"],
      "description": "Na jego podniebieniu znajdują się wysuwane, jadowite kły, którymi umie strzelac."
    },

    {
      "name": "Pikachu",
      "type": "Elektryczny",
      "evolution": ["Pichu", "PIKACHU", "Raichu"],
      "description": "Gdy się zdenerwuje, może uwolnić energię elektryczną zmagazynowaną na policzkach."
    },

    {
      "name": "Raichu",
      "type": "Elektryczny",
      "evolution": ["Pichu", "Pikachu", "RAICHU"],
      "description": "Gdy naładuję się elektrycznością zbyt mocno, wbija ogon w ziemię, by spowodować wyładowanie."
    },

    {
      "name": "Sandshrew",
      "type": "Ziemny",
      "evolution": ["SANDSHREW", "Sandslash"],
      "description": "W sytuacji zagrożenia zwija się w kulkę chroniąc swoje ciało pancerzem."
    },

    {
      "name": "Sandslash",
      "type": "Ziemny",
      "evolution": ["Sandshrew", "SANDSLASH"],
      "description": "Na jego grzbiecie znajdują się kolce, które raz na rok zrzuca, by wyrosły nowe."
    },

    {
      "name": "Nidoran ♀",
      "type": "Trujący",
      "evolution": ["NIDORAN", "Nidorina", "Nidoqueen"],
      "description": "Ma kolce, które skrywają truciznę. Gdy się zdenerwuje wydziela toksynę ze swojego rogu."
    },

    {
      "name": "Nidorina",
      "type": "Trujący",
      "evolution": ["Nidoran", "NIDORINA", "Nidoqueen"],
      "description": "Chowa swoje kolce przebywając w otoczeniu bliskich, by nikogo nie zranić."
    },

    {
      "name": "Nidoqueen",
      "type": "Trujący / Ziemny",
      "evolution": ["Nidoran", "Nidorina", "NIDOQUEEN"],
      "description": "Jej ciało jest pokryte twardymi łuskami. Jest najgroźniejsza, gdy broni młode."
    },

    {
      "name": "Nidoran ♂",
      "type": "Trujący",
      "evolution": ["NIDORAN", "Nidorino", "Nidoking"],
      "description": "Ma wykształcone mięśniej, dzięki którym może poruszać uszami we wszystkie strony."
    },

    {
      "name": "Nidorino",
      "type": "Trujący",
      "evolution": ["Nidoran", "NIDORINO", "Nidoking"],
      "description": "Jego róg jest twardszy niż diament."
    },

    {
      "name": "Nidoking",
      "type": "Trujący / Ziemny",
      "evolution": ["Nidoran", "Nidorino", "NIDOKING"],
      "description": "Posiada niezwykle silny ogon. Jednym jego ruchem, może przewrócić metalowe konstrukcje."
    },

    {
      "name": "Clefairy",
      "type": "Wróżkowy",
      "evolution": ["Cleffa", "CLEFAIRY", "Clefable"],
      "description": "Clefairy jest bardzo przyjacielskim Pokémonem, jednak czasem boi się ludzi i niektórych Pokémonów."
    },

    {
      "name": "Clefable",
      "type": "Wróżkowy",
      "evolution": ["Cleffa", "Clefairy", "CLEFABLE"],
      "description": "Są rzadko widywane przez trenerów, gdyż ukrywają się w miejscach, gdzie nie panuje zbyt wielki hałas."
    },

    {
      "name": "Vulpix",
      "type": "Ognisty",
      "evolution": ["VULPIX", "Ninetales"],
      "description": "W momencie urodzenia Vulpix posiada tylko jeden, biały ogon. Wraz z upływem czasu, ogon rozdziela się na sześć mniejszych."
    },

    {
      "name": "Ninetales",
      "type": "Ognisty",
      "evolution": ["Vulpix", "NINETALES"],
      "description": "Mówi się, że każdy ogon Ninetalesa podobno posiada własną mityczną moc, która pomaga mu żyć nawet 1000 lat."
    },

    {
      "name": "Jigglypuff",
      "type": "Normalny / Wróżkowy",
      "evolution": ["Igglybuff", "JIGGLYPUFF", "Wigglytuff"],
      "description": "Pięknie śpiewa, jednak słuchanie jego śpiewu usypia."
    },

    {
      "name": "Wigglytuff",
      "type": "Normalny / Wróżkowy",
      "evolution": ["Igglybuff", "Jigglypuff", "WIGGLYTUFF"],
      "description": "Oczy Wigglytuffa są pokryte cienką warstwą łez."
    },

    {
      "name": "Zubat",
      "type": "Trujący / Powietrzny",
      "evolution": ["ZUBAT", "Golbat", "Crobat"],
      "description": "Zubat nie ma oczu. Podczas latania korzysta z echolokacji."
    },

    {
      "name": "Golbat",
      "type": "Trujący / Powietrzny",
      "evolution": ["Zubat", "GOLBAT", "Crobat"],
      "description": "Żywi się krwią. Jest aktywny w nocy, wówczas szuka swoich ofiar."
    },

    {
      "name": "Oddish",
      "type": "Trawiasty / Trujący",
      "evolution": ["ODDISH", "Gloom", "Vileplume / Bellossom"],
      "description": "Podczas dnia Oddish zakopuje się w ziemi, skąd pobiera substancje odżywcze."
    },

    {
      "name": "Gloom",
      "type": "Trawiasty / Trujący",
      "evolution": ["Oddish", "GLOOM", "Vileplume / Bellossom"],
      "description": "Kwiat na jego głowie wydziela brzydki zapach, który powoduje omdlenia u ludzi."
    },

    {
      "name": "Vileplume",
      "type": "Trawiasty / Trujący",
      "evolution": ["Oddish", "Gloom", "VILEPLUME"],
      "description": "Kwiat na jego głowie jest niemal zbyt ciężki, by Vileplume mógł go utrzymać."
    },

    {
      "name": "Paras",
      "type": "Robak / Trawiasty",
      "evolution": ["PARAS", "Parasect"],
      "description": "Na jego grzbiecie rosną dwa, czerwonożółte grzyby zwane jako \"tochukaso\"."
    },

    {
      "name": "Parasect",
      "type": "Robak / Trawiasty",
      "evolution": ["Paras", "PARASECT"],
      "description": "W pełni rozwinięty pasożytniczy grzyb na jego plecach - tochukaso - ma nad nim pełną kontrolę."
    },

    {
      "name": "Venonat",
      "type": "Robak / Trujący",
      "evolution": ["VENONAT", "Venomoth"],
      "description": "Śpią przez cały dzień, ponieważ małe owady, którymi się żywią, wychodzą tylko w nocy."
    },

    {
      "name": "Venomoth",
      "type": "Robak / Trujący",
      "evolution": ["Venonat", "VENOMOTH"],
      "description": "Trzepocząc skrzydłami uwalnia proszek, który w zależności od koloru jest albo zabójczy, albo wywołuje paraliż."
    },

    {
      "name": "Diglett",
      "type": "Ziemny",
      "evolution": ["DIGLETT", "Dugtrio"],
      "description": "Diglett drąży tunele pod ziemią, dzięki czemu użyźnia glebę."
    },

    {
      "name": "Dugtrio",
      "type": "Ziemny",
      "evolution": ["Diglett", "DUGTRIO"],
      "description": "Jego trzy głowy należą do tego samego ciała, przez co myślą dokładnie o tym samym i działają wspólnie."
    },

    {
      "name": "Meowth",
      "type": "Normalny",
      "evolution": ["MEOWTH", "Persian"],
      "description": "Na czole widnieje złoty obiekt, zwany \"talizmanem\"."
    },

    {
      "name": "Persian",
      "type": "Normalny",
      "evolution": ["Meowth", "PERSIAN"],
      "description": "Przy pomocy wąsów wyczuwa ruchy powietrza, co pozwala Pokemonowi badać otoczenie."
    },

    {
      "name": "Psyduck",
      "type": "Wodny",
      "evolution": ["PSYDUCK",  "Golduck"],
      "description": "Dręczą go wieczne migreny. Gdy migrena się nasili, Psyduck jest w stanie użyć tajemniczej psychicznej mocy."
    },

    {
      "name": "Golduck",
      "type": "Wodny",
      "evolution": ["Psyduck", "GOLDUCK"],
      "description": "Jego ręce i nogi zakończone są trzema pazurami, pomiędzy którymi znajdują się błony, dzięki czemu niezwykle szybko pływa."
    },

    {
      "name": "Mankey",
      "type": "Walczący",
      "evolution": ["MANKEY", "Primeape"],
      "description": "Jest niezwykle agresywnym Pokémonem. Łatwo go rozzłościć i wtedy wpada w szał."
    },

    {
      "name": "Primeape",
      "type": "Walczący",
      "evolution": ["Mankey", "PRIMEAPE"],
      "description": "Jego dłonie nie są zakończone palcami, tylko czymś podobnym do rękawic bokserskich, które pomaga mu w walce."
    },

    {
      "name": "Growlithe",
      "type": "Ognisty",
      "evolution": ["GROWLITHE", "Arcanine"],
      "description": "Są odważne i posłuszne. Dzięki swym cechom są wykorzystywane w policji."
    },

    {
      "name": "Arcanine",
      "type": "Ognisty",
      "evolution": ["Growlithe", "ARCANINE"],
      "description": "Arcanine chowają zapas żywności w obszernej futrzanej grzywie."
    },

    {
      "name": "Poliwag",
      "type": "Wodny",
      "evolution": ["POLIWAG", "Poliwhirl", "Poliwrath"],
      "description": "Jego zakręcona linia na brzuchu to jego organy wewnętrzne, które widać przez półprzezroczystą skórę."
    },

    {
      "name": "Poliwhirl",
      "type": "Wodny",
      "evolution": ["Poliwag", "POLIWHIRL", "Poliwrath"],
      "description": "Spirala na jego brzuchu powoli się porusza, a jeśli się na nią patrzy, wywołuje senność."
    },

    {
      "name": "Poliwrath",
      "type": "Wodny / Walczący",
      "evolution": ["Poliwag", "Poliwhirl", "POLIWRATH"],
      "description": "Potężne mięśnie Poliwratha nigdy się nie męczą. Dzięki czemu pływając, może pokonać długie dystanse."
    },

    {
      "name": "Abra",
      "type": "Psychiczny",
      "evolution": ["ABRA", "Kadabra", "Alakazam"],
      "description": "Potrafi czytać w myślach. Jeśli wyczuje niebezpieczeństwo, może się teleportować, w celu jego uniknięcia."
    },

    {
      "name": "Kadabra",
      "type": "Psychiczny",
      "evolution": ["Abra", "KADABRA", "Alakazam"],
      "description": "Tylko ludzi o szczególnie silnej psychice mogą być trenerami tego Pokémona."
    },

    {
      "name": "Alakazam",
      "type": "Psychiczny",
      "evolution": ["Abra", "Kadabra", "ALAKAZAM"],
      "description": "Posiada dwie łyżeczki w których gromadzi swoją moc. Porusza się tylko i wyłącznie za pomocą telekinezy."
    },

    {
      "name": "Machop",
      "type": "Walczący",
      "evolution": ["MACHOP", "Machoke", "Machamp"],
      "description": "Całe jego ciało ma dobrze zbudowane mięśnie, dzięki nim może podnosić rzeczy wiele razy cięższe od niego."
    },

    {
      "name": "Machoke",
      "type": "Walczący",
      "evolution": ["Machop", "MACHOKE", "Machamp"],
      "description": "Posiada czarno-złoty pas, który oszczędza jego energię i reguluje siłę Machoke'a. "
    },

    {
      "name": "Machamp",
      "type": "Walczący",
      "evolution": ["Machop", "Machoke", "MACHAMP"],
      "description": "Potrafi zadać pięćset uderzeń na sekundę. Ma cztery ramiona, więc może uderzać z różnych kątów."
    },

    {
      "name": "Bellsprout",
      "type": "Trawiasty / Trujący",
      "evolution": ["BELLSPROUT", "Weepinbell", "Victreebel"],
      "description": "Ich łodygi są ​​długie i bardzo elastyczne, dzięki czemu są w stanie szybko unikać ataków."
    },

    {
      "name": "Weepinbell",
      "type": "Trawiasty / Trujący",
      "evolution": ["Bellsprout", "WEEPINBELL", "Victreebel"],
      "description": "Weepinbell wydziela niezwykle silny wewnętrzny kwas, który posiada może rozpuścić niemal wszystko."
    },

    {
      "name": "Victreebel",
      "type": "Trawiasty / Trujący",
      "evolution": ["Bellsprout", "Weepinbell", "VICTREEBEL"],
      "description": "Żywi się ptakami i gryzoniami, które wabi zapachem ze swych ust."
    },

    {
      "name": "Tentacool",
      "type": "Wodny / Trujący",
      "evolution": ["TENTACOOL", "Tentacruel"],
      "description": "Zaatakowane z daleka atakują promieniami, a z bliska dotkliwie parzą i żądlą."
    },

    {
      "name": "Tentacruel",
      "type": "Wodny / Trujący",
      "evolution": ["Tentacool", "TENTACRUEL"],
      "description": "Jest jadowity, ale częściej do łapania ofiary używa macek, którymi ją zgniata."
    },

    {
      "name": "Geodude",
      "type": "Kamienny / Ziemny",
      "evolution": ["GEODUDE", "Graveler", "Golem"],
      "description": "Te pokemony często walczą ze sobą, by sprawdzić, który jest twardszy."
    },

    {
      "name": "Graveler",
      "type": "Kamienny / Ziemny",
      "evolution": ["Geodude", "GRAVELER", "Golem"],
      "description": "Żywi się skałami. Jeśli pęknie lub się rozbije, może powrócić do stanu pierwotnego."
    },

    {
      "name": "Golem",
      "type": "Kamienny / Ziemny",
      "evolution": ["Geodude", "Graveler", "GOLEM"],
      "description": "Ciało Golema jest tak twarde, że nawet dynamit nie może go naruszyć."
    },

    {
      "name": "Ponyta",
      "type": "Ognisty",
      "evolution": ["PONYTA", "Rapidash"],
      "description": "Ponyta może kontrolować swoje płomienie, dzięki czemu nie poparzy jeźdźca, któremu ufa."
    },

    {
      "name": "Rapidash",
      "type": "Ognisty",
      "evolution": ["Ponyta", "RAPIDASH"],
      "description": "Rapidashe mają żywe usposobienie i uwielbiają rywalizację, szczególnie w wyścigach."
    },

    {
      "name": "Slowpoke",
      "type": "Wodny / Psychiczny",
      "evolution": ["SLOWPOKE", "Slowbro"],
      "description": "Bardzo powoli reagują na bodźce, wystarczy chwila, a zapominają, co właśnie robiły."
    },

    {
      "name": "Slowbro",
      "type": "Wodny / Psychiczny",
      "evolution": ["Slowpoke", "SLOWBRO"],
      "description": "Na ogonie widoczna jest podłużna muszla - to Shellder, który wgryzł się tam i wywołał ewolucję Slowpoke'a."
    },

    {
      "name": "Magnemite",
      "type": "Elektryczny / Stalowy",
      "evolution": ["MAGNEMITE", "Magneton", "Magnezone"],
      "description": "Zazwyczaj nie wchodzą nikomu w drogę. Walcząc, najpierw próbują unieszkodliwić wroga atakami obronnymi."
    },

    {
      "name": "Magneton",
      "type": "Elektryczny / Stalowy",
      "evolution": ["Magnemite", "MAGNETON", "Magnezone"],
      "description": "Gdy aktywność plam słonecznych zwiększa się, Magnetony stają się dziwnie pobudzone..."
    },

    {
      "name": "Farfetch'd",
      "type": "Normalny / Powietrzny",
      "evolution": ["FARFETCH'D"],
      "description": "W jednym ze skrzydeł trzyma pora, to jego broń, materiał gniazdowy lub awaryjne źródło pożywienia."
    },

    {
      "name": "Doduo",
      "type": "Normalny / Powietrzny",
      "evolution": ["DODUO", "Dodrio"],
      "description": "Ten ptak nie potrafi latać, ale ma bardzo wytrzymałe nogi, dzięki czemu szybko biega."
    },

    {
      "name": "Dodrio",
      "type": "Normalny / Powietrzny",
      "evolution": ["Doduo", "DODRIO"],
      "description": "Ma trzy głowy, a każda osadzona jest na długiej szyi i wyraża trzy różne emocje - smutek, złość i radość."
    },

    {
      "name": "Seel",
      "type": "Wodny",
      "evolution": ["SEEL", "Dewgong"],
      "description": "Seel są bardzo aktywne w bardzo niskich temperaturach. Białe futro pozwala na kamuflaż ze śniegiem."
    },

    {
      "name": "Dewgong",
      "type": "Wodny / Lodowy",
      "evolution": ["Seel", "DEWGONG"],
      "description": "Przyjacielskie i spokojne Pokemony, choć leniwe. Potrafią wylegiwać się na krach całymi dniami."
    },

    {
      "name": "Grimer",
      "type": "Trujący",
      "evolution": ["GRIMER", "Muk"],
      "description": "Ciało Grimera nie jest stałe, dlatego może prześlizgać się przez najmniejsze otwory."
    },

    {
      "name": "Muk",
      "type": "Trujący",
      "evolution": ["Grimer", "MUK"],
      "description": "Mimo sporych rozmiarów, uwielbiają przytulać się do swoich trenerów, co czasem bywa niebezpieczne."
    },

    {
      "name": "Shellder",
      "type": "Wodny",
      "evolution": ["SHELLDER", "Cloyster"],
      "description": "Za pomocą swojego języka jest w stanie zakopać się w piasku oraz wabić i chwytać ofiary."
    },

    {
      "name": "Cloyster",
      "type": "Wodny / Lodowy",
      "evolution": ["Shellder", "CLOYSTER"],
      "description": "Pokémon często drwi z przeciwników, gdyż jest świadomy wytrzymałości swojej muszli."
    },

    {
      "name": "Gastly",
      "type": "Duch / Trujący",
      "evolution": ["GASTLY", "Haunter", "Gengar"],
      "description": "Ciało tego Pokémona jest zbudowane w 95% z gazu. Ten Pokémon uwielbia wchodzić w cudze ciało."
    },

    {
      "name": "Haunter",
      "type": "Duch / Trujący",
      "evolution": ["Gastly", "HAUNTER", "Gengar"],
      "description": "Haunter lubi wywoływać iluzje, jednak jest miłym i posłusznym Pokemonem."
    },

    {
      "name": "Gengar",
      "type": "Duch / Trujący",
      "evolution": ["Gastly", "Haunter", "GENGAR"],
      "description": "Reputację psotnika Gengar zawdzięcza swojej naturalnej skłonności do płatania żywym istotom psikusów."
    },

    {
      "name": "Onix",
      "type": "Kamienny / Ziemny",
      "evolution": ["ONIX", "Steelix"],
      "description": "Onix uwielbia jeść duże głazy, które napotyka podczas rycia pod ziemią."
    },

    {
      "name": "Drowzee",
      "type": "Psychiczny",
      "evolution": ["DROWZEE", "Hypno"],
      "description": "Jest w stanie uśpić ludzi, a następnie pożywić się ich snami, wysysając je przez nos."
    },

    {
      "name": "Hypno",
      "type": "Psychiczny",
      "evolution": ["Drowzee", "HYPNO"],
      "description": "Hypno zawsze trzyma w lewej ręce wahadełko. Jest to narzędzie służące do hipnozy."
    },

    {
      "name": "Krabby",
      "type": "Wodny",
      "evolution": ["KRABBY", "Kingler"],
      "description": "W sytuacji wytwarza pianę, by sprawić wrażanie, że jest większy."
    },

    {
      "name": "Kingler",
      "type": "Wodny",
      "evolution": ["Krabby", "KINGLER"],
      "description": "Kinglery porozumiewają się między sobą machając szczypcami. Jednak, ponieważ są one ciężkie, szybko się męczą."
    },

    {
      "name": "Voltorb",
      "type": "Elektryczny",
      "evolution": ["VOLTORB", "Electrode"],
      "description": "W przypadku poczucia zagrożenia wybucha niszcząc wszystko do o koła, jednocześnie nie raniąc siebie. "
    },

    {
      "name": "Electrode",
      "type": "Elektryczny",
      "evolution": ["Voltorb", "ELECTRODE"],
      "description": "Ten Pokemon żywi się elektrycznością z atmosfery. Gdy zje jej za dużo - wybucha."
    },

    {
      "name": "Exeggcute",
      "type": "Trawiasty / Psychiczny",
      "evolution": ["EXEGGCUTE", "Exeggutor"],
      "description": "Mimo, że przypominają jajka, bliżej im do nasion. Komunikują się ze sobą za pomocą telepatii."
    },

    {
      "name": "Exeggutor",
      "type": "Trawiasty / Psychiczny",
      "evolution": ["Exeggcute", "EXEGGUTOR"],
      "description": "Jego głowy stale rosną, gdy są wystawiona na światło słoneczne."
    },

    {
      "name": "Cubone",
      "type": "Ziemny",
      "evolution": ["CUBONE", "Marowak"],
      "description": "Na jego głowie znajduje się czaszka, należąca do jego zmarłej matki, zaś w ręku trzyma kość."
    },

    {
      "name": "Marowak",
      "type": "Ziemny",
      "evolution": ["Cubone", "MAROWAK"],
      "description": "Po ewolucji pokonał smutek nigdy nie ujrzawszy swojej matki. Nie jest już tak płaczliwy jak jego mniejsza forma."
    },

    {
      "name": "Hitmonlee",
      "type": "Walczący",
      "evolution": ["Tyrogue", "HITMONLEE"],
      "description": "Jest bardzo wygimnastykowanym Pokémonem. Potrafi zadawać kopnięcia z każdej pozycji."
    },

    {
      "name": "Hitmonchan",
      "type": "Walczący",
      "evolution": ["Tyrogue", "HITMONCHAN"],
      "description": "Jego ciosy są zbyt szybkie, by dostrzec je gołym okiem."
    },

    {
      "name": "Lickitung",
      "type": "Normalny",
      "evolution": ["LICKITUNG"],
      "description": "Liżą wszystko, co jest dla nich nowe i co znajduje się pobliżu - łącznie z ludźmi."
    },

    {
      "name": "Koffing",
      "type": "Trujący",
      "evolution": ["KOFFING", "Weezing"],
      "description": "W zależności od nastroju, Koffingi wydzielają różne rodzaje gazu. W sytuacjach skrajnego zagrożenia są w stanie wywołać samo-eksplozję."
    },

    {
      "name": "Weezing",
      "type": "Trujący",
      "evolution": ["Koffing", "WEEZING"],
      "description": "Weezing głównie żywi się zgniłymi rzeczami i odpadkami. Weezingi potrafią znaleźć brudny, zaniedbany dom i zagnieździć się tam."
    },

    {
      "name": "Rhyhorn",
      "type": "Ziemny / Kamienny",
      "evolution": ["RHYHORN", "Rhydon", "Rhyperior"],
      "description": "Rhyhorn nie potrafi skręcać, biegnie więc w prostej linii niszcząc wszystko po drodze."
    },

    {
      "name": "Rhydon",
      "type": "Ziemny / Kamienny",
      "evolution": ["Rhyhorn", "RHYDON", "Rhyperior"],
      "description": "Róg odgrywa rolę piorunochronu, a co za tym idzie Rhydon odporny jest na ataki elektryczne."
    },

    {
      "name": "Chansey",
      "type": "Normalny",
      "evolution": ["Happiny", "CHANSEY", "Blissey"],
      "description": "Podstawową umiejętnością Chansey jest leczenie Pokémonów, dlatego podczas walki używa tej zdolności na sobie."
    },

    {
      "name": "Tangela",
      "type": "Trawiasty",
      "evolution": ["TANGELA", "Tangrowth"],
      "description": "Tangela oplątuje pnączami wszystko, co porusza się zbyt blisko niego."
    },

    {
      "name": "Kangaskhan",
      "type": "Normalny",
      "evolution": ["KANGASKHAN"],
      "description": "Mimo postury, te Pokémony są bardzo opiekuńcze. Zazwyczaj można spotkać je w stadach."
    },

    {
      "name": "Horsea",
      "type": "Wodny",
      "evolution": ["HORSEA", "Seadra", "Kingdra"],
      "description": "W przypadku zagrożenia, wystrzeliwują chmurę tuszu pozwalającą im na ucieczkę oraz zdezorientowanie przeciwnika."
    },

    {
      "name": "Seadra",
      "type": "Wodny",
      "evolution": ["Horsea", "SEADRA", "Kingdra"],
      "description": "Seadra jest bardzo sprawnym łowcą, poluje na zdobycz dzięki swym doskonałym zdolnościom pływackim."
    },

    {
      "name": "Goldeen",
      "type": "Wodny",
      "evolution": ["GOLDEEN", "Seaking"],
      "description": "Jest świetnym wojownikiem w wodzie, choć umie atakować także na lądzie."
    },

    {
      "name": "Seaking",
      "type": "Wodny",
      "evolution": ["Goldeen", "SEAKING"],
      "description": "Jesienią, samce Seakingów odbywają tańce godowe, by przyciągnąć samice."
    },

    {
      "name": "Staryu",
      "type": "Wodny",
      "evolution": ["STARYU",  "Starmie"],
      "description": "Na środku posiada czerwony kryształ - zwany rdzeniem - który jest jego sercem."
    },

    {
      "name": "Starmie",
      "type": "Wodny / Psycho",
      "evolution": ["Staryu",  "STARMIE"],
      "description": "Starmie może emitować fale elektryczne z rdzenia, które są tak silne, że docierają do najdalszych części wszechświata."
    },

    {
      "name": "Mr. Mime",
      "type": "Psychiczny / Wróżkowy",
      "evolution": ["Mime Jr.",  "MR. MIME"],
      "description": "Uwielbia chwalić się swoimi umiejętnościami pantomimicznymi. Gdy ktoś mu przerwie występ, zostanie spoliczkowany."
    },

    {
      "name": "Scyther",
      "type": "Robak / Powietrzny",
      "evolution": ["SCYTHER",  "Scizor"],
      "description": "Jego ostrza są zdolne przecinać kłody, i stają się ostrzejsze, kiedy przecinają coraz twardsze materiały."
    },

    {
      "name": "Jynx",
      "type": "Lodowy / Psychiczny",
      "evolution": ["Smoochum",  "JYNX"],
      "description": "Uwielbiają towarzystwo ludzi i często za okazaną tym Pokémonom pomoc dziękują buziakiem."
    },

    {
      "name": "Electabuzz",
      "type": "Elektryczny",
      "evolution": ["Elekid",  "ELECTABUZZ", "Electivire"],
      "description": "Ten szybki i zwinny Pokémon swoimi silnymi pięściami potrafi wywołać elektryczną burzę."
    },

    {
      "name": "Magmar",
      "type": "Ognisty",
      "evolution": ["Magby",  "MAGMAR", "Magmortar"],
      "description": "Jest stworzony z lawy. Temperatura jego ciała sięga 1,200° Celsiusa."
    },

    {
      "name": "Pinsir",
      "type": "Robak",
      "evolution": ["PINSIR"],
      "description": "Jest niezwykle silnym Pokémonem. Potrafi schwytać w swoje szczypce przeciwnika dwa razy cięższego od siebie i bez trudu go podnieść."
    },

    {
      "name": "Tauros",
      "type": "Normalny",
      "evolution": ["TAUROS"],
      "description": "Taurosy uwielbiają walczyć. Jeśli nie mają w danej chwili przeciwnika, zaatakują drzewo, by rozładować swoją energię."
    },

    {
      "name": "Magikarp",
      "type": "Wodny",
      "evolution": ["MAGIKARP", "Gyarados"],
      "description": "Nie stanowi zagrożenia. Wielu ludzi zastanawia się, w jaki sposób ten Pokémon w ogóle przetrwał."
    },

    {
      "name": "Gyarados",
      "type": "Wodny",
      "evolution": ["Magikarp", "Gyarados"],
      "description": "Gyarados to najbardziej agresywny Pokémon na świecie. Jest praktycznie niemożliwy do oswojenia."
    },

    {
      "name": "Lapras",
      "type": "Wodny / Lodowy",
      "evolution": ["LAPRAS"],
      "description": "Jest chętny do pomagania ludziom i spokojny. Posiada wysoko rozwinięta inteligencję - na tyle, by zrozumieć mowę ludzką."
    },

    {
      "name": "Ditto",
      "type": "Normalny",
      "evolution": ["DITTO"],
      "description": "Potrafi przyjąć postać i statystyki każdego Pokémona. Jednak jeśli zrobi to z pamięci, może coś zrobić źle."
    },

    {
      "name": "Eevee",
      "type": "Normalny",
      "evolution": ["EEVEE", "Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon"],
      "description": "Jest jedynym Pokémonem, który ma osiem różnych form ewolucyjnych."
    },

    {
      "name": "Vaporeon",
      "type": "Wodny",
      "evolution": ["Eevee", "VAPOREON"],
      "description": "Są to spokojnie Pokémony o przyjacielskim, psim charakterze. Uwielbiają być doceniane i pieszczone przez właścicieli."
    },

    {
      "name": "Jolteon",
      "type": "Elektryczny",
      "evolution": ["Eevee", "JOLTEON"],
      "description": "Kolce na jego ciele produkują niewielkie iskry. Jest w stanie zaatakować nawet z siłą 10 000 voltów."
    },

    {
      "name": "Flareon",
      "type": "Ognisty",
      "evolution": ["Eevee", "FLAREON"],
      "description": "Gdy magazynuje w sobie energię cieplną, jego temperatura może wzrosnąć do ponad 1600 stopni."
    },

    {
      "name": "Porygon",
      "type": "Normalny",
      "evolution": ["PORYGON", "Porygon2", "Porygon-Z"],
      "description": "Porygon to pierwszy na świecie sztuczny Pokémon. Ma zaprogramowane jedynie kilka emocji."
    },

    {
      "name": "Omanyte",
      "type": "Kamienny / Wodny",
      "evolution": ["OMANYTE",  "Omastar"],
      "description": "Bardzo spokojne i płochliwe. Nie lubią walki - gdy zostaną zaatakowanie, chowają się do swojej muszli."
    },

    {
      "name": "Omastar",
      "type": "Kamienny / Wodny",
      "evolution": ["Omanyte",  "OMASTAR"],
      "description": "Niewiele wiadomo o środowisku życia tego Pokémona. Prawdopodobnie, zasiedlały morza i oceany całego świata."
    },

    {
      "name": "Kabuto",
      "type": "Kamienny / Wodny",
      "evolution": ["KABUTO",  "Kabutops"],
      "description": "Potrafi bardzo szybko pływać. Chroni się dzięki swojej sztywnej powłoce."
    },

    {
      "name": "Kabutops",
      "type": "Kamienny / Wodny",
      "evolution": ["Kabuto",  "KAPUTOPS"],
      "description": "Kabutopsy są bardzo rzadkimi Pokémonami. Wiedza o nich jest nikła a także nie posiadają swojego naturalnego środowiska."
    },

    {
      "name": "Aerodactyl",
      "type": "Kamienny / Powietrzny",
      "evolution": ["AERODACTYL"],
      "description": "Był gatunkiem wymarłym. Odtworzono go przy pomocy materiału genetycznego w bursztynie."
    },

    {
      "name": "Snorlax",
      "type": "Normalny",
      "evolution": ["Munchlax", "SNORLAX"],
      "description": "Śpi przez większość życia. Budzą się jedynie po to, by zaspokoić głód."
    },

    {
      "name": "Articuno",
      "type": "Lodowy / Powietrzny",
      "evolution": ["ARTICUNO"],
      "description": "Articuno jest legendarnym ptakiem-Pokémonem, który może kontrolować lód."
    },

    {
      "name": "Zapdos",
      "type": "Elektryczny / Powietrzny",
      "evolution": ["ZAPDOS"],
      "description": "Zapdos jest legendarnym ptakiem-Pokémonem, który może kontrolować elektryczność."
    },

    {
      "name": "Moltres",
      "type": "Ognisty / Powietrzny",
      "evolution": ["MOLTRES"],
      "description": "Moltres jest legendarnym ptakiem-Pokémonem, który może kontrolować ogień."
    },

    {
      "name": "Dratini",
      "type": "Smoczy",
      "evolution": ["DRATINI", "Dragonair", "Dragonite"],
      "description": "Stale zrzuca skórę. Możliwe, że ma to związek z energią życiową, która przepełnia jego ciało."
    },

    {
      "name": "Dragonair",
      "type": "Smoczy",
      "evolution": ["Dratini", "DRAGONAIR", "Dragonite"],
      "description": "Dragonairy potrafią przemieszczać przedmioty według własnej woli."
    },

    {
      "name": "Dragonite",
      "type": "Smoczy / Powietrzny",
      "evolution": ["Dratini", "DRAGONAIR", "Dragonite"],
      "description": "Podobno inteligencją dorównuje ludziom. Jest nieufny, lecz bardzo ciekawski."
    },

    {
      "name": "Mewtwo",
      "type": "Psychiczny",
      "evolution": ["MEWTWO"],
      "description": "Jego serce jest zimne jak głaz, a sam Mewtwo nie czuje żadnych emocji poza chęcią pokonania swoich przeciwników."
    },

    {
      "name": "Mew",
      "type": "Psychiczny",
      "evolution": ["MEW"],
      "description": "Jako że tylko kilkoro ludzi na świecie miało szczęście go spotkać, niewiele wiadomo o jego zachowaniu."
    }

  ]
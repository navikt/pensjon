---
title: Produktområde pensjon i NAV
vimeoId: 373391229
---
{% include header-scripts.html %}

## Produktområde Pensjon i NAV
Området er fordelt på 10 produktteam som jobber med med løsningene for [alderspensjon] og [uføretrygd]:

* Paraply PDL - ta i bruk den nye [persondataløsningen] på pensjonsområdet
* Pensak Batch - utvikling og drift av automatiske jobber
* EESSI Pensjon - forvalter og videreutvikler løsninger for støtte til saksbehandling av pensjon- og uføresaker med EØS-knytning
* Pensjonsbrev - ansvar for informasjon til brukerne via analog og digital post
* Pentek - teknisk modernisering av eksiterende legacy applikasjon, herunder overgang til [NAIS]
* Pensak Ohana og Pensak Kjerne - leverer ny funksjonalitet ved lovendringer, forbedrer mangler, jobber med teknisk modernisering og retter feil fra produksjon for saksbehandlingsløsningen
* PenRegler - jobber med regelimplementasjon for alderspensjon og uføretrygd, skriver om regelmotor fra [Blaze Advisor] til [Kotlin]
* Supplerende stønad - innføre nye regler og systemløsning for [supplerende stønad til uføre flyktninger]
* Samhandling - utvikler og forvalter tjenester mellom NAV, [tjenestepensjonsordninger] og andre eksterne samhandlere
* Selvbetjening - jobber med selvbetjeningsapplikasjonene [din pensjon] og [din uføretrygd]

Arbeidet ble startet i 2006 i forbindelse med [pensjonsreformen], og 
utvidet med løsninger for uføretrygd i 2015 som en del av [uførereformen]. Pensjon har
gått inn som en permanent del av produktområdestrukturen i NAV fra
juni 2020 og er en viktig del av NAV og velferdsstaten.

### Organisasjonen blir stadig smidigere
NAV har har gått fra å være kjent for sine store IT-fiaskoer til å bli
ansett av mange som en av de plassene der det skjer i Norsk IT-bransje. Vi
liker å tro at det er på grunn av den kursen vi har satt. Innenfor
pensjonsområdet prøver vi så godt det lar seg gjøre å leve opp til
denne visjonen igjennom:

1. Fremtidsrettet organisering (smidige produktteam istedenfor prosjekter)
2. Fremtidsrettet teknologi (kontinuerlig deployment med Docker + Kubernetes, mikrotjenester, hendelsesdrevet)
3. Ansvarlig bruk av de dataene vi har tilgjengelig
4. Et klart samfunnsoppdrag som både er lett å forstå og lett å måle

Se hvordan IT-utviklingen i NAV har satt kursen i retning fra tungrodde og
kostbare IT-systemer til smidige løsninger: <https://memu.no/artikler/it-losninger-i-rekordfart-hadde-ikke-gatt-for-to-ar-siden/>

### Hvem er vi?
Teamene har en tverrfaglig sammensetning av domeneeksperter, designere,
utviklere og produkteiere. Rundt teamene har vi et støtteapparat som sørger
for økonomi, kommunikasjon og andre funksjoner for å støtte produktteamene.

Vi er en god blanding av folk .

Vi har en blanding av innleide konsulenter og NAV-ansatte, med forskjellig bakgrunn, alder og kjønn. Av de 57 utviklerne våre, er 25 in-house, og det
blir stadig flere. Vi rekrutterer i disse dager flere utviklere direkte til området og håper å finne
flere som ønsker å jobbe for at NAV får enda større eierskap til egne applikasjoner og systemer.

### Kontorlokaler
I disse dager så jobber vi som de fleste andre i Oslo-området på hjemmekontor.  
Vi ser at dette er en arbeidsform som fungerer veldig bra for mange, og kommer nok i 
stor grad også til å fortsette med dette etter at pandemenien har gitt seg. 
Vi har kontorer i [Sannergata 2] øverst på Grunerløkka med kort vei til [verdens beste 
kaffe] og en rekke vannhull. 

## Utvikleropplevelse
Vi tror at utviklere trives best når de får mulighet til i stor grad selv bestemme over sine egen arbeidshverdag og vi mener at 
det å bygge opp et internt miljø med egenansatte utviklere er helt essensielt for de endrignene som NAV skal gjennom de neste årene.

### Lokalt utviklingsmiljø
Vi etterstreber stor valgfrihet når det kommer til utstyr og utviklingsmiljø. I dag kan man velge mellom Windows eller macOS og vi er kun 
noen brannmuråpninger unna å også kunne tilby Linux. Utviklingsmiljøet og andre verktøy er også opp til utvikleren selv, 
enten det måtte være [Visual Studio Code], [IntelliJ] eller [Eclipse].

### Kildekode
Ny kildekode i NAV er som default [open source] og ligger på GitHub. Vi har fortsatt en del lukkede repositories, men er i ferd med 
å åpne opp disse. Pr. i dag har vi følgende åpne repositories:

{% include generated-repos.md %}

Vi bruker norsk i programkode for termer fra problemdomenet vårt. Grunnen til dette er at kildekoden vi skriver
skal kunne sees i sammenheng med lover og regler. For applikasjoner som ikke har mye domenelogikk er språk valgfritt.
Ved første øyekast kan det se litt rart ut med kildekode med norske begreper blandet med engelsk, men man blir fort
vant til det.

### Programmeringsspråk
Teknisk sett er det Java og Kotlin som regjerer på serversiden. Det som skjer i nettleseren er JavaScript 
med blant annet React. Vårt mål er å kommunisere via Apache Kafka og REST, men det er fortsatt noen spor etter gammel teknologi.
Vi monitorerer metrikker via Prometheus og nyter synet av dem i Grafana. 

### Bygg og deploy
Vi er i ferd med å legge over til kontinuerlige leveranser for alle applikasjoner på området. 
Teamene drifter all kode som vi skriver.

Vi har noen applikasjoner som kjører på gamle plattformer slik som WAS, men er i ferd med å migrere 
disse til [NAIS] som er NAVs plattform for å kjøre Docker-kontainere med
[Kubernetes]. Her har vi tilgang til en moderne stack med debugging- og monitoreringsverktøy.
Alle nye applikasjoner kjører selvfølgelig på [NAIS]. 

Hovedsaklig så bygger vi og deployer koden vår fra Jenkins, men vi har ikke låst oss til dette. Flere av applikasjonene våre blir nå administrert i [Github Actions].


## Kontakt
Hvis du lurer på noe angående området ta gjerne kontakt med [Kjersti] eller
[Erik]. Eller kanskje du kjenner noen andre som jobber hos oss?
Moderniseringen av velferdsstaten går i en rivende fart og vi
jobber hver dag for å bygge [det som betyr noe].

{% include generated-members.md %}

[det som betyr noe]: https://www.detsombetyrnoe.no
[Eclipse]: https://www.eclipse.org/
[Github Actions]: https://github.com/features/actions
[IntelliJ]: https://www.jetbrains.com/idea/
[Kafka]: https://kafka.apache.org/
[open source]: https://github.com/navikt/offentlig/blob/master/OpenSource.md
[Kubernetes]: https://kubernetes.io/
[NAIS]: https://nais.io/
[NAV løser IT-flokene]: https://memu.no/artikler/it-losninger-i-rekordfart-hadde-ikke-gatt-for-to-ar-siden/
[NAVs designsystem]: https://design.nav.no/
[Postgresql]: https://www.postgresql.org
[React]: https://reactjs.org/
[Spring Boot]: https://spring.io/projects/spring-boot
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[alderspensjon]:https://www.nav.no/no/person/pensjon/alderspensjon
[uføretrygd]: https://www.nav.no/no/person/pensjon/uforetrygd
[persondataløsningen]: https://navikt.github.io/pdl/
[Blaze Advisor]: https://www.fico.com/en/products/fico-blaze-advisor-decision-rules-management-system
[Kotlin]: https://kotlinlang.org/
[supplerende stønad til uføre flyktninger]: https://www.regjeringen.no/no/dokumenter/prop.-10-l-20192020/id2676058/?ch=7
[tjenestepensjonsordninger]: https://www.nav.no/no/person/pensjon/andre-pensjonsordninger/tjenestepensjon
[din pensjon]: https://www.nav.no/no/person/pensjon/hva-kan-jeg-fa-i-pensjon
[din uføretrygd]: https://www.nav.no/soknader/nb/person/helse/uforetrygd
[pensjonsreformen]: https://www.regjeringen.no/no/tema/pensjon-trygd-og-sosiale-tjenester/pensjonsreform/id86731/
[uførereformen]: https://no.wikipedia.org/wiki/Uf%C3%B8rereformen
[Sannergata 2]:  https://www.google.com/maps/place/Sannergata+2,+0557+Oslo/@59.9285629,10.7562752,17z/data=!3m1!4b1!4m5!3m4!1s0x46416e6ea94f8e0b:0x3d9627259cdc1e31!8m2!3d59.9285629!4d10.7584639
[verdens beste kaffe]: https://www.instagram.com/explore/locations/66107785/supreme-roastworks/?hl=nb
[Kjersti]: mailto:kjersti.monland@nav.no
[Erik]: mailto:erik.haug@nav.no

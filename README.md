# Reaktor task

The idea was to create an UI that a company could use to easily keep track of their online inventory. The catch was using two "legacy APIs" to fetch data

## Bugs

I noticed that there is a bug : If user checks availablity from the same manufacturer quickly it does two identical fetch calls. This doesnt really matter becouse once all manufacturer data is fetched, duplicates dont matter.

## Reaktor Response

Kiitos vielä ennakkotehtävän tekemisestä, tässä muutamia huomioita tehtävästäsi. 
- Toteutus ei vastaa tehtävässä kuvattua tarvetta, jossa varastosaldot kaikille tuotteille nähtäisiin nopeasti
- Sovelluksessa ei ole virheenhallintaa, käyttäjä joutuu päivittämään sivun ja yrittämään uudelleen mikäli pyyntö epäonnistuu
- Sovellus on melko hidas, koska selain ottaa suoraan yhteyttä bad-apiin, sen sijaan että palvelin hakisi ja cachettaisi tämän datan
- Projektissa on Boostrap-tyylikirjasto käytössä, mutta kirjaston ohi laitetaan kuitenkin inline-tyylejä
- Koodista saisi huomattavasti selkeämpää, jos datan hakemiseen ja parsintaan liittyvä logiikka irrotettaisiin React-komponentista ja pilkottaisiin pieniin, selkeästi nimettyihin funktioihin


## Links

- [View Project](http://Jupemon.github.io/Reaktor-task)
- [Instructions](https://docs.google.com/document/d/e/2PACX-1vRt76z-t8-JQNTPuDzUZ8WXi0Gy1DuuIcQ4Sfg4NU9XXRUiQF0xxa08OVhNZsOGtT9QQ5KlTfszBb0V/pub)

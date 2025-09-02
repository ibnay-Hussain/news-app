import React, { Component } from 'react'
import NewsItems from '../NewsItems/newsItems';
export default class news extends Component {
    articles = [
        {
            "source": {
              "id": null,
              "name": "Www.dn.se"
            },
            "author": "TT",
            "title": "Teslas kollaps fortsätter på svenska marknaden",
            "description": "Teslas kollaps på den svenska bilmarknaden fortsätter, medan Volvo Cars befäster sin position som förstahandsvalet bland svenska bilköpare, visar augustisiffror från Mobility Sweden.",
            "url": "https://www.dn.se/ekonomi/teslas-kollaps-fortsatter-pa-svenska-marknaden/",
            "urlToImage": "https://static.bonniernews.se/ba/84e83766-724c-45a9-82e0-d1e07aaf582b.jpeg?io=1&auto=webp&quality=80&crop=1200:630,smart&width=1200&height=680",
            "publishedAt": "2025-09-01T08:49:40Z",
            "content": "Totalt ökade antalet nyregistrerade personbilar till 20 168 under månaden, en ökning med 6 procent i årstakt.\r\nFör Volvo XC60 nummer ett i listan över modeller som registrerats i augusti blev det ett… [+884 chars]"
          },
          {
            "source": {
              "id": 1,
              "name": "heise online"
            },
            "author": "Clemens Gleich",
            "title": "Podcast Die Hupe: Tourenplanung, Fuhrparkerneuerung, Dacia Duster",
            "description": "Dieses Mal sprechen wir über moderne Tourenplanung – für Autos, Motorräder oder den Van. Sebastian hat den Fuhrpark erneuert und Clemens fuhr den Dacia Duster.",
            "url": "https://www.heise.de/meinung/Podcast-Die-Hupe-Tourenplanung-Fuhrparkerneuerung-Dacia-Duster-10627236.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/9/2/8/0/5/1/Cover-158a6ab8a4aa7c68.jpg",
            "publishedAt": "2025-09-01T08:49:00Z",
            "content": "Inhaltsverzeichnis\r\nIn dieser Folge dreht sich alles um die Kunst der Tourenplanung. Wir sprechen darüber, wie wir unsere Roadtrips vorbereiten, welche Tools und Karten wir nutzen und wie man den ric… [+2085 chars]"
          },
          {
            "source": {
              "id": 2,
              "name": "heise online"
            },
            "author": "Clemens Gleich",
            "title": "Podcast Die Hupe: Tourenplanung, Fuhrparkerneuerung, Dacia Duster",
            "description": "Dieses Mal sprechen wir über moderne Tourenplanung – für Autos, Motorräder oder den Van. Sebastian hat den Fuhrpark erneuert und Clemens fuhr den Dacia Duster.",
            "url": "https://www.heise.de/meinung/Podcast-Die-Hupe-Tourenplanung-Fuhrparkerneuerung-Dacia-Duster-10627236.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/9/2/8/0/5/1/Cover-158a6ab8a4aa7c68.jpg",
            "publishedAt": "2025-09-01T08:49:00Z",
            "content": "Inhaltsverzeichnis\r\nIn dieser Folge dreht sich alles um die Kunst der Tourenplanung. Wir sprechen darüber, wie wir unsere Roadtrips vorbereiten, welche Tools und Karten wir nutzen und wie man den ric… [+2085 chars]"
          },
          {
            "source": {
              "id": 3,
              "name": "Zive.cz"
            },
            "author": "Filip Kůžel",
            "title": "Česko dohání Evropu, v elektromobilech jsme meziročně vyrostli o 61 %. Vítězem je Škoda, Tesla dále prohrává",
            "description": "South Korea’s retail investors are losing faith in Tesla’s stock, ramping up their selling last month amid growing disillusionment with the electric carmaker and rising interest in cryptocurrencies.\nIndividual investors in South Korea sold a net US$657 million",
            "url": "https://vtm.zive.cz/clanky/cesko-dohani-evropu-v-elektromobilech-jsme-mezirocne-vyrostli-o-61--vitezem-je-skoda-tesla-dale-prohrava/sc-870-a-236702/default.aspx",
            "urlToImage": "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=46715466",
            "publishedAt": "2025-09-01T08:45:00Z",
            "content": "Evropské sdruení výrobc automobil (ACEA) zveejnilo erstvé statistiky registrací nových automobil a plyne z nich nkolik zajímavých skuteností.\r\n\u003Cul\u003E\u003Cli\u003EZa prvních sedm msíc se v celé EU registrovalo 6… [+1609 chars]"
          },
          {
            "source": {
              "id": 4,
              "name": "Biztoc.com"
            },
            "author": "scmp.com",
            "title": "Tesla sees exodus of South Korean retail investors as crypto’s allure rises",
            "description": "South Korea’s retail investors are losing faith in Tesla’s stock, ramping up their selling last month amid growing disillusionment with the electric carmaker and rising interest in cryptocurrencies.\nIndividual investors in South Korea sold a net US$657 millio…",
            "url": "https://biztoc.com/x/9151f124bf62ed3f",
            "urlToImage": "https://biztoc.com/cdn/9151f124bf62ed3f_s.webp",
            "publishedAt": "2025-09-01T08:42:45Z",
            "content": "South Koreas retail investors are losing faith in Teslas stock, ramping up their selling last month amid growing disillusionment with the electric carmaker and rising interest in cryptocurrencies.Ind… [+138 chars]"
          }
    ]
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <>
                <h2 className='container'>Top Headlines</h2>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                           return <div key={element.source.id} className="col-3 p-0 m-0">
                                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

import React, { Component } from 'react'
import NewsItems from '../NewsItems/newsItems';

export default class news extends Component {

    articles  = [
              {
                "source": {
                  "id": 1,
                  "name": "Www.dn.se"
                },
                "author": "TT",
                "title": "Teslas kollaps fortsätter på svenska marknaden",
                "description": "Teslas kollaps på den svenska bilmarknaden fortsätter, medan Volvo Cars befäster sin position som förstahandsvalet bland svenska bilköpare, visar augustisiffror från Mobility Sweden.",
                "url": "https://www.dn.se/ekonomi/teslas-kollaps-fortsatter-pa-svenska-marknaden/",
                "urlToImage": "https://static.bonniernews.se/ba/84e83766-724c-45a9-82e0-d1e07aaf582b.jpeg?io=1&auto=webp&quality=80&crop=1200:630,smart&width=1200&height=630",
                "publishedAt": "2025-09-01T08:49:40Z",
                "content": "Totalt ökade antalet nyregistrerade personbilar till 20 168 under månaden, en ökning med 6 procent i årstakt.\r\nFör Volvo XC60 nummer ett i listan över modeller som registrerats i augusti blev det ett… [+884 chars]"
              },
              {
                "source": {
                  "id": 2,
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
                  "id": 3,
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
                  "id": 4,
                  "name": "Zive.cz"
                },
                "author": "Filip Kůžel",
                "title": "Česko dohání Evropu, v elektromobilech jsme meziročně vyrostli o 61 %. Vítězem je Škoda, Tesla dále prohrává",
                "description": "Teslas kollaps på den svenska bilmarknaden fortsätter, medan Volvo Cars befäster sin position som förstahandsvalet bland svenska bilköpare, visar augustisiffror från Mobility Sweden.",
                "url": "https://vtm.zive.cz/clanky/cesko-dohani-evropu-v-elektromobilech-jsme-mezirocne-vyrostli-o-61--vitezem-je-skoda-tesla-dale-prohrava/sc-870-a-236702/default.aspx",
                "urlToImage": "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=46715466",
                "publishedAt": "2025-09-01T08:45:00Z",
                "content": "Evropské sdruení výrobc automobil (ACEA) zveejnilo erstvé statistiky registrací nových automobil a plyne z nich nkolik zajímavých skuteností.\r\n\u003Cul\u003E\u003Cli\u003EZa prvních sedm msíc se v celé EU registrovalo 6… [+1609 chars]"
              },
              {
                "source": {
                  "id": 5,
                  "name": "Biztoc.com"
                },
                "author": "scmp.com",
                "title": "Tesla sees exodus of South Korean retail investors as crypto’s allure rises",
                "description": "South Korea’s retail investors are losing faith in Tesla’s stock, ramping up their selling last month amid growing disillusionment with the electric carmaker and rising interest in cryptocurrencies.\nIndividual investors in South Korea sold a net US$657 millio…",
                "url": "https://biztoc.com/x/9151f124bf62ed3f",
                "urlToImage": "https://biztoc.com/cdn/9151f124bf62ed3f_s.webp",
                "publishedAt": "2025-09-01T08:42:45Z",
                "content": "South Koreas retail investors are losing faith in Teslas stock, ramping up their selling last month amid growing disillusionment with the electric carmaker and rising interest in cryptocurrencies.Ind… [+138 chars]"
              },
              {
                "source": {
                  "id": 6,
                  "name": "Dou.ua"
                },
                "author": "Pavlo Trepytion",
                "title": "Salesforce скоротила 4 тисячі працівників через впровадження ШІ-агентів",
                "description": "У свіжому епізоді шоу Logan Bartlett генеральний директор Salesforce Марк Беніофф розповів, що розвиток агентних ШІ дозволив йому суттєво зменшити команду підтримки та прискорити обробку потенційних клієнтів.\n\n\n\n«Це були вісім найзахопливіших місяців у моїй к…",
                "url": "https://dou.ua/forums/topic/55432/",
                "urlToImage": "https://s.dou.ua/img/announces/SalesForceLayyOff.jpg",
                "publishedAt": "2025-09-01T08:40:05Z",
                "content": ", , AI . \r\n AI !\r\n  Logan Bartlett Salesforce ,       .\r\n«    .    .  9 000   5 000 ,    »,  .\r\n  ,   -:       .\r\n«  26   Salesforce 100 , ,        .     ,  , »,  .\r\n, Salesforce  1999 , ,  « »  -   … [+129 chars]"
              },
              {
                "source": {
                  "id": 7,
                  "name": "Cryptonews"
                },
                "author": "Anas Hassan",
                "title": "South Korean Investors Dump $657M in Tesla Stock, Chase Crypto Returns Instead",
                "description": "South Korean retail investors sold a net $657 million in Tesla stock during August, marking the largest outflow since early 2023 as traders pivot toward...",
                "url": "https://cryptonews.com/news/south-korean-investors-dump-657m-in-tesla-stock-chase-crypto-returns-instead/",
                "urlToImage": "https://media.zenfs.com/en/cryptonews_us_711/a361ac3f9776d6341d93be69a29c1f3f",
                "publishedAt": "2025-09-01T08:36:46Z",
                "content": "South Korean retail investors sold a net $657 million in Tesla stock during August, marking the largest outflow since early 2023 as traders pivot toward crypto investments amid growing disillusionmen… [+4630 chars]"
              },
              {
                "source": {
                  "id": 8,
                  "name": "Hotnews.ro"
                },
                "author": "Sebastian Jucan",
                "title": "Compania descrisă ca o „ucigașă” a Tesla s-a prăbușit răsunător pe bursă",
                "description": "Producătorul american de vehicule electrice Lucid Motors a fost nevoit să apeleze la o consolidare de 10 la 1 a acțiunilor sale pentru a respecta pragul minim de tranzacționare de 1 dolar impus companiilor listate…",
                "url": "http://hotnews.ro/compania-descrisa-ca-o-ucigasa-a-tesla-s-a-prabusit-rasunator-pe-bursa-2055975",
                "urlToImage": "https://hotnews.ro/wp-content/uploads/2025/09/profimedia-0728157907.jpg",
                "publishedAt": "2025-09-01T08:34:26Z",
                "content": "Productorul american de vehicule electrice Lucid Motors a fost nevoit s apeleze la o consolidare de 10 la 1 a aciunilor sale pentru a respecta pragul minim de tranzacionare de 1 dolar impus companiil… [+3871 chars]"
              },
              {
                "source": {
                  "id": 9,
                  "name": "Businessinsider.de"
                },
                "author": "Don Dahlmann",
                "title": "Das große Batterie-Versagen Europas",
                "description": "Die Übernahme von Northvolt durch ein US-Startup dokumentiert das Versagen der EU beim Aufbau von Schlüsseltechnologien.",
                "url": "https://www.businessinsider.de/gruenderszene/das-grosse-batterie-versagen-europas/",
                "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2025/08/GettyImages-2170647430.jpg?ver=1756278271",
                "publishedAt": "2025-09-01T08:33:38Z",
                "content": "Die Übernahme des insolventen Akkuherstellers Northvolt durch ein US-Startup dokumentiert erneut das Versagen der EU beim Aufbau von Schlüsseltechnologien. Das kalifornische Startup Lyten hat die ver… [+3692 chars]"
              },
              {
                "source": {
                  "id": 10,
                  "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Mysterious Compact Tesla Vehicle Spotted At Giga Texas Factory — Sparking Cybercab, Affordable Model Speculation",
                "description": "A compact Tesla vehicle was spotted at Tesla Inc.'s (NASDAQ:TSLA) Giga Factory in Texas amid affordable vehicle rumors.\nUnknown Tesla Vehicle Spotted In Texas\nThe vehicle was first spotted in drone footage of Tesla's Giga Factory in Texas, covered in a protec…",
                "url": "https://biztoc.com/x/2b13a198072d093d",
                "urlToImage": "https://biztoc.com/cdn/2b13a198072d093d_s.webp",
                "publishedAt": "2025-09-01T08:31:36Z",
                "content": "A compact Tesla vehicle was spotted at Tesla Inc.'s (NASDAQ:TSLA) Giga Factory in Texas amid affordable vehicle rumors.Unknown Tesla Vehicle Spotted In TexasThe vehicle was first spotted in drone foo… [+144 chars]"
              },
              {
                "source": {
                  "id": 11,
                  "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Promising Automotive Stocks To Watch Now – August 29th",
                "description": "NVIDIA, Tesla, Taiwan Semiconductor Manufacturing, Micron Technology, and QUALCOMM are the five Automotive stocks to watch today, according to MarketBeat’s stock screener tool. Automotive stocks are shares of publicly traded companies involved in the design, …",
                "url": "https://www.etfdailynews.com/2025/09/01/promising-automotive-stocks-to-watch-now-august-29th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/nvidia-co-logo-1200x675.jpg?v=20221020142916&w=240&h=240&zc=2",
                "publishedAt": "2025-09-01T08:24:58Z",
                "content": "NVIDIA, Tesla, Taiwan Semiconductor Manufacturing, Micron Technology, and QUALCOMM are the five Automotive stocks to watch today, according to MarketBeat’s stock screener tool. Automotive stocks are … [+3645 chars]"
              },
              {
                "source": {
                  "id": 12,
                  "name": "Ixbt.com"
                },
                "author": "jin@ixbt.com (Jin)",
                "title": "У собранных в России Xcite X-Cross 7 выявили особенность: АвтоВАЗ дал рекомендации по ремонту задних арок",
                "description": "АвтоВАЗ направил дилерским центрам рекомендации по ремонту кроссоверов Xcite X-Cross 7 для предотвращения повреждений лакокрасочного покрытия (ЛКП) арок задних колес.  Как сообщает источник, ознакомившийся с информационным письмом, для обеспечения качественно…",
                "url": "https://www.ixbt.com/news/2025/09/01/xcite-x-cross-7.html",
                "urlToImage": "https://www.ixbt.com/img/n1/news/2025/8/1/banner_d_large.jpg",
                "publishedAt": "2025-09-01T08:24:00Z",
                "content": "Xcite X-Cross 7 () . \r\n , , .\r\n , , , . , .\r\n \r\n\u003Cul\u003E\u003Cli\u003E 11:31 Toyota . «» 1,2 . 2025 \u003C/li\u003E\u003Cli\u003E Xcite X-Cross 7 : : \u003C/li\u003E\u003Cli\u003E 11:17Lada Aura 400 : - . Premier 2 199 000 \u003C/li\u003E\u003Cli\u003E 10:353. 2\u003C/li\u003E\u003Cli\u003E 1… [+2250 chars]"
              },
              {
                "source": {
                  "id": 13,
                  "name": "Telegraaf.nl"
                },
                "author": "Gert van Harskamp",
                "title": "Autoverkoop gedaald in augustus; ook minder elektrische auto’s op kenteken gezet, verkoop Tesla gehalveerd",
                "description": "Er zijn in Nederland afgelopen maand minder nieuwe auto’s op kenteken gezet dan dezelfde maand een jaar geleden. De verkoop van volledig elektrische auto’s is ook licht gedaald. De automobilist laat Tesla volledig links liggen.",
                "url": "https://www.telegraaf.nl/financieel/autoverkoop-gedaald-in-augustus-ook-minder-elektrische-auto-s-op-kenteken-gezet-verkoop-tesla-gehalveerd/87242767.html",
                "urlToImage": "https://prod-img.telegraaf.nl/public/incoming/fntsa-het-meest-geregistreerde-merk-was-in-mei-kia-gevolgd-door-skoda-en-toyota./alternates/SIXTEEN_NINE_1200/Het%20meest%20geregistreerde%20merk%20was%20in%20mei%20Kia%20gevolgd%20door%20Skoda%20en%20Toyota.",
                "publishedAt": "2025-09-01T08:22:00Z",
                "content": "Na een lichte stijging in juli, is de autoverkoop afgelopen maand volgens de brancheorganisaties RAI Vereniging en Bovag toch weer ingezakt. Er zijn in augustus 26.663 nieuwe autos op kenteken gezet,… [+1561 chars]"
              },
              {
                "source": {
                  "id": 14,
                  "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Promising Energy Stocks To Consider – August 29th",
                "description": "Tesla, Broadcom, and IREN are the three Energy stocks to watch today, according to MarketBeat’s stock screener tool. Energy stocks are shares of companies involved in the production, exploration, refinement and distribution of energy resources such as oil, na…",
                "url": "https://www.etfdailynews.com/2025/09/01/promising-energy-stocks-to-consider-august-29th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-09-01T08:21:02Z",
                "content": "Tesla, Broadcom, and IREN are the three Energy stocks to watch today, according to MarketBeat’s stock screener tool. Energy stocks are shares of companies involved in the production, exploration, ref… [+1720 chars]"
              },
              {
                "source": {
                  "id": 15,
                  "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Promising Electric Vehicle Stocks To Watch Now – August 29th",
                "description": "Tesla, Baidu, Rivian Automotive, NIO, Lucid Group, XPeng, and Enphase Energy are the seven Electric Vehicle stocks to watch today, according to MarketBeat’s stock screener tool. Electric vehicle stocks are shares of publicly traded companies involved in the d…",
                "url": "https://www.etfdailynews.com/2025/09/01/promising-electric-vehicle-stocks-to-watch-now-august-29th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-09-01T08:21:00Z",
                "content": "Tesla, Baidu, Rivian Automotive, NIO, Lucid Group, XPeng, and Enphase Energy are the seven Electric Vehicle stocks to watch today, according to MarketBeat’s stock screener tool. Electric vehicle stoc… [+3946 chars]"
              },
              {
                "source": {
                  "id": 16,
                  "name": "Frandroid"
                },
                "author": "Marie Lizak",
                "title": "BYD a-t-il vraiment dépassé Tesla en Europe sur la voiture électrique ? Oui et non, on vous explique tout",
                "description": "Selon les chiffres du mois de juillet, BYD aurait dépassé Tesla en Europe. Mais pas sûr que ce succès soit exclusivement dû aux ventes de voitures électriques...",
                "url": "https://www.frandroid.com/marques/byd/2777467_byd-a-t-il-vraiment-depasse-tesla-en-europe-sur-la-voiture-electrique-oui-et-non-on-vous-explique-tout",
                "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/05/16right-charging-download-jpg-5000px-rgb.jpg?resize=1600,900&key=6c288051&watermark",
                "publishedAt": "2025-09-01T08:15:09Z",
                "content": "Selon les chiffres du mois de juillet, BYD aurait dépassé Tesla en Europe. Mais pas sûr que ce succès soit exclusivement dû aux ventes de voitures électriques…\r\nBYD Dolphin Surf // Source : BYD\r\nEntr… [+3955 chars]"
             }
        
    ]
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    fetchArticles = async (page) => {
        // const Url = `https://newsapi.org/v2/everything?q=tesla&from=2025-08-02&sortBy=publishedAt&page=${page}&pageSize=${pageSize}&apiKey=70d0b7f4bc7c49d6927b3b7595385f6b`;
        // const data = await fetch(Url);
        // const parseData = await data.json();
        const pageSize = 4;
        const start = (page - 1) * pageSize;
        const end = page * pageSize;
    
        this.setState({
            articles: this.articles.slice(start, end),
            page: page,
        });
    
    }; 

    async componentDidMount() {
        this.fetchArticles(this.state.page);
    }

    handlePreviousClick = async () => {
        if (this.state.page > 1) {
          await this.fetchArticles(this.state.page - 1);
        }
    };
      
    handleNextClick = async () => {
        const maxPages = Math.ceil(16 / 4);
        if (this.state.page < maxPages) {
          await this.fetchArticles(this.state.page + 1);      
        }
    }

    render() {
        return (
            <>
                <h2 className='container'>Top Headlines</h2>
                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                           return <div key={element.url} className="col-12 col-md-6 col-lg-4 p-0 m-0">
                                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between p-0 m-0 mt-4 mb-4">
                        <button disabled={this.state.page<=1} className="btn btn-md btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
                        <span className="text-center mt-3">Page {this.state.page}</span>
                        <button disabled={this.state.page >= Math.ceil(16 / 4) || this.state.articles.length < 4} className="btn btn-md btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

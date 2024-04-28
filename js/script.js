//navigation
const navigations = [
    {
        name: 'Line-up',
        link: '#lineup',
        type: 'internal'
    },
    {
        name: 'Official website',
        link: 'https://rockwerchter.be',
        type: 'external'
    },
    {
        name: 'Graduaat Programmeren',
        link: 'https://www.arteveldehogeschool.be/opleidingen/graduaat/programmeren',
        type: 'external'
    }
]

const $navigationElements = document.getElementById('navigation');

const navImg = () => {
    const imgHTML = `
    <img src="./resources/logo.svg" alt="logo">
`;

    $navigationElements.innerHTML = imgHTML;
}

/**
 * The function `convertNavToHTMLString` takes an array of navigation objects and converts them into
 * HTML string format.
 * @param navigations - The `navigations` parameter is an array of objects. Each object represents a
 * navigation item and has the following properties:
 */
const convertNavToHTMLString = (navigations) => {
    let navOutput = '';

    for (let i = 0; i < navigations.length; i++) {
        let linkType = '';
        if (navigations[i].type === 'external') {
            linkType = "_blank"
        } else {
            linkType = "_self"
        }

        const navigationHTMLString = `
        <a class="nav__link" href="${navigations[i].link}" target="${linkType}">${navigations[i].name}</a>
    `;
        navOutput += navigationHTMLString;
    }

    $navigationElements.innerHTML += `<div> ${navOutput} </div>`;
}

//countdown
const $timeElements = document.querySelector('.countdown');

const countdown = (time) => {
    let countdownOutput = '';

    let countdown = new Date(time).getTime();
    let now = new Date().getTime();

    let timeLeft = countdown - now;

    //Calculation is the miliseconds in a day, then divided by the miliseconds in an hour, minute or second
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownOutput = `${days} days ${hours}h ${minutes}m ${seconds}s`;


    $timeElements.innerHTML = `
    ${countdownOutput}
    <p>till next edition</p>`;
}

//line-up
let stage1 = 'Main Stage';
let stage2 = 'The Barn';
let stage3 = 'Klub C';

const lineups = [
    {
        id: '8c0d5d94-f4e3-4a0c-980e-713d63203597',
        stage: stage1,
        artist: {
            name: 'The 1975',
            description: "The 1975 consists of four childhood friends from Manchester who have played together since their teens. After many attempts, this resulted in The 1975, a name they got from a poetry collection. The singles 'Sex' and 'Chocolate' and their support acts for Muse and the Rolling Stones quickly opened the door to great success. Their untitled debut reached #1 in the UK, as did their latest album 'Being Funny in a Foreign Language' (2022), for the fifth time in a row. They are perfectly on course to make their dream come true: to become one of the greatest bands on Earth. The 1975 is definitely one of the most diverse bands. There isn't really any genre with which they aren't associated. They themselves most enjoy comparisons to My Bloody Valentine, The Streets and Talking Heads. Fun fact: 1975 was the first year Rock Werchter took place.",
            socials: {
                instagram: 'https://www.instagram.com/THE1975/',
                twitter: 'https://twitter.com/the1975',
                spotify: 'https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW',
                youtube: 'https://www.youtube.com/channel/UC_LfW1R3B0of9qOw1uI-QNQ'
            },
            image: './resources/the-1975.jpg'
        },
        from: 1688053500000,
        to: 1688057100000,
    },
    {
        id: '69f2b8cb-36f4-496e-b9df-973d25824978',
        stage: stage2,
        artist: {
            name: 'Ben Howard',
            description: "Ben Howard found vinyl by Jackson Browne, Van Morrison and Simon & Garfunkel in his parents' record collection. Those records encouraged him to do something similar. The fanatical surfer became a dreamy singer-songwriter whose debut 'Every Kingdom' (2011) featured great songs like 'Only Love', 'Old Pine' and 'Keep Your Head Up'. After that, Howard chose the path of adventure. Every new step was full of surprise. For example, the songs on 'Collections From the Whiteout' (2021) are largely inspired by true stories he picked out of newspapers. The record confirms Howard's status as one of the most innovative songwriters of our time.",
            socials: {
                instagram: 'https://instagram.com/benhoward_',
                twitter: 'https://twitter.com/benhowardmusic',
                spotify: 'https://open.spotify.com/artist/5schNIzWdI9gJ1QRK8SBnc',
                youtube: 'https://www.youtube.com/user/benhowardmusic'
            },
            image: './resources/amenra.jpg'
        },
        from: 1688147400000,
        to: 1688151000000,
    },
    {
        id: '5fc82872-cd86-4ec8-94e1-915498d86bde',
        stage: stage2,
        artist: {
            name: 'Fred Again..',
            description: "Fred again.. is inescapable these days; a true phenomenon in modern electronic music. For several years, Fred Gibson (that's the name he was born with) worked in the shadows as a producer and songwriter. He was the driving force behind many hit songs. His work has featured collaborations with George Ezra, Ed Sheeran, Charli XCX, Stormzy, Underworld, and The xx. âHe stepped into the limelight during the COVID-19 pandemic with his Actual Life series, of which the third installment is released today. The often emotional songs start behind the piano and are mixed with beats, sounds he gathers from social media, voice clips, and other samples. This is top-level digital bricolage. With nightlife in lockdown, the single âMarea (We've lost dancing)â becomes the soundtrack to the loss we have experienced, a floor-filler when the world reopens. âSweat in our shoes, tears in our eyes,â headlined in the weekly HUMO magazine after his performance at the Pukkelpop Festival this summer. Fred again.. is exactly what electronic dance music needed, and the success story continues. In December he will perform a sold-out show at the Ancienne Belgique in Brussels. Now Rock Werchter awaits.",
            socials: {
                instagram: 'https://www.instagram.com/fredagainagainagainagainagain/',
                twitter: 'https://twitter.com/fredagainagain1',
                spotify: 'https://open.spotify.com/artist/4oLeXFyACqeem2VImYeBFe',
                youtube: 'https://www.youtube.com/channel/UCXF6DMVLIVRr2OQAqyfEGeg'
            },
            image: './resources/fred-again.jpg'
        },
        from: 1688242800000,
        to: 1688246400000,
    },
    {
        id: '7e424c45-3e09-4325-a508-abe285f9a111',
        stage: stage1,
        artist: {
            name: 'Machine Gun Kelly',
            description: "Colson Baker chose his stage name well. The American delivers his lyrics with the speed of a... machine gun. He entered the world of music as a rapper. His performance at the showcase festival South By Southwest (SXSW) in 2011 led to a meeting with Sean Combs, a.k.a. Puff Daddy. That night he signed with his label, Bad Boy. Critics praised Machine Gun Kelly (MGK) for his clever use of rap and rock in telling his introspective stories. He loves Eminem and Guns N' Roses in equal measure. Recently, his music has been more punk than hip-hop. In the last few years, Baker has been working closely with Travis Barker, of blink-182 fame. Tellingly, he appears on the covers of 'Tickets to my Downfall' (2020) and 'Mainstream Sellout' (2022) with a guitar around his neck.",
            socials: {
                instagram: 'https://www.instagram.com/machinegunkelly/',
                twitter: 'https://twitter.com/machinegunkelly',
                spotify: 'https://open.spotify.com/artist/6TIYQ3jFPwQSRmorSezPxX',
                youtube: 'https://www.youtube.com/machinegunkelly'
            },
            image: './resources/machine-gun-kelly.jpg'
        },
        from: 1688231100000,
        to: 1688235600000,
    },
    {
        id: '6e906267-b7e1-4427-ad58-53d3a4076b67',
        stage: stage3,
        artist: {
            name: 'Adekunle-gold',
            description: "Adekunle Gold divides his time between Los Angeles and Lagos, the capital of Nigeria, where he was born. That says a lot about the current status of afrobeats. This blend of African pop with hip-hop and R&B is taking the world of music by storm with crown jewels such as Burna Boy, Divido and Wizkid. This is only going to gather pace now that Spotify is, from 2021, available in 38 African countries. Adekunle Gold is in the driving seat. He grew up with old Nigerian masters such as King Sunny AdÃ© and Ebenezer Obey and made his debut in 2014 with 'Sade', a remodelling of 'Story of my Life' by One Direction. He is gradually evolving from traditional pop to a more sophisticated sound, and the status of export product. His great dream? To collaborate with Bruno Mars.",
            socials: {
                instagram: 'https://www.instagram.com/adekunlegold/',
                twitter: 'https://twitter.com/adekunlegold',
                spotify: 'https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s?si=j4FuEJTHQsONl2yVJYueBw',
                youtube: 'https://www.youtube.com/channel/UC3RP_IbJrcP8cIwOC7wRj5g'
            },
            image: './resources/adekunle-gold.jpg'
        },
        from: 1688231100000,
        to: 1688235600000,
    },
    {
        id: '4a2d15d5-a54a-4ece-94ad-738bb4a73c47',
        stage: stage1,
        artist: {
            name: 'Zwangere Guy',
            description: "wangere Guy is a pioneer and a record-holder. 'Wie is Guy?' (2019) was the first gold Dutch-language hip-hop record - within five months of release. It was also the first album in the genre that reached the top of the national charts. That same year, the Brussels rapper did it all over again with 'BRUTAAL' (2019). In a few short steps, Gorik van Oudheusden showed that he was a heavyweight, before turning things up a few more gears. According to his buddy Jan Paternoster (Black Box Revelation), the man is the hardest working âreal G in the gameâ. Guy is a member of the capital's posse STIKSTOF, has made an album with Lander Gyselinck and works on the fictional series 'Putain'. He comes to Werchter as himself: the unstoppable, ruthless, mind-blowing Zwangere Guy.",
            socials: {
                instagram: 'https://www.instagram.com/zwangere.guy/',
                spotify: 'https://open.spotify.com/artist/2Sm4rGKWBnOQhdqDy4JJh0',
                youtube: 'https://www.youtube.com/channel/UC-owEsCOkvdKfhUbs5crWKw'
            },
            image: './resources/zwangere-guy.jpg'
        },
        from: 1688041200000,
        to: 1688044800000,
    },
    {
        id: '4f054f59-4267-4835-9935-e3820e118dbd',
        stage: stage2,
        artist: {
            name: 'RosalÃ-a',
            description: "Her songs have been streamed billions of times. She's got every major music prize on her mantelpiece. The Spanish/Catalan RosalÃ-a is one of the most popular and celebrated artists of our time. Trained in flamenco, mistress of experimentation. She brings different genres and styles together in her exciting signature style. She unites elements of traditional flamenco with hard beats, electro, pop and R&B. Occasionally, she sneaks in some experimental jazzâ¦ or Japanese cuisine (Chicken Teriyaki). She stunned the world with El Mal Querer (2018). On its magnificent successor Motomami (2022), she redefined pop music. RosalÃ-a is a phenomenon. In 2019 she delivered an impressive performance at Rock Werchter - and it looks like she'll do so again in 2023.",
            socials: {
                instagram: 'https://www.instagram.com/rosalia.vt/',
                twitter: 'https://twitter.com/rosalia',
                spotify: 'https://open.spotify.com/artist/7ltDVBr6mKbRvohxheJ9h1?autoplay=true&v=A',
                youtube: 'https://www.youtube.com/channel/UCQt9awGIFZeldFsATZNeJag'
            },
            image: './resources/rosalia.jpg'
        },
        from: 1688327700000,
        to: 1688332200000,
    },
    {
        id: 'f3a6cf2c-f9f9-4996-92c5-c949b310b556',
        stage: stage1,
        artist: {
            name: 'Black Box Revelation',
            description: "an Paternoster and Dries Van Dijck have been Black Box Revelation for a good twenty years, yet they're still fresh-faced thirtysomethings. They are the definition of 'forever young', a trend that continues on their latest album 'Poetic Rivals' (2023). They say it's an album that will get young folks reaching for their guitars again. It has the same naive character as their 2007 debut 'Set Your Head On Fire' (2007) and was recorded in the London studio of Andy Savour (Arctic Monkeys, My Bloody Valentine). The duo is also looking back at its illustrious history in other ways. For example, in the summer of 2022 they toured the West Coastof the United States: exactly ten years after their first visit when they performed 'High On A Wire' in front of four million Americans on the David Letterman show. Everything is still possible",

            image: './resources/black-box-revelation.jpg'
        },
        from: 1688132400000,
        to: 1688136000000,
    },
    {
        id: '9bf371ed2-68c0-409e-9f91-7beecd0c5b70',
        stage: stage2,
        artist: {
            name: 'Amenra',
            description: "Amenra are more easily explained in terms of ideas rather than genre. They were originally a metal band but today they are so much more. The soul of the band is in the tendency towards mystical symbolism. Spirituality and religion are at the core. For example, take the name: a portmanteau of the Biblical 'amen' and the Egyptian god Ra. The band from Kortrijk goes deep into everything. They talk about pain and suffering and looking those things straight in the eye. Every album represents processing a trauma. Hence 'Mass' in the title, again and again. 'De Doorn' (2021) is a turning point. Its point of departure is a broader sense of grief and sorrow, and it is also their first fully Dutch-language album. That's a daring move for their first release on the American Relapse Records. However, Amenra's rituals are universal. The band has dedicated fans from Saint Petersburg to Rio de Janeiro.",
            socials: {
                instagram: 'https://www.instagram.com/amenra_official/',
                twitter: 'https://twitter.com/amenra_official',
                spotify: 'https://open.spotify.com/artist/0N1jE1EIrhZjvQSfuLupUu',
                youtube: 'https://www.youtube.com/@syndromechurch'
            },
            image: './resources/amenra.jpg',
        },
        from: 1688300700000,
        to: 1688303700000,
    },
    {
        id: '939c2064-7948-440d-b228-950f4883adc2',
        stage: stage3,
        artist: {
            name: 'Pip Millet',
            description: "Pip Millett, from Manchester, discovered music's power to connect and unite at a young age. She was in charge of the music when her parents met up with friends on Friday evenings, after a busy week at work. Millett  hand-picked YouTube videos from artists such as Marvin Gaye, Bob Marley, Joni Mitchell and Stevie Wonder. She took these influences with her to London, where she studied Creative Musicianship. The ball got rolling in 2019. Millett released her debut single 'Make Me Cry' on COLORS, a platform for young talent onâ¦. YouTube. Her mix of R&B and Soul unleashed a small Millet craze among her five million subscribers. Covid-19 threatened to stifle this hype, but also gave the singer time to work on her magnificent opening gambit 'When Everything is Better, I'll Let You Know' (2022).",
            socials: {
                instagram: 'https://www.instagram.com/pipmillett',
                twitter: 'https://twitter.com/pipmillett',
                spotify: 'https://open.spotify.com/artist/1QfEfvB62EEl4upf2ANKkR?si=Vao-TtG8TxylRUs6NpxphA',
                youtube: 'https://www.youtube.com/channel/UCvge6efpKy1ef9CQB4c7hcg'
            },
            image: './resources/pip-millet.jpg'
        },
        from: 1688298600000,
        to: 1688300700000,
    },
    {
        id: '1057dc2a-6340-4ae6-a477-f6c8bba14541',
        stage: stage2,
        artist: {
            name: 'Stormzy',
            description: "In 2019, Stormzy became the first black British solo artist to make it as headliner at Glastonbury. Michael Ebenazer Kwadjo Omari Owuo Jr. is nothing less than a socio-cultural pioneer. He owns a publishing house for authors from minority groups and supports a score of black scholarship students at the University of Cambridge. Time magazine placed him on the cover as a ânext generation leaderâ, all based on a record that shifted the goal posts â because how could it not? âGang Signs & Prayerâ (2017) made dark, fierce grime accessible to a wide audience. His reward? The Brit Award for Album of the Year. Stormzy evolves at a rapid pace. On âThis Is What I Meanâ (2022) the beats are softer, revealing his soul. He is in peak form.",
            socials: {
                instagram: 'https://www.instagram.com/stormzy',
                twitter: 'https://www.twitter.com/stormzy',
                spotify: 'https://open.spotify.com/artist/2SrSdSvpminqmStGELCSNd',
                youtube: 'https://www.youtube.com/channel/UC7D-09kUG6Ei11SVO_deW_w'
            },
            image: './resources/stormzy.jpg'
        },
        from: 1688067000000,
        to: 1688070600000,
    },
]

const $lineupElements = document.querySelector('.lineup');
let lineupOutput = '';

const time = (time) => {
    let play = new Date(time);
    let day = play.getDate();
    let hour = play.getHours();
    let minute = play.getMinutes();
    return { day, hour, minute }
}

const lineupToHTMLString = (lineups) => {
    let lineupOutput = '';

    for (let i = 0; i < lineups.length; i++) {
        const lineup = lineups[i];
        const startTime = time(lineup.from);
        const endTime = time(lineup.to);

        const lineupHTMLString = `
        <div class="lineup-container" id=${lineup.id}>
            <img src="${lineup.artist.image}" alt="${lineup.artist.name}" class="artist-img"/>
            <h2 class="artist-name">${lineup.artist.name}</h2>
            <p class='artist_sub'>${lineup.stage} | Day ${startTime.day} ${startTime.hour}.${startTime.minute}-${endTime.hour}.${endTime.minute}</p>
        </div>
        `;

        lineupOutput += lineupHTMLString;
    }
    $lineupElements.innerHTML = lineupOutput

}

const socialIffunction = (lineups, i) => {
    // Check if 'socials' property exists in the lineup at index i
    if (lineups[i].artist && lineups[i].artist.socials) {
        const socials = lineups[i].artist.socials;

        // Define an array of required social media platforms
        const requiredPlatforms = ['instagram', 'twitter', 'spotify', 'youtube'];

        // Check if all required social media platforms are present
        for (const platform of requiredPlatforms) {
            if (!(platform in socials)) {
                console.log(`Missing ${platform} in socials for lineup at index ${i}.`);
                return; // Stop checking if any platform is missing
            }
        }

        console.log(`All four social media platforms are present for lineup at index ${i}.`);
    } else {
        console.log(`No social media information available for lineup at index ${i}.`);
    }
};

// Example usage with the provided array
for (let i = 0; i < lineups.length; i++) {
    socialIffunction(lineups, i);
}


// Example usage with the provided array


//eventlistener
const descriptionClick = () => {
    const $lineupTarget = document.querySelectorAll('.lineup-container');
    const $TargetDescription = document.querySelector('.lineup-description');
    const $TargetDescriptionContainer = document.querySelector('.lineup-container-description')

    $lineupTarget.forEach((element) => {
        element.addEventListener('click', () => {
            const currentId = element.getAttribute('id');
            const descriptionId = lineups.find((lineup) => lineup.id === currentId);

            if (descriptionId) {
                const { stage, artist: { name, image, socials, description }, from, to } = descriptionId;

                const startTime = time(from);
                const endTime = time(to);

                const socialsHTML = socials
                    ? `<div class="socials">${Object.entries(socials).map(([platform, link]) => `<a href="${link}"><img src="./resources/${platform}.svg" alt="${platform} logo" /></a>`).join('')}</div>`
                    : '';

                const descriptionHTMLString = `
                    <div class="target">
                        <img class="artist_image" src="${image}" alt="${name}"/>
                        <div class="description">
                            <p class='artist_sub'>${stage} | Day ${startTime.day} ${startTime.hour}.${startTime.minute}-${endTime.hour}.${endTime.minute}</p>
                            <h1 class="artist-name">${name}</h1>
                            ${socialsHTML}
                            <p>${description}</p>
                        </div>
                    </div>
                `;

                $TargetDescription.innerHTML = descriptionHTMLString;
                $TargetDescriptionContainer.style.display = 'flex';
            }
        })
    });
}


const descriptionHide = () => {
    const $hideDescription = document.querySelector('.crosslink');
    const $TargetDescriptionContainer = document.querySelector('.lineup-container-description')


    $hideDescription.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click');

        $TargetDescriptionContainer.style.display = 'none';
    })
}

const init = () => {
    navImg();
    convertNavToHTMLString(navigations);
    lineupToHTMLString(lineups);
    setInterval(() => countdown(1720087200000), 1000);

    for (let i = 0; i < lineups.length; i++) {
        socialIffunction(lineups, i);
    }
    descriptionClick();
    descriptionHide();
}

init();
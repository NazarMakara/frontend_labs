
let agents = {
    fbi: {
        name: "FBI SWAT Operator",
        image: "images/1.webp",
        details: {
        "Info":"The FBI, is a Counter-Terrorist faction featured in Counter-Strike: Global Offensive & Counter-Strike 2. The unit is based on the real life Hostage Rescue Team (HRT) of the American Federal Bureau of Investigation.The FBI was added to the Beta in the August 10th 2012 update.",
        "Official Description":"In addition to responding to terrorist attacks, the United States Federal Bureau of Investigation (FBI) responds to bank robbery, espionage and cyber-warfare.The FBI's Hostage Rescue Team was founded in 1982 and is trained to rescue allies held by hostile force. Their motto is 'Servare Vitas' (To Save Lives). "
        }
    },
    gna: {
        name: "Gendarmerie Nationale Aspirant",
        image: "images/2.webp",
        details: {
            "Info":"The Gendarmerie Nationale is a Counter-Terrorist faction featured in Counter-Strike: Global Offensive & Counter-Strike 2. It was added as part of Operation Riptide in the Operation Riptide Agent Collection on the September 22, 2021 update.",
            "Official Description":"Aspirant is a Distinguished agent added in Operation Riptide. This agent can be purchased from the Operation Riptide Shop for 5 stars (random selection of all 5 distinguished agents) or from the Steam market. Customplayer ctm gendarmerie variantd"
        }
    },
    nzsas: {
        name: "NZSAS D Squadron Officer",
        image: "images/3.webp",
        details: {
            "Info":"The world-renowned British Special Air Service (SAS) was founded in the Second World War by a man named David Stirling. They were a commando unit during WW2, responsible for intelligence gathering, sabotage, and assassination. After WWII, the British government turned the SAS into a Counter-Terrorism unit after the 1972 Munich Olympics massacre. Previously an obscure regiment, the SAS came to prominence with their dramatic ending of a terrorist siege at the Iranian Embassy in London in 1980, where their zip line assault through the windows was broadcast live on both main British television channels in prime time on a public holiday.",
            "Official Description":"The world-renowned British SAS was founded in the Second World War by a man named David Stirling. Their role during WW2 involved gathering intelligence behind enemy lines and executing sabotage strikes and assassinations against key targets."
        }
    },
    nswc: {
        name: "NSWC SEAL Seal Team 6 Soldier",
        image: "images/4.webp",
        details: {
            "Info":"SEAL Team 6 is a special operations force for the United States Navy, created in the aftermath of the failed Operation Eagle Claw. The failure of the Operation made the US Navy saw the need for a full-time counter-terrorist unit, and tasked Navy officer Richard Marcinko with its design and development. SEAL Team 6 was formally created in October 1980, and Marcinko was the first commanding officer of this new unit. In 1987, SEAL Team 6 was dissolved. A new unit, the 'Naval Special Warfare Development Group' (NSWDG), or DEVGRU, succeeded the SEAL Team 6. The name SEAL Team 6 is still often used in reference to DEVGRU.",
            "Official Description":"ST-6 (to be known later as DEVGRU) was founded in 1980 under the command of Lieutenant-Commander Richard Marcinko. ST-6 was placed on permanent alert to respond to terrorist attacks against American targets worldwide."
        }
    },
    tacp: {
        name: "TACP Cavalry 'Two Times' McCoy",
        image: "images/6.webp",
        details: {
            "Info":"Tactical Air Control Party, TACP or USAF TACP, is a Counter-Terrorist faction featured in Counter-Strike: Global Offensive. The faction was added as part of Operation Shattered Web, along with other agents that players could unlock by purchasing the operation pass, and then obtaining the required amount of 'stars' needed.",
            "Official Description":"'Two Times' McCoy, USAF TACP is a Superior agent added in Operation Shattered Web. This agent can be earned from the Operation Shattered Web battle pass track or from the Steam market."
        }
    },
    sabre: {
        name: "Sabre 'The Doctor' Romanov",
        image: "images/7.webp",
        details: {
            "Info":"Sabre is a Terrorist faction featured in Counter-Strike: Global Offensive & Counter-Strike 2. They first appeared in Operation Shattered Web. They use the Balkan voice lines."
        }
    },
    elite: {
        name: "Elite Crew Osiris",
        image: "images/8.webp",
        details: {
            "Info":"The Elite Crew, sometimes referred to as the 1337 Krew or Leet Krew[1], are a terrorist faction featured in the Counter-Strike series. The Elite Crew were the first terrorist faction available in the Counter-Strike: Global Offensive Beta.", 
            "Official Description":"In Counter-Strike: Global Offensive, the Elite Crew now wear a larger variety of outfits including beige shirts, brick red shirts, and blue jeans. They also wear a variety of shemagh scarves and sunglasses. These outfits were updated in the revamped version, but maintained the same style. The Danger Zone Subjects that appear in the Danger Zone gamemode use their head models. Their default gloves are black leather fingerless gloves."
        }
    },
    phoenix: {
        name: "Phoenix Connexion Enforcer",
        image: "images/9.webp",
        details: {
            "Info":"The Phoenix Connexion (sometimes called 'Phoenix Connection'), also known as The Phoenix, is a Terrorist faction featured in the Counter-Strike series. It is a default Terrorist faction in Counter-Strike 2. Phoenix Connexion is the oldest Terrorist faction in Counter-Strike, making its first appearance in Beta 1.0. ",
            "Official Description":"In Global Offensive, their outfit composition remains the same, but has been updated. Their shirts are now a variety of colors, and their camouflaged pants now include woodland styles alongside the classic urban, and are no longer tucked into their boots. Their balaclavas are now gray and brown in addition to the classic black, and their gray plate carriers have become white/tan bulletproof vests. The revamped models further updated their outfits with new colors and better detail, such as some of the shirts being plaid, and the addition of a unique belt buckle. This appearance carried over to Counter-Strike 2. "
        }
    },
    pro_bloody: {
        name: "The Professionals Sir Bloody Loudmouth Darryl",
        image: "images/10.webp",
        details: {
            "Info":"The Professional is a Terrorist faction featured in Counter-Strike: Global Offensive & Counter-Strike 2. They were added in the August 10th 2012 update. ",
            "Official Description":"The Professionals are high-tech, well-equipped thieves with no political or religious agenda. 'Backed by an unknown but well-financed organization, the professionals are seasoned private mercenaries that won't hesitate to gun down any opposition - for a price." 
        }
    },
    pro_k: {
        name: "The Professionals Number K",
        image: "images/11.webp",
        details: {
            "Info":"The Professionals are high-tech, well-equipped thieves with no political or religious agenda. 'Backed by an unknown but well-financed organization, the professionals are seasoned private mercenaries that won't hesitate to gun down any opposition - for a price.",
            "Official Description":"Professionals are based on bank robbers with high maintenance outfits, including waistcoats and grey/black pants, additionally sporting bags on their backs and sunglasses. With Operation Broken Fang, new characters belonging to the Professionals have been added; Getaway Sally, Little Kev, Safecracker Voltzmann, Number K, and the many shades of of Sir Bloody Darryl are available."
        }
    }
}

function show(Key) {
    window.location.href = `2index.html?planet=${Key}`;
}

function showDetails(Key) {
    let agent = agents[Key]
    let agentContent = `
        <h1>${agent.name}</h1>
        <img src="${agent.image}" alt="${agent.name}
        <info class="info">
            ${Object.entries(agent.details).map(
                ([key, value]) => `${key}${value}`
            ).join('')}
        </info>
    `;
    document.getElementById("Content").innerHTML = agentContent;
}

function showDetails(Key) {
    let agent = agents[Key];
    let agentContent = `
        <h1>${agent.name}</h1>
        <img src="${agent.image}" alt="${agent.name}">
            <div class="info">
                ${Object.entries(agent.details).map(
                    ([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`
                ).join('')}
            </div>
        </details>
    `;
    document.getElementById("Content").innerHTML = agentContent;
}
//HEY YOU FOUND THE PRESCRIPTS
//DON'T BE ADDING PRESCRIPTS OR I WILL SEND THE WILL OF THE CITY
//ON YOU ASS
// <!-- ⠄⠄⠄⠄⢠⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣯⢻⣿⣿⣿⣿⣆⠄⠄⠄
// ⠄⠄⣼⢀⣿⣿⣿⣿⣏⡏⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣿⣿⣿⡆⠄⠄
// ⠄⠄⡟⣼⣿⣿⣿⣿⣿⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⣿⣇⢻⣿⣿⣿⣿⠄⠄
// ⠄⢰⠃⣿⣿⠿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠙⠿⣿⣿⣿⣿⣿⠄⢿⣿⣿⣿⡄⠄
// ⠄⢸⢠⣿⣿⣧⡙⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⡇⠸⣿⡿⣸⡇⠄
// ⠄⠈⡆⣿⣿⣿⣿⣦⡙⠳⠄⠄⠄⠄⠄⠄⢀⣠⣤⣀⣈⠙⠃⠄⠿⢇⣿⡇⠄
// ⠄⠄⡇⢿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⣠⣶⣿⣿⣿⣿⣿⣿⣷⣆⡀⣼⣿⡇⠄
// ⠄⠄⢹⡘⣿⣿⣿⢿⣷⡀⠄⢀⣴⣾⣟⠉⠉⠉⠉⣽⣿⣿⣿⣿⠇⢹⣿⠃⠄
// ⠄⠄⠄⢷⡘⢿⣿⣎⢻⣷⠰⣿⣿⣿⣿⣦⣀⣀⣴⣿⣿⣿⠟⢫⡾⢸⡟⠄.
// ⠄⠄⠄⠄⠻⣦⡙⠿⣧⠙⢷⠙⠻⠿⢿⡿⠿⠿⠛⠋⠉⠄⠂⠘⠁⠞⠄⠄⠄
// ⠄⠄⠄⠄⠄⠈⠙⠑⣠⣤⣴⡖⠄⠿⣋⣉⣉⡁⠄⢾⣦⠄⠄⠄⠄⠄⠄⠄⠄  -->
const messages = [
  // COMMON (early) //RANDOM BULLLSHITS
  { text: "BREACH THE CONTAINMENT UNIT", weight: 40, minCount: 0, amounts: 2 },
  { text: "ELIMINATE THE PLAYER WITH INVENTORY WORM CURSE AVATAR IN PVP", weight: 45, minCount: 0, amounts: 2 },
  { text: "BEAT A PLAYER IN FPS GAME", weight: 35, minCount: 0, amounts: 2 },
  { text: "MISSION: RAID THE TOWER", weight: 35, minCount: 0, amounts: 2 },
  { text: "CLEAR ALL EVIDENCE IN SECTOR A", weight: 40, minCount: 0, amounts: 1 },
  { text: "MISSION: ANNIHILATE ALL ENEMIES IN SECTOR C", weight: 40, minCount: 0, amounts: 2 },
  { text: "MISSION: ANNIHILATE ALL ENEMIES IN SECTOR A", weight: 45, minCount: 0, amounts: 3 },
  { text: "PREPARE YOUR ARSENAL AND LOADOUT", weight: 45, minCount: 0, amounts: 2 },
  { text: "MISSION: ANNIHILATE ALL ENEMIES IN SECTOR B", weight: 45, minCount: 0, amounts: 2 },
  { text: "CLEAR ALL EVIDENCE IN SECTOR B", weight: 40, minCount: 0, amounts: 3 },
  { text: "CLEAR ALL EVIDENCE IN SECTOR C", weight: 45, minCount: 0, amounts: 3 },
  { text: "KILL THE ■■■■■■■■■■", weight: 20, minCount: 0, amounts: 3 },

  // UNCOMMON (mid) / NOT REALLY BAD YET
  { text: "USE AN AOE EGO AND HAVE IT ONLY DAMAGE ONE ENEMY OR ONE PART", weight: 10, minCount: 4, amounts: 2 },
  { text: "INFLICT FIVE DIFFERENT DEBUFFS NEXT TURN", weight: 20, minCount: 3, amounts: 3 },
  { text: "HAVE ALL OF YOUR SINNERS USE A DEFENSE SKILL", weight: 20, minCount: 1, amounts: 4 },
  { text: "ACTIVATE A RESONANCE PASSIVE THIS TURN", weight: 10, minCount: 1, amounts: 3 },
  { text: "DEAL AN OVERALL 100 DAMAGE THIS TURN", weight: 30, minCount: 2, amounts: 2 },
  { text: "USE AN E.G.O SKILL THIS TURN", weight: 10, minCount: 2, amounts: 5 },
  { text: "DON'T CLASH WITH ANY OF YOUR SINNERS", weight: 10, minCount: 2, amounts: 5 },
  { text: "DONT'T KILL/STAGGER ANY ENEMIES THIS TURN", weight: 10, minCount: 2, amounts: 5 },
  { text: "REPEAT THE LAST PRESCRIPT", weight: 20, minCount: 3, amounts: 5 },
  { text: "ATTACK WITH SINNERS WITH SPEED TOTALING NO GREATER THAN 14", weight: 20, minCount: 3, amounts: 5 },
  { text: "STAGGER, PART_BREAK, OR DEAL 500 DAMAGE TO AN ENEMY THIS TURN", weight: 10, minCount: 4, amounts: 5 },
  { text: "SINNERS WITH SPEED LOWER OR EQUAL TO 'E', USE AN EGO SKILL", weight: 20, minCount: 5, amounts: 5 },
  { text: "CHAIN ATLEAST 3 SKILL SLOTS WITH THE SAME SIN-AFFINITY", weight: 10, minCount: 5, amounts: 5 },
  { text: "USE AN EGO THAT BUFFS YOUR ENTIRE TEAM THIS OR NEXT TURN", weight: 5, minCount: 7, amounts: 1 },
  // RARE (late) DIE ALREADY
  { text: "CLEAR A LEVEL IN RYTHM GAMES", weight: 20, minCount: 6, amounts: 3 },
  { text: "CHANGE 1 SINNERS RESISTANCE TYPE TO BE FATAL WITH ONE OF THE ENEMIES SKILLS", weight: 5, minCount: 8, amounts: 3 },
  { text: "HAVE A SINNER CORRODE NEXT TURN", weight: 10, minCount: 6, amounts: 3 },
  { text: "HAVE A SINNER DIE NEXT TURN", weight: 5, minCount: 9, amounts: 3 },
  { text: "DON'T USE MORE THAN 2 SKILL_1 THIS TURN", weight: 20, minCount: 6, amounts: 3 },
  { text: "USE AN OVERCLOCK E.G.O THIS TURN AND HAVE THAT SINNER CORRODE THIS OR NEXT TURN", weight: 5, minCount: 6, amounts: 3 },
  { text: "DEAL AN OVERALL 300 DAMAGE THIS TURN", weight: 30, minCount: 5, amounts: 3 },
  { text: "FIGHT YOUR LOVED ONES WITH ANYTHINGS", weight: 10, minCount: 7, amounts: 3 },
  { text: "HAVE A TOTAL OF 20 STATUS EFFECT [BUFF/DEBUFFS] ON YOUR SINNERS NEXT TURN ", weight: 10, minCount: 7, amounts: 3 },

  // VERY RARE / MEMES
  { text: "LEDAKAN GEDUNG DPR", weight: 5, minCount: 8, amounts: 10 },
  { text: "HILANGKAN ORANG-ORANG HITAM", weight: 20, minCount: 8, amounts: 10 },
  { text: "HAVE 1 LEGENDARY ITEM IN ANY GAME (includes SSR)", weight: 5, minCount: 3, amounts: 10 },
  { text: "KILL 100 NPCS IN RPG Game", weight: 5, minCount: 3, amounts: 1 },
  { text: "BILANG HIDUP JOKOWI!", weight: 5, minCount: 50, amounts: 1 },
  
];

const recentMessagesSize = 5;
const recentMessages = [];

function pickMessage() {
    const eligible = messages.filter(m => clickCount >= m.minCount && m.amounts > 0);
    if (!eligible.length){
      return null;  
    }
    let picked = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    while (attempts < MAX_ATTEMPTS) {
        attempts++;

        const totalWeight = eligible.reduce((s, m) => s + m.weight, 0);
        let roll = Math.random() * totalWeight;

        for (const m of eligible) {
            roll -= m.weight;
            if (roll <= 0) {
                picked = m;
                break;
            }
        }

        if (
            picked &&
            picked !== lastMessage &&
            !recentMessages.includes(picked)
        ) {
            break;
        }

        picked = null;
    }

    if (!picked){
      return null;  
    } 
    picked.amounts--;

    if (picked.amounts <= 0) {
        const idx = messages.indexOf(picked);
        if (idx !== -1) {
            messages.splice(idx, 1);
        }
    }

    recentMessages.push(picked);
    if (recentMessages.length > recentMessagesSize) {
        recentMessages.shift();
    }

    lastMessage = picked;
    return picked;
}

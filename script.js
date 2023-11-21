document.addEventListener('DOMContentLoaded', () => {
    // Class data array with stats
    const classes = [
        { name: "Warrior", level: 4, vitality: 11, attunement: 8, endurance: 12, strength: 13, dexterity: 13, resistance: 11, intelligence: 9, faith: 9, humanity: 0, total: 86 },
        { name: "Knight", level: 5, vitality: 14, attunement: 10, endurance: 10, strength: 11, dexterity: 11, resistance: 10, intelligence: 9, faith: 11, humanity: 0, total: 86 },
        { name: "Wanderer", level: 3, vitality: 10, attunement: 11, endurance: 10, strength: 10, dexterity: 14, resistance: 12, intelligence: 11, faith: 8, humanity: 0, total: 86 },
        { name: "Thief", level: 5, vitality: 9, attunement: 11, endurance: 9, strength: 9, dexterity: 15, resistance: 10, intelligence: 12, faith: 11, humanity: 0, total: 86 },
        { name: "Bandit", level: 4, vitality: 12, attunement: 8, endurance: 14, strength: 14, dexterity: 9, resistance: 11, intelligence: 8, faith: 10, humanity: 0, total: 86 },
        { name: "Hunter", level: 4, vitality: 11, attunement: 9, endurance: 11, strength: 12, dexterity: 14, resistance: 11, intelligence: 9, faith: 9, humanity: 0, total: 86 },
        { name: "Sorcerer", level: 3, vitality: 8, attunement: 15, endurance: 8, strength: 9, dexterity: 11, resistance: 8, intelligence: 15, faith: 8, humanity: 0, total: 82 },
        { name: "Pyromancer", level: 1, vitality: 10, attunement: 12, endurance: 11, strength: 12, dexterity: 9, resistance: 12, intelligence: 10, faith: 8, humanity: 0, total: 84 },
        { name: "Cleric", level: 2, vitality: 11, attunement: 11, endurance: 9, strength: 12, dexterity: 8, resistance: 11, intelligence: 8, faith: 14, humanity: 0, total: 84 },
        { name: "Deprived", level: 6, vitality: 11, attunement: 11, endurance: 11, strength: 11, dexterity: 11, resistance: 11, intelligence: 11, faith: 11, humanity: 0, total: 88 }
    ];

    const vitalityTable = [
        { vitality: 1, hp: 400, individualGain: '-' },
        { vitality: 2, hp: 415, individualGain: 15 },
        { vitality: 3, hp: 433, individualGain: 18 },
        { vitality: 4, hp: 451, individualGain: 18 },
        { vitality: 5, hp: 471, individualGain: 20 },
        { vitality: 6, hp: 490, individualGain: 19 },
        { vitality: 7, hp: 511, individualGain: 21 },
        { vitality: 8, hp: 530, individualGain: 19 },
        { vitality: 9, hp: 552, individualGain: 22 },
        { vitality: 10, hp: 572, individualGain: 20 },
        { vitality: 11, hp: 594, individualGain: 22 },
        { vitality: 12, hp: 616, individualGain: 22 },
        { vitality: 13, hp: 638, individualGain: 22 },
        { vitality: 14, hp: 658, individualGain: 20 },
        { vitality: 15, hp: 682, individualGain: 24 },
        { vitality: 16, hp: 698, individualGain: 16 },
        { vitality: 17, hp: 718, individualGain: 20 },
        { vitality: 18, hp: 742, individualGain: 24 },
        { vitality: 19, hp: 766, individualGain: 24 },
        { vitality: 20, hp: 792, individualGain: 26 },
        { vitality: 21, hp: 821, individualGain: 29 },
        { vitality: 22, hp: 849, individualGain: 28 },
        { vitality: 23, hp: 878, individualGain: 29 },
        { vitality: 24, hp: 908, individualGain: 30 },
        { vitality: 25, hp: 938, individualGain: 30 },
        { vitality: 26, hp: 970, individualGain: 32 },
        { vitality: 27, hp: 1001, individualGain: 31 },
        { vitality: 28, hp: 1034, individualGain: 33 },
        { vitality: 29, hp: 1066, individualGain: 32 },
        { vitality: 30, hp: 1100, individualGain: 34 },
        { vitality: 31, hp: 1123, individualGain: 23 },
        { vitality: 32, hp: 1147, individualGain: 24 },
        { vitality: 33, hp: 1170, individualGain: 23 },
        { vitality: 34, hp: 1193, individualGain: 23 },
        { vitality: 35, hp: 1216, individualGain: 23 },
        { vitality: 36, hp: 1239, individualGain: 23 },
        { vitality: 37, hp: 1261, individualGain: 22 },
        { vitality: 38, hp: 1283, individualGain: 22 },
        { vitality: 39, hp: 1304, individualGain: 21 },
        { vitality: 40, hp: 1325, individualGain: 21 },
        { vitality: 41, hp: 1346, individualGain: 21 },
        { vitality: 42, hp: 1366, individualGain: 20 },
        { vitality: 43, hp: 1386, individualGain: 20 },
        { vitality: 44, hp: 1405, individualGain: 19 },
        { vitality: 45, hp: 1424, individualGain: 19 },
        { vitality: 46, hp: 1442, individualGain: 18 },
        { vitality: 47, hp: 1458, individualGain: 16 },
        { vitality: 48, hp: 1474, individualGain: 16 },
        { vitality: 49, hp: 1489, individualGain: 15 },
        { vitality: 50, hp: 1500, individualGain: 11 },
        { vitality: 51, hp: 1508, individualGain: 8 },
        { vitality: 52, hp: 1517, individualGain: 9 },
        { vitality: 53, hp: 1526, individualGain: 9 },
        { vitality: 54, hp: 1535, individualGain: 9 },
        { vitality: 55, hp: 1544, individualGain: 9 },
        { vitality: 56, hp: 1553, individualGain: 9 },
        { vitality: 57, hp: 1562, individualGain: 9 },
        { vitality: 58, hp: 1571, individualGain: 9 },
        { vitality: 59, hp: 1580, individualGain: 9 },
        { vitality: 60, hp: 1588, individualGain: 8 },
        { vitality: 61, hp: 1597, individualGain: 9 },
        { vitality: 62, hp: 1606, individualGain: 9 },
        { vitality: 63, hp: 1615, individualGain: 9 },
        { vitality: 64, hp: 1623, individualGain: 8 },
        { vitality: 65, hp: 1632, individualGain: 9 },
        { vitality: 66, hp: 1641, individualGain: 9 },
        { vitality: 67, hp: 1649, individualGain: 8 },
        { vitality: 68, hp: 1658, individualGain: 9 },
        { vitality: 69, hp: 1666, individualGain: 8 },
        { vitality: 70, hp: 1675, individualGain: 9 },
        { vitality: 71, hp: 1683, individualGain: 8 },
        { vitality: 72, hp: 1692, individualGain: 9 },
        { vitality: 73, hp: 1700, individualGain: 8 },
        { vitality: 74, hp: 1709, individualGain: 9 },
        { vitality: 75, hp: 1717, individualGain: 8 },
        { vitality: 76, hp: 1725, individualGain: 8 },
        { vitality: 77, hp: 1734, individualGain: 9 },
        { vitality: 78, hp: 1742, individualGain: 8 },
        { vitality: 79, hp: 1750, individualGain: 8 },
        { vitality: 80, hp: 1758, individualGain: 8 },
        { vitality: 81, hp: 1767, individualGain: 9 },
        { vitality: 82, hp: 1775, individualGain: 8 },
        { vitality: 83, hp: 1783, individualGain: 8 },
        { vitality: 84, hp: 1791, individualGain: 8 },
        { vitality: 85, hp: 1799, individualGain: 8 },
        { vitality: 86, hp: 1807, individualGain: 8 },
        { vitality: 87, hp: 1814, individualGain: 7 },
        { vitality: 88, hp: 1822, individualGain: 8 },
        { vitality: 89, hp: 1830, individualGain: 8 },
        { vitality: 90, hp: 1837, individualGain: 7 },
        { vitality: 91, hp: 1845, individualGain: 8 },
        { vitality: 92, hp: 1852, individualGain: 7 },
        { vitality: 93, hp: 1860, individualGain: 8 },
        { vitality: 94, hp: 1867, individualGain: 7 },
        { vitality: 95, hp: 1874, individualGain: 7 },
        { vitality: 96, hp: 1881, individualGain: 7 },
        { vitality: 97, hp: 1888, individualGain: 7 },
        { vitality: 98, hp: 1894, individualGain: 6 },
        { vitality: 99, hp: 1900, individualGain: 6 }
    ];

    const enduranceStatsTable = [
        { endurance: 1, stamina: 80, bleedResist: 10, equipLoad: 41 },
        { endurance: 2, stamina: 80, bleedResist: 10, equipLoad: 42 },
        { endurance: 3, stamina: 80, bleedResist: 10, equipLoad: 43 },
        { endurance: 4, stamina: 80, bleedResist: 10, equipLoad: 44 },
        { endurance: 5, stamina: 80, bleedResist: 10, equipLoad: 45 },
        { endurance: 6, stamina: 80, bleedResist: 10, equipLoad: 46 },
        { endurance: 7, stamina: 80, bleedResist: 10, equipLoad: 47 },
        { endurance: 8, stamina: 88, bleedResist: 33, equipLoad: 48 },
        { endurance: 9, stamina: 90, bleedResist: 37, equipLoad: 49 },
        { endurance: 10, stamina: 91, bleedResist: 40, equipLoad: 50 },
        { endurance: 11, stamina: 93, bleedResist: 44, equipLoad: 51 },
        { endurance: 12, stamina: 95, bleedResist: 48, equipLoad: 52 },
        { endurance: 13, stamina: 97, bleedResist: 52, equipLoad: 53 },
        { endurance: 14, stamina: 98, bleedResist: 56, equipLoad: 54 },
        { endurance: 15, stamina: 100, bleedResist: 60, equipLoad: 55 },
        { endurance: 16, stamina: 102, bleedResist: 63, equipLoad: 56 },
        { endurance: 17, stamina: 104, bleedResist: 65, equipLoad: 57 },
        { endurance: 18, stamina: 106, bleedResist: 68, equipLoad: 58 },
        { endurance: 19, stamina: 108, bleedResist: 71, equipLoad: 59 },
        { endurance: 20, stamina: 110, bleedResist: 73, equipLoad: 60 },
        { endurance: 21, stamina: 112, bleedResist: 76, equipLoad: 61 },
        { endurance: 22, stamina: 115, bleedResist: 79, equipLoad: 62 },
        { endurance: 23, stamina: 117, bleedResist: 81, equipLoad: 63 },
        { endurance: 24, stamina: 119, bleedResist: 84, equipLoad: 64 },
        { endurance: 25, stamina: 121, bleedResist: 87, equipLoad: 65 },
        { endurance: 26, stamina: 124, bleedResist: 89, equipLoad: 66 },
        { endurance: 27, stamina: 126, bleedResist: 91, equipLoad: 67 },
        { endurance: 28, stamina: 129, bleedResist: 95, equipLoad: 68 },
        { endurance: 29, stamina: 131, bleedResist: 97, equipLoad: 69 },
        { endurance: 30, stamina: 133, bleedResist: 100, equipLoad: 70 },
        { endurance: 31, stamina: 136, bleedResist: 101, equipLoad: 71 },
        { endurance: 32, stamina: 139, bleedResist: 101, equipLoad: 72 },
        { endurance: 33, stamina: 141, bleedResist: 102, equipLoad: 73 },
        { endurance: 34, stamina: 144, bleedResist: 103, equipLoad: 74 },
        { endurance: 35, stamina: 146, bleedResist: 104, equipLoad: 75 },
        { endurance: 36, stamina: 149, bleedResist: 104, equipLoad: 76 },
        { endurance: 37, stamina: 152, bleedResist: 105, equipLoad: 77 },
        { endurance: 38, stamina: 154, bleedResist: 106, equipLoad: 78 },
        { endurance: 39, stamina: 157, bleedResist: 107, equipLoad: 79 },
        { endurance: 40, stamina: 160, bleedResist: 107, equipLoad: 80 },
        // Endurance levels beyond 40 have stamina capped at 160
        { endurance: 41, stamina: 160, bleedResist: 108, equipLoad: 81 },
        { endurance: 42, stamina: 160, bleedResist: 109, equipLoad: 82 },
        { endurance: 43, stamina: 160, bleedResist: 109, equipLoad: 83 },
        { endurance: 44, stamina: 160, bleedResist: 110, equipLoad: 84 },
        { endurance: 45, stamina: 160, bleedResist: 111, equipLoad: 85 },
        { endurance: 46, stamina: 160, bleedResist: 112, equipLoad: 86 },
        { endurance: 47, stamina: 160, bleedResist: 112, equipLoad: 87 },
        { endurance: 48, stamina: 160, bleedResist: 113, equipLoad: 88 },
        { endurance: 49, stamina: 160, bleedResist: 114, equipLoad: 89 },
        { endurance: 50, stamina: 160, bleedResist: 114, equipLoad: 90 },
        { endurance: 51, stamina: 160, bleedResist: 115, equipLoad: 91 },
        { endurance: 52, stamina: 160, bleedResist: 116, equipLoad: 92 },
        { endurance: 53, stamina: 160, bleedResist: 117, equipLoad: 93 },
        { endurance: 54, stamina: 160, bleedResist: 117, equipLoad: 94 },
        { endurance: 55, stamina: 160, bleedResist: 118, equipLoad: 95 },
        { endurance: 56, stamina: 160, bleedResist: 119, equipLoad: 96 },
        { endurance: 57, stamina: 160, bleedResist: 120, equipLoad: 97 },
        { endurance: 58, stamina: 160, bleedResist: 120, equipLoad: 98 },
        { endurance: 59, stamina: 160, bleedResist: 121, equipLoad: 99 },
        { endurance: 60, stamina: 160, bleedResist: 122, equipLoad: 100 },
        { endurance: 61, stamina: 160, bleedResist: 122, equipLoad: 101 },
        { endurance: 62, stamina: 160, bleedResist: 123, equipLoad: 102 },
        { endurance: 63, stamina: 160, bleedResist: 124, equipLoad: 103 },
        { endurance: 64, stamina: 160, bleedResist: 125, equipLoad: 104 },
        { endurance: 65, stamina: 160, bleedResist: 125, equipLoad: 105 },
        { endurance: 66, stamina: 160, bleedResist: 126, equipLoad: 106 },
        { endurance: 67, stamina: 160, bleedResist: 127, equipLoad: 107 },
        { endurance: 68, stamina: 160, bleedResist: 128, equipLoad: 108 },
        { endurance: 69, stamina: 160, bleedResist: 128, equipLoad: 109 },
        { endurance: 70, stamina: 160, bleedResist: 129, equipLoad: 110 },
        { endurance: 71, stamina: 160, bleedResist: 130, equipLoad: 111 },
        { endurance: 72, stamina: 160, bleedResist: 130, equipLoad: 112 },
        { endurance: 73, stamina: 160, bleedResist: 131, equipLoad: 113 },
        { endurance: 74, stamina: 160, bleedResist: 132, equipLoad: 114 },
        { endurance: 75, stamina: 160, bleedResist: 133, equipLoad: 115 },
        { endurance: 76, stamina: 160, bleedResist: 133, equipLoad: 116 },
        { endurance: 77, stamina: 160, bleedResist: 134, equipLoad: 117 },
        { endurance: 78, stamina: 160, bleedResist: 135, equipLoad: 118 },
        { endurance: 79, stamina: 160, bleedResist: 136, equipLoad: 119 },
        { endurance: 80, stamina: 160, bleedResist: 136, equipLoad: 120 },
        { endurance: 81, stamina: 160, bleedResist: 137, equipLoad: 121 },
        { endurance: 82, stamina: 160, bleedResist: 138, equipLoad: 122 },
        { endurance: 83, stamina: 160, bleedResist: 138, equipLoad: 123 },
        { endurance: 84, stamina: 160, bleedResist: 139, equipLoad: 124 },
        { endurance: 85, stamina: 160, bleedResist: 140, equipLoad: 125 },
        { endurance: 86, stamina: 160, bleedResist: 141, equipLoad: 126 },
        { endurance: 87, stamina: 160, bleedResist: 141, equipLoad: 127 },
        { endurance: 88, stamina: 160, bleedResist: 142, equipLoad: 128 },
        { endurance: 89, stamina: 160, bleedResist: 143, equipLoad: 129 },
        { endurance: 90, stamina: 160, bleedResist: 143, equipLoad: 130 },
        { endurance: 91, stamina: 160, bleedResist: 144, equipLoad: 131 },
        { endurance: 92, stamina: 160, bleedResist: 145, equipLoad: 132 },
        { endurance: 93, stamina: 160, bleedResist: 146, equipLoad: 133 },
        { endurance: 94, stamina: 160, bleedResist: 146, equipLoad: 134 },
        { endurance: 95, stamina: 160, bleedResist: 147, equipLoad: 135 },
        { endurance: 96, stamina: 160, bleedResist: 148, equipLoad: 136 },
        { endurance: 97, stamina: 160, bleedResist: 149, equipLoad: 137 },
        { endurance: 98, stamina: 160, bleedResist: 149, equipLoad: 138 },
        { endurance: 99, stamina: 160, bleedResist: 150, equipLoad: 139 },
    ];

    // Weapons data array with stats
    const weapons = {
        daggers: [
            {
                name: "Dagger",
                attackPower: {
                    physical: 56,
                    magic: 0,
                    fire: 0,
                    lightning: 0,
                    critical: 131
                },
                damageReduction: {
                    physical: 45,
                    magic: 10,
                    fire: 30,
                    lightning: 30,
                    stability: 26
                },
                auxEffects: {
                    bleed: 0,
                    poison: 0,
                    divine: 0,
                    occult: 0
                },
                requirements: {
                    strength: 5,
                    dexterity: 8,
                    intelligence: 0,
                    faith: 0
                },
                scaling: {
                    strength: "E",
                    dexterity: "B",
                    intelligence: null,
                    faith: null
                },
                durability: 200,
                weight: 0.5,
                attackType: ["Slash", "Thrust"],
                acquiredFrom: "Starting equipment for Sorcerer. Merchant: Undead Merchant (male) (300 Souls)"
            },
            {
                name: "Parrying Dagger",
                attackPower: {
                    physical: 54,
                    magic: 0,
                    fire: 0,
                    lightning: 0,
                    critical: 131
                },
                damageReduction: {
                    physical: 45,
                    magic: 10,
                    fire: 30,
                    lightning: 30,
                    stability: 26
                },
                auxEffects: {
                    bleed: 0,
                    poison: 0,
                    divine: 0,
                    occult: 0
                },
                requirements: {
                    strength: 5,
                    dexterity: 14,
                    intelligence: 0,
                    faith: 0
                },
                scaling: {
                    strength: "E",
                    dexterity: "B",
                    intelligence: null,
                    faith: null
                },
                durability: 200,
                weight: 0.5,
                attackType: ["Slash", "Thrust"],
                acquiredFrom: "Found in upper New Londo Ruins, in the area with the first Banshee."
            },
            {
                name: "Bandit's Knife",
                attackPower: {
                    physical: 56,
                    magic: 0,
                    fire: 0,
                    lightning: 0,
                    critical: 147
                },
                damageReduction: {
                    physical: 45,
                    magic: 10,
                    fire: 30,
                    lightning: 30,
                    stability: 26
                },
                auxEffects: {
                    bleed: 300,
                    poison: 0,
                    divine: 0,
                    occult: 0
                },
                requirements: {
                    strength: 6,
                    dexterity: 12,
                    intelligence: 0,
                    faith: 0
                },
                scaling: {
                    strength: "E",
                    dexterity: "B",
                    intelligence: null,
                    faith: null
                },
                durability: 200,
                weight: 1.0,
                attackType: ["Slash"],
                acquiredFrom: "Starting equipment for Thief. Drops from: Undead Assassins."
            },
            {
                name: "Ghost Blade",
                attackPower: {
                    physical: 110,
                    magic: 0,
                    fire: 0,
                    lightning: 0,
                    critical: 127
                },
                damageReduction: {
                    physical: 45,
                    magic: 10,
                    fire: 30,
                    lightning: 30,
                    stability: 26
                },
                auxEffects: {
                    bleed: 0,
                    poison: 0,
                    divine: 0,
                    occult: 0
                },
                requirements: {
                    strength: 5,
                    dexterity: 0,
                    intelligence: 0,
                    faith: 0
                },
                scaling: {
                    strength: "E",
                    dexterity: null,
                    intelligence: null,
                    faith: null
                },
                durability: 100,
                weight: 0.5,
                attackType: ["Slash", "Thrust", "Combo"],
                acquiredFrom: "Drops from: Banshees."
            },
            {
                name: "Dark Silver Tracer",
                attackPower: {
                    physical: 75,
                    magic: 0,
                    fire: 0,
                    lightning: 0,
                    critical: 160
                },
                damageReduction: {
                    physical: 45,
                    magic: 10,
                    fire: 30,
                    lightning: 30,
                    stability: 26
                },
                auxEffects: {
                    bleed: 0,
                    poison: 0,
                    divine: 0,
                    occult: 0
                },
                requirements: {
                    strength: 6,
                    dexterity: 25,
                    intelligence: 0,
                    faith: 0
                },
                scaling: {
                    strength: "E",
                    dexterity: "S",
                    intelligence: null,
                    faith: null
                },
                durability: 120,
                weight: 1.0,
                attackType: ["Slash", "Thrust"],
                acquiredFrom: "Obtained either by trading the Soul of Artorias to Lord's Blade Ciaran, or by killing her right away. (AotA only)"
            },
            {
                name: "Priscilla's Dagger",
                attackPower: {
                    physical: 80,
                    magic: 0,
                    fire: 0,
                    lightning: 0,
                    critical: 100
                },
                damageReduction: {
                    physical: 45,
                    magic: 10,
                    fire: 30,
                    lightning: 30,
                    stability: 26
                },
                auxEffects: {
                    bleed: 500,
                    poison: 0,
                    divine: 0,
                    occult: 110
                },
                requirements: {
                    strength: 6,
                    dexterity: 20,
                    intelligence: 0,
                    faith: 0
                },
                scaling: {
                    strength: null,
                    dexterity: "A",
                    intelligence: null,
                    faith: null
                },
                durability: 100,
                weight: 1.0,
                attackType: ["Slash", "Combo"],
                acquiredFrom: "Obtained by cutting off Crossbreed Priscilla's tail."
            },
        ]
        // ... TODO: Add other weapon categories
    };

    const classSelect = document.getElementById('startClass');
    const soulLevel = document.getElementById('soulLevel');
    const vitality = document.getElementById('vitality');
    const attunement = document.getElementById('attunement');
    const endurance = document.getElementById('endurance');
    const strength = document.getElementById('strength');
    const dexterity = document.getElementById('dexterity');
    const resistance = document.getElementById('resistance');
    const intelligence = document.getElementById('intelligence');
    const faith = document.getElementById('faith');
    const humanity = document.getElementById('humanity');
    const leftHand1 = document.getElementById('leftHand1');

    classes.forEach(cls => {
        const option = document.createElement('option');
        option.value = cls.name.toLowerCase();
        option.textContent = cls.name;
        classSelect.appendChild(option);
    });

    weapons.daggers.forEach(weapon => {
        const option = document.createElement('option');
        option.value = weapon.name.toLowerCase();
        option.textContent = weapon.name;
        leftHand1.appendChild(option);
    });

    function getStaminaFromEndurance(endurance) {
        if (endurance >= 40) return 160;
        const row = enduranceStatsTable.find(row => row.endurance === endurance);
        return row ? row.stamina : null;
    }

    function updateStats() {
        const vitalityValue = parseInt(vitality.value, 10);
        const enduranceValue = parseInt(endurance.value, 10);
        
        // Ensure we are using integers for table lookups
        const hp = getHpFromVitality(vitalityValue);
        const stamina = getStaminaFromEndurance(enduranceValue);
    
        if (hp !== null) {
            document.getElementById('hpValue').textContent = hp;
        }

        if (stamina !== null) {
            document.getElementById('staminaValue').textContent = stamina;
        }
    
        console.log('Stats updated');
    }
    
    function updateStatsForClass(selectedClass) {
        soulLevel.value = selectedClass.level;
        vitality.value = selectedClass.vitality;
        attunement.value = selectedClass.attunement;
        endurance.value = selectedClass.endurance;
        strength.value = selectedClass.strength;
        dexterity.value = selectedClass.dexterity;
        resistance.value = selectedClass.resistance;
        intelligence.value = selectedClass.intelligence;
        faith.value = selectedClass.faith;
        humanity.value = selectedClass.humanity;
    
        updateStats();
    }

    function getHpFromVitality(vitality) {
        const row = vitalityTable.find(row => row.vitality === vitality);
        return row ? row.hp : null;
    }

    classSelect.addEventListener('change', (event) => {
        const selectedClass = classes.find(cls => cls.name.toLowerCase() === event.target.value);
        updateStatsForClass(selectedClass);
    });

    updateStatsForClass(classes.find(cls => cls.name.toLowerCase() === classSelect.value));

    soulLevel.addEventListener('change', updateStats);
    vitality.addEventListener('change', updateStats);
    endurance.addEventListener('change', updateStats);

    updateStatsForClass(classes.find(cls => cls.name.toLowerCase() === classSelect.value));

    document.getElementById('calculate').addEventListener('click', updateStats);

});

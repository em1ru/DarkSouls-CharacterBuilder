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

    function updateStats() {
        const vitalityValue = parseInt(vitality.value, 10);
        const hp = getHpFromVitality(vitalityValue);
    
        if(hp !== null) {
            document.getElementById('hpValue').textContent = hp.toString();
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

    updateStatsForClass(classes.find(cls => cls.name.toLowerCase() === classSelect.value));

    document.getElementById('calculate').addEventListener('click', () => {
        updateStats();
    });

});

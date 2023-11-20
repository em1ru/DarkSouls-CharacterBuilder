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

    // References to HTML elements
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
        // Update any additional stats here
    }

    // Event listener for the class selection dropdown
    classSelect.addEventListener('change', (event) => {
        const selectedClass = classes.find(cls => cls.name.toLowerCase() === event.target.value);
        updateStatsForClass(selectedClass);
    });

    // Initialize stats for the default selected class on page load
    updateStatsForClass(classes.find(cls => cls.name.toLowerCase() === classSelect.value));

    // Function to update the UI with calculated stats
    function updateStats() {
        // Implement the stat calculation based on the user's selections and update the UI accordingly
        // For now, just log 'Stats updated' to the console
        console.log('Stats updated');
    }

    // Event listeners for stat changes
    soulLevel.addEventListener('change', updateStats);
    vitality.addEventListener('change', updateStats);
    // ... Add event listeners for other stats as needed

    document.getElementById('calculate').addEventListener('click', () => {
        updateStats();
    });

    function updateStats() {
        // TODO: Implement the stat calculation based on the user's selections and update the UI accordingly
        // This is a placeholder function. You need to define how stats are updated based on selections.
        console.log('Stats updated');
    }

    // Event listener for the calculate button
    document.getElementById('calculate').addEventListener('click', () => {
        updateStats();
    });

    // Additional event listeners and logic can be added below as needed
});

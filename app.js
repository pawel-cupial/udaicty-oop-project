// Global Variables
const btn = document.getElementById('btn');
const grid = document.getElementById('grid');

// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact, img) {
    this.species = species
    this.weight = weight
    this.height = height
    this.diet = diet
    this.where = where
    this.when = when
    this.fact = fact
    this.img = img
    this.compareWeight = function (weight) {
        if (this.weight > weight) {
            this.fact.push(this.species + ' weights more than you!')
        } else if (this.weight < weight) {
            this.fact.push(this.species + ' weights less than you!')
        } else {
            this.fact.push(this.species + ' weights the same as you!')
        }
    }
    this.compareHeight = function (height) {
        if (this.height > height) {
            this.fact.push(this.species + ' is higher than you!')
        } else if (this.height < height) {
            this.fact.push(this.species + ' is lower than you!')
        } else {
            this.fact.push(this.species + ' is the same height as you!')
        }
    }
    this.compareDiet = function (diet) {
        if (this.diet.toLowerCase() === diet.toLowerCase()) {
            this.fact.push(this.species + ' has the same diet as you!')
        } else {
            this.fact.push(this.species + ' has different eating habbits than you!')
        }
    } 
}

// Create Dino Objects
const triceratops = new Dinosaur('Triceratops', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', ['First discovered in 1889 by Othniel Charles Marsh.'], 'images/triceratops.png');
const trex = new Dinosaur('Tyrannosaurus Rex', 11905, 144, 'carnivor', 'North America', 'Late Cretaceous', ['The largest known skull measures in at 5 feet long.'], 'images/tyrannosaurus-rex.png');
const anklyosaurus = new Dinosaur('Anklyosaurus', 10500, 55, 'herbavor', 'North America', 'Late Cretaceous', ['Anklyosaurus survived for approximately 135 million years.'], 'images/anklyosaurus.png');
const brachiosaurus = new Dinosaur('Brachiosaurus', 70000, 372, 'herbavor', 'North America', 'Late Jurasic', ['An asteroid was named 9954 Brachiosaurus in 1991.'], 'images/brachiosaurus.png');
const stegosaurus = new Dinosaur('Stegosaurus', 11600, 79, 'herbavor', 'North America, Europe, Asia', 'Late Jurasic to Early Cretaceous', ['The Stegosaurus had between 17 and 22 seperate places and flat spines.'], 'images/stegosaurus.png');
const elasmosaurus = new Dinosaur('Elasmosaurus', 16000, 59, 'carnivor', 'North America', 'Late Cretaceous', ['Elasmosaurus was a marine reptile first discovered in Kansas.'], 'images/elasmosaurus.png');
const pteranodon = new Dinosaur('Pteranodon', 44, 20, 'carnivor', 'North America', 'Late Cretaceous', ['Actually a flying reptile, the Pteranodon is not a dinosaur.'], 'images/pteranodon.png');
const pigeon = new Dinosaur('Pigeon', 0.5, 9, 'herbavor', 'World Wide', 'Holocene', 'All birds are living dinosaurs.', 'images/pigeon.png');

// Create Human Object
const human = {
    name: '',
    height: '',
    weight: '',
    diet: '',
    img: 'images/human.png'
}

// Array of objects
const animals = [triceratops, trex, anklyosaurus, brachiosaurus, human, stegosaurus, elasmosaurus, pteranodon, pigeon]

// Generate facts
const createFacts = function() {
    animals.forEach(element => {
        if(element.species != 'Pigeon' && element.species != undefined) {
            element.compareWeight(human.weight)
            element.compareHeight(human.height)
            element.compareDiet(human.diet)
        }
    })
}

// Generate and append tiles
const createTiles = function() {
    animals.forEach(element => {
        const randomNum = (Math.floor(Math.random() * (3 - 0 + 1)) + 0);
        const div = document.createElement('div');
        const header = document.createElement('h3');
        const p = document.createElement('p');
        const img = document.createElement('img');

        div.className = 'grid-item';
        img.src = element.img;

        if(element.name != undefined) {
            header.textContent = element.name;
        } else {
            header.textContent = element.species;
        }

        if(Array.isArray(element.fact)) {
            p.textContent = element.fact[randomNum]            
        } else {
            p.textContent = element.fact
        }

        grid.appendChild(div);
        div.appendChild(header);
        div.appendChild(p);
        div.appendChild(img);
    } )
}

// Use IIFE to get human data from form
btn.addEventListener('click', (function getHumanData() {
    const form = document.getElementById('dino-compare');
    return function() {
        human.name = document.getElementById('name').value;
        human.height = parseInt((document.getElementById('feet').value * 12)) +  parseInt(document.getElementById('inches').value);
        human.weight = document.getElementById('weight').value;
        human.diet = document.getElementById('diet').value;
        form.style.display = "none";
    }        
  }
)());

// On button click, prepare and display infographics
btn.addEventListener('click', createFacts)
btn.addEventListener('click', createTiles)
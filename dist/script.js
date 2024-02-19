const hamberger_menu_link = document.querySelector('.hamberger-menu-section');
const hamberger_menu_icon = document.querySelector('.hamberger-menu');
const info_hero__model = document.querySelector('.info_hero-model');
const nav_links = document.querySelector('.nav-links');
const hero_logo = document.querySelector('.hero-logo-img');
const honored_hero__name = document.querySelector('#honored-hero_name');

const card_model = document.querySelector('.hero-model-info');
const close_model = document.querySelector('#close-model');
const hero__model = document.querySelector('.hero-model');

// test
let testP = document.getElementById('test')



window.addEventListener('load',()=>{
    hero_logo.classList.add('onload')
})

const heroes_stats = [
    {
        id:1,
        hero_name:'ALEISTER',
        img:'../images/character-1.jpg',
        Str:'12',
        Dex:'8',
        agility:'10',
        Willpower:'15',
        int:'8.5',
        link:'https://dragonage.fandom.com/wiki/Alistair'

    },
    {
        id:2,
        hero_name:'HECTOR',
        img:'../images/character-2.jpg',
        Str:'19',
        Dex:'10',
        agility:'5',
        Willpower:'8',
        int:'9',
        link:'https://en.wikipedia.org/wiki/Hector'


    },
    {
        id:3,
        hero_name:'THEREGAR',
        img:'../images/character-3.jpg',
        Str:'9',
        Dex:'10',
        agility:'7',
        Willpower:'14',
        int:'15',
        link:'https://www.artstation.com/artwork/aVP1z'


    },
    {
        id:4,
        hero_name:'ROTH',
        img:'../images/character-4.jpg',
        Str:'7',
        Dex:'17',
        agility:'20',
        Willpower:'11',
        int:'6',
        link:'https://www.artstation.com/artwork/B3zzEr'



    }
]



document.querySelectorAll('.hero-card').forEach((card,i)=>{
    card.addEventListener('click',()=>{
        card_model.classList.add('active');
        info_hero__model.innerHTML= `

        <img src="${heroes_stats[i].img}" alt="Hero Model" class="hero-model-img py-8">
        <!-- stats -->
        <ul class="stats-info pb-14">
            <li class="Strength">Strength: <span class="stat-value">${heroes_stats[i].Str}</span></li>
            <li class="Dexterity">Dexterity: <span class="stat-value">${heroes_stats[i].Dex}</span></li>
            <li class="Agility">Agility: <span class="stat-value">${heroes_stats[i].agility}</span></li>
            <li class="Willpower">Willpower: <span class="stat-value">${heroes_stats[i].Willpower}</span></li>
            <li class="Intelligence">Intelligence: <span class="stat-value">${heroes_stats[i].int}</span></li>
        </ul>
    </div>

        `
        honored_hero__name.innerHTML= ` ${heroes_stats[i].hero_name}`
    })
})



hamberger_menu_link.addEventListener('click',()=>{
    hamberger_menu_icon.classList.toggle('active');
    nav_links.classList.toggle('active');
})


// Prview Model ux
document.addEventListener('click', (event) => {
    if (event.target == card_model) {
        card_model.classList.remove('active');
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      card_model.classList.remove('active');
    }
  });





close_model.addEventListener('click',()=>{
    card_model.classList.remove('active');
})
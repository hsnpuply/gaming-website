const hamberger_menu_link = document.querySelector('.hamberger-menu-section');
const hamberger_menu_icon = document.querySelector('.hamberger-menu');
const nav_links = document.querySelector('.nav-links');
const hero_logo = document.querySelector('.hero-logo-img');

const card_model = document.querySelector('.hero-model-info');
const close_model = document.querySelector('.close-model');
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


const cloze_model_btn=  '<span class="close-model cursor-pointer text-primary absolute top-5 right-8">x</span>;'

document.querySelectorAll('.hero-card').forEach((card,i)=>{
    card.addEventListener('click',()=>{
        card_model.classList.add('active');
        hero__model.innerHTML= `
        <!-- Borders -->
        <span class="border-corner border-model-top-left"></span>
        <span class="border-corner border-model-top-right"></span>
        <span class="border-corner border-model-bottom-left"></span>
        <span class="border-corner border-model-bottom-right"></span>

        <span class="border-side  border-model-top"></span>
        <span class="border-side border-model-bottom"></span>
        <span class="border-side border-model-right"></span>
        <span class="border-side border-model-left"></span>


        <div class="title_hero-model  w-full py-10 border-b-2 border-black relative">
        <h4 class="title-model text-2xl text-primary">Hero Name: ${heroes_stats[i].hero_name} </h4>

        <span class="my_hero_close">${cloze_model_btn}</span>
    </div>

    <!-- Hero model info -->
    <div class="info_hero-model">
        <img src="${heroes_stats[i].img}" alt="Hero Model" class="hero-model-img py-8">
        <!-- stats -->
        <ul class="stats-info pb-14">
            <li class="Strength">Strength: ${heroes_stats[i].Str}</li>
            <li class="Dexterity">Dexterity: ${heroes_stats[i].Dex}</li>
            <li class="Agility">Agility: ${heroes_stats[i].agility}</li>
            <li class="Willpower">Willpower: ${heroes_stats[i].Willpower}</li>
            <li class="Intelligence">Intelligence: ${heroes_stats[i].int}</li>
        </ul>
    </div>

    <!-- download button -->
    <div class="download_hero-model ">
        <a href="https://www.crazygames.com/game/dragon-and-fury" target="_blank" class="download-btn  relative">
            <span class="download-left-side"></span>
            <span class="download-mid-side ">Download & Play Now</span>
            <span class="download-right-side"></span>
        </a>
    </div>
        `
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






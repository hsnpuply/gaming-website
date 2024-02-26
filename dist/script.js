const hamberger_menu_link = document.querySelector('.hamberger-menu-section');
const hamberger_menu_icon = document.querySelector('.hamberger-menu');
const info_hero__model = document.querySelector('.info_hero-model');
const top_header = document.querySelector('.top-header');
const nav_links = document.querySelector('.nav-links');
const hero_logo = document.querySelector('.hero-logo-img');
const honored_hero__name = document.querySelector('#honored-hero_name');
const swiper_wrapper = document.querySelector('#swiper-wrapper');
const heroes_preview  = document.querySelector('#heroes-preview ');
const platforms_store = document.querySelector('.platforms-store');
const store_name = document.querySelector('#store-name');
const heroes = document.querySelector('#heroes');
const title_intro = document.querySelector('#title-intro');

const card_model = document.querySelector('.hero-model-info');

const close_model_btn = document.querySelector('#close-model-btn');
const hero__model = document.querySelector('.hero-model');
const title_model__product = document.querySelector('#title-model_product');

const choice = document.querySelector('.choice');
const newsletter = document.querySelector('#newsletter');


const close_btn =  document.querySelector('#close-model-btn');

// sections
const GallerySection = document.querySelector('#gallery');
const HeroesSection = document.querySelector('#heroes');
const ContactSection = document.querySelector('#contact');
const StoreSection = document.querySelector('#store');




// my links
const gallery_link = document.querySelector('#gallery-link');
const contact_link = document.querySelector('#contact-link');
const heroes_link = document.querySelector('#heroes-link');
const store_link = document.querySelector('#store-link');


// appears Animate
// a-gallery
const game_gallery = document.querySelector('#game-gallery-framer');
const gallery_title = document.querySelector('#gallery-title');
const gallery_desc = document.querySelector('#gallery-desc');
// a-store
const store_title = document.querySelector('#store-title');
const store_desc = document.querySelector('#store-desc');
const platforms_store_ID = document.querySelector('#platforms-store');
// a-developers
const DevelopersSection = document.querySelector('#developers');
const developers_title = document.querySelector('.developers-title');
// a-contact
const contact_us = document.querySelector('#contact-us');
const contact_title = document.querySelector('#contact-title');
const contact_desc = document.querySelector('#contact-desc');

// a-footer
const FooterSection = document.querySelector('#footer');
const footer_container = document.querySelector('#footer-container');
const copyright = document.querySelector('#copyright');

// end of appears Animate

// When Scroll entered the current section then link of current section will be highlighted

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    // in small Size version of animations
    if (window.innerWidth <= 720) {

        // Heroes Section
        window.scrollY + window.innerHeight >= HeroesSection.offsetTop + HeroesSection.offsetHeight / 4
        && window.scrollY < GallerySection.offsetTop
       ? ( title_intro.classList.add('entered_section','appear-from-right-title') , document.querySelectorAll('.hero-card').forEach((card) => {
           card.classList.add('appear-from-right-content');
       })
       )
       :





         // Store Section
     window.scrollY + window.innerHeight >= StoreSection.offsetTop + StoreSection.offsetHeight / 4
        && window.scrollY < ContactSection.offsetTop
         ? (store_link.classList.add('entered_section'),store_title.classList.add('entered_section','appear-from-right-title'),store_desc.classList.add('appear-from-right-title'),
           platforms_store_ID.classList.add('appear-from-right-content')
     )
     : store_link.classList.remove('entered_section')



      // Developers section
    window.scrollY + window.innerHeight >= DevelopersSection.offsetTop + DevelopersSection.offsetHeight / 4
    && window.scrollY < ContactSection.offsetTop
    ? (developers_title.classList.add('entered_section','appear-from-left-title'),
    document.querySelectorAll('.devleopers-team').forEach((devs)=>{
    devs.classList.add('appear-from-left-content')
    }))
    :



     // Contact Section
     window.scrollY + window.innerHeight >= ContactSection.offsetTop + ContactSection.offsetHeight / 4
     ? (contact_link.classList.add('entered_section'),contact_title.classList.add('entered_section','appear-from-right-title'),
     contact_desc.classList.add('appear-from-right-title'),
     contact_us.classList.add('appear-from-right-content'))
     : contact_link.classList.remove('entered_section')

      }



    // Heroes Section
    window.scrollY + window.innerHeight >= HeroesSection.offsetTop + HeroesSection.offsetHeight / 1.9
     && window.scrollY < GallerySection.offsetTop
    ? (heroes_link.classList.add('entered_section') , title_intro.classList.add('entered_section','appear-from-right-title') , document.querySelectorAll('.hero-card').forEach((card) => {
        card.classList.add('appear-from-right-content');
    })
    )
    : heroes_link.classList.remove('entered_section')





    // Gallery Section
    window.scrollY + window.innerHeight >= GallerySection.offsetTop + GallerySection.offsetHeight / 1.9
    && window.scrollY < StoreSection.offsetTop
    ? (gallery_link.classList.add('entered_section')
    )
    : gallery_link.classList.remove('entered_section')


    // gallery appear element

    window.scrollY + window.innerHeight >= GallerySection.offsetTop + GallerySection.offsetHeight / 4
    && window.scrollY < StoreSection.offsetTop
    ? (gallery_title.classList.add('entered_section','appear-from-left-title'),gallery_desc.classList.add('appear-from-left-title'),
    game_gallery.classList.add('appear-from-left-content')
    )
    :



    // Store Section
    window.scrollY + window.innerHeight >= StoreSection.offsetTop + StoreSection.offsetHeight / 1.3
    && window.scrollY < ContactSection.offsetTop
    ? (store_link.classList.add('entered_section'),store_title.classList.add('entered_section','appear-from-right-title'),store_desc.classList.add('appear-from-right-title'),
        platforms_store_ID.classList.add('appear-from-right-content')
    )
    : store_link.classList.remove('entered_section')


    // Developers section

    window.scrollY + window.innerHeight >= DevelopersSection.offsetTop + DevelopersSection.offsetHeight / 1.4
    && window.scrollY < ContactSection.offsetTop
    ? (developers_title.classList.add('entered_section','appear-from-left-title'),
    document.querySelectorAll('.devleopers-team').forEach((devs)=>{
    devs.classList.add('appear-from-left-content')
    }))
    :



    // Contact Section
    window.scrollY + window.innerHeight >= ContactSection.offsetTop + ContactSection.offsetHeight / 1.4
    ? (contact_link.classList.add('entered_section'),contact_title.classList.add('entered_section','appear-from-right-title'),
    contact_desc.classList.add('appear-from-right-title'),
    contact_us.classList.add('appear-from-right-content'))
    : contact_link.classList.remove('entered_section')


    // Footer Section
    window.scrollY + window.innerHeight >= FooterSection.offsetTop + FooterSection.offsetHeight / 1.3
    ? (copyright.classList.add('appear-from-right-title'),footer_container.classList.add('appear-from-right-content')): console.log('');


})




choice.addEventListener('click',()=>{
    choice.classList.toggle('activated')

    choice.classList.contains('activated') ? newsletter.checked=true : newsletter.checked=false;

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
const heroes_models=[
    {
        id:1,
        img:'../images/character-1.jpg',
        name:'Aleister',
        desc:'Aleister, the former demonlord, is always looking at others bearing a malefic grin upon his twisted visage, harnessing all the power he can muster as he directs bolts of pure chaos towards his foes.',
    },

    {
        id:2,
        img:'../images/character-2.jpg',
        name:'HECATE',
        desc:'The only place Hecate feels safe is total Darkness, where she envelopes herself and thrives, until it totally consumes her existence. Until that strange familiar odor which vanished, reappears and stabs you - in the Dark.',
    },

    {
        id:3,
        img:'../images/character-3.jpg',
        name:'THEREGAR',
        desc:`Theregar's smile looks intimidating as it is, yet is amplified by the fel green hue of the enchantments he is preparing: As he deflects his attackers, his foes are enlightened by his immense control of the Shadows...`
    },

    {
        id:4,
        img:'../images/character-4.jpg',
        name:'ROTH',
        desc:'Void claimed all in the Halls of Reflection as Roth rised from the Stone, his voice echoing again in the sultry darkness. His enemies fallen, their eyesight blurred, their powers escaping their body as he consumed their souls...'
    },


]
const gallery=[
    {
        id:1,
        img:'../images/swiper-images/1.jpg',
        title:"The Hall of Reflections is one of three halls in the Tower of Brunj",
    },
    {
        id:2,
        img:'../images/swiper-images/2.jpg',
        title:"The Dragon's voice boomed throughout the kingdom...",
    },

    {
        id:3,
        img:'../images/swiper-images/3.jpg',
        title:"She would give them a piece of their own personal hell...",
    },

    {
        id:4,
        img:'../images/swiper-images/4.jpg',
        title:"The Enlightened's charred husk remained atop the castle's walls...",
    },

    {
        id:5,
        img:'../images/swiper-images/5.jpg',
        title:"Void claimed all in the Halls of Reflection...",
    },


    {
        id:6,
        img:'../images/swiper-images/6.jpg',
        title:"Theregar deflected another attack, towering atop the crambled stairs...",
    },


        {
        id:7,
        img:'../images/swiper-images/7.jpg',
        title:"The soul fragments met, imprisoning life in the midst of the Void...",
    },

    {
        id:8,
        img:'../images/swiper-images/8.jpg',
        title:"Only moments remain before the Halls of Reflection burst into light...",
    },

]

const platforms=[
    {
        id:1,
        name:'AppStore - iOS Version',
        img:'../images/store/apple-platform.jpg',
        price:"€ 8.99",
    },
    {
        id:2,
        name:'GooglePlay - Android Version',
        img:'../images/store/google_play-store.jpg',
        price:"€ 6.99",
    },
    {
        id:3,
        name:'Steam - PC Version',
        img:'../images/store/steam-store.jpg',
        price:"€ 9.99",
    },
]

const platform_cards=[
    {
        id:1,
        title:'IOS Version',
        desc:`Available both for Apple iPhone & Apple iPad, specially designed for Apple iPad Pro & Force Touch.`,
        img:'../images/store/apple-platform.jpg',
        icon:'fa-apple',
        custom_class:'platform-apple-store',
        store_name:'AppleStore |'
    },
    {
        id:2,
        title:'Android Version',
        desc:`Incorporating the finest tweaks for absolutely best performance and stellar graphics in all devices.`,
        img:'../images/store/google_play-store.jpg',
        icon:'fa-android',
        custom_class:'platform-google_play-store',
        store_name:'GooglePlay |'
    },
    {
        id:3,
        title:'PC & MAC Version',
        desc:`The zenith of graphics, the PC & Mac versions offer a truly unforgetable experience.`,
        img:'../images/store/steam-store.jpg',
        icon:'fa-steam',
        custom_class:'platform-steam-store',
        store_name:'Steam |'
    },
]

window.addEventListener('load',()=>{
    hero_logo.classList.add('onload')


})




makeGallery()
function makeGallery() {
    if (!gallery || gallery.length === 0) {
      console.error("gallery is empty or not defined");
      return;
    }

    let swiperHtml = "";
    for (let i = 0; i < gallery.length; i++) {
      swiperHtml += `
        <div class="swiper-slide" id="swiper-${gallery[i].id}">
          <img src="${gallery[i].img}" alt="" class="swiper-img">
          <p
            class="swiper-desc w-full hidden sm:block text-xs text-center bottom-8 md:bottom-10 md:text-lg  lg:bottom-16 lg:text-2xl"
          >
            ${gallery[i].title}
          </p>
        </div>
      `;
    }

    swiper_wrapper.innerHTML = swiperHtml;
  }

  makeHeroes()
  function makeHeroes() {
      if (!heroes_models || heroes_models.length === 0) {
        console.error("Heroes are empty or not defined");
        return;
      }

      let swiperHtml = "";
      for (let i = 0; i < heroes_models.length; i++) {
        swiperHtml += `
        <div class="hero-card hero-${heroes_models[i].id}">
        <div class="model cursor-pointer ">
            <img src="${heroes_models[i].img}" alt="Hero>" class="hero-img ">
            <h2 class="hero-name text-2xl ">${heroes_models[i].name}</h2>
            <div class="hero-desc-container">
                <p class="hero-desc">
                ${heroes_models[i].desc}
                </p>
            </div>

        </div>
    </div>
        `;
      }

      heroes_preview.innerHTML = swiperHtml;
    }

    makePlatform_stores()
    function makePlatform_stores(){
            if (!platform_cards || platform_cards.length === 0) {
              console.error("platforms are  empty or not defined");
              return;
            }

            let text_variable = "";
            for (let i = 0; i < platform_cards.length; i++) {
              text_variable += `
              <div class="platform ${platform_cards[i].custom_class}">
              <div class="platform-imag-container relative  ">
                  <img src="${platform_cards[i].img}" alt="Apple-Store" class="platform-img">
                  <div
                      class="absolute bottom-0 left-0 text-center text-lg platform-info   text-white flex items-start justify-center flex-col w-full m">
                      <h3 class="title-platform text-xl font-bold px-5 p-2">${platform_cards[i].title}</h3>
                      <p class="desc-platform pb-5 text-black font-bold text-left px-5">

                      ${platform_cards[i].desc}

                      </p>
                  </div>
              </div>
              <div class="platform-download w-full">
                  <a href="https://www.google.com" class="download-btn download-btn-platform  relative">
                      <span class="download-left-side"></span>
                      <span class="download-mid-side "><span class="store-name" id="store-name">${platform_cards[i].store_name}</span><span class="platform-icon"><i
                                  class="fab ${platform_cards[i].icon} px-2"></i></span></span>
                      <span class="download-right-side"></span>
                  </a>

              </div>
          </div>
              `;
            }

            platforms_store.innerHTML = text_variable;
    }





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
        honored_hero__name.innerHTML= `Hero Name : ${heroes_stats[i].hero_name}`
    })
})





document.querySelectorAll('.platform').forEach((platform,i)=>{
    platform.addEventListener('click',()=>{
        card_model.classList.add('active');
        info_hero__model.innerHTML= `

        <img src="${platforms[i].img}" alt="Hero Model" class="hero-model-img h-[80%] py-2">
        <!-- stats -->
        <p class="text-center text-primary text-lg p-2 price-value">${platforms[i].price}</p>
    </div>

        `
        honored_hero__name.innerHTML= ` ${platforms[i].name}`
        title_model__product.innerHTML='Dragonic: '
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
      hamberger_menu_icon.classList.remove('active');
      nav_links.classList.remove('active');
    }

  });

close_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    card_model.classList.remove('active');

  })





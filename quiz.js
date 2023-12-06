// i decided to bring in this data here duel to the error im having while importing it from a different files
const userData = [
    {
        id: 1,
        name: 'ola',
        picture: './images/img2.jpg',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: false,
        
    },
    {
        id: 2,
        name: 'olamide',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: true,
        
    },
    {
        id: 3,
        name: 'olamiposi',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: true,
        
    },
    {
        id: 4,
        name: 'ola',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: false,
        
    },
    {
        id: 4,
        name: 'ola',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: false,
        
    },
    {
        id: 4,
        name: 'ola',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: false,
        
    },
    {
        id: 4,
        name: 'ola',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.toDateString()
            return currentDate
        },
        varified: false,
        
    },
    {
        id: 5,
        name: 'olami',
        picture: 'url',
        reviews: `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sequi, ab facilis! 
        Ratione vel ipsum ipsa dolores porro 
        ab asperiores, facilis provident 
        reiciendis, culpa quae ad eum 
        consequuntur a aliquid perferendis`,
        date: function(){
            const date = new Date()
            let currentDate = date.getDate()
            return currentDate
        },
        varified: false,
        
    }
]

// navbar oscroll color change and positioning
const header = document.querySelector('header')
let prevScrollPos = window.scrollY;
window.addEventListener('scroll', function() {
    const currentScrollY = this.window.scrollY
    if (currentScrollY !==  prevScrollPos) {
        if (currentScrollY > prevScrollPos) {
            // header.style.top = `-100px`
            header.style.background = `white`
            prevScrollPos = currentScrollY
        }else {
            // header.style.top = `0px`
        }
        prevScrollPos = currentScrollY
    }
    if(prevScrollPos === 0){
        header.style.background = `transparent`
    }
});

// toggle menu
const toggle = document.querySelector('.navIcon');
const closeToggle =  document.querySelector('.toggleClose');
const nav = document.querySelector('.nav');
const oevrlay = document.querySelector('.overlay');


toggle.addEventListener('click', function() {
    nav.style.left = 0
   oevrlay.classList.add('showActive')
});

closeToggle.addEventListener('click', function() {
    closetoggle()
})

oevrlay.addEventListener('click', function() {
   closetoggle()
})

const closetoggle = ()=>{
    nav.style.left = `-400px`;
    oevrlay.classList.remove('showActive')
}

// // rewiews mapping
const auto__review = document.querySelector('.auto__review');

const createNewReviews = (data) => {
    const {id, name, picture, reviews, date, varified} = data;
    // rewiews mappingn                
     const reviewUi = `<div class="sRank">
     <div class="rank">
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
         <i class="fa-solid fa-star"></i>
    
         <div class="verifiled">
             <i class="fa-solid fa-check"></i> 
             <p>${
                varified ? 'varified' : 'pending'
             }</p>
         </div>
     </div>
     
     <p class="reviews__lists">${reviews}</p>
     <div class="details">
        <div class="userD">
            <div class="user__img">
            <img src="${picture}" alt="userprofile">
        </div>
            <h3 class="name">${name}</h3>
        </div>
        <p class="uDate">${date()}</p>
     </div>
    </div>`;

    return reviewUi
};

const createReviews = userData.map(data => {
    return(
        createNewReviews(data)
    )
});

auto__review.innerHTML = createReviews.join('')
// end of the reviews 

// 
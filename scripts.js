/* Portfolio content */

const accordionContent = [
  {
    title: "A work in progress",
    img: "images/ai.jpg",
    body: "This is my latest project. I put aside work on it to build this site, so you may encounter bugs. It's built on an entirely new-to-me stack: Netlify CMS, Eleventy static site generator, templates in Nunjucks, running on Netlify. I'm a big believer in modular systems, so this is all built using Netlify CMS's 'variable type' list widget which enables a page-builder type experience. ",
    link: "https://agnewiler.netlify.app/",
    linkText: "Check it out",
    tags: "Netlify, Design by me"
  },
  {
    title: "An annual report mini-site",
    img: "images/woodgreen.jpg",
    body: "Despite the 'mini-site' label this site is actually quite large. It was developed as a Wordpress plugin so as not to require monkeying with Woodgreen's current theme. It utilizes <a href='https://www.advancedcustomfields.com/' target='_blank'>ACF</a> flexible fields to provide a page-builder like functionality on the backend.",
    link: "https://www.woodgreen.org/about-us/annual-reports/2019-20/governance-update-woodgreen-foundation/",
    linkText: "This is my favourite page. Fun animating charts!",
    tags: "Wordpress, Wordpress plugin, Animation, Design by Rally Rally"
  },
  {
    title: "My wedding website",
    img: "images/wedding.jpg",
    body: "A labour of love! I wanted to build something fun for my wedding. Move your mouse around and Kasia and I will watch where you go. Click the heart emoji to shoot an arrow through it and make us kiss! On mobile you grab onto the bow and arrow and point it at the heart to do the same thing. (I mocked up a version of the mobile site that used your phone's accelerometer to move the ball around, which I thought was pretty cool but is so far from a normal mode of input that it was pretty confusing.)</p><p>Guests were all assigned custom urls at which they could RSVP and read more details. The site is running on Firebase and uses their API to create a slightly unusual RSVP form which saves as you go. I wanted to integrate the gift registry into the site too but ran out of time.",
    link: "https://kasia-fraser.love/rsvp/v4jXBVDBjTyz7YDY9vDxVjmm",
    linkText: "Here's Doug's RSVP page. Feel free to play around with the form.",
    tags: "Fun Javascript, Firebase"
  },
  {
    title: "A climate-tech accelerator site",
    img: "images/cv.jpg",
    body: "Likely takes the crown for the biggest site I've created. Every piece of this site is an <a href='https://www.advancedcustomfields.com/' target='_blank'>ACF</a> flexible field, which makes this an incredibly flexible site on the backend. The centrepiece, in my mind is the robust 'filter' feature on the Community page which lets you sort through a huge number of 'business cards' via AJAX.",
    link: "https://climateventures.org/community/",
    linkText: "Check out the filter page here.",
    tags: "Wordpress, AJAX"
  },
  {
    title: "A patched up Squarespace site",
    img: "images/schools.jpg",
    body: "This is a Squarespace website that I was called into help with. On the CSS side, the most exciting bit is the fairly complicated underline effect on the main headings. These are created with a precisely defined repeating linear gradient background.</p><p>Squarespace has no support for multilingual sites, which this is. To make the header and footer change to match the language of the page I'm using javascript to read the site url and then swap in the correct elements based on the page belonging to the 'en' or 'fr' part of the site.</p><p>On the 'Resources' page I AJAX in the next page of resources right away to get around Squarespace's limit on the number of blog posts that a page can show at once. Any further posts (if they exist) can be AJAX'd in by clicking on a button at the bottom. </p><p>The 'Resources' are also filterable but Squarespace's filter widget is confoundingly dumb. It gives no indication of what the current filter state is. To fix this, I parse the url again and write a title based on this. I also made the filter load posts by AJAX to prevent a confusing page reload.",
    link: "https://www.healthyschoolsalliance.ca/en/resources/",
    linkText: "Check out the Resources page.",
    tags: "Squarespace, AJAX, Tricky CSS, Multilingual"
  },
  {
    title: "A Multilingual Wordpress Gutenberg site",
    img: "images/meck.jpg",
    body: "This fairly simple site is built entirely on Wordpress' Gutenberg editor, making for a flexible component based site with a fully WYSIWYG editor experience. The multilingual logic is all custom code. A lot of attention was paid to accessibility on this site.",
    link: "https://meckplaybook.com/plan-updates/",
    linkText: "This page has a fun little timeline slider thing.",
    tags: "Wordpress, Gutenberg, Multilingual"
  },
  {
    title: "A fully custom Squarespace site",
    img: "images/book.jpg",
    body: "This commerce site is running on Squarespace's 'Developer' platform which allows for <i>almost</i> fully custom themes. The latest version of Squarespace has retired the developer platform which I think was the right call on their part.",
    link: "https://www.heresmybook.com/",
    linkText: "Check it out",
    tags: "Squarespace, Squarespace Developer Platform"
  }
]
const accordion = document.getElementById('accordion');

let accordionHTML = "";

accordionContent.forEach(entry =>{
  accordionHTML += "\
    <dt>\
      <h3>"+entry.title+"</h3>\
      <img src='https://fraserpage.github.io/fraser.page/"+entry.img+"'>\
    </dt>\
    <dd>\
      <div class='accordion-left'>\
        <p>\
          "+entry.body+"\
        </p>\
        <p><a href='"+entry.link+"' target='_blank'>\
          "+entry.linkText+"\
        </a></p>\
      </div>\
      <div class='accordion-right'>\
        <img src='https://fraserpage.github.io/fraser.page/"+entry.img+"'>\
      </div>\
    </dd>"
})

accordion.innerHTML = accordionHTML;


/* Silly question and answer */
const response = document.getElementById('response');
const questionElem = document.getElementById('question');

questionElem.addEventListener("mouseleave",function(){
  response.innerText = "";
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    if (button.innerText == "Good, thanks!"){
        response.innerText = "Glad to hear it!";
    }
    else{
        response.innerText = "Sorry to hear that!";
    }
  });
});

/*Accordions*/

/*On load, add 'active' class to accordion*/
document.querySelectorAll('dl').forEach(accordion =>{
  accordion.classList.add('active');
});
/*Add 'closed' to all 'dts'. Add tabindex="0" to 'dt's*/
document.querySelectorAll('dl dt').forEach(dt =>{
  dt.tabIndex = 0;
  dt.ariaExpanded = false;
  dt.classList.add('closed');
  dt.addEventListener('click', function(){
    toggleAccordion(this);
  });
  dt.addEventListener('keydown', function(event){
    if (event.code === 'Space') {
      event.preventDefault();
      toggleAccordion(this);
    }
  })
});

document.querySelectorAll('dl dd').forEach(dd =>{
  dd.style.height = "0px";
});

function toggleAccordion(dt){
  let dd = dt.nextElementSibling;
  //Open it
  if (dt.classList.contains('closed')){
    dt.classList.remove('closed');
    dt.classList.add('open');
    dt.ariaExpanded = true;
    //slide down dd (animation is css transition)
    dd.style.height = "auto";
    var height = dd.clientHeight + "px";
    dd.style.height = "0px";
    setTimeout(() => {
      dd.style.height = height;
    }, 0); 
    dd.addEventListener('transitionend', () => {
      dd.style.height = "auto";
    }, {once: true})
  }
  //close it
  else if (dt.classList.contains('open')){
    //slide up dd
    dd.style.height = dd.clientHeight + "px";
    setTimeout(() => {
      dd.style.height = "0px";
    }, 0); 
    dt.ariaExpanded = false;
    /** Change the classes when the animation ends. */
    dd.addEventListener('transitionend', () => {
      dt.classList.add('closed');
      dt.classList.remove('open');
    }, {once: true})
  }
}

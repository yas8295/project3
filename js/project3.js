
let src = document.querySelector(".pagescroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let sc = document.documentElement.scrollTop;
    src.style.width = (sc / height) * 100 + "%";
})

let textcount = document.querySelectorAll(".stats-box .textcount");
let stats_section = document.querySelector(".stats");
let stop = false;

window.onscroll = function () {
    if (scrollY >= (stats_section.offsetTop - 300)) {
        if (!stop) {
            textcount.forEach((textcount) => counter(textcount));
        }
        stop = true;
    }
    else if (scrollY <= (stats_section.offsetTop - 300)) {
        {
            textcount.forEach((textcount) => counter2(textcount));
        }
        stop = false;
    }

    if (scrollY >= skillSection.offsetTop - 500) {
        skillProgress.forEach((skillProgress) => progressWidth(skillProgress));
        Sectiondisplay(skillSection);
    }
    else if (scrollY <= skillSection.offsetTop - 500) {
        skillProgress.forEach((skillProgress) => progressWidth2(skillProgress));
        Sectiondisplay2(skillSection);
    }
    if (scrollY >= articleSection.offsetTop - 500) {
        Sectiondisplay(articleSection);
    }
    else if (scrollY <= articleSection.offsetTop - 500) {
        Sectiondisplay2(articleSection);
    }
    if (scrollY >= gallerySection.offsetTop - 700) {
        Sectiondisplay(gallerySection);
    }
    else if (scrollY <= gallerySection.offsetTop - 700) {
        Sectiondisplay2(gallerySection);
    }
    if (scrollY >= featuresSection.offsetTop - 700) {
        Sectiondisplay(featuresSection);
    }
    else if (scrollY <= featuresSection.offsetTop - 700) {
        Sectiondisplay2(featuresSection);
    }
    if (scrollY >= testemonialsSection.offsetTop - 700) {
        Sectiondisplay(testemonialsSection);
    }
    else if (scrollY <= testemonialsSection.offsetTop - 700) {
        Sectiondisplay2(testemonialsSection);
    }
    if (scrollY >= teammemberssSection.offsetTop - 300) {
        teammembersbox.forEach((teammembersbox) => teammembersboxscale(teammembersbox))
    }
    else if (scrollY < teammemberssSection.offsetTop) {
        teammembersbox.forEach((teammembersbox) => teammembersboxscale2(teammembersbox))
    }
    if (scrollY >= teammemberssSection.offsetTop - 700) {
        Sectiondisplay(teammemberssSection);
    }
    else if (scrollY <= teammemberssSection.offsetTop - 700) {
        Sectiondisplay2(teammemberssSection);
    }
    if (scrollY >= servicesSection.offsetTop - 700) {
        Sectiondisplay(servicesSection);
    }
    else if (scrollY <= servicesSection.offsetTop - 700) {
        Sectiondisplay2(servicesSection);
    }
    if (scrollY >= hiwSection.offsetTop - 700) {
        Sectiondisplay(hiwSection);
    }
    else if (scrollY <= hiwSection.offsetTop - 700) {
        Sectiondisplay2(hiwSection);
    }
    if (scrollY >= eventsSection.offsetTop - 700) {
        Sectiondisplay(eventsSection);
    }
    else if (scrollY <= eventsSection.offsetTop - 700) {
        Sectiondisplay2(eventsSection);
    }
    if (scrollY > 1000) {
        scroltop.style.opacity = "1";
    }
    else {
        scroltop.style.opacity = "0";
    }
};

function counter(nums) {
    let goal = nums.dataset.goal;
    let textcount = setInterval(function () {
        
        if (nums.textContent == goal) {
            clearInterval(textcount)
        }else{nums.textContent++;}
    }, 1500 / goal)
};

function counter2(nums) {
    nums.textContent = "0";
};

let skillProgress = document.querySelectorAll(".progress div");
let skillSection = document.querySelector(".skills");
let articleSection = document.querySelector(".article");
let gallerySection = document.querySelector(".gallery");
let featuresSection = document.querySelector(".features");
let testemonialsSection = document.querySelector(".testemonials");
let teammemberssSection = document.querySelector(".team-members");
let teammembersbox = document.querySelectorAll(".team-members .team-members-box");
let servicesSection = document.querySelector(".services");
let hiwSection = document.querySelector(".h-i-w");
let eventsSection = document.querySelector(".events");
let eventdate = document.querySelectorAll(".events-date .date h2")
const seconds = 1000;
const minutes = seconds * 60;
const hours = 60 * minutes;
const days = 24 * hours;
const months = days * 30;
const year = days * 365;

eventdate[0].textContent = "0- " + Math.round(Date.now() / days - 53 * 365);
eventdate[1].textContent = "0- " + Math.round(new Date().getHours());
eventdate[2].textContent = "0- " + Math.round(new Date().getMinutes());
eventdate[3].textContent = "0- " + Math.round(new Date().getSeconds());


function teammembersboxscale(teammembersbox) {
    teammembersbox.style.scale = "1";
};

function teammembersboxscale2(teammembersbox) {
    teammembersbox.style.scale = "0";
};

function progressWidth(skillProgress) {
    skillProgress.style.width = skillProgress.dataset.progress;
};
function progressWidth2(skillProgress) {
    skillProgress.style.width = "0";
};

function Sectiondisplay(Section) {
    Section.style.opacity = "1";
    Section.style.translate = "0px 0px";
}
function Sectiondisplay2(Section) {
    Section.style.opacity = "0";
    Section.style.translate = "0px 40px";
}

let scroltop = document.querySelector(".scrolltop")
scroltop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

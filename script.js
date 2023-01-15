"use strict";

//Nodig voor mediaqueries

const inactive = document.querySelectorAll(".inactive");
let currentHome = ".slide--home";
let currentPage1Var = ".slide--home";
let currentPage1Const = document.querySelector(`${currentPage1Var}`);

let failsafe = 0;

// TYPEWRITER

const textDisplay = document.querySelector(".typewriter");
const portfolio = document.querySelector(".portfolio");
const portfolio2 = document.querySelector(".portfolio2");
const projects = document.querySelector(".projects");
const projects2 = document.querySelector(".projects2");
const about = document.querySelector(".about");
const about2 = document.querySelector(".about2");
const contact = document.querySelector(".contact");
const contact2 = document.querySelector(".contact2");
const slide = document.querySelectorAll(".slide");
const sectionHero = document.querySelector(".section-hero");
const sectionHeroLoaded = document.querySelector(".section-hero-loaded");

const phrases = ["Hoi, ik ben Fabrice."];

let i = 0; // array element
let j = 0; // letter of array element
let currentPhrase = [];

function loop() {
  if (currentPhrase.length < 21) {
    textDisplay.innerHTML = currentPhrase.join("");
    if (j <= phrases[i]?.length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (j === phrases[i]?.length) {
      i++;
    }

    if (currentPhrase.includes("|")) {
      currentPhrase.splice(currentPhrase.indexOf("|"), 1);
    } else {
      currentPhrase.push("|");
    }

    setTimeout(loop, 150);
  } else {
    textDisplay.innerHTML = "";
    textDisplay.innerHTML = `<span class="hoi">Hoi</span>, ik ben <span class="fabrice">Fabrice</span>.`;

    const hoi = document.querySelector(".hoi");
    const hoi2 = document.querySelector(".hoi2");
    const fabrice = document.querySelector(".fabrice");
    const fabrice2 = document.querySelector(".fabrice2");

    colorHover(hoi);
    colorHover(hoi2);
    colorHover(fabrice);
    colorHover(fabrice2);

    const colorHover2 = function (name) {
      name.addEventListener("mouseover", function handleMouseOver(e) {
        name.style.color = "#66d9e8";
        name.classList.add("bounce");

        if (e.target.classList.contains("about")) {
          fabrice.style.color = "#66d9e8";
        }

        if (e.target.classList.contains("about2")) {
          fabrice2.style.color = "#66d9e8";
        }
      });

      name.addEventListener("mouseout", function handleMouseOver() {
        name.classList.remove("bounce");
        fabrice.style.color = "#fff";
        fabrice2.style.color = "#fff";
        about.style.color = "#fff";
        about2.style.color = "#fff";
      });
    };

    const colorHover3 = function (name) {
      name.addEventListener("mouseover", function handleMouseOver(e) {
        name.style.color = "#66d9e8";
        name.classList.add("bounce2");

        if (
          e.target.classList.contains("contact") ||
          e.target.classList.contains("contact2")
        ) {
          hoi.style.color = "#66d9e8";
          hoi2.style.color = "#66d9e8";
        }
      });

      name.addEventListener("mouseout", function handleMouseOver() {
        name.classList.remove("bounce2");
        hoi.style.color = "#fff";
        hoi2.style.color = "#fff";
        contact.style.color = "#fff";
        contact2.style.color = "#fff";
      });
    };

    colorHover3(contact);
    colorHover3(contact2);
    colorHover2(about);
    colorHover2(about2);
  }
}
// https://www.youtube.com/watch?v=mULM6KcF_mo&ab_channel=CodewithAniaKub%C3%B3w
loop();

const headingPrimaryHiddenHome = document.querySelector(
  ".heading-primary-hidden-home"
);

const homeNavBtn = document.querySelector(".home-nav-btn");

const homeLoaded = function () {
  textDisplay.innerHTML = "";
  textDisplay.innerHTML = `<span class="hoi">Hoi</span>, ik ben <span class="fabrice">Fabrice</span>.`;
  headingPrimaryHiddenHome.style.transition = "all 0s";
  homeNavBtn.style.animation = "revealBtn 0s ease 0s forwards;";
};

//////////////////////////////////////////////
//////  Swapping original hero for loaded  ///
//////////////////////////////////////////////

setTimeout(() => {
  sectionHero.classList.add("inactive");
  sectionHeroLoaded.classList.remove("inactive");
}, 5600);

//////////////////////////////////////////////////////////////////////////////
// Hover over key words

const colorHover = function (name) {
  name.addEventListener("mouseover", function handleMouseOver(e) {
    name.style.color = "#66d9e8";
    name.classList.add("bounce");

    if (e.target.classList.contains("hoi")) {
      contact.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("hoi2")) {
      contact2.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("fabrice")) {
      about.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("fabrice2")) {
      about2.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("portfolio")) {
      projects.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("portfolio2")) {
      projects2.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("projects")) {
      portfolio.style.color = "#66d9e8";
    }

    if (e.target.classList.contains("projects2")) {
      portfolio2.style.color = "#66d9e8";
    }
  });

  name.addEventListener("mouseout", function handleMouseOver() {
    name.classList.remove("bounce");
    name.style.color = "#fff";
    contact.style.color = "#fff";
    contact2.style.color = "#fff";
    about.style.color = "#fff";
    about2.style.color = "#fff";
    projects.style.color = "#fff";
    projects2.style.color = "#fff";
    portfolio.style.color = "#fff";
    portfolio2.style.color = "#fff";
  });
};

colorHover(portfolio);
colorHover(portfolio2);
colorHover(projects);
colorHover(projects2);

//////////////////////////////////////////////////////////////////////////////
// Slider

const slideHome = document.querySelector(".slide--home");
const slideHomeProjects = document.querySelector(".slide--home-projects");
const slideProjects = document.querySelector(".slide--projects");
const slideHomeAbout = document.querySelector(".slide--home-about");
const slideAbout = document.querySelector(".slide--about");
const slideContact = document.querySelector(".slide--contact");
const sectionHomeProjects = document.querySelector(".section-home-projects");

// Slider from home to projects

projects.addEventListener("click", function () {
  currentPage1Var = ".slide--projects";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");
  slideHomeProjects.classList.remove("inactive");

  sectionHomeProjects.style.visibility = "visible";

  setTimeout(() => {
    slideHome.style.transform = "translateX(100%)";
    slideHomeProjects.style.transform = "translateX(0)";
  }, 100);

  homeProjectsTextAnimation();

  setTimeout(toProjects, 3000);

  setTimeout(() => {
    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideProjects.classList.remove("inactive");
      onePage();
    }
  }, 6100);

  setTimeout(projectsAnimation, 6100);
});

projects2.addEventListener("click", function () {
  currentPage1Var = ".slide--projects";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");
  slideHomeProjects.classList.remove("inactive");

  sectionHomeProjects.style.visibility = "visible";

  setTimeout(() => {
    slideHome.style.transform = "translateX(100%)";
    slideHomeProjects.style.transform = "translateX(0)";
  }, 100);

  homeProjectsTextAnimation();

  setTimeout(toProjects, 3000);

  setTimeout(() => {
    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideProjects.classList.remove("inactive");
      onePage();
    }
  }, 6100);

  setTimeout(projectsAnimation, 6100);
});

const toProjects = function () {
  slideHomeProjects.style.transform = "translateY(100%)";
  slideProjects.style.transform = "translateY(0)";
};

// Slider from home to about
about.addEventListener("click", function () {
  currentPage1Var = ".slide--about";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");
  slideHomeAbout.classList.remove("inactive");
  slideHome.style.transform = "translateY(-100%)";
  slideHomeAbout.style.transform = "translateY(0)";

  homeProjectsTextAnimation();

  setTimeout(toAbout, 3000);

  setTimeout(() => {
    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideAbout.classList.remove("inactive");
      onePage();
      failsafe = 1;
    } else {
      failsafe = 1;
    }
  }, 5800);
});

about2.addEventListener("click", function () {
  currentPage1Var = ".slide--about";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");
  slideHomeAbout.classList.remove("inactive");
  slideHome.style.transform = "translateY(-100%)";
  slideHomeAbout.style.transform = "translateY(0)";

  homeProjectsTextAnimation();

  setTimeout(toAbout, 3000);

  setTimeout(() => {
    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideAbout.classList.remove("inactive");
      onePage();
      failsafe = 1;
    } else {
      failsafe = 1;
    }
  }, 6100);
});

const toAbout = function () {
  slideHomeAbout.style.transform = "translateX(-100%)";
  slideAbout.style.transform = "translate(0%)";
};

// Slider from home to contact
contact.addEventListener("click", function () {
  currentPage1Var = ".slide--contact";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");

  setTimeout(() => {
    slideHome.style.transform = "translateX(-100%)";
    slideContact.style.transform = "translateX(0)";
  }, 10);

  setTimeout(() => {
    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideContact.classList.remove("inactive");
      onePage();
      failsafe = 1;
    } else {
      failsafe = 1;
    }
  }, 3000);
});

contact2.addEventListener("click", function () {
  currentPage1Var = ".slide--contact";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");

  setTimeout(() => {
    slideHome.style.transform = "translateX(-100%)";
    slideContact.style.transform = "translateX(0)";
  }, 10);

  setTimeout(() => {
    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideContact.classList.remove("inactive");
      onePage();
      failsafe = 1;
    } else {
      failsafe = 1;
    }
  }, 3000);
});

////////////////// TO WORK ON homeProjects Page //////////////////////

// slideHome.style.transform = "translateX(100%)";
// slideHomeProjects.style.transform = "translateX(0)";

////////////////// TO WORK ON homeProjects Page //////////////////////

////////////////////////////////////////////////////////////////////////////

// homeProjects Text animation

const textAsync = document.querySelectorAll(".text-async");
const textCSS = document.querySelectorAll(".text-css");
const textResponsive = document.querySelectorAll(".text-responsive");
const textFunctional = document.querySelectorAll(".text-functional");
const textBabel = document.querySelectorAll(".text-babel");
const textSEO = document.querySelectorAll(".text-seo");
const textSemantic = document.querySelectorAll(".text-semantic");
const textHTML = document.querySelectorAll(".text-html");
const textOOP = document.querySelectorAll(".text-oop");
const textParcel = document.querySelectorAll(".text-parcel");
const textJS = document.querySelectorAll(".text-js");
const textES6 = document.querySelectorAll(".text-es6");

function homeProjectsTextAnimation() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth > 544) {
    textAsync.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(-20rem, 5rem)")
    );

    textCSS.forEach(
      (e) => (e.style.transform = "scale(1) translate(15rem, 5rem)")
    );
    textResponsive.forEach(
      (e) => (e.style.transform = "scale(1) translate(-15rem, -8rem)")
    );
    textFunctional.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(5rem, -5rem)")
    );
    textBabel.forEach((e) => (e.style.transform = "scale(1) translate(-2rem)"));
    textSEO.forEach(
      (e) => (e.style.transform = "scale(1) translate(-20rem, 0)")
    );
    textSemantic.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
    textHTML.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
    textOOP.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
    textParcel.forEach(
      (e) => (e.style.transform = "scale(1) translate(-5rem, 3rem)")
    );
    textJS.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
    textES6.forEach(
      (e) => (e.style.transform = "scale(1) translate(-5rem, -5rem)")
    );

    // Resetting Positions after getting to Projects
    setTimeout(() => {
      textAsync.forEach((e) => (e.style.transform = "scale(1  ) translate(0)"));
      textCSS.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
      textResponsive.forEach(
        (e) => (e.style.transform = "scale(0.8) translate(-7rem, 7rem)")
      );
      textFunctional.forEach(
        (e) => (e.style.transform = "scale(1) translate(0)")
      );
      textBabel.forEach(
        (e) => (e.style.transform = "scale(0.8) translate(0, 3rem)")
      );
      textSEO.forEach(
        (e) => (e.style.transform = "scale(0.7) translate(0, 20rem)")
      );
      textSemantic.forEach(
        (e) => (e.style.transform = "scale(0.6) translate(0, 5rem)")
      );
      textHTML.forEach(
        (e) => (e.style.transform = "scale(0.6) translate(10rem, -5rem)")
      );
      textOOP.forEach(
        (e) => (e.style.transform = "scale(1.2) translate(0, 5rem)")
      );
      textParcel.forEach(
        (e) => (e.style.transform = "scale(0.8) translate(-7rem, -7rem)")
      );
      textJS.forEach(
        (e) => (e.style.transform = "scale(0.9) translate(-1rem, -10rem)")
      );
      textES6.forEach(
        (e) => (e.style.transform = "scale(1) translate(10rem, 0rem)")
      );
    }, 6000);
  } else {
    textAsync.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(-20rem, 5rem)")
    );

    textCSS.forEach(
      (e) => (e.style.transform = "scale(1) translate(15rem, 5rem)")
    );
    textResponsive.forEach(
      (e) => (e.style.transform = "scale(1) translate(-5rem, -8rem)")
    );
    textFunctional.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(0rem, -5rem)")
    );
    textBabel.forEach((e) => (e.style.transform = "scale(1) translate(-2rem)"));
    textSEO.forEach(
      (e) => (e.style.transform = "scale(1) translate(-20rem, 5rem)")
    );
    textSemantic.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
    textHTML.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
    textOOP.forEach(
      (e) => (e.style.transform = "scale(0.7) translate(20rem, -5rem)")
    );
    textParcel.forEach(
      (e) => (e.style.transform = "scale(1) translate(0rem, 8rem)")
    );
    textJS.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
    textES6.forEach(
      (e) => (e.style.transform = "scale(1) translate(-5rem, -5rem)")
    );

    // Resetting Positions after getting to Projects
    setTimeout(() => {
      textAsync.forEach((e) => (e.style.transform = "scale(1  ) translate(0)"));
      textCSS.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
      textResponsive.forEach(
        (e) => (e.style.transform = "scale(0.8) translate(5rem, 7rem)")
      );
      textFunctional.forEach(
        (e) => (e.style.transform = "scale(1) translate(-10rem, 0)")
      );
      textBabel.forEach(
        (e) => (e.style.transform = "scale(0.8) translate(0, 3rem)")
      );
      textSEO.forEach(
        (e) => (e.style.transform = "scale(0.7) translate(-10rem, 20rem)")
      );
      textSemantic.forEach(
        (e) => (e.style.transform = "scale(0.6) translate(0, 5rem)")
      );
      textHTML.forEach(
        (e) => (e.style.transform = "scale(0.6) translate(10rem, -5rem)")
      );
      textOOP.forEach(
        (e) => (e.style.transform = "scale(1.2) translate(15rem, 2.5rem)")
      );
      textParcel.forEach(
        (e) => (e.style.transform = "scale(0.8) translate(-7rem, -7rem)")
      );
      textJS.forEach(
        (e) => (e.style.transform = "scale(0.9) translate(-8rem, -10rem)")
      );
      textES6.forEach(
        (e) => (e.style.transform = "scale(1) translate(10rem, 0rem)")
      );
    }, 6000);
  }
}

const homeProjectsTextAnimation2 = function () {
  textAsync.forEach(
    (e) => (e.style.transform = "scale(0.6) translate(-20rem, 5rem)")
  );

  textCSS.forEach(
    (e) => (e.style.transform = "scale(1) translate(15rem, 5rem)")
  );
  textResponsive.forEach(
    (e) => (e.style.transform = "scale(1) translate(-15rem, -8rem)")
  );
  textFunctional.forEach(
    (e) => (e.style.transform = "scale(0.6) translate(5rem, -5rem)")
  );
  textBabel.forEach((e) => (e.style.transform = "scale(1) translate(-2rem)"));
  textSEO.forEach((e) => (e.style.transform = "scale(1) translate(-20rem, 0)"));
  textSemantic.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
  textHTML.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
  textOOP.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
  textParcel.forEach(
    (e) => (e.style.transform = "scale(1) translate(-5rem, 3rem)")
  );
  textJS.forEach((e) => (e.style.transform = "scale(1) translate(0)"));
  textES6.forEach(
    (e) => (e.style.transform = "scale(1) translate(-5rem, -5rem)")
  );

  // Resetting Positions after getting to Projects
  setTimeout(() => {
    textAsync.forEach((e) => (e.style.transform = "scale(1  ) translate(0)"));
    textCSS.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
    textResponsive.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(-7rem, 7rem)")
    );
    textFunctional.forEach(
      (e) => (e.style.transform = "scale(1) translate(0)")
    );
    textBabel.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(0, 3rem)")
    );
    textSEO.forEach(
      (e) => (e.style.transform = "scale(0.7) translate(0, 20rem)")
    );
    textSemantic.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(0, 5rem)")
    );
    textHTML.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(10rem, -5rem)")
    );
    textOOP.forEach(
      (e) => (e.style.transform = "scale(1.2) translate(0, 5rem)")
    );
    textParcel.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(-7rem, -7rem)")
    );
    textJS.forEach(
      (e) => (e.style.transform = "scale(0.9) translate(-8rem, -10rem)")
    );
    textES6.forEach(
      (e) => (e.style.transform = "scale(1) translate(10rem, 0rem)")
    );
  }, 6000);
};

////////////////////////////////////////////////////////////////////////////
// Projects Turn and Expand Animation

const projectsContainer = document.querySelector(".section-projects-container");

////////////////// TO WORK ON Projects Page //////////////////////
const opacity = document.querySelectorAll(".opacity");

// document.querySelector(".slide").style.transition = "0s";
// slideHome.style.transform = "translateX(100%)";
// slideHomeProjects.style.transform = "translateX(0)";
// slideHomeProjects.style.transform = "translateY(100%)";
// slideProjects.style.transform = "translateY(0)";

// projectsContainer.style.transform = "rotateZ(0deg)";

// projectsContainer.style.height = "100vh";
// projectsContainer.style.width = "100vw";
// document.querySelector(".heading-test-2").style.marginTop = "6.8rem";
// document.querySelector(".heading-test-2").style.fontSize = "5.6rem";
// // document.querySelector(".section-projects-real").style.display = "block";

// document.querySelector(".section-projects").style.display = "none";
// document.querySelector(".section-projects-real").style.display = "block";
// document.querySelector(".section-projects-real").style.opacity = "1";

// opacity.forEach((e) => (e.style.opacity = "1"));

////////////////// TO WORK ON Projects Page //////////////////////
//////////////// TO WORK ON Projects Page under 700px ////////////////////

// currentPage1Var = ".slide--projects";
// currentPage1Const = document.querySelector(`${currentPage1Var}`);
// currentPage1Const.classList.remove("inactive");

// setTimeout(() => {
//   if (width.matches) {
//     slide.forEach((i) => i.classList.add("inactive"));
//     slideProjects.classList.remove("inactive");
//   }
// }, 100);

//////////////// TO WORK ON Projects Page under 700px ////////////////////

// const opacity = document.querySelectorAll(".opacity");

const projectsAnimation = function () {
  projectsContainer.style.transform = "rotateZ(0deg)";

  setTimeout(() => {
    projectsContainer.style.height = "100vh";
    projectsContainer.style.width = "100vw";
    document.querySelector(".heading-test-2").style.marginTop = "6.8rem";
    document.querySelector(".heading-test-2").style.fontSize = "5.6rem";
  }, 1100);

  setTimeout(() => {
    document.querySelector(".section-projects").style.display = "none";
    document.querySelector(".section-projects-real").style.display = "block";
    document.querySelector(".section-projects-real").style.opacity = "1";
  }, 2150);

  setTimeout(() => {
    opacity.forEach((e) => (e.style.opacity = "1"));

    sectionHomeProjects.style.visibility = "hidden";
  }, 2165);
};

const projectsToHomeBtn = document.querySelector(".link-projects-home");
const projectsToAboutBtn = document.querySelector(".link-projects-about");
const projectsToContactBtn = document.querySelector(".link-projects-contact");

const projectsInit = function () {
  document.querySelector(".section-projects").style.display = "block";
  document.querySelector(".section-projects-real").style.display = "none";
  document.querySelector(".section-projects-real").style.opacity = "0";
  projectsContainer.style.height = "20vh";
  projectsContainer.style.width = "20vh";
  document.querySelector(".heading-test-2").style.fontSize = "2.6rem";
  document.querySelector(".heading-test-2").style.marginTop = "3rem";

  opacity.forEach((e) => (e.style.opacity = "0"));
};

projectsToHomeBtn.addEventListener(
  "click",
  function () {
    // Media Query
    currentPage1Var = ".slide--home";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    onePageOff();

    if (width.matches) {
      slideAbout.classList.add("inactive");
      slideProjects.classList.add("inactive");
      slideContact.classList.add("inactive");
      slideHomeAbout.classList.remove("inactive");
      slideHomeProjects.classList.remove("inactive");
      currentPage1Const.classList.remove("inactive");
    }

    slideHome.classList.remove("trans-3s");
    slideHomeProjects.classList.remove("trans-3s");
    slideProjects.classList.remove("trans-3s");

    slideHome.style.transform = "translateX(0)";
    slideHomeProjects.style.transform = "translate(-100%, 0)";
    slideProjects.style.transform = "translateY(-100%)";

    // Projects page reset
    projectsInit();

    setTimeout(
      () => (projectsContainer.style.transform = "rotateZ(90deg)"),
      1000
    );

    setTimeout(() => {
      document.querySelector(".slide--home-projects").classList.add("trans-3s");
      document.querySelector(".slide--home").classList.add("trans-3s");
      document.querySelector(".slide--projects").classList.add("trans-3s");
    }, 100);
  },
  100
);

projectsToAboutBtn.addEventListener("click", function () {
  // Media Query
  currentPage1Var = ".slide--about";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");

  if (width.matches) {
    slide.forEach((i) => i.classList.add("inactive"));
    slideAbout.classList.remove("inactive");
    onePage();
  }

  slideAbout.classList.remove("trans-3s");
  slideHomeProjects.classList.remove("trans-3s");
  slideProjects.classList.remove("trans-3s");

  slideAbout.style.transform = "translateX(0)";
  slideHomeProjects.style.transform = "translate(-100%, 0)";
  slideProjects.style.transform = "translateY(-100%)";

  // Projects page reset
  projectsInit();

  setTimeout(
    () => (projectsContainer.style.transform = "rotateZ(90deg)"),
    1000
  );

  setTimeout(() => {
    slideAbout.classList.add("trans-3s");
    slideHomeProjects.classList.add("trans-3s");
    slideProjects.classList.add("trans-3s");
  }, 100);

  failsafe = 1;
});

projectsToContactBtn.addEventListener("click", function () {
  // Media Query
  currentPage1Var = ".slide--contact";
  currentPage1Const = document.querySelector(`${currentPage1Var}`);
  currentPage1Const.classList.remove("inactive");

  if (width.matches) {
    slide.forEach((i) => i.classList.add("inactive"));
    slideContact.classList.remove("inactive");
    onePage();
  }

  slideContact.classList.remove("trans-3s");
  slideHomeProjects.classList.remove("trans-3s");
  slideProjects.classList.remove("trans-3s");

  slideContact.style.transform = "translateX(0)";
  slideHomeProjects.style.transform = "translate(-100%, 0)";
  slideProjects.style.transform = "translateY(-100%)";

  // Projects page reset
  projectsInit();

  setTimeout(
    () => (projectsContainer.style.transform = "rotateZ(90deg)"),
    1000
  );

  setTimeout(() => {
    slideContact.classList.add("trans-3s");
    slideHomeProjects.classList.add("trans-3s");
    slideProjects.classList.add("trans-3s");
  }, 100);

  failsafe = 1;
});

////////////////// TO WORK ON ABOUT Page //////////////////////

// const slideAbout = document.querySelector(".slide--about");

// document.querySelector(".slide").style.transition = "0s";
// slideHome.style.transform = "translateY(-100%)";
// slideHomeAbout.style.transform = "translate(-100%, 0)";
// slideAbout.style.transform = "translate(0%, 0%)";

////////////////// TO WORK ON ABOUT Page //////////////////////

const tabsContainer = document.querySelector(".tab-container");
const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tabbed-content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("tab--active"));
  tabsContent.forEach((c) => c.classList.remove("tabbed-content--active"));

  // Activate tab
  clicked.classList.add("tab--active");

  // Activate content area
  document
    .querySelector(`.tabbed-content--${clicked.dataset.tab}`)
    .classList.add("tabbed-content--active");
});

// Back to Home

const aboutToHomeBtn = document.querySelector(".link-about-home");
const aboutToProjectsBtn = document.querySelector(".link-about-projects");
const aboutToContactBtn = document.querySelector(".link-about-contact");

const aboutInit = function () {
  tabs.forEach((t) => t.classList.remove("tab--active"));
  tabsContent.forEach((c) => c.classList.remove("tabbed-content--active"));

  document.querySelector(".tab--2").classList.add("tab--active");
  document
    .querySelector(".tabbed-content--2")
    .classList.add("tabbed-content--active");
};

aboutToHomeBtn.addEventListener("click", function () {
  if (failsafe) {
    // Media Query
    currentPage1Var = ".slide--home";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    onePageOff();

    if (width.matches) {
      slideAbout.classList.add("inactive");
      slideProjects.classList.add("inactive");
      slideContact.classList.add("inactive");
      slideHomeAbout.classList.remove("inactive");
      slideHomeProjects.classList.remove("inactive");
      currentPage1Const.classList.remove("inactive");
    }

    slideHome.classList.remove("trans-3s");
    slideHomeAbout.classList.remove("trans-3s");
    slideAbout.classList.remove("trans-3s");

    slideHome.style.transform = "translate(0, 0)";
    slideHomeAbout.style.transform = "translate(0, 100%)";
    slideAbout.style.transform = "translate(100%, 0)";

    // About page reset
    aboutInit();

    setTimeout(() => {
      slideHome.classList.add("trans-3s");
      slideHomeAbout.classList.add("trans-3s");
      slideAbout.classList.add("trans-3s");
    }, 100);

    failsafe = 0;
  }
});

aboutToProjectsBtn.addEventListener("click", function () {
  if (failsafe) {
    // Media Query
    currentPage1Var = ".slide--projects";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");

    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideProjects.classList.remove("inactive");
      onePage();
    }

    slideProjects.classList.remove("trans-3s");
    slideHomeAbout.classList.remove("trans-3s");
    slideAbout.classList.remove("trans-3s");

    slideProjects.style.transform = "translate(0, 0)";
    slideHomeAbout.style.transform = "translate(0, 100%)";
    slideAbout.style.transform = "translate(100%, 0)";

    // About page reset
    aboutInit();

    setTimeout(() => {
      slideProjects.classList.add("trans-3s");
      slideHomeAbout.classList.add("trans-3s");
      slideAbout.classList.add("trans-3s");
    }, 100);

    // Projects animation
    setTimeout(() => {
      projectsAnimation();
    }, 500);

    failsafe = 0;
  }
});

aboutToContactBtn.addEventListener("click", function () {
  if (failsafe) {
    // Media Query
    currentPage1Var = ".slide--contact";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");

    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideContact.classList.remove("inactive");
      onePage();
    }

    slideContact.classList.remove("trans-3s");
    slideHomeAbout.classList.remove("trans-3s");
    slideAbout.classList.remove("trans-3s");

    slideContact.style.transform = "translate(0, 0)";
    slideHomeAbout.style.transform = "translate(0, 100%)";
    slideAbout.style.transform = "translate(100%, 0)";

    // About page reset
    aboutInit();

    setTimeout(() => {
      slideContact.classList.add("trans-3s");
      slideHomeAbout.classList.add("trans-3s");
      slideAbout.classList.add("trans-3s");
    }, 100);

    failsafe = 1;
  }
});

///////////////////////////////////////////////////////
// Contact Page

// Back to Home

const contactToHomeBtn = document.querySelector(".link-contact-home");
const contactToProjectsBtn = document.querySelector(".link-contact-projects");
const contactToAboutBtn = document.querySelector(".link-contact-about");
const formInput = document.querySelectorAll(".form-input");

const contactInit = function () {
  formInput.forEach((t) => (t.value = ""));
};

contactToHomeBtn.addEventListener("click", function () {
  if (failsafe) {
    // Media Query
    currentPage1Var = ".slide--home";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    onePageOff();

    if (width.matches) {
      slideAbout.classList.add("inactive");
      slideProjects.classList.add("inactive");
      slideContact.classList.add("inactive");
      slideHomeAbout.classList.remove("inactive");
      slideHomeProjects.classList.remove("inactive");
      currentPage1Const.classList.remove("inactive");
    }

    slideHome.classList.remove("trans-3s");
    slideContact.classList.remove("trans-3s");

    slideHome.style.transform = "translate(0, 0)";
    slideContact.style.transform = "translateX(100%)";

    // About page reset
    contactInit();

    setTimeout(() => {
      slideHome.classList.add("trans-3s");
      slideContact.classList.add("trans-3s");
    }, 100);

    failsafe = 0;
  }
});

contactToProjectsBtn.addEventListener("click", function () {
  if (failsafe) {
    // Media Query
    currentPage1Var = ".slide--projects";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");

    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideProjects.classList.remove("inactive");
      onePage();
    }

    slideProjects.classList.remove("trans-3s");
    slideContact.classList.remove("trans-3s");

    slideProjects.style.transform = "translate(0, 0)";
    slideContact.style.transform = "translate(100%, 0)";

    // About page reset
    contactInit();

    setTimeout(() => {
      slideProjects.classList.add("trans-3s");
      slideContact.classList.add("trans-3s");
    }, 100);

    // Projects animation
    setTimeout(() => {
      projectsAnimation();
    }, 500);

    failsafe = 0;
  }
});

contactToAboutBtn.addEventListener("click", function () {
  if (failsafe) {
    // media query
    currentPage1Var = ".slide--about";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");

    if (width.matches) {
      slide.forEach((i) => i.classList.add("inactive"));
      slideAbout.classList.remove("inactive");
      onePage();
    }

    slideAbout.classList.remove("trans-3s");
    slideContact.classList.remove("trans-3s");

    slideAbout.style.transform = "translateX(0)";
    slideContact.style.transform = "translate(100%, 0)";

    // Projects page reset
    contactInit();

    setTimeout(() => {
      slideAbout.classList.add("trans-3s");
      slideContact.classList.add("trans-3s");
    }, 100);

    failsafe = 1;
  }
});

// MEDIA QUERIES

const sectionProjectsReal = document.querySelector(".section-projects-real");
const sectionAbout = document.querySelector(".section-about");
const sectionContact = document.querySelector(".section-contact");
const slider = document.querySelector(".slider");

const onePage = function () {
  slider.style.overflow = "visible";
};

const onePageOff = function () {
  slider.style.overflow = "hidden";
};

function query624(x) {
  if (width.matches) {
    slideAbout.classList.add("inactive");
    slideProjects.classList.add("inactive");
    slideContact.classList.add("inactive");
    currentPage1Const.classList.remove("inactive");

    if (
      currentPage1Var === ".slide--projects" ||
      currentPage1Var === ".slide--about" ||
      currentPage1Var === ".slide--contact"
    ) {
      slide.forEach((i) => i.classList.add("inactive"));
      currentPage1Const.classList.remove("inactive");
      onePage();
    }
  } else {
    slide.forEach((i) => i.classList.remove("inactive"));
    onePageOff();
  }
}

const tab1 = document.querySelector(".tab--1");
const tab2 = document.querySelector(".tab--2");
const tab3 = document.querySelector(".tab--3");

const contactTabQuery = function (x) {
  if (width.matches) {
    tab1.innerHTML = `<ion-icon class="tab-icon" name="school-outline"></ion-icon>`;
    tab2.innerHTML = `<ion-icon class="tab-icon" name="earth-outline"></ion-icon>`;
    tab3.innerHTML = `<ion-icon class="tab-icon" name="laptop-outline"></ion-icon>`;
  } else {
    tab1.innerHTML = `Opleiding`;
    tab2.innerHTML = `Algemeen`;
    tab3.innerHTML = `Programmeren`;
  }
};

const width = window.matchMedia("(max-width: 624px)");
const width544 = window.matchMedia("(max-width: 544px)");
query624(width);

contactTabQuery();

width.addEventListener("change", function (event) {
  if (event.matches) {
    tab1.innerHTML = `<ion-icon class="tab-icon" name="school-outline"></ion-icon>`;
    tab2.innerHTML = `<ion-icon class="tab-icon" name="earth-outline"></ion-icon>`;
    tab3.innerHTML = `<ion-icon class="tab-icon" name="laptop-outline"></ion-icon>`;
  } else {
    tab1.innerHTML = `Opleiding`;
    tab2.innerHTML = `Algemeen`;
    tab3.innerHTML = `Programmeren`;
  }
});

width.addEventListener("change", function (event) {
  if (event.matches) {
    slideAbout.classList.add("inactive");
    slideProjects.classList.add("inactive");
    slideContact.classList.add("inactive");
    currentPage1Const.classList.remove("inactive");

    if (
      currentPage1Var === ".slide--projects" ||
      currentPage1Var === ".slide--about" ||
      currentPage1Var === ".slide--contact"
    ) {
      slide.forEach((i) => i.classList.add("inactive"));
      currentPage1Const.classList.remove("inactive");
      onePage();
    }
  } else {
    slide.forEach((i) => i.classList.remove("inactive"));
    onePageOff();
  }
});

width544.addEventListener("change", function (event) {
  if (event.matches) {
    textAsync.forEach((e) => (e.style.transform = "scale(1  ) translate(0)"));
    textCSS.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
    textResponsive.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(5rem, 7rem)")
    );
    textFunctional.forEach(
      (e) => (e.style.transform = "scale(1) translate(-10rem, 0)")
    );
    textBabel.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(0, 3rem)")
    );
    textSEO.forEach(
      (e) => (e.style.transform = "scale(0.7) translate(-10rem, 20rem)")
    );
    textSemantic.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(0, 5rem)")
    );
    textHTML.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(10rem, -5rem)")
    );
    textOOP.forEach(
      (e) => (e.style.transform = "scale(1.2) translate(15rem, 2.5rem)")
    );
    textParcel.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(-7rem, -7rem)")
    );
    textJS.forEach(
      (e) => (e.style.transform = "scale(0.9) translate(-8rem, -10rem)")
    );
    textES6.forEach(
      (e) => (e.style.transform = "scale(1) translate(10rem, 0rem)")
    );
  } else {
    textAsync.forEach((e) => (e.style.transform = "scale(1  ) translate(0)"));
    textCSS.forEach((e) => (e.style.transform = "scale(0.7) translate(0)"));
    textResponsive.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(-7rem, 7rem)")
    );
    textFunctional.forEach(
      (e) => (e.style.transform = "scale(1) translate(0)")
    );
    textBabel.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(0, 3rem)")
    );
    textSEO.forEach(
      (e) => (e.style.transform = "scale(0.7) translate(0, 20rem)")
    );
    textSemantic.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(0, 5rem)")
    );
    textHTML.forEach(
      (e) => (e.style.transform = "scale(0.6) translate(10rem, -5rem)")
    );
    textOOP.forEach(
      (e) => (e.style.transform = "scale(1.2) translate(0, 5rem)")
    );
    textParcel.forEach(
      (e) => (e.style.transform = "scale(0.8) translate(-7rem, -7rem)")
    );
    textJS.forEach(
      (e) => (e.style.transform = "scale(0.9) translate(-1rem, -10rem)")
    );
    textES6.forEach(
      (e) => (e.style.transform = "scale(1) translate(10rem, 0rem)")
    );
  }
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 432px)").matches) {
    sectionHeroLoaded.innerHTML = `<div class="hero-grid">
    <div class="hero">
      <div class="hero-projects-and-contact-btn">
      <div class="home-nav-btn-loaded home-nav-btn-projects">
        <h2 class="heading-secondary projects2">Projects</h2>
      </div>

      <div class="home-nav-btn-loaded home-nav-btn-contact">
        <h2 class="heading-secondary contact2 turn">Contact</h2>
      </div>

    </div>

      <div class="hero-text-box">
        <h1 class="heading-primary margbot"><span class="hoi2">Hoi</span>, ik ben <span class="fabrice2">Fabrice</span>.</h1>
        <h1 class="heading-primary heading-primary-hidden-home-loaded big">
          Welkom op mijn <span class="portfolio2">portfolio</span>
        </h1>
      </div>
    </div>
    <div class="hero-2">
      <div class="home-nav-btn-loaded">
        <h2 class="heading-secondary about2">About</h2>
      </div>
    </div>
  </div>`;

    document.querySelectorAll(".projects2").forEach((element) => {
      element.addEventListener("click", function () {
        currentPage1Var = ".slide--projects";
        currentPage1Const = document.querySelector(`${currentPage1Var}`);
        currentPage1Const.classList.remove("inactive");
        slideHomeProjects.classList.remove("inactive");

        sectionHomeProjects.style.visibility = "visible";

        setTimeout(() => {
          slideHome.style.transform = "translateX(100%)";
          slideHomeProjects.style.transform = "translateX(0)";
        }, 100);

        homeProjectsTextAnimation();

        setTimeout(toProjects, 3000);

        setTimeout(() => {
          if (width.matches) {
            slide.forEach((i) => i.classList.add("inactive"));
            slideProjects.classList.remove("inactive");
            onePage();
          }
        }, 6100);

        setTimeout(projectsAnimation, 6100);
      });
    });

    document.querySelectorAll(".about2").forEach((element) => {
      element.addEventListener("click", function () {
        currentPage1Var = ".slide--about";
        currentPage1Const = document.querySelector(`${currentPage1Var}`);
        currentPage1Const.classList.remove("inactive");
        slideHomeAbout.classList.remove("inactive");
        slideHome.style.transform = "translateY(-100%)";
        slideHomeAbout.style.transform = "translateY(0)";

        homeProjectsTextAnimation();

        setTimeout(toAbout, 3000);

        setTimeout(() => {
          if (width.matches) {
            slide.forEach((i) => i.classList.add("inactive"));
            slideAbout.classList.remove("inactive");
            onePage();
            failsafe = 1;
          } else {
            failsafe = 1;
          }
        }, 6100);
      });
    });

    document.querySelectorAll(".contact2").forEach((element) => {
      element.addEventListener("click", function () {
        currentPage1Var = ".slide--contact";
        currentPage1Const = document.querySelector(`${currentPage1Var}`);
        currentPage1Const.classList.remove("inactive");

        setTimeout(() => {
          slideHome.style.transform = "translateX(-100%)";
          slideContact.style.transform = "translateX(0)";
        }, 10);

        setTimeout(() => {
          if (width.matches) {
            slide.forEach((i) => i.classList.add("inactive"));
            slideContact.classList.remove("inactive");
            onePage();
            failsafe = 1;
          } else {
            failsafe = 1;
          }
        }, 3000);
      });
    });
  } else {
    sectionHeroLoaded.innerHTML = `<div class="hero-grid">
    <div class="hero">
      <div class="home-nav-btn-loaded home-nav-btn-projects">
        <h2 class="heading-secondary projects2">Projects</h2>
      </div>

      <div class="hero-text-box">
        <h1 class="heading-primary margbot"><span class="hoi2">Hoi</span>, ik ben <span class="fabrice2">Fabrice</span>.</h1>
        <h1 class="heading-primary heading-primary-hidden-home-loaded big">
          Welkom op mijn <span class="portfolio2">portfolio</span>
        </h1>
      </div>
      <div class="home-nav-btn-loaded home-nav-btn-contact">
        <h2 class="heading-secondary contact2 turn">Contact</h2>
      </div>
    </div>
    <div class="hero-2">
      <div class="home-nav-btn-loaded">
        <h2 class="heading-secondary about2">About</h2>
      </div>
    </div>
  </div>`;
  }
  document.querySelectorAll(".projects2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--projects";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");
      slideHomeProjects.classList.remove("inactive");

      sectionHomeProjects.style.visibility = "visible";

      setTimeout(() => {
        slideHome.style.transform = "translateX(100%)";
        slideHomeProjects.style.transform = "translateX(0)";
      }, 100);

      homeProjectsTextAnimation();

      setTimeout(toProjects, 3000);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideProjects.classList.remove("inactive");
          onePage();
        }
      }, 6100);

      setTimeout(projectsAnimation, 6100);
    });
  });

  document.querySelectorAll(".about2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--about";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");
      slideHomeAbout.classList.remove("inactive");
      slideHome.style.transform = "translateY(-100%)";
      slideHomeAbout.style.transform = "translateY(0)";

      homeProjectsTextAnimation();

      setTimeout(toAbout, 3000);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideAbout.classList.remove("inactive");
          onePage();
          failsafe = 1;
        } else {
          failsafe = 1;
        }
      }, 6100);
    });
  });

  document.querySelectorAll(".contact2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--contact";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");

      setTimeout(() => {
        slideHome.style.transform = "translateX(-100%)";
        slideContact.style.transform = "translateX(0)";
      }, 10);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideContact.classList.remove("inactive");
          onePage();
          failsafe = 1;
        } else {
          failsafe = 1;
        }
      }, 3000);
    });
  });
});

if (window.matchMedia("(max-width: 432px)").matches) {
  sectionHeroLoaded.innerHTML = `<div class="hero-grid">
  <div class="hero">
    <div class="hero-projects-and-contact-btn">
    <div class="home-nav-btn-loaded home-nav-btn-projects">
      <h2 class="heading-secondary projects2">Projects</h2>
    </div>

    <div class="home-nav-btn-loaded home-nav-btn-contact">
      <h2 class="heading-secondary contact2 turn">Contact</h2>
    </div>

  </div>

    <div class="hero-text-box">
      <h1 class="heading-primary margbot"><span class="hoi2">Hoi</span>, ik ben <span class="fabrice2">Fabrice</span>.</h1>
      <h1 class="heading-primary heading-primary-hidden-home-loaded big">
        Welkom op mijn <span class="portfolio2">portfolio</span>
      </h1>
    </div>
  </div>
  <div class="hero-2">
    <div class="home-nav-btn-loaded">
      <h2 class="heading-secondary about2">About</h2>
    </div>
  </div>
</div>`;
  document.querySelectorAll(".projects2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--projects";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");
      slideHomeProjects.classList.remove("inactive");

      sectionHomeProjects.style.visibility = "visible";

      setTimeout(() => {
        slideHome.style.transform = "translateX(100%)";
        slideHomeProjects.style.transform = "translateX(0)";
      }, 100);

      homeProjectsTextAnimation();

      setTimeout(toProjects, 3000);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideProjects.classList.remove("inactive");
          onePage();
        }
      }, 6100);

      setTimeout(projectsAnimation, 6100);
    });
  });

  document.querySelectorAll(".about2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--about";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");
      slideHomeAbout.classList.remove("inactive");
      slideHome.style.transform = "translateY(-100%)";
      slideHomeAbout.style.transform = "translateY(0)";

      homeProjectsTextAnimation();

      setTimeout(toAbout, 3000);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideAbout.classList.remove("inactive");
          onePage();
          failsafe = 1;
        } else {
          failsafe = 1;
        }
      }, 6100);
    });
  });

  document.querySelectorAll(".contact2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--contact";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");

      setTimeout(() => {
        slideHome.style.transform = "translateX(-100%)";
        slideContact.style.transform = "translateX(0)";
      }, 10);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideContact.classList.remove("inactive");
          onePage();
          failsafe = 1;
        } else {
          failsafe = 1;
        }
      }, 3000);
    });
  });
} else {
  sectionHeroLoaded.innerHTML = `<div class="hero-grid">
  <div class="hero">
    <div class="home-nav-btn-loaded home-nav-btn-projects">
      <h2 class="heading-secondary projects2">Projects</h2>
    </div>

    <div class="hero-text-box">
      <h1 class="heading-primary margbot"><span class="hoi2">Hoi</span>, ik ben <span class="fabrice2">Fabrice</span>.</h1>
      <h1 class="heading-primary heading-primary-hidden-home-loaded big">
        Welkom op mijn <span class="portfolio2">portfolio</span>
      </h1>
    </div>
    <div class="home-nav-btn-loaded home-nav-btn-contact">
      <h2 class="heading-secondary contact2 turn">Contact</h2>
    </div>
  </div>
  <div class="hero-2">
    <div class="home-nav-btn-loaded">
      <h2 class="heading-secondary about2">About</h2>
    </div>
  </div>
</div>`;
  document.querySelectorAll(".projects2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--projects";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");
      slideHomeProjects.classList.remove("inactive");

      sectionHomeProjects.style.visibility = "visible";

      setTimeout(() => {
        slideHome.style.transform = "translateX(100%)";
        slideHomeProjects.style.transform = "translateX(0)";
      }, 100);

      homeProjectsTextAnimation();

      setTimeout(toProjects, 3000);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideProjects.classList.remove("inactive");
          onePage();
        }
      }, 6100);

      setTimeout(projectsAnimation, 6100);
    });
  });

  document.querySelectorAll(".about2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--about";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");
      slideHomeAbout.classList.remove("inactive");
      slideHome.style.transform = "translateY(-100%)";
      slideHomeAbout.style.transform = "translateY(0)";

      homeProjectsTextAnimation();

      setTimeout(toAbout, 3000);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideAbout.classList.remove("inactive");
          onePage();
          failsafe = 1;
        } else {
          failsafe = 1;
        }
      }, 6100);
    });
  });

  document.querySelectorAll(".contact2").forEach((element) => {
    element.addEventListener("click", function () {
      currentPage1Var = ".slide--contact";
      currentPage1Const = document.querySelector(`${currentPage1Var}`);
      currentPage1Const.classList.remove("inactive");

      setTimeout(() => {
        slideHome.style.transform = "translateX(-100%)";
        slideContact.style.transform = "translateX(0)";
      }, 10);

      setTimeout(() => {
        if (width.matches) {
          slide.forEach((i) => i.classList.add("inactive"));
          slideContact.classList.remove("inactive");
          onePage();
          failsafe = 1;
        } else {
          failsafe = 1;
        }
      }, 3000);
    });
  });
}

document.querySelectorAll(".projects2").forEach((element) => {
  element.addEventListener("click", function () {
    currentPage1Var = ".slide--projects";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");
    slideHomeProjects.classList.remove("inactive");

    sectionHomeProjects.style.visibility = "visible";

    setTimeout(() => {
      slideHome.style.transform = "translateX(100%)";
      slideHomeProjects.style.transform = "translateX(0)";
    }, 100);

    homeProjectsTextAnimation();

    setTimeout(toProjects, 3000);

    setTimeout(() => {
      if (width.matches) {
        slide.forEach((i) => i.classList.add("inactive"));
        slideProjects.classList.remove("inactive");
        onePage();
      }
    }, 6100);

    setTimeout(projectsAnimation, 6100);
  });
});

document.querySelectorAll(".about2").forEach((element) => {
  element.addEventListener("click", function () {
    currentPage1Var = ".slide--about";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");
    slideHomeAbout.classList.remove("inactive");
    slideHome.style.transform = "translateY(-100%)";
    slideHomeAbout.style.transform = "translateY(0)";

    homeProjectsTextAnimation();

    setTimeout(toAbout, 3000);

    setTimeout(() => {
      if (width.matches) {
        slide.forEach((i) => i.classList.add("inactive"));
        slideAbout.classList.remove("inactive");
        onePage();
        failsafe = 1;
      } else {
        failsafe = 1;
      }
    }, 6100);
  });
});

document.querySelectorAll(".contact2").forEach((element) => {
  element.addEventListener("click", function () {
    currentPage1Var = ".slide--contact";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");

    setTimeout(() => {
      slideHome.style.transform = "translateX(-100%)";
      slideContact.style.transform = "translateX(0)";
    }, 10);

    setTimeout(() => {
      if (width.matches) {
        slide.forEach((i) => i.classList.add("inactive"));
        slideContact.classList.remove("inactive");
        onePage();
        failsafe = 1;
      } else {
        failsafe = 1;
      }
    }, 3000);
  });
});

document.querySelectorAll(".projects").forEach((element) => {
  element.addEventListener("click", function () {
    currentPage1Var = ".slide--projects";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");
    slideHomeProjects.classList.remove("inactive");

    sectionHomeProjects.style.visibility = "visible";

    setTimeout(() => {
      slideHome.style.transform = "translateX(100%)";
      slideHomeProjects.style.transform = "translateX(0)";
    }, 100);

    homeProjectsTextAnimation();

    setTimeout(toProjects, 3000);

    setTimeout(() => {
      if (width.matches) {
        slide.forEach((i) => i.classList.add("inactive"));
        slideProjects.classList.remove("inactive");
        onePage();
      }
    }, 6100);

    setTimeout(projectsAnimation, 6100);
  });
});

document.querySelectorAll(".about").forEach((element) => {
  element.addEventListener("click", function () {
    currentPage1Var = ".slide--about";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");
    slideHomeAbout.classList.remove("inactive");
    slideHome.style.transform = "translateY(-100%)";
    slideHomeAbout.style.transform = "translateY(0)";

    homeProjectsTextAnimation();

    setTimeout(toAbout, 3000);

    setTimeout(() => {
      if (width.matches) {
        slide.forEach((i) => i.classList.add("inactive"));
        slideAbout.classList.remove("inactive");
        onePage();
        failsafe = 1;
      } else {
        failsafe = 1;
      }
    }, 5800);
  });
});

document.querySelectorAll(".contact").forEach((element) => {
  element.addEventListener("click", function () {
    currentPage1Var = ".slide--contact";
    currentPage1Const = document.querySelector(`${currentPage1Var}`);
    currentPage1Const.classList.remove("inactive");

    setTimeout(() => {
      slideHome.style.transform = "translateX(-100%)";
      slideContact.style.transform = "translateX(0)";
    }, 10);

    setTimeout(() => {
      if (width.matches) {
        slide.forEach((i) => i.classList.add("inactive"));
        slideContact.classList.remove("inactive");
        onePage();
        failsafe = 1;
      } else {
        failsafe = 1;
      }
    }, 3000);
  });
});

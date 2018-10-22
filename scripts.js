var main = {
    info: {
        title: "kb",
        socials: [{
            name: "Linkedin",
            tag: "fa-linkedin",
            link: "https://www.linkedin.com/in/giakhoabui/"
        }, {
            name: "Github",
            tag: "fa-github",
            link: "https://github.com/khoabui9"
        }, {
            name: "Instagram",
            tag: "fa-instagram",
            link: "https://www.instagram.com/_khoabui/"
        }, {
            name: "Facebook",
            tag: "fa-facebook",
            link: "https://www.facebook.com/buigiakhoa"
        }]
    },
    works: [{
        title: 'project wave',
        description: 'We work on conceptualizing, designing, developing, and testing. We produce content for almost all ProjectWave pages a user sees prior to signing up and when logging in.',
        category: 'Full-service',
        image: './public/image/project-wave.jpg'
    }, {
        title: 'project sand',
        description: 'Ce bac de rangement est un objet éco-conçu pour l’enseigne d’ameublement et de décoration Maison du Monde.',
        category: 'Full-service',
        image: './public/image/project-sand.jpg'
    }, {
        title: 'project palm',
        description: 'The Hoxton Paris is opening its doors on Rue du Sentier in Paris’s second arrondissement.',
        category: 'Full-service',
        image: './public/image/project-palm.jpg'
    }, {
        title: 'project green',
        description: 'We decided to rethink everything, including our messaging approach, site structure, and UX. We crafted both copy and visuals from scratch in just a few months.',
        category: 'Full-service',
        image: './public/image/project-green.jpg'
    }]
}

var about = [{
    text1: "Hi,",
    text2: "I'm a",
    text3: "Web Developer",
}, {
    text1: "Beside coding",
    text2: "I'm passionate about",
    text3: "photography & cinematography",
    text4: "and travel",
}, {
    text1: "Contact me",
    text2: "email me",
},]

const container = document.querySelector('.container');
const header = createHeader();
const projectContainer = createProjectContainer();
var active = 0;
var activeAbout = 0;

const debounce = (func, delay) => {
    let inDebounce
    return function () {
        const context = this
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

function createHeader() {
    const h = ["header", "center"]
    var {
        title
    } = main.info

    var header = document.createElement('div')
    var logo = document.createElement('h1')

    header.classList.add(...h)
    logo.className = "logo"

    logo.innerHTML = `${title}`

    header.appendChild(logo)

    return header
}

function createProjectContainer() {
    var p = ["project-container", "w-100"]

    var projectContainer = document.createElement('div')

    projectContainer.classList.add(...p);
    projectContainer.id = "project-ne"

    return projectContainer
}

function createProjectList() {
    var pl = ["project-list", "full", "pd-0", "m-0"]

    var projectList = document.createElement('ul')
    projectList.id = "pl"

    projectList.classList.add(...pl);

    return projectList
}

function createProject(idx) {
    var l = ["project", "h-100", "center"]

    var project = document.createElement('li')
    project.id = "project-" + idx

    project.classList.add(...l);

    return project
}

function createProjectTitle(title, idx) {
    var tc = ["project-title-container"]
    var lw = ["letter-wrapper"]
    var t = ["project-title"]
    var titleArr = title.split(' ')

    var projectTitleContainer = document.createElement('div')
    projectTitleContainer.classList.add(...tc)
    projectTitleContainer.id = "title-container-" + idx

    titleArr.map((el) => {
        // var part = document.createElement('div')
        // part.classList.add("part")
        el.split('').map(e => {
            var letterWrapper = document.createElement('div')
            letterWrapper.classList.add(...lw)
            //letterWrapper.id = "letter-wrapper-" + idx

            var projectTitle = document.createElement('span')
            //projectTitle.id = "title-" + idx
            projectTitle.classList.add(...t)
            projectTitle.innerHTML = e

            letterWrapper.appendChild(projectTitle);
            // part.appendChild(letterWrapper)
            projectTitleContainer.appendChild(letterWrapper)
        })

    })

    return projectTitleContainer
}



function createImage(src, idx) {
    var ic = ["project-image-container", "full"]
    var pi = ["project-image"]

    var projectImageContainer = document.createElement('div')
    projectImageContainer.classList.add(...ic)
    projectImageContainer.id = "project-image-container-" + idx

    var projectImage = document.createElement('img')
    projectImage.classList.add(...pi)
    projectImage.id = "project-image-" + idx
    projectImage.src = src

    projectImageContainer.appendChild(projectImage)

    return projectImageContainer;
}

function createProgressBar() {
    var fc = ['footer-container', "center"]
    var pc = ['progress-container']
    var pn = ['progress-number', "center"]
    var pb = ['progress-bar', 'center']
    var slide = ["slide"]
    var cur = ['current-step']
    var maxs = ['max-step']
    var projectLength = main.works.length

    var sp = document.createElement('span')
    sp.innerHTML = "-"

    var footerContainer = document.createElement('div')
    footerContainer.classList.add(...fc)

    var progressContainer = document.createElement('div')
    progressContainer.classList.add(...pc)

    var progressNumber = document.createElement('div')
    progressNumber.classList.add(...pn)

    var progressBar = document.createElement('div')
    progressBar.classList.add(...pb)

    var slideBar = document.createElement('div')
    slideBar.classList.add(...slide)
    slideBar.id = "p-b"
    slideBar.style.transform = "translate(-" + (100 - (100 / projectLength)) + "%, 0)"

    var current = document.createElement('p')
    current.classList.add(...cur)
    current.id = "p-n"
    current.innerHTML = active.toString() + 1;

    var max = document.createElement('p')
    max.classList.add(...maxs)
    max.innerHTML = projectLength

    progressNumber.appendChild(current)

    progressBar.appendChild(slideBar)

    progressContainer.appendChild(progressNumber)
    progressContainer.appendChild(progressBar)

    footerContainer.appendChild(progressContainer)

    return footerContainer
}

function socialsLink() {
    var links = main.info.socials
    var sc = ["socials-container", "center"]
    var lc = ["social-link"]
    var socialmedia = ["socialmedia"]

    var socialsContainer = document.createElement('div')
    socialsContainer.classList.add(...sc)

    var socialMediaList = document.createElement('ul')
    socialMediaList.classList.add(...socialmedia)

    links.map((el) => {
        var liClass = [el.name]
        var aTag = ["fa", el.tag]

        var social = document.createElement('li')
        social.classList.add(...liClass)

        var a = document.createElement('a')
        a.classList.add(...aTag)
        a.href = el.link

        social.appendChild(a);
        socialMediaList.appendChild(social)
    })

    socialsContainer.appendChild(socialMediaList)

    return socialsContainer
}


function counter() {
    var counterc = ["counter"]
    var numberc = ["counter-num"]

    var counter = document.createElement('div')
    counter.classList.add(...counterc);

    var number = document.createElement('p')
    number.classList.add(...numberc);
    number.innerHTML = active.toString() + 1 + "<br>" + " - " + "<br>" + "0" + main.works.length.toString();
    number.id = "c-c"

    counter.appendChild(number)

    return counter
}

function viewmore() {
    var vm = ["view-more", "h-100", "center"]
    var vmtext = ["view-more-text"]

    var vmc = document.createElement('div')
    vmc.classList.add(...vm);

    var link = document.createElement('a')
    link.className = "link"
    link.href = "#"

    var vmt = document.createElement('p')
    vmt.classList.add(...vmtext);
    vmt.innerHTML = "view more"
    link.appendChild(vmt)

    vmc.appendChild(link)

    return vmc
}

function aboutButton() {
    var aboutCClass = ["about-container", "center"]
    var aboutlink = ["about"]
    var span = ["about-text"]

    var ac = document.createElement('div')
    ac.classList.add(...aboutCClass);

    var al = document.createElement('a')
    ac.classList.add(...aboutlink);
    al.href = "#"

    var s = document.createElement('span')
    s.classList.add(...span);
    s.innerHTML = "about / contact"

    al.appendChild(s)
    al.addEventListener("click", () => {
        var ai = document.querySelector("#aic");
        ai.classList.add("active-about");

        var anc = document.querySelector("#another");

        setTimeout(() => {
            anc.style.transform = "translate(0,0)"
            activeAbout = 0;
        }, 500);
    })

    ac.appendChild(al)

    return ac;
}

function aboutPage() {
    var aboutClass = ["about-info-container", "full"]
    var anotherClass = ["another-container", "full"]
    var closeClass = ["close"]

    var ac = document.createElement('div')
    ac.classList.add(...aboutClass);
    ac.id = "aic"

    var close = document.createElement('div')
    close.classList.add(...closeClass);
    close.id = "close-about"
    close.innerHTML = "X"
    close.addEventListener("click", () => {
        var ai = document.querySelector("#aic");

        var anc = document.querySelector("#another");
        setTimeout(() => {
            anc.style.transform = "translate(0,0)"
            activeAbout = 0;
    
            ai.classList.remove("active-about");
        }, 500);
    })

    ac.appendChild(close)

    var another = document.createElement('div')
    another.classList.add(...anotherClass);
    another.id = "another"

    about.map((el, idx) => {
        var pageClass = ["page", "full", "center"]
        var page = document.createElement('div')
        page.classList.add(...pageClass)
        page.id = "page-" + idx

        var itemCClass = ["item-container"]
        var itemContainer = document.createElement('div')
        itemContainer.classList.add(...itemCClass)
        itemContainer.id = "item-container-" + idx

        for (var item in el) {
            var itemClass = ["text-info"]
            var itemText = document.createElement('div')
            itemText.classList.add(...itemClass);
            itemText.innerHTML = el[item];

            itemContainer.appendChild(itemText)
            page.appendChild(itemContainer)
        }

        another.appendChild(page)
    })

    ac.appendChild(another)

    return ac;
}

function setAboutScroll() {
    var aboutContainer = document.getElementById("aic")
    var anotherContainer = document.getElementById("another")
    var scrollStatus = {
        wheeling: false,
        functionCall: false
    };
    var scrollTimer = false;
    aboutContainer.addEventListener("wheel", e => {
        var previousActive = active;
        var divpl = document.getElementById("pl");
        var basePos = 448.5;
        scrollStatus.wheeling = true;
        if (!scrollStatus.functionCall) {
            const delta = e.detail ? e.detail * (-120) : e.wheelDelta;
            if (delta < 0) {
                console.log('scrolled down: ' + delta)
                activeAbout++
                if (activeAbout > about.length - 1)
                    activeAbout = about.length - 1
                anotherContainer.style.transform = "translate(0,-" + (activeAbout * 100) + "%)"
            }
            if (delta > 0) {
                console.log('scrolled up: ' + delta)
                activeAbout--
                if (activeAbout < 0) {
                    activeAbout = 0
                }
                anotherContainer.style.transform = "translate(0,-" + (activeAbout * 100) + "%)"
            }
            scrollStatus.functionCall = true;
        }
        window.clearInterval(scrollTimer);
        scrollTimer = window.setTimeout(function () {
            scrollStatus.wheeling = false;
            scrollStatus.functionCall = false;
        }, 250);
    });
}

function addListClass(id, el, className) {
    var test = document.getElementById(id);
    var testArr = [...test.getElementsByTagName(el)]

    testArr.map((e) => {
        e.classList.add(className)
    })
}

function removeListClass(id, el, className) {
    var test = document.getElementById(id);
    var testArr = [...test.getElementsByTagName(el)]

    testArr.map((e) => {
        e.classList.remove(className)
    })
}

function addClass(oriClass, className) {
    document.getElementById(oriClass).classList.add(className)
}

function removeClass(oriClass, className) {
    document.getElementById(oriClass).classList.remove(className);
}

function updateSlide(direction, active) {
    var one = 100 / main.works.length;
    var div = document.getElementById("p-b");
    var num = document.getElementById("p-n");
    var counter = document.getElementById("c-c");
    var a = active;
    if (direction === "forward") {
        num.innerHTML = 0 + a.toString()
        counter.innerHTML = 0 + a.toString() + "<br>" + " - " + "<br>" + "0" + main.works.length.toString()
        div.style.transform = "translateX(-" + (100 - (active * one)) + "%)"
    } else if (direction === "down") {
        num.innerHTML = 0 + a.toString()
        counter.innerHTML = 0 + a.toString() + "<br>" + " - " + "<br>" + "0" + main.works.length.toString()
        div.style.transform = "translateX(-" + (100 - active * one) + "%)"
    }
}

function renderProjectInfo() {
    var projectList = main.works;

    var html = projectList.map((el, idx) => {
        var project = createProject(idx);
        var title = createProjectTitle(el.title, idx);
        var image = createImage(el.image, idx);

        project.appendChild(image)
        project.appendChild(title)

        return project.outerHTML;
    }).join('')

    return html;
}

function hidePrevProject(previousActive) {
    removeListClass("title-container-" + previousActive, "span", "active-title")
    removeClass("project-image-container-" + previousActive, "o-1")
}

function showNextProject(active) {
    addListClass("title-container-" + active, "span", "active-title")
    addClass("project-image-container-" + active, "o-1")
}

function getTranslate(item) {
    var transArr = [];

    if (!window.getComputedStyle) return;
    var style = getComputedStyle(item),
        transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) return parseFloat(mat[1].split(', ')[13]);

    mat = transform.match(/^matrix\((.+)\)$/);
    mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : transArr.push(0);
    mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : transArr.push(0);

    return transArr;
}

function setScroll() {
    var projectContainer = document.getElementById("project-ne")
    var scrollStatus = {
        wheeling: false,
        functionCall: false
    };
    var scrollTimer = false;
    projectContainer.addEventListener("wheel", e => {
        var previousActive = active;
        var divpl = document.getElementById("pl");
        scrollStatus.wheeling = true;
        if (!scrollStatus.functionCall) {
            const delta = e.detail ? e.detail * (-120) : e.wheelDelta;
            if (delta < 0) {
                console.log('scrolled down: ' + delta)
                active++
                if (active > main.works.length - 1)
                    active = 0
                // divpl.style.transform = "translate(-" + ((active * 50)-20) + "%)"
            }
            if (delta > 0) {
                console.log('scrolled up: ' + delta)
                active--
                if (active < 0) {
                    active = 0
                }
                //divpl.style.transform = "translate(-" + (active * 50)-20 + "%)"
            }
            scrollStatus.functionCall = true;
        }
        window.clearInterval(scrollTimer);
        scrollTimer = window.setTimeout(function () {
            scrollStatus.wheeling = false;
            scrollStatus.functionCall = false;
        }, 250);
        if (active !== previousActive) {
            if (active === 0)
                divpl.style.transform = "translate(20%)"
            else
                divpl.style.transform = "translate(-" + ((active * 50) - 20) + "%)"

            if (active > previousActive) {
                updateSlide("forward", active + 1)
            } else {
                updateSlide("down", active + 1)
            }

            setTimeout(() => {
                hidePrevProject(previousActive)
            }, 500);

            setTimeout(() => {
                showNextProject(active)
            }, 500);
        }
    });
}

function init() {
    var test = document.getElementById("title-container-0");
    var testArr = [...test.getElementsByTagName("span")]
    var pic = document.getElementById("project-image-container-0");

    pic.classList.add("o-1")
    
    testArr.map((e) => {
        e.classList.add("active-title")
    })
}


function render() {
    var pl = createProjectList()
    var pc = createProjectContainer()
    var pb = createProgressBar()
    var sl = socialsLink()
    pb.appendChild(sl)
    pl.innerHTML = renderProjectInfo()
    pl.appendChild(viewmore())
    pc.appendChild(pl);
    header.appendChild(aboutButton())
    container.appendChild(header)
    container.appendChild(counter())
    container.appendChild(pc)
    container.appendChild(pb)
    container.appendChild(aboutPage())

    window.addEventListener('load', function () {
        setScroll()
        setAboutScroll()
        about.map((el, idx) => {
            interactive(idx)
        })
    })

    init();
}

render();

$(document).keydown(function (objEvent) {
    if (objEvent.keyCode == 9) {  //tab pressed
        objEvent.preventDefault(); // stops its action
    }
})

function interactive(i) {
    // Init
    var inner = document.getElementById("item-container-" + i);

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(inner);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function () {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function (event) {
        update(event);
    };

    var onMouseLeaveHandler = function () {
        inner.style = "";
    };

    var onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };

    //-----------------------------------------

    var update = function (event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function (x, y) {
        //   var style = "rotateX(" + (x * 10) + "deg) rotateY(" + (y * 120) + "deg)";
        //   inner.style.transform = style;
        //   inner.style.webkitTransform = style;
        //   inner.style.mozTransform = style;
        //   inner.style.msTransform = style;
        //   inner.style.oTransform = style;
    };

    //-----------------------------------------

    inner.onmouseenter = onMouseEnterHandler;
    inner.onmouseleave = onMouseLeaveHandler;
    inner.onmousemove = onMouseMoveHandler;
};
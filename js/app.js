var project = [{
        title: "Chat",
        link: "#",
        image: "lib/image/a.png",
    },
    {
        title: "GreenICT",
        link: "#",
        image: "lib/image/a.png",
    },
    {
        title: "EasyScrum",
        link: "#",
        image: "lib/image/a.png",
    },
    {
        title: "Bike",
        link: "#",
        image: "lib/image/a.png",
    },
];

function createItem(data) {
    var item = document.createElement("li");
    var lick = document.createElement("a");
    var arr = document.createElement("span");
    var title = document.createElement("span");
    var hover = document.createElement("span");

    lick.href = data.link;
    arr.className = "arr";
    arr.innerHTML = "&rarr;";

    title.className = "title";
    title.innerHTML = data.title;
    title.setAttribute("data-rel", data.title);
    title.setAttribute("onmouseover", "animateOnHover(this)");
    title.setAttribute("onmouseout", "animateOnOut(this)");

    hover.className = "visit";
    hover.innerHTML = "see link";

    lick.setAttribute("data-rel", data.title);
    lick.appendChild(arr);
    lick.appendChild(title);
    lick.appendChild(hover);

    item.appendChild(lick);

    return item;
}

function createImageHolder(data) {
    var item = document.createElement("li");
    var infos = document.createElement("span");
    var imageHolder = document.createElement("span");
    var img = document.createElement("img");

    item.setAttribute("data-item", data.title);
    infos.className = "infos";
    imageHolder.className = "imageHolder";

    img.src = data.image;
    //img.className = "img-fluid";
    imageHolder.appendChild(img);
    infos.appendChild(imageHolder);
    item.appendChild(infos);

    return item;
}

function animateOnHover(param) {
    param.style.paddingLeft = "20px"
    param.nextSibling.style.display = "inherit"
    var rel = param.getAttribute("data-rel");
    var find = "li[data-item=" + rel + "]";
    var a = document.querySelector(find);
    a.style.width = "100%";
    a.style.transition = "width 2s";
}

function animateOnOut(param) {
    if (param.style.paddingLeft = "20px") {
        param.style.paddingLeft = "0"
        param.nextSibling.style.display = "none"
        var rel = param.getAttribute("data-rel")
        var find = "li[data-item=" + rel + "]"
        var a = document.querySelector(find)
        a.style.width = "0%";
        a.style.transition = "width 2s";
    }
}

function onMouseOverAbout() {
    document.getElementById("about").style.width = "65%";
    document.getElementById("about").style.display = "flex";
    document.getElementById("about").style.justifyContent = "center";
    document.getElementById("about").style.alignItems = "center";
    document.getElementById("about").style.transition = "width 2s";
    document.getElementById("about").style.right = "0";
    document.getElementById("text").style.display = "block";
}

function onMouseOutAbout() {    
    document.getElementById("about").style.width = "0%";
    document.getElementById("about").style.transition = "width 2s";
    document.getElementById("about").style.right = "-100px";
    document.getElementById("text").style.display = "none";
}

function render() {
    project.forEach(function (data) {
        var item = createItem(data);
        var image = createImageHolder(data);

        document.getElementById("work_list").appendChild(item);
        document.getElementById("image-list").appendChild(image);
    });
}

render();

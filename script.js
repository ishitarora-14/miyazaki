let images = [

    // {
    //     path: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png",
    //     url: "",
    //     alt: "",
    // },
    {
        path: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png",
        gif: "",
        url: "",
        alt: "",
        title: "",
        year: ""
    },
    {
        path: "_assests/chihiro_main.jpeg",
        gif: "_assests/chihiro_main.gif",
        url: "movies/spirited_away.html",
        alt: "chihiro and jiro sitting together",
        title: "Spirited Away",
        year: "2001"
    },
    {
        path: "_assests/kiki_main.jpeg",
        gif: "_assests/kiki_main.gif",
        url: "movies/kiki.html",
        alt: "close up of kiki laying down",
        title: "Kiki's Delivery Service",
        year: "1989"
    },
    {
        path: "_assests/totoro_main.jpeg",
        gif: "_assests/totoro_main.gif",
        url: "movies/totoro.html",
        alt: "mei laying on totoro",
        title: "My Neighbor Totoro",
        year: "1988"
    }
    ,
    {
        path: "_assests/ponyo_main.jpeg",
        gif: "_assests/ponyo_main.gif",
        url: "movies/ponyo.html",
        alt: "ponyo flying towards Sōsuke",
        title: "Ponyo",
        year: "2008"
    }
    ,
    {
        path: "_assests/howl_main.jpeg",
        gif: "_assests/howl_main.gif",
        url: "howl.html",
        alt: "Sophie and Howl",
        title: "Howl's Moving Castle",
        year: "2004"
    }
    ,
    {
        path: "_assests/wind_main.jpeg",
        gif: "_assests/wind_main.gif",
        url: "wind.html",
        alt: "Jiro and Nahoko on a hill",
        title: "The Wind Rises",
        year: "2013"
    }
    ,
    {
        path: "_assests/mononoke_main.jpeg",
        gif: "_assests/mononoke_main.gif",
        url: "mononoke.html",
        alt: "Princess Mononoke with her red elk",
        title: "Princess Mononoke",
        year: "1997"
    },

    {
        path: "_assests/totoro_main.jpeg",
        gif: "_assests/totoro_main.gif",
        url: "movies/totoro.html",
        alt: "mei laying on totoro",
        title: "My Neighbor Totoro",
        year: "1988"
    }
    ,
    {
        path: "_assests/ponyo_main.jpeg",
        gif: "_assests/ponyo_main.gif",
        url: "movies/ponyo.html",
        alt: "ponyo flying towards Sōsuke",
        title: "Ponyo",
        year: "2008"
    }
    ,
    {
        path: "_assests/howl_main.jpeg",
        gif: "_assests/howl_main.gif",
        url: "howl.html",
        alt: "Sophie and Howl",
        title: "Howl's Moving Castle",
        year: "2004"
    }
    ,
    {
        path: "_assests/wind_main.jpeg",
        gif: "_assests/wind_main.gif",
        url: "wind.html",
        alt: "Jiro and Nahoko on a hill",
        title: "The Wind Rises",
        year: "2013"
    },
    {
        path: "_assests/mononoke_main.jpeg",
        gif: "_assests/mononoke_main.gif",
        url: "mononoke.html",
        alt: "Princess Mononoke with her red elk",
        title: "Princess Mononoke",
        year: "1997"
    },
    // {
    //     path: "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png",
    //     url: "",
    //     alt: "",
    // }
];

function updateImage(i){
    let mainImage = document.getElementsByClassName("main")[0];
    mainImage.src = images[i].gif;

    let link = document.getElementsByClassName("link")[0];
    link.href = images[i].url;
    
    let title = document.getElementsByClassName("title")[0];
    title.innerHTML = images[i].title;

    let year = document.getElementsByClassName("year")[0];
    year.innerHTML = images[i].year;
}



window.addEventListener("load", (event) => {
    console.log("onLoad fired");
    const gallery = document.getElementsByClassName("gallery")[0];
    const body = document.getElementsByTagName("body")[0];
    for (let i = 0; i < images.length; i++) {
        let img = document.createElement("img");
        img.src = images[i].path;
        img.alt = images[i].alt;
        img.title = images[i].title;
        img.year = images[i].year;
        img.className = "image-thumbnail";

        let div = document.createElement("div");
        div.className = "row mt-5 mb-5";
        div.appendChild(img);
        gallery.appendChild(div);

        prefetch = document.createElement("img")
        prefetch.src = images[i].gif;
        prefetch.prefetch = "auto";
        prefetch.style = "display: none;"
        body.appendChild(prefetch);
    }
    check()
    updateImage(3)
    // // scroll ith child of gallery into view
    gallery.children[3].scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

    
    

    // run check after 1 second
    setTimeout(check, 1000);

    document.getElementsByClassName("gallery")[0].onscroll = check;

});

function check(){
    let idx = [];
    const gallery = document.getElementsByClassName("gallery")[0];
    for(let i = 0; i < images.length; i++){
        let img = gallery.children[i];
        img.classList = "row mt-5 mb-5";
        if(isInViewport(img)){
            idx = idx.concat(i);
        }
    }
    idx.sort((a,b) => a-b);
    const WINNER = idx[Math.floor(idx.length/2)];
    updateImage(WINNER)
    gallery.children[WINNER].className = "row mt-5 mb-5 winner";
}


function isInViewport(element) {
    // https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



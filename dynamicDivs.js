let div1=document.getElementById("seconddiv-3");
let option1=document.querySelectorAll(".option1");
let option2=document.querySelectorAll(".option2");
let option3=document.querySelectorAll(".option3");
let section1=document.getElementById("users");
let section2=document.getElementById("description");
let section3=document.getElementById("tasks");

let choices=[
    {photos: ['https://res.cloudinary.com/superlist/image/upload/v1706228326/website/2023/misc/Jenna_vcsqbn.webp',
'https://res.cloudinary.com/superlist/image/upload/v1706228327/website/2023/misc/Ada_palmjc.webp',
'https://res.cloudinary.com/superlist/image/upload/v1706228327/website/2023/misc/Jon_ts9dtj.webp',
'https://res.cloudinary.com/superlist/image/upload/v1706228328/website/2023/misc/Stan_w0kqid.webp',
'https://res.cloudinary.com/superlist/image/upload/v1706228327/website/2023/misc/Keyla_eaebye.webp'],
title:"App Launch",
description:"Hey team, here's a quick recap of what we're working on ahead of the launch. Feel free to add any more notes or details to the tasks.",
tasks:['Launch readiness','Value proposition','Marketing strategy','Design update','Website design & dev', 'pricing strategy', 'Prepare analytics']
},
{
    photos: ['https://res.cloudinary.com/superlist/image/upload/v1706228326/website/2023/misc/Jenna_vcsqbn.webp',
    'https://res.cloudinary.com/superlist/image/upload/v1706228327/website/2023/misc/Ada_palmjc.webp'],
    title:"Kitchen Reno",
    description: "I'm putting this list together so we can get started organzing the project. Excited that we're doing this. 💚",
    tasks:['Choose kitchen colours','Finalize the budget','Reach out to contractors','Prepare schematics','Order new electrical', 'Research tiling', 'Order materials', 'Find new plumber']
},
{
    photos: ['https://res.cloudinary.com/superlist/image/upload/v1706228327/website/2023/misc/Private_r4fa8f.webp'],
    title:"Daily Habits",
    description: "",
    tasks:['Wim Hof breath work','Shinrin-yoku','Journal','Write for at least 30 min','Train gymnastics', 'Meditate', 'Yoga before bed', 'Draw for at least 30 min','Sleep amazingly well 🙅‍♂️']
}
];


function setOption(op) {

    section1.innerHTML = "";
    section2.innerHTML = "";
    section3.innerHTML = "";
    // Populate users section with images
    for (let index = 0; index < choices[op].photos.length; index++) {
        let img = document.createElement('img');
        img.src = choices[op].photos[index];
        section1.appendChild(img);
    }

    // If the option is 0, append a text node indicating more users
    if (op == 0) {
        section1.appendChild(document.createTextNode("+6"));
    }

    // Set title and description
section2.appendChild(document.createTextNode(choices[op].title));
    section2.appendChild(document.createElement('br'));
    section2.appendChild(document.createTextNode(choices[op].description));

    // Populate tasks section
    for (let index = 0; index < choices[op].tasks.length; index++) {
        let taskItem = document.createElement('li');
        taskItem.textContent = choices[op].tasks[index];
        section3.appendChild(taskItem);
    }
}

function addOptionListeners(options, index) {
    options[0].addEventListener("click", function() {
        setOption(index);
    });
    options[1].addEventListener("click", function() {
        setOption(index);
    });
}

// Add event listeners to all options
addOptionListeners(option1, 0);
addOptionListeners(option2, 1);
addOptionListeners(option3, 2);
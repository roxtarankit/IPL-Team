var arr=[
    {team:'CSK',
        primary:'yellow',
        secondary:'blue'
    },
    {
        team:'PBKS',
        primary:'red',
        secondary:'green'
    },
    {
        team:'KKR',
        primary:'purple',
        secondary:'gold'
    }
]

var main=document.querySelector("main")
var box1=document.querySelector("#box1")
var h1=document.querySelector("h1")
var btn=document.querySelector("button")

btn.addEventListener('click',function()
{
    var winner=arr[Math.floor(Math.random()*arr.length)]
    h1.innerHTML = winner.team
    main.style.backgroundColor=winner.primary
    box1.style.backgroundColor=winner.secondary
})
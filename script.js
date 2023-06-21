var tl = gsap.timeline({});

tl.from(".logo",1,{
    y:-200,
    opacity:0,
});

tl.from("nav ul li",1,{
    y:200,
    stagger:0.5,
    opacity:0,
})
tl.from(".menu",1,{
    y:-200,
    opacity:0
})
tl.from(".elmt",1,{
    y:500,
    stagger:0.5,
    opacity:0,
})
tl.from("#Slideimg li",1,{
    y:500,
    stagger:0.5,
    opacity:0,
})
tl.from(".txt h1",{
    x:500,
    opacity:0,
})
tl.from(".txt p",{
    y:500,
    opacity:0,
})
tl.from(".txt a",{
    y:-1000,
    actionClass:".add",
    opacity:0,
})
gsap.fromTo("div",
    {
        x: 0,
        duration: 2,
        scale: 0.3,
    },
    {
        x: 1100,
        duration: 3,
        backgroundColor: "red",
        rotation: 360,
        delay: 1,
        scale: 2,
        borderRadius: "50%",
        repeat: -1,
        yoyo: true,
    }
)
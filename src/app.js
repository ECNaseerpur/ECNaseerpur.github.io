var glide01 = new Glide('.glide-01', {
    type: 'carousel',
    focusAt: 'center',
    perView: 2,
    autoplay: 4000,
    animationDuration: 700,
    gap: 24,
    classes: {
        activeNav: '[&>*]:bg-slate-700',
    },
    breakpoints: {
        1024: {
            perView: 2
        },
        640: {
            perView: 1
        }
    },
});

glide01.mount();
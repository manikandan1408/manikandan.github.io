var testimonial_glide = new Glide('.testimonial_glide', {
    type: 'carousel',
    startAt: 1,
    perView: 1,
    gap: 20,
    focusAt: 1,
    autoplay: false,
    hoverpause: true,
    bound: true,
    breakpoints: {
        1000: {
            perView: 1
        },
        800: {
            perView: 1
        }
    }
})

testimonial_glide.mount()
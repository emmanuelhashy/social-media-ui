var Slider = {

    DOM: {
        slider: $('#slider'),
        sliderSlides: $('.slider__slide'),
        sliderNav: $('.slider__nav'),
        sliderNavElements: $('.slider__anchor')
    },

    initSlider: function() {
        this.setupSlider();
        this.bindEventHandler();
    },

    setupSlider: function() {
        this.slideWidth = this.DOM.slider.width();
        var offset = this.slideWidth/6;
        var offsetCalc = [];

        $.each(this.DOM.sliderSlides, function(i) {
            offsetCalc[i] = i * offset;
        });
        this.offset = offsetCalc;
    },

    bindEventHandler: function() {
        this.DOM.slider.on('scroll', function(event) {
            Slider.moveSlides(event);
        });
        this.DOM.sliderNav.on('click', '.slider__anchor', function(event) {
            Slider.handleClick(event, this);
        });
    },

    moveSlides: function(event) {
        var position = $(event.target).scrollLeft()/6;
        $.each(this.DOM.sliderSlides, function(i) {
            var offsetX = Slider.offset[i] - position;
            $(this).css({
                'background-position': 'calc(50% + ' + offsetX + 'px) 0'
            });
        });
    },

    handleClick: function(event, element) {
        event.preventDefault();

        var position = $(element).attr('href').split('-').pop();
        this.DOM.slider.stop().animate({ // Stop running animations to prevent queue
            scrollLeft: position * this.slideWidth
        }, 800);

        this.setActive(element);
    },

    setActive: function(element) {
        this.DOM.sliderNavElements.removeClass('slider__anchor--active');
        $(element).addClass('slider__anchor--active');
    }
}

// Don't execute until CSS is applied
$(window).on('load', function() {

    Slider.initSlider();

});
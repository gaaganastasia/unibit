$(document).ready(function () {
    AOS.init();

    particlesJS.load("particles-js", "js/particles.json", function () {
        console.log("callback - particles.js config loaded");
    });
    particlesJS.load("particles-js-2", "js/particles.json", function () {
        console.log("callback - particles.js config loaded");
    });

    /* burger */
    $(".nav_toggle").on("click", function () {
        $(".burger_navigation").toggleClass("active");
        $(".shadow").toggleClass("active");
        $(".nav_toggle").toggleClass("active");
    });
    $(".services_toggle").on("click", function () {
        $(this)
            .next()
            .slideToggle()
            .parent(".services_bottom_item")
            .toggleClass("active");
    });

    $(".header_toggler").on("click", function () {
        $(this).parent().next().toggleClass("active");
    });

    const circle = document.querySelector(".circle_text");
    circle.innerHTML = circle.innerText
        .split("")
        .map(
            (char, i) =>
                `<span style="transform: rotate(${i * 6}deg)">${char}</span>`
        )
        .join("");

    $(window).on("scroll load resize", function () {
        scrollPos = $(this).scrollTop();
        if (scrollPos > 1) {
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
    });
    /* end burger */

    var main_slider = new Swiper(".main_slider", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const videoPlayer = document.querySelector(".main");
    const video = videoPlayer.querySelector(".video");
    const playButton = videoPlayer.querySelector(".play_button");

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    $(document).ready(function () {
        $("form").submit(function () {
            var e = $(this);
            return (
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: e.serialize(),
                }).done(function () {
                    alert("Thank you!"),
                        setTimeout(function () {
                            e.trigger("reset");
                        }, 1e3);
                }),
                !1
            );
        });
    });
});

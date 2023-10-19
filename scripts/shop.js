function checkIE() {
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        return true;
    }

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        return true;
        //(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    } else // If another browser, return 0
    {
        return false; //alert('otherbrowser');
    }

    return false;
}

function checkMobile() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    return isMobile;
}
$(document).ready(function() {
    var isMobile = checkMobile();
    var isIE = checkIE();

    if (isMobile) {
        $("body").addClass("mobile");
    }

    var menuOpen = !$('#floating-menu .menu-items').hasClass("hidden");

    function toggleMenu() {
        if ($('#floating-menu .menu-items').hasClass("hidden")) {
            $('#floating-menu .menu-items').css("display", "block");
            setTimeout(function() {
                $('#floating-menu .menu-items').removeClass("hidden");
            }, 50);
            menuOpen = true;
        } else {
            $('#floating-menu .menu-items').addClass("hidden");
            setTimeout(function() {
                $('#floating-menu .menu-items').css("display", "none");
            }, 300);
            menuOpen = false;
        }
    }


    $('#show-functions').click(function() {
        var height = $('.section-7-1 .table-cont .tables').outerHeight();
        var tbc = $('.section-7-1 .table-cont');
        if (!tbc.hasClass('show')) {
            tbc.addClass('show');
            $('#show-functions').html('close');
            tbc.animate({
                'height': height + 'px'
            }, 2000);
        } else {
            tbc.removeClass('show');
            $('#show-functions').html('show all functions');
            tbc.animate({
                'height': 564 + 'px'
            }, 2000);
        }
    });
    $('#floating-menu .icon').click(function() {
        toggleMenu();
    });
    $(".menu-items [animated-scroll-to]").click(function(item) {
        var selector = $(item.target).attr("animated-scroll-to");
        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, 800);
        if (menuOpen) {
            toggleMenu();
        }
    });

    $(".container").click(function() {
        if (menuOpen) {
            toggleMenu();
        }
    });


    $('.box').each(function(ix, el) {
        var $box = $(el);
        $box.removeClass('downloadformshown');

        $('a[href^="https://releases.medicalholodeck.com"]', $box).on('click', function(e) {
            e.preventDefault();
            $box.toggleClass('downloadformshown');
        });

        $('.closeform', $box).on('click', function(e) {
            e.preventDefault();
            $box.removeClass('downloadformshown downloadlinksentshown');
        });

    });
    $('.downloadform,.downloadform2020 form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(e.target);

        $.post({
            url: $form.attr('action'),
            data: 'email=' + encodeURIComponent($("input[name=email]", $form).val()) + '&version=' + $("input[name=version]", $form).val(),
            success: function(data) {
                $form.addClass('downloadlinksentshown');
            }
        });
    });

    function collision($fixed, $moving) {
        var x1 = $fixed.offset().left;
        var y1 = $fixed.offset().top;
        var h1 = $fixed.outerHeight(true);
        var w1 = $fixed.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $moving.offset().left;
        var y2 = $moving.offset().top;
        var h2 = $moving.outerHeight(true);
        var w2 = $moving.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }

    function overlapDetector() {

        var all = $(".section-10,.section-13");
        for (var i = 0; i < all.length; i++) {
            if (collision($("#floating-social-links"), all.eq(i))) {
                if (!$("#floating-social-links").hasClass('st-dark'))
                    $('#floating-social-links').removeClass('st-light').addClass('st-dark');
                break; //no need to test the others !
            } else {
                if (!$("#floating-social-links").hasClass('st-light'))
                    $('#floating-social-links').removeClass('st-dark').addClass('st-light');
            }
        }
    }

    if ($("#floating-social-links").length > 0) {
        $(window).scroll(function() {
            overlapDetector();
        });
        overlapDetector();
    }

});

(() => {
    const forms = document.querySelectorAll(".newsletterform");

    const addContact = (e, form) => {

        e.preventDefault();

        var loadingdiv = form.querySelector(".loading");
        var responsediv = form.querySelector(".response");
        var errordiv = form.querySelector(".error");
        var exceptiondiv = form.querySelector(".usedemail");
        var containerdiv = form.querySelector(".newsletterform-feedback-container")

        loadingdiv.style.opacity = "0";
        errordiv.style.opacity = "0";
        exceptiondiv.style.opacity = "0";
        responsediv.style.opacity = "0";

        setTimeout(() => {
            loadingdiv.style.opacity = "1";
            containerdiv.style.height = "19px";
        }, 500)


        const payload = new FormData(form);
        console.log([...payload]);

        fetch("https://newsletter-api.michal.medicalholodeck.com/", {
                method: "POST",
                body: payload,
            })
            .then(response => response.ok ? response.text() : "ERROR")
            .then(data => {
                if (data == "success") {
                    loadingdiv.style.opacity = "0";
                    setTimeout(() => {
                        responsediv.style.opacity = "1";
                        loadingdiv.style.opacity = "0";
                        containerdiv.style.height = "19px";
                    }, 500);
                } else if (data == "Contact already exist") {
                    loadingdiv.style.opacity = "0";
                    setTimeout(() => {
                        exceptiondiv.style.opacity = "1";
                        loadingdiv.style.opacity = "0";
                        containerdiv.style.height = "19px";
                    }, 500);
                } else {
                    loadingdiv.style.opacity = "0";
                    setTimeout(() => {
                        errordiv.style.opacity = "1";
                        loadingdiv.style.opacity = "0";
                        containerdiv.style.height = "38px";
                    }, 500);
                }
            })
            .catch(err => console.log(err));
    };

    forms.forEach(form => {
        form.addEventListener("submit", (e) => addContact(e, form));
    });
})();



///////////////////

const modalContainer = document.getElementById('modal-container');
const closeModalButton = document.getElementById('close-modal');

function openModal() {
    modalContainer.style.display = 'block';
}

function closeModal() {
    modalContainer.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    openModal();
});

closeModalButton.addEventListener('click', () => {
    closeModal();
});

modalContainer.addEventListener('click', (event) => {
    if (event.target === modalContainer) {
        closeModal();
    }
});
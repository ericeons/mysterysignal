document.addEventListener("DOMContentLoaded", function() {
    function loadElements() {
        const guestbookContainer = document.getElementById('guestbook-planet-placeholder');
        const neighborsContainer = document.getElementById('neighbors-planet-placeholder');
        const hyperlinksContainer = document.getElementById('hyperlinks-planet-placeholder');
        const indexMobileBackground = document.getElementById('mobile-background-placeholder');
        const neighborsSectionContainer = document.getElementById('neighbors');

        const channelsSectionContainer = document.getElementById('channels');

        // Clear existing elements
        guestbookContainer.innerHTML = '';
        neighborsContainer.innerHTML = '';
        hyperlinksContainer.innerHTML = '';
        indexMobileBackground.innerHTML = '';
        neighborsSectionContainer.innerHTML = '';
        channelsSectionContainer.innerHTML = '';

        if (window.innerWidth >= 1051) {
            // Load desktop-specific elements
            guestbookContainer.innerHTML = '<iframe id="neighbors-planet" src="src/misc/planets/neighbors-planet.html" style="width: 175px; height: 175px;" frameBorder="0" scrolling="no"></iframe>';
            neighborsContainer.innerHTML = '<iframe id="guestbook-planet" src="src/misc/planets/guestbook-planet.html" style="width: 175px; height: 175px;" frameBorder="0" scrolling="no"></iframe>';
            hyperlinksContainer.innerHTML = '<iframe id="hyperlinks-planet" src="src/misc/planets/hyperlinks-planet.html" style="width: 320px; height: 320px;" frameBorder="0" scrolling="no"></iframe>';
            indexMobileBackground.innerHTML = '';
            neighborsSectionContainer.innerHTML = '<iframe src="/neighbors.html" style="width: 222px; height: 100vh;" scrolling="yes" frameBorder="0"></iframe>';
            
            channelsSectionContainer.innerHTML = ' <iframe id="channels-iframe" src="/channels.html" style="width: 222px; height: 100vh;" scrolling="yes" frameBorder="0"></iframe>';
        } else {
            // Hide desktop-specific elements
            guestbookContainer.innerHTML = '';
            neighborsContainer.innerHTML = '';
            hyperlinksContainer.innerHTML = '';
            indexMobileBackground.innerHTML = '<img id="mobile-background" src="src/imgs/index/index-bg.gif">';
            neighborsSectionContainer.innerHTML = '';
            
            channelsSectionContainer.innerHTML = ' <iframe id="channels-iframe" src="src/misc/channels.html" style="width: 222px; height: 100vh;" scrolling="yes" frameBorder="0"></iframe>';
        }
    }

    // Load elements on initial load
    loadElements();

    // Load elements on window resize
    window.addEventListener('resize', loadElements);
});


$('#open-neighbors-btn').click(function(){
    $('#open-neighbors-btn').css('z-index', -2)
    $('#neighbors').css('animation-name', 'open-neighbors')
    $('#close-neighbors-btn').fadeIn(2100)
    $('#close-neighbors-btn').css('display', 'flex')
    })

$('#close-neighbors-btn').click(function(){
    $('#open-neighbors-btn').css('z-index', 1)
    $('#neighbors').css('animation-name', 'close-neighbors')
    $('#close-neighbors-btn').fadeOut(600)
})

$('#open-channels-btn').click(function(){
    $('#open-channels-btn').css('z-index', -2)
    $('#channels').css('animation-name', 'open-channels')
    $('#close-channels-btn').fadeIn(2100)
    $('#close-channels-btn').css('display', 'flex')
    $('#open-neighbors-btn').css('z-index', -3)
    })

$('#close-channels-btn').click(function(){
    $('#open-channels-btn').css('z-index', 1)
    $('#channels').css('animation-name', 'close-channels')
    $('#close-channels-btn').fadeOut(600)
    $('#open-neighbors-btn').css('z-index', 1)
})

$(document).ready(function () {
        // Array of strings for subtitles
        var subtitles = [
            '"Talking to Cyber Spirits!"',
            '"Hidden Achievement Unlocked!"',
            '"Powered by Binaural Beats!"',
            '"Vibrations from the Void!"',
            '"Temporal Convergence Activated!"',
            '"Tasting Sacred Fruit!"',
            '"Abstract Archive Ephemera!"',
            '"Strange Fossil Discovered!"',
            '"Tales of Neo Suburbia!"',
            '"Sharing Solar Secrets!"',
            '"Blue Means Yes!"',
            '"Analog Software Distortions!"',
            '"Enhanced Chromatic Aberration!"',
            '"Into the Liminal Void!"',
            '"Real Estate in Space!"'
            // Add more strings as needed
        ];

        // Function to pick a random subtitle
        function getRandomSubtitle() {
            var randomIndex = Math.floor(Math.random() * subtitles.length);
            return subtitles[randomIndex];
        }

        // Initial subtitle on page load
        $('#index-subtitle').text(getRandomSubtitle());

        // Change subtitle on button click
        $('#change-subtitle-btn').click(function () {
            var currentSubtitle = $('#index-subtitle').text();
            var newSubtitle;

            do {
                newSubtitle = getRandomSubtitle();
            } while (newSubtitle === currentSubtitle);

            // Shake effect on logo-img
            $('#logo').effect('shake', { times: 3, distance: 11 }, 666);

            $('#index-subtitle').fadeOut(400, function () {
                $(this).text(newSubtitle).fadeIn(400);
            });
        });
    });
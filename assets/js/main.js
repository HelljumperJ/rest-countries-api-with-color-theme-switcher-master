document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('input[type="text"]');
    var flagCards = document.querySelectorAll('.card');
    var regionSelect = document.querySelector('select');

//----------------------------SELECT---------------------------------------------

    regionSelect.addEventListener('change', function () {
        var selectedRegion = regionSelect.value.toLowerCase();

        flagCards.forEach(function (card) {
            var flagRegion = card.querySelector('#region-value').innerText.toLowerCase().trim();
            if (selectedRegion === 'all' || flagRegion === selectedRegion) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

//----------------------------INPUT---------------------------------------

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        flagCards.forEach(function (card) {
            var flagTitle = card.querySelector('.card-title').innerText.toLowerCase();

            var flagRegion = card.querySelector('#region-value').innerText.toLowerCase().trim();
            if (flagTitle.includes(searchTerm) && (regionSelect.value === 'all' || flagRegion === regionSelect.value.toLowerCase())) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

//--------------------------------MODO OSCURO------------------------------------
    var darkModeCheckbox = document.querySelector('input[type="checkbox"]');
    var body = document.body;
    var navbar = document.querySelector('.navbar');
    var select = document.querySelector('.select');
    var input = document.querySelector('.input');

    darkModeCheckbox.addEventListener('change', function () {
        body.classList.toggle('dark-mode', darkModeCheckbox.checked);
        navbar.classList.toggle('dark-mode', darkModeCheckbox.checked);
        select.classList.toggle('dark-mode', darkModeCheckbox.checked);
        input.classList.toggle('dark-mode', darkModeCheckbox.checked);
    });
});
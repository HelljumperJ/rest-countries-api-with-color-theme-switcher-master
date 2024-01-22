
    // ----------------------- BUSQUEDA POR INPUT -------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector('input[type="text"]');
    var flagCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function () {
        var searchTerm = searchInput.value.toLowerCase();

        flagCards.forEach(function (card) {
            var flagTitle = card.querySelector('.card-title').innerText.toLowerCase();
            if (flagTitle.includes(searchTerm)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// -------------------------------- MODO OSCURO ---------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    var darkModeCheckbox = document.querySelector('input[type="checkbox"]');
    var body = document.body;

    darkModeCheckbox.addEventListener('change', function () {
        body.classList.toggle('dark-mode', darkModeCheckbox.checked);
        navbar.classList.toggle('dark-mode', darkModeCheckbox.checked);
        select.classList.toggle('dark-mode', darkModeCheckbox.checked);
        input.classList.toggle('dark-mode', darkModeCheckbox.checked);
    });
});
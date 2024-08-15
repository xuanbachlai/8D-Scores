document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const viewPage2Elements = document.querySelectorAll('.ViewPage2');
    const viewPage1Elements = document.querySelectorAll('.ViewPage1');

    function updateView() {
        if (toggleSwitch.checked) {
            viewPage2Elements.forEach(el => el.style.display = 'block');
            viewPage1Elements.forEach(el => el.style.display = 'none');
        } else {
            viewPage2Elements.forEach(el => el.style.display = 'none');
            viewPage1Elements.forEach(el => el.style.display = 'block');
        }
    }

    updateView();

    toggleSwitch.addEventListener('change', updateView);
});

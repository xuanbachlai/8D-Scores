document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const viewPage2Elements = document.querySelectorAll('.ViewPage2');

    function updateView() {
        if (toggleSwitch.checked) {
            viewPage2Elements.forEach(el => el.style.display = 'block');
        } else {
            viewPage2Elements.forEach(el => el.style.display = 'none');
        }
    }

    updateView();
    toggleSwitch.addEventListener('change', updateView);
});

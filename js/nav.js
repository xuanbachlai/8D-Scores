window.addEventListener('mousemove', function(event) {
    if (event.clientY < 50) { // điều chỉnh giá trị này để phù hợp với vị trí của navigation
      document.querySelector('.support-navigation').classList.add('show');
    } else {
      document.querySelector('.support-navigation').classList.remove('show');
    }
  });
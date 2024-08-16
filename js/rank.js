function displayHighestStar() {
    let top1 = localStorage.getItem('top1').split(',')
    let top2 = localStorage.getItem('top2').split(',')
    let top3 = localStorage.getItem('top3').split(',')
  
    document.getElementById('page1-top1-name').textContent = top1[0]
    document.getElementById('page1-top1-score').textContent = top1[1]
    document.getElementById('page1-top2-name').textContent = top2[0]
    document.getElementById('page1-top2-score').textContent = top2[1]
    document.getElementById('page1-top3-name').textContent = top3[0]
    document.getElementById('page1-top3-score').textContent = top3[1]
    
    document.getElementById('page2-top1-name').textContent = top1[0]
    document.getElementById('page2-top2-name').textContent = top2[0]
    document.getElementById('page2-top3-name').textContent = top3[0]
  }
  
  setInterval(displayHighestStar, 1000)
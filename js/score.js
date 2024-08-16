function updateHighestStar() {
    let highestStar = 0
    let secondHighestStar = 0
    let thirdHighestStar = 0
    let name_student_1 = ''
    let name_student_2 = ''
    let name_student_3 = ''

    // Loop through each row to find the highest star value
    for (let i = 0; i < 38; i++) { // Assuming there are 37 rows as shown
        const starId = `star${i}`
        const nameId = `name${i}`
        const starElement = document.getElementById(starId)
        const nameElement = document.getElementById(nameId)
        if (starElement) {
            // Ensure the value is a number and not NaN
            const starValue = parseInt(starElement.textContent, 10)
            const nameValue = nameElement.textContent
            if (!isNaN(starValue)) {
                if (starValue > highestStar) {
                    thirdHighestStar = secondHighestStar
                    name_student_3 = name_student_2
                    secondHighestStar = highestStar
                    name_student_2 = name_student_1
                    highestStar = starValue
                    name_student_1 = nameValue
                } else if (starValue > secondHighestStar) {
                    thirdHighestStar = secondHighestStar
                    name_student_3 = name_student_2
                    secondHighestStar = starValue
                    name_student_2 = nameValue
                } else if (starValue > thirdHighestStar) {
                    thirdHighestStar = starValue
                    name_student_3 = nameValue
                }
            }
        }
    }

    // Update localStorage with the highest star value
    localStorage.setItem('top1', [name_student_1, highestStar])
    localStorage.setItem('top2', [name_student_2, secondHighestStar])
    localStorage.setItem('top3', [name_student_3, thirdHighestStar])
}

// Call the function every second
setInterval(updateHighestStar, 1000)
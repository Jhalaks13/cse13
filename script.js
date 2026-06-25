document.getElementById('start-calc-btn').addEventListener('click', calculateResult);

function calculateResult() {

    let numSubjectsInput = prompt("Enter the number of subjects:");
    
   
    let numSubjects = parseInt(numSubjectsInput);
    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects greater than 0.");
        return;
    }

    let totalMarks = 0;
    const maxMarksPerSubject = 100;
    const maxTotalMarks = numSubjects * maxMarksPerSubject;

    
    for (let i = 1; i <= numSubjects; i++) {
        let marksInput = prompt(`Enter marks for Subject ${i} (out of 100):`);
        let marks = parseFloat(marksInput);

        if (isNaN(marks) || marks < 0 || marks > maxMarksPerSubject) {
            alert(`Invalid marks entered for Subject ${i}. Please enter a value between 0 and 100. Restarting calculation.`);
            return; 
        }

        totalMarks += marks;
    }

    
    let percentage = (totalMarks / maxTotalMarks) * 100;
    percentage = percentage.toFixed(2); 

    let grade = "";
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else if (percentage >= 40) {
        grade = "E";
    } else {
        grade = "Fail (F)";
    }

    
    document.getElementById('res-total').innerText = totalMarks;
    document.getElementById('res-max').innerText = maxTotalMarks;
    document.getElementById('res-percentage').innerText = percentage + "%";
    
    const gradeBadge = document.getElementById('res-grade');
    gradeBadge.innerText = grade;

   
    if (grade === "Fail (F)") {
        gradeBadge.style.background = "#dc3545"; 
    } else {
        gradeBadge.style.background = "#28a745"; 
    }

  
    document.getElementById('result-box').classList.remove('hidden');
}
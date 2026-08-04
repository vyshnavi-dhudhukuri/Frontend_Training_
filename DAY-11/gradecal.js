function calculateGrade() {

    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let per = total / 5;
    let grade;

    if (per >= 90 && per <= 100) {
        grade = "S";
    }
    else if (per >= 80) {
        grade = "A";
    }
    else if (per >= 70) {
        grade = "B";
    }
    else if (per >= 60) {
        grade = "C";
    }
    else if (per >= 50) {
        grade = "D";
    }
    else if (per >= 40) {
        grade = "E";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total +
        "<br>Percentage: " + per.toFixed(2) + "%" +
        "<br>Grade: " + grade;
}

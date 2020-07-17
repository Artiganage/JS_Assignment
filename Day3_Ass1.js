let marks=prompt("Enter your marks ");
let grade;

if (marks > 90 && marks <= 100)
{
    grade = 'A+';
    console.log("grade = "+grade);
}
if (marks > 80 && marks <= 90)
{
    grade = 'A';
    console.log("grade = "+grade);
}
else if (marks > 70 && marks <= 80)
{
    grade= 'B';
    console.log("grade = "+grade);
}
else if (marks > 60 && marks <= 70)
{
    grade = 'C';
    console.log("grade = "+grade);
}
else if (marks > 50 && marks <= 60)
{
    grade='D';
    console.log("grade = "+grade);
}
else
{
    grade='fail';
    console.log("grade = "+grade);
}
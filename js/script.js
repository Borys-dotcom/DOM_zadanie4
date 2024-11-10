let form = document.getElementById("form");

form.addEventListener("submit", submitService);

function submitService(event){
    event.preventDefault();
    let fname = document.getElementsByName("fname")[0].value;
    let lname = document.getElementsByName("lname")[0].value;

    console.log(`Użytkownik nazywa się: ${fname} ${lname}`);

}
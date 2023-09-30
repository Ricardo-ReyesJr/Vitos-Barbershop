function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ricardoreyesjr7878@gmail.com",
        Password : "D6CC659A4E0F858EC06808C37367C57EF54C",
        To : 'ricardo.reyesjr@hotmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
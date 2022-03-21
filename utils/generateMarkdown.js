const team = require('../index')
const hmtl = [];

hmtl.push(team
    .filter(employee => employee.switchRole() === "Manager")
    .map(manager => managerRole(manager))
    );
hmtl.push(team
     .filter(employee => employee.switchRole() === "Engineer")
    .map(engineer => engineerRole(engineer))
    .join ("")
    );
hmtl.push(team
     .filter(employee => employee.switchRole() === "Intern")
     .map(intern => internRole(intern))
     .join ("")
    );

function switchRole(data){
    console.log(data);
    switch (switchRole){
        case "Manager":
            return managerRole = [
    `<div>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.managerName}</li>
        <li class="list-group-item"><i class="fa-solid fa-mug-hot">Manager</i></li>
        </ul>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.managerId}</li>
          <li class="list-group-item">Email: ${data.managerEmail}</li>
          <li class="list-group-item">Office Number: ${data.managerOfficeNumber}</li>
        </ul>
      </div>`
    ];
    case "Engineer":
        return engineerRole = [
        `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${data.engineerName}</li>
            <li class="list-group-item"><i class="fa-solid fa-glasses"> Engineer</i></li>
            </ul>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.engineerId}</li>
              <li class="list-group-item">Email: ${data.engineerEmail}</li>
              <li class="list-group-item">Github: ${data.engineerGithub}</li>
            </ul>
          </div>`
    ];
    case "Intern":
        return internRole = [
        `<div>
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${data.internName}</li>
            <li class="list-group-item"><i class="fa-solid fa-graduation-cap">Intern</i></li>
            </ul>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.engineerId}</li>
              <li class="list-group-item">Email: ${data.engineerEmail}</li>
              <li class="list-group-item">Github: ${data.engineerGithub}</li>
            </ul>
          </div>`
    ];
};
};


module.exports = (data) => {
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href = "style.css">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Team Profile Generator</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      
    <div>${switchRole(data)}</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script>src="index.js"</script>
</body>
</html>
    `
}

// module.exports = generateMarkdown{data};


/// put all in function => team
// move push down
// turn cases into functions
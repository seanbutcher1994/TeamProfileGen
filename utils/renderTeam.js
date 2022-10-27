

const team = [];

function renderTeam(name, data) {

    const company = name;

    const engineers = data.filter(function (employees){
        if (employees.getRole() === 'Engineer'){
            return true
        }
    })

    const managers = data.filter(function(employees){
        if (employees.getRole() === 'Manager'){
            return true
        }
    })
    const interns = data.filter(function (employees){
        if(employees.getRole() === 'Intern'){
            return true
        }
    })
    managers.map(manager => renderManager(manager));
    engineers.map(engineer => renderEngineer(engineer));
    interns.map(intern => renderIntern(intern));
    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/svg-with-js.min.css" integrity="sha512-W3ZfgmZ5g1rCPFiCbOb+tn7g7sQWOQCB1AkDqrBG1Yp3iDjY9KYFh/k1AWxrt85LX5BRazEAuv+5DV2YZwghag==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid justify-content-center" >
                <a class="navbar-brand" href="#">${company} - Team</a>
            </div>
        </nav>
        <section class="team-section py-5">
            <div class="container">
                <div class="row justify-content-center">
                    ${team}
                </div>
            </div>
     

    
        </section>
    </html>

    `
    
}

const renderManager = manager => {
    const employee = `
<div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
        <div class="card-body p-4">
            <div class="card-text pt-1">
                <h5 class="member-name mb-0 text-center text-dark font-weight-bold">${manager.name}</h5>
                <div class="mb-3 text-center">${manager.getRole()}</div>
            </div>
        </div><!--//card-body-->
        <div class="card-footer theme-bg-primary border-0 text-center">
            <ul class="list-unstyled">
                <li><strong>ID: </strong>${manager.id}</li>
                <li><strong>Email: </strong><a class="text-dark" href="mailto:${manager.email}">${manager.email}</a></li>
                <li><strong>Office Number: </strong><a class="text-dark">${manager.officeNumber}</a></li>
            </ul><!--//social-list-->
        </div><!--//card-footer-->
    </div><!--//card-->
</div><!--//col-->
    `
team.push(employee);
}

const renderEngineer = engineer => {
    const employee = `
<div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
        <div class="card-body p-4">
            <div class="card-text pt-1">
                <h5 class="member-name mb-0 text-center text-dark font-weight-bold">${engineer.name}</h5>
                <div class="mb-3 text-center">${engineer.getRole()}</div>
            </div>
        </div><!--//card-body-->
        <div class="card-footer theme-bg-primary border-0 text-center">
            <ul class="list-unstyled">
                <li><strong>ID: </strong>${engineer.id} </li>
                <li><strong>Email: </strong><a class="text-dark" href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li><strong>GitHub: </strong><a class="text-dark" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
            </ul><!--//social-list-->
        </div><!--//card-footer-->
    </div><!--//card-->
</div><!--//col-->
    `
    team.push(employee)
}

const renderIntern = intern => {
    const employee = `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
        <div class="card-body p-4">
            <div class="card-text pt-1">
                <h5 class="member-name mb-0 text-center text-dark font-weight-bold">${intern.name}</h5>
                <div class="mb-3 text-center">${intern.getRole()}</div>
            </div>
        </div><!--//card-body-->
        <div class="card-footer theme-bg-primary border-0 text-center">
            <ul class="list-unstyled">
                <li><strong>ID: </strong>${intern.id} </li>
                <li><strong>Email: </strong><a class="text-dark" href="mailto:${intern.email}">${intern.email}</a></li>
                <li><strong>School: </strong><a class="text-dark">${intern.school}</a></li>
            </ul><!--//social-list-->
        </div><!--//card-footer-->
    </div><!--//card-->
</div><!--//col-->
    `
    team.push(employee);
}
module.exports = renderTeam
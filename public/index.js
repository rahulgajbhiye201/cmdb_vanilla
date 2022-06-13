console.log("indexjs working");

// Dropdown menu functionality

var elements = document.getElementsByClassName("inputStyle");

var myFunction = function() {

    var attribute = this.getAttribute("id")
    console.log(attribute)

    switch (attribute) {
        
        case attribute = 'Name':
        var a = "correct0";
        var b = "incorrect0";
        break;
        case attribute = 'InstallStatus':
        var a = "correct1";
        var b = "incorrect1";
        break;
        case attribute = 'Category':
        var a = "correct2";
        var b = "incorrect2";
        break;
        case attribute = 'SupportGroup':
        var a = "correct3";
        var b = "incorrect3";
        break;
        case attribute = 'SystemRole':
        var a = "correct4";
        var b = "incorrect4";
        break;
        case attribute = 'IPAddress':
        var a = "correct5";
        var b = "incorrect5";
        break;
        case attribute = 'Location':
        var a = "correct6";
        var b = "incorrect6";
        break;
        case attribute = 'HostedOn':
        var a = "correct7";
        var b = "incorrect7";
        break;
        case attribute = 'RebootSlot':
        var a = "correct8";
        var b = "incorrect8";
        break;
        case attribute = 'AdministratorBy':
        var a = "correct9";
        var b = "incorrect9";
        break;
        case attribute = 'OperatingSystem':
        var a = "correct10";
        var b = "incorrect10";
        break;
    }

    document.getElementById(a).onclick = function(){
        var value2 = document.getElementById(attribute);
        value2.setAttribute("readonly", "");
    }
    document.getElementById(b).onclick = function(){
        var value2 = document.getElementById(attribute);
        value2.removeAttribute("readonly");
    }

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

// Dropdown menu functionality

// Form submission

$('#emailform').on('submit', (e) => {
    e.preventDefault();

    const Title = $('#Title').html().trim();
    const Name = $('#Name').val().trim();
    const InstallStatus = $('#InstallStatus').val().trim();
    const Category = $('#Category').val().trim();
    const SupportGroup = $('#SupportGroup').val().trim();
    const SystemRole = $('#SystemRole').val().trim();
    const IPAddress = $('#IPAddress').val().trim();
    const Location = $('#Location').val().trim();
    const HostedOnILOIP = $('#HostedOnILOIP').val().trim();
    const RebootSlot = $('#RebootSlot').val().trim();
    const AdministratorBy = $('#AdministratorBy').val().trim();
    const OperatingSystem = $('#OperatingSystem').val().trim();

    const data = {
         Title,
         Name,
         InstallStatus,
         Category,
         SupportGroup,
         SystemRole,
         IPAddress,
         Location,
         HostedOnILOIP,
         RebootSlot,
         AdministratorBy,
         OperatingSystem
    }

    $.post('/email', data, function(){
        console.log("Message Send");
    })
})
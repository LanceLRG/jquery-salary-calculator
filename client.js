console.log('linked!');
$(document).ready( function(){

//Declare total monthly salary and set to 0 by default
let totalMonthlySalary = 0;
// Submit button collects all inputs and places them into variables
    $('#submitButton').on('click', function() {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let id = $('#id').val();
        let title = $('#title').val();
        let annualSalary = $('#annualSalary').val();
        // console.log(firstName, lastName, id, title, annualSalary); // log to see if it worked. (it did)

        // append recieved information into the table
        $('#masterTable').append(`
            <tr>
                <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${annualSalary}</td>
                <td><button class="deleteMe">delete</button></td>
            </tr>`)

        // add to and calculate total monthly salary
        totalMonthlySalary += annualSalary/12;
        $('#totalMonthly').empty();
        $('#totalMonthly').append(totalMonthlySalary);

        //Check if total monthly salary exceeds $20,000 and turns background red if true
        if (totalMonthlySalary > 20000){
            $('.totalZone').css("background-color", "red");
        }


        //Clear all fields
        $('.inputBoxes').val('');
})

})
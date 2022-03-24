$(document).ready(function () {
    $("#formsubmit").validate({
        errorElement: 'p',
        rules: {
            ConsumerId: {
                required: true,
                minlength: 10,
            },
            ConsumerNumber: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            numbervalidation: {
                required: true,
                minlength: 10,
            },
        },
        messages: {
            ConsumerId: {
                required: "Consumer id cannot be left empty",
                minlength: "Consumer id formate is incorrect",
                maxlength: "Consumer id formate is incorrect",
            },
            ConsumerNumber: {
                required: "Consumer number cannot be left empty",
                minlength: "Consumer number formate is incorrect",
                maxlength: "Consumer number formate is incorrect"
            },
            numbervalidation: {
                required: "Mobile number cannot be empty",
                minlength: "Invalid mobile number",
                maxlength: "Invalid mobile number"
            }
        }
    })

})



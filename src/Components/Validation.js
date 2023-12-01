export default function Validation(values) {
    const errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if (values.FirstName === "") {
        errors.FirstName = "First Name is required"
    }
    if (values.LastName === "") {
        errors.LastName = "Last Name is required"
    }
    if (values.Email === "") {
        errors.Email = "Email is required"
    }
    else if (!email_pattern.test(values.Email)) {
        errors.Email = "Email Pattern is not correct"
    }
    if (values.Password === "") {
        errors.Password = "Password is required"
    }
    return errors;
}
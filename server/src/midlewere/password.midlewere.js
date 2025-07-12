const isStrongPassword = (password) =>  {
    const errors = [];

    if (!/.{8,}/.test(password)) {
        errors.push("Kamida 8 ta belgidan iborat bo‘lishi kerak");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Kamida 1 ta katta harf bo‘lishi kerak");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Kamida 1 ta kichik harf bo‘lishi kerak");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Kamida 1 ta raqam bo‘lishi kerak");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("Kamida 1 ta maxsus belgi (.,!@#…) bo‘lishi kerak");
    }

    return errors;
}

module.exports = isStrongPassword
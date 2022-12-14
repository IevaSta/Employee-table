function inputValidation(type, input) {

    input = input.trim();

    if (!input) {
        return input;
    }

    switch (type) {
        case 'name':
            input = input[0].toUpperCase() + input.slice(1).toLowerCase();
            break;

        case 'age':
            //add validation, if you want :) 
            break;

        default:
    }
    return input;
}

export default inputValidation;
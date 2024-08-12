// minLength:3   maxLength:50
export function validarCantidadCaracteres (input, min, max){
    if(input.value.length >= min && input.value.length <= max){
        // input.className = 'form-control is-valid'
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
        return true
    }else{
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
        return false
    }
}
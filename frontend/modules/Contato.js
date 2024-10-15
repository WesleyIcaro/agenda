import validator from "validator";

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (nomeInput.value.length < 3 || nomeInput.value.length > 50) {
            alert('Nome inválido!');
            error = true;
        }
        if (sobrenomeInput.value.length > 0) {
            if (sobrenomeInput.value.length < 3 || sobrenomeInput.value.length > 50) {
                alert('Sobrenome inválido!');
                error = true;
            }
        }

        if (emailInput.value.length > 0) {
            if (!validator.isEmail(emailInput.value)) {
                alert('Email inválido!');
                error = true;
            }
        }

        if (telefoneInput.value.length > 0) {
            if (typeof telefoneInput !== 'number' && telefoneInput.value.length < 3) {
                alert('Telefone inválido!');
                error = true;
            }
        }

        if (emailInput.value.length === 0 && telefoneInput.value.length === 0) {
            alert('Favor informar telefone ou email.');
            error = true;
        }

        if (!error) el.submit();

        console.log(nomeInput.value, sobrenomeInput.value, emailInput.value, telefoneInput.value);
    }

}
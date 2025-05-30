export class ErrorRepository {
    constructor() {
        this.errorsStore = new Map();
    }

    add(code, description) {
        if (this.errorsStore.has(code)) {
			throw new Error(`Ошибка, такой объект уже существует!`)
		} else {
            this.errorsStore.set(code, description);
        }
    }

    translate(code) {
        if (this.errorsStore.has(code)) {
			return this.errorsStore.get(code);
		} else {
            return 'Unknown error';
        }
    }
}


// Вы решили упорядочить работу с ошибками в своём приложении, 
// а именно ввести цетрализованно числовой код ошибки и её описание. 
// И при генерации любых ошибок в коде приложения брать их из централизованного хранилища.

// Описание
// Создайте свой класс ErrorRepository внутри которого храните Map, 
// в котором ключ - это код ошибки (число), а значение - текстовое описание (человекочитаемое).

// Реализуйте метод translate(code), позволяющий по коду получить текст ошибки, 
// а в случае отсутствия подобного кода возвращать строку 'Unknown error'.
import { ErrorRepository } from '../errorRepository.js';

test('check new Map', () => {
    let map = new ErrorRepository();
    let result = {
        errorsStore: new Map()
    };
    expect(map).toEqual(result);
});

test('check Error in method add', () => {
    let codeName = 404;
    let map = new ErrorRepository();
    function testError() {
        map.add(codeName, 'This is very bad');
        map.add(codeName, 'This is very bad');
    }
    expect(() => testError()).toThrow();
});

test('check add in method add', () => {
    let map = new ErrorRepository();
    map.add(404, 'This is very bad');
    let result = [404, 'This is very bad'];
    expect(...map.errorsStore).toEqual(result);
});

test('check translate in method translate', () => {
    let map = new ErrorRepository();
    map.add(404, 'This is very bad');
    expect(map.translate(404)).toBe('This is very bad');
});

test('check Unknown error in method translate', () => {
    let map = new ErrorRepository();
    expect(map.translate(404)).toBe('Unknown error');
});
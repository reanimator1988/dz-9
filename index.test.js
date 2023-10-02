import { removeElement } from './index.js';

test(
    'Перевіряємо існуючий елемент видаляється з масиву',
    () => {
        const array = [1, 2, 3, 4, 5];
        const itemToRemove = 3;
        const expectedArray = [1, 2, 4, 5];
        expect(removeElement(array, itemToRemove)).toEqual(expectedArray);
    }
),
    test(
        'спроба видалення неіснуючого елемента не змінює масив',
        () => {
            const array = [1, 2, 3, 4, 5];
            const itemToRemove = 6;
            const expectedArray = [1, 2, 3, 4, 5];
            expect(removeElement(array, itemToRemove)).toEqual(expectedArray);
        }
    ),
    test(
        'для елемента, що повторюється, видаляються всі входження',
        () => {
            const array = [1, 2, 2, 3, 4, 2, 5];
            const itemToRemove = 2;
            const expectedArray = [1, 3, 4, 5];
            expect(removeElement(array, itemToRemove)).toEqual(expectedArray);
        }
    );













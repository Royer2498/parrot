import Parrot from '../Parrot.js';
import European from '../European.js';
import African from '../African.js';
import NorwegianBlue from '../NorwegianBlue.js';




describe("Parrot", function () {
    test("get speed of european parrot", function () {
        var parrot = new European();
        expect(parrot.getSpeed()).toBe(12);
    });

    test("get speed of african parrot with one coconut", function () {
        const parrot = new African(1);
        expect(parrot.getSpeed()).toBe(3);
    });

    test("get speed of african parrot with two coconuts", function () {
        const parrot = new African(2);

        expect(parrot.getSpeed()).toBe(0);
    });

    test("get speed of african parrot with no coconuts", function () {
        const parrot = new African(0);

        expect(parrot.getSpeed()).toBe(12);
    });

    test("get speed norwegian blue parrot nailed", function () {
        const parrot = new NorwegianBlue(1.5, true);

        expect(parrot.getSpeed()).toBe(0);
    });

    test("get speed norwegian blue parrot not nailed", function () {
        const parrot = new NorwegianBlue(1.5, false);

        expect(parrot.getSpeed()).toBe(18);
    });

    test("get speed norwegian blue parrot not nailed high voltage", function () {
        const parrot = new NorwegianBlue(4, false);

        expect(parrot.getSpeed()).toBe(24);
    });
});

import {test, expect} from "@playwright/test";

    test('@sanity @regression test 1 ', async () => {
        console.log('This is test 1');
    });

    test('@regression test 2 ', async () => {
        console.log('This is test 2');
    });

    test('test 3 ', {tag:['@sanity','@regression']}, async () => {
        console.log('This is test 1');
    });

    test('test 4 ', {tag:'@sanity'}, async () => {
        console.log('This is test 2');
    });



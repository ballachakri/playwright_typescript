import { test, expect } from "@playwright/test";

test.describe('Group1', async () => {

    test(' test 1 ', async () => {
        console.log('This is test 1');
    });

    test(' test 2 ', async () => {
        console.log('This is test 2');
    });

});


test.describe('Group2', async () => {

    test(' test 3 ', async () => {
        console.log('This is test 3');
    });

    test(' test 4 ', async () => {
        console.log('This is test 4');
    });
});



import {test, expect} from "@playwright/test";
import fs from 'fs';

// npm i --save-dev @types/node
// reading data from json

const jsonpath = "testdata/user.json";
const loginData:any = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'));

test(`Reading data from json`, async ({page}) =>{
console.log(loginData[0]);
});
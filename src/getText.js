const fs = require('fs');

let rawdata = fs.readFileSync('../test_pdfs/SeanTimmCurrentResume_2021.json');
let student = JSON.parse(rawdata);
let string = "";
let pages = student.formImage.Pages;
for (let i = 0; i < pages.length; i++) {
    let texts = pages[i].Texts;
    for (let j = 0; j < texts.length; j++) {
        let Rs = texts[j].R;
        for (let index = 0; index < Rs.length; index++) {
            string += Rs[index].T;
        }
    }
} 

fs.writeFile("../test_output/test.txt",decodeURIComponent(string), err => {
    if (err) {
        console.error(err);
        return;
    }
})
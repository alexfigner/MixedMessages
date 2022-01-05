const infinitiveVerbs = []
const pastVerbs = []
const presVerbs = []
const nouns = []
const quotes = [['If you can ', {fill: 'infinitiveVerbs'}, ' a ', {fill: 'nouns'}, ' you can ', {fill: 'infinitiveVerbs'}, 
' a ', {fill: 'nouns'}, '. - Patches O\'Houlihan'], ['Harry Potter... the boy who ', {fill: 'pastVerbs'}, 
' come to ', {fill: 'infinitiveVerbs'}, '! - Lord Voldemort']]


resourceLoader()

function resourceLoader(){
    const fs = require('fs')
    let text = fs.readFileSync(`${__dirname}/resources.txt`).toString('utf-8')
    let lineArr = text.split("\n")
    let i = 0
    let line = lineArr[i].trim()
    let currArr = infinitiveVerbs
    i ++
    while (line != 'END'){
        line = lineArr[i].trim()
        switch (line){
            case 'PAST VERBS':
                currArr = pastVerbs
                i++
                line = lineArr[i].trim()
                break;
            case 'PRESENT VERBS':
                currArr = presVerbs
                i++
                line = lineArr[i].trim()
                break;
            case 'NOUNS':
                currArr = nouns
                i++
                line = lineArr[i].trim()
                break;
            default:
                currArr.push(line)
                i++
                line = lineArr[i].trim()
                break;
        }
    }
};

function messageGenerator(){
    const idx = Math.floor(Math.random() * quotes.length)
    const template = quotes[idx]
    let quote = '';

    for (let i in template){
        if (typeof template[i] === 'string'){
            quote = quote.concat(template[i])
        } else {
            quote = quote.concat(fillSelector(template[i].fill))
        }
    }
    return quote
};

function fillSelector(type){
    switch (type){
        case 'infinitiveVerbs':
            idx = Math.floor(Math.random() * infinitiveVerbs.length)
            return infinitiveVerbs[idx]
            break;
        case 'presVerbs':
            idx = Math.floor(Math.random() * presVerbs.length)
            return presVerbs[idx]
            break;
        case 'pastVerbs':
            idx = Math.floor(Math.random() * pastVerbs.length)
            return pastVerbs[idx]
            break;
        case 'nouns':
            idx = Math.floor(Math.random() * nouns.length)
            return nouns[idx]
            break;
    }
};

console.log(messageGenerator())
// const _ = require('lodash');
//////////////////////////////////////// Hyperparameters and corpus loading ////////////////////////////////////////
var numTopics = 5;
var alpha = 0.1;
var beta = 0.1;
var currentStatus = 0; // 0 for unintialized, 1 for word mode, 2 for corpus mode
var corpus = [
    'the quick brown fox jumps over the lazy dog',
    'the dog chased the cat',
    'the cat climbed the tree',
    'the tree is tall and green',
    'the quick brown fox is a common saying',
    'dogs are known for their loyalty',
    'cats are known for their independence',
    'trees are known for their longevity',
    'foxes are known for their cunning',
    'brown is a color that is often found in nature',
    'lazy people tend to procrastinate',
    'hard work pays off in the long run'
];
var splitCorpus = corpus.map(sentence => sentence.split(' '));
var rowLengths = splitCorpus.map(row => row.length);
////
var curr_row = 0;
var curr_col = 0;
var vocabulary = new Set(corpus.flatMap(document => document.split(' ')));

var wordToIndex = {};
[...vocabulary].sort().forEach((word, index) => {
    wordToIndex[word] = index;
});

var docTermMatrix = Array.from(Array(corpus.length), () => Array.from(Array(vocabulary.size), () => 0));

corpus.forEach((document, docIndex) => {
    var wordCounts = _.countBy(document.split(' '));
    for (var [word, count] of Object.entries(wordCounts)) {
        docTermMatrix[docIndex][wordToIndex[word]] = count;
    }
});
//////////////////////////////////////// Random Initialization ////////////////////////////////////////
var docTopicAssignments, docTopicCounts, topicWordCounts, totalWordCounts;

function randomizeTopics() {
    docTopicAssignments = Array.from(Array(corpus.length), () => Array.from(Array(vocabulary.size), () => -1));
    docTopicCounts = Array.from(Array(corpus.length), () => Array.from(Array(numTopics), () => 0));
    topicWordCounts = Array.from(Array(numTopics), () => Array.from(Array(vocabulary.size), () => 0));
    totalWordCounts = Array.from(Array(numTopics), () => 0);
    corpus.forEach((document, docIndex) => {
        document.split(' ').forEach((word, wordIndex) => {
            docTopicAssignments[docIndex][wordIndex] = Math.floor(Math.random() * numTopics);
        });
    });
    corpus.forEach((document, docIndex) => {
        document.split(' ').forEach((word, wordIndex) => {
            var topicIndex = docTopicAssignments[docIndex][wordIndex];
            docTopicCounts[docIndex][topicIndex]++;
            topicWordCounts[topicIndex][wordToIndex[word]]++;
            totalWordCounts[topicIndex]++;
        });
    });
}

randomizeTopics();
//////////////////////////////////////// Visualization ////////////////////////////////////////
///// By Text /////
var colors = ['red', 'blue', 'green', 'cyan', 'orange', 'gray', 'brown','violet']
function displayTextCorpus() {
    var wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    for (var i = 0; i < corpus.length; i++) {
        var words = corpus[i].split(' ');
        for (var j = 0; j < words.length; j++) {
            var word = words[j];
            var wordElement = document.createElement('span');
            wordElement.textContent = word + ' ';
            wordElement.id = word;
            wordElement.style.fontSize = '21.5px';
            if (currentStatus != 0) {
                if (currentStatus == 1 && i == curr_row && j == curr_col) {
                    wordElement.style.color = 'black';
                    wordElement.style.fontWeight = "bold";
                } else {
                    wordElement.style.color = colors[docTopicAssignments[i][j]];
                }
            }
            wordContainer.appendChild(wordElement);
        }
        wordContainer.appendChild(document.createElement('br'));
    }
}
///// Buttons and Divs/////

const resetBtn = document.getElementById('reset');
const inputBtn = document.getElementById('BtnInput');
resetBtn.addEventListener('click', ()=>{
    resetAll();
    displayTextCorpus();
});
inputBtn.addEventListener('click', ()=>{
    numTopics = parseInt(topicsInput.value);
    alpha = parseFloat(alphaInput.value);
    beta = parseFloat(betaInput.value);
    inputBtn.disabled = true;
    if (numTopics > 8 || numTopics < 1) {
        window.alert("Please input a integer between 1 and 8");
        topicsInput.value = 5;
        
        inputBtn.disabled = false;
    }
});
const wordModeDiv = document.getElementById('wordModeDiv');
const wordModeDiv_ = document.getElementById('wordModeDiv_');
const corpusModeDiv = document.getElementById('corpusModeDiv');
var topicsInput = document.getElementById('inputN');
var alphaInput = document.getElementById('inputAlpha');
var betaInput = document.getElementById('inputBeta');
function resetAll() {
    currentStatus = 0;
    curr_col = 0;
    curr_row = 0;
    inputBtn.disabled = false;
    wordModeInit.disabled = false;
    corpusModeInit.disabled = false;
    iterateBtn.disabled = true;
    alphaInput.disabled = false;
    betaInput.disabled = false;
    topicsInput.disabled = false;
    wordModeDiv.style.display = "none";
    wordModeDiv_.style.display = "none";
    corpusModeDiv.style.display = "none";
    topicsInput.value = 5;
    alphaInput.value = 0.1;
    betaInput.value = 0.1;
    inputBtn.click();
    inputBtn.disabled = false;
    randomizeTopics();
}
const wordModeInit = document.getElementById('startWord');
wordModeInit.addEventListener('click', ()=>{
    currentStatus = 1;
    randomizeTopics();
    wordModeInit.disabled = true;
    corpusModeInit.disabled = true;
    iterateBtn.disabled = false;
    inputBtn.disabled = true;
    displayTextCorpus();
    wordModeDiv_.style.display = "block";
});
const corpusModeInit = document.getElementById('startCorpus');
corpusModeInit.addEventListener('click', ()=>{
    currentStatus = 2;
    randomizeTopics();
    wordModeInit.disabled = true;
    corpusModeInit.disabled = true;
    iterateBtn.disabled = false;
    inputBtn.disabled = true;
    displayTextCorpus();
    corpusModeDiv.style.display = "block";
});
const iterateBtn = document.getElementById('iterateBtn');
iterateBtn.addEventListener('click', () => {
    inputBtn.disabled = true;
    alphaInput.disabled = true;
    betaInput.disabled = true;
    topicsInput.disabled = true;
    if (currentStatus == 1) {
        displayTextCorpus();
        wordIteration();
        wordModeDiv.style.display = "block";
    } else {
        corpusIteration();
        displayTextCorpus();
    }
});
function displayDistributionWithTopic(distribution, container) {
    var distributionContainer = document.getElementById(container);
    distributionContainer.innerHTML = '';
    for (var i = 0; i < distribution.length; i++) {
        var probElement = document.createElement('span');
        probElement.textContent = distribution[i]+'  ';
        probElement.style.color = colors[i];
        distributionContainer.appendChild(probElement);
    }
}


resetBtn.click();
////////////////////////////////////////// Training ////////////////////////////////////////
function normalize(probabilities) {
    var sum = probabilities.reduce((acc, probability) => acc + probability);
    var normalizedProbabilities = probabilities.map(probability => (probability / sum).toFixed(3));
    return normalizedProbabilities;
}
function drawFromDistribution(distribution) {
    // change probability distribution to cdf
    var cdf = [];
    var curr_sum = 0;
    for (var i = 0; i < distribution.length; i++) {
        curr_sum += distribution[i];
        cdf.push(curr_sum);
    }
    sum = cdf[cdf.length - 1];
    for (var i = 0; i < distribution.length; i++) {
        cdf[i] /= sum;
    }
    var randomNumber = Math.random();
    for (var i = 0; i < cdf.length; i++) {
        if (randomNumber <= cdf[i]) {
            return i;
        }
    }
}
function corpusIteration() {
    corpus.forEach((document, docIndex) => {
        document.split(' ').forEach((word, wordIndex) => {
            var topicIndex = docTopicAssignments[docIndex][wordIndex];
            docTopicCounts[docIndex][topicIndex]--;
            topicWordCounts[topicIndex][wordToIndex[word]]--;
            totalWordCounts[topicIndex]--;
            var docLength = document.split(' ').length;
            var topicProbs = Array.from(Array(numTopics), () => 0);
            for (let i = 0; i < numTopics; i++) {
                var docTopicProb = (docTopicCounts[docIndex][i] + alpha) / (docLength + alpha * numTopics);
                var totalWordOcur = _.sum(topicWordCounts.map(row => row[wordToIndex[word]]));
                var topicWordProb = (topicWordCounts[i][wordToIndex[word]] + beta) / (totalWordOcur + beta * vocabulary.size);
                topicProbs[i] = docTopicProb * topicWordProb;
            }
            var topicAssign = drawFromDistribution(topicProbs)
            docTopicAssignments[docIndex][wordIndex] = topicAssign;
            docTopicCounts[docIndex][topicAssign]++;
            topicWordCounts[topicAssign][wordToIndex[word]]++;
            totalWordCounts[topicAssign]++;
        });
    });
}

function updateIndex() {
    if (rowLengths[curr_row] == curr_col + 1) {
        if (curr_row == corpus.length - 1) {
            curr_row = 0;
            curr_col = 0;
        } else {
            curr_row += 1;
            curr_col = 0;
        }
    } else {
        curr_col += 1;
    }
}
function wordIteration() {
    word = splitCorpus[curr_row][curr_col];
    var topicIndex = docTopicAssignments[curr_row][curr_col];
    docTopicCounts[curr_row][topicIndex]--;
    topicWordCounts[topicIndex][wordToIndex[word]]--;
    totalWordCounts[topicIndex]--;
    var docLength = rowLengths[curr_row]
    var topicProbs = Array.from(Array(numTopics), () => 0);
    var p1,p2,p3,p4,p5;
    for (let i = 0; i < numTopics; i++) {
        var docTopicProb = (docTopicCounts[curr_row][i] + alpha) / (docLength + alpha * numTopics);
        var totalWordOcur = _.sum(topicWordCounts.map(row => row[wordToIndex[word]]));
        var topicWordProb = (topicWordCounts[i][wordToIndex[word]] + beta) / (totalWordOcur + beta * vocabulary.size);
        topicProbs[i] = docTopicProb * topicWordProb;
        if (i ==0) {
            p1 = docTopicCounts[curr_row][i];
            p2 = topicWordCounts[i][wordToIndex[word]];
            p3 = docTopicProb;
            p4 = topicWordProb;
            p5 = totalWordOcur;
        }
    }
    var topicAssign = drawFromDistribution(topicProbs);
    docTopicAssignments[curr_row][curr_col] = topicAssign;
    docTopicCounts[curr_row][topicAssign]++;
    topicWordCounts[topicAssign][wordToIndex[word]]++;
    totalWordCounts[topicAssign]++;
    
    ////Word Mode Explaination Visualizaiton///
    var text = "Currently we are looking at the word: ph1";
    text = text.replace("ph1",`<strong>${word}</strong>`);
    const s1 = document.getElementById("sentence_1");
    s1.innerHTML = text;

    var text = "(ph1 + ph2) / (ph3 + ph2 * ph4) = ph5";
    text = text.replace("ph1",p1);
    text = text.replace("ph2",alpha);
    text = text.replace("ph2",alpha);
    text = text.replace("ph3",docLength);
    text = text.replace("ph4",numTopics);
    text = text.replace("ph5",p3.toFixed(3));
    const s2 = document.getElementById("sentence_2");
    s2.innerHTML = text;

    var text = "(ph1 + ph2) / (ph3 + ph2 * ph4) = ph5";
    text = text.replace("ph1",p2);
    text = text.replace("ph2",beta);
    text = text.replace("ph2",beta);
    text = text.replace("ph3",p5);
    text = text.replace("ph4",vocabulary.size);
    text = text.replace("ph5",p4.toFixed(3));
    const s3 = document.getElementById("sentence_3");
    s3.innerHTML = text;

    var text = "For topic 1, we have ph1 * ph2 = ph3, rounded to ph4.";
    text = text.replace("ph1",p3.toFixed(3));
    text = text.replace("ph2",p4.toFixed(3));
    text = text.replace("ph3",(p3*p4).toFixed(6));
    text = text.replace("ph4",`<span style='color: ${colors[0]};'>${(p3*p4).toFixed(3)}</span>`);
    const s4 = document.getElementById("sentence_4");
    s4.innerHTML = text;

    displayDistributionWithTopic((topicProbs.map((num) => num.toFixed(3))),"distribution_1");
    displayDistributionWithTopic(normalize(topicProbs),"distribution_2");
    var text = "Here we update the word ph1 to topic ph2";
    text = text.replace("ph1",`<strong>${word}</strong>`).replace("ph2", `<span style='color: ${colors[topicAssign]};'>${topicAssign+1}</span>`);
    const s = document.getElementById("sentence_5");
    s.innerHTML = text;

    updateIndex()
}

// //////////////////////////////////////// Results ////////////////////////////////////////



// var documentTopicDistribution = Array.from(Array(corpus.length), () => Array.from(Array(numTopics), () => 0));

// corpus.forEach((document, docIndex) => {
//     var docLength = document.split(' ').length;
//     for (let topicIndex = 0; topicIndex < numTopics; topicIndex++) {
//     var docTopicCount = docTopicCounts[docIndex][topicIndex];
//     var docTopicProb = (docTopicCount + alpha) / (docLength + alpha * numTopics);
//     documentTopicDistribution[docIndex][topicIndex] = docTopicProb;
//     }
// });

// console.log(documentTopicDistribution)

// var wordTopicDistribution = {};
// for (var [word, index] of Object.entries(wordToIndex)) {
//     var wordTopicProbabilities = Array.from(Array(numTopics), () => 0);
//     for (let topicIndex = 0; topicIndex < numTopics; topicIndex++) {
//         var topicWordCount = topicWordCounts[topicIndex][index];
//         var topicWordProb = (topicWordCount + beta) / (totalWordCounts[topicIndex] + beta * vocabulary.size);
//         wordTopicProbabilities[topicIndex] = topicWordProb;
//     }
//     wordTopicDistribution[word] = wordTopicProbabilities;
// }

var topics=['HTML', 'CSS', 'Git', 'JavaScript'];

var randomtopics = topics[Math.floor(Math.random()*topics.length)];

function listtopics()
 {for (var x = 0; x < topics.length; x++) 
    { console.log(topics[x])}; }


/*for (var x=0; x < topics.length; x++) {console.log(topics[x])}*/

function selecttopic()
{if (randomtopics === 'HTML') {
 console.log("Let's study HTML!");
} else if (randomtopics === 'CSS') {
 console.log("Let's study CSS!");
} else if (randomtopics === 'Git') {
 console.log("Let's study Git!");
} else if (randomtopics === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}}
console.log ('Here is a List of topics we learned through Prework');
listtopics()
console.log('Which topic should we study first?');
selecttopic()
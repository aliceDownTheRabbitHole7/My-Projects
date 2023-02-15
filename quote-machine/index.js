const QUOTEBANK = [
            
            
{
    // Einstein, 0 - 5
    quote: "'If you can't explain it simply, you don't understand it well enough.'",
    author: "-Albert Einstein"
}, {
    quote: "'Learn from yesterday, live for today, hope for tomorrow. The important thing is to not stop questioning.'",
    author: "-Albert Einstein"
}, {
    quote: "'Strive not to be a success, but rather of value.'",
    author: "-Albert Einstein"
}, {
    quote: "'No problem can be solved with the same level consciousness that created it.'",
    author: "-Albert Einstein"
}, {
    quote: "'Coincedence is God's way of remaining anonymous.'",
    author: "-Albert Einstein"
}, {
    quote: "'Reality is merely an illusion, albeit a very persistent one.'",
    author: "-Albert Einstein"
}, { 
    // Gandhi, 6 - 11                
    quote: "'Be the change you wish to see in the world.'",
    author: "-Mahatma Gandhi"
}, {
    quote: "'In a gentle way, you can shake the world.'",
    author: "-Mahatma Gandhi"
}, {
    quote: "'The greatness of a nation and its moral progress can be judged by the way its animals are treated.'",
    author: "-Mahatma Gandhi"
}, {
    quote: "'A man is but a product of his thoughts. What he thinks he becomes.'",
    author: "-Mahatma Gandhi"
}, {
    quote: "'The weak can never forgive. Forgiveness is the attribute of the strong.'",
    author: "-Mahatma Gandhi"
}, {
    quote: "'An eye for an eye will leave the whole world blind.'",
    author: "-Mahatma Gandhi"
}, { 
    // Martin Luther King Jr, 12 - 17               
    quote: "'We shall overcome because the arc of the moral universe is long, but it bends toward justice.'",
    author: "-Martin Luther King Jr."
}, {
    quote: "'Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.'",
    author: "-Martin Luther King Jr."
}, {
    quote: "'Make a career of humanity. Commit yourself to the noble struggle for equal rights. You will make a better person of yourself, a greater nation of your country, and a finer world to live in.'",
    author: "-Martin Luther King Jr."
}, {
    quote: "'We must come to see that the end we seek is a society at peace with itself, a society that can live with its conscience.'",
    author: "-Martin Luther King Jr."
}, {
    quote: "'True peace is not merely the absence of tension; it is the presence of justice.'",
    author: "-Martin Luther King Jr."
}, {
    quote: "'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.'",
    author: "-Martin Luther King Jr."
}, {
    // Socrates, 18 - 23
    quote: "'The unexamined life is not worth living.'",
    author: "-Socrates"
}, {
    quote: "'There is only one good, knowledge, and one evil, ignorance.'",
    author: "-Socrates"
}, {
    quote: "'The only thing I know is that I know nothing.'",
    author: "-Socrates"
}, {
    quote: "'To know, is to know that you know nothing. That is the meaning of true knowledge.'",
    author: "-Socrates"
}, {
    quote: "'Once made equal to man, woman becomes his superior.'",
    author: "-Socrates"
}, {
    quote: "'Death may be the greatest of all human blessings.'",
    author: "-Socrates"
}, {
    // Plato, 24 - 29
    quote: "'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.'",
    author: "-Plato"
}, {          
    quote: "'A good decision is based on knowledge and not on numbers.'",
    author: "-Plato"
}, {
    quote: "'Thinking - the talking of the soul with itself.'",
    author: "-Plato"
}, {
    quote: "'The first and greatest victory is to conquer oneself. To be conquered by yourself is of all things most shameful and vile.'",
    author: "-Plato"
}, {
    quote: "'Opinion is the medium between knowledge and ignorance.'",
    author: "-Plato"
}, {
    quote: "'The measure of a man is what he does with power.'",
    author: "-Plato"
}, {
    // Aristotle, 30- 35
    quote: "'There is no great genius without some touch of madness.'",
    author: "-Aristotle"
}, {
    quote: "'Quality is not an act, it is a habit.'",
    author: "-Aristotle"
}, {
    quote: "'It is the mark of an educated mind to be able to entertain a thought without accepting it.'",
    author: "-Aristotle"
}, {
    quote: "'You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.'",
    author: "-Aristotle"
}, {
    quote: "'I count him braver who overcomes his desires than him who conquers his enemies; for the hardest victory is over self.'",
    author: "-Aristotle"
}, {
    quote: "'The aim of the wise is not to secure pleasure, but to avoid pain.'",
    author: "-Aristotle"
}

];

window.onload = init;

function init() {
generateQuote()
}

function generateQuote() {
let quoteBankSize = QUOTEBANK.length;
let randomNumber = Math.floor(Math.random() * quoteBankSize);
let randomQuote = QUOTEBANK[randomNumber];
let tweetQuote = "twitter.com/intent/tweet";

document.getElementById("text").innerHTML = randomQuote.quote;
document.getElementById("author").innerText = randomQuote.author;
document.getElementById("tweet-quote").href = tweetQuote;            
}
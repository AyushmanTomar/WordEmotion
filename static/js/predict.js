$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: '/submit',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#Enteredtext').html('Entered Text:');
                $('#enteredtextpara').html(response.text);
                $('#output').html(response.predict);
            }
        });
    });
});




let quotes=[
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. ",
    "In three words I can sum up everything I've learned about life: it goes on. ",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ",
    "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth. ",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ",
    "You only live once, but if you do it right, once is enough. ",
    "Be the change that you wish to see in the world. ",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. ",
    "All that is gold does not glitter, not all those who wander are lost; the old that is strong does not wither, deep roots are not reached by the frost. ",
    "It is better to be hated for what you are than to be loved for what you are not. ",
    "I have not failed. I've just found 10,000 ways that won't work. ",
    "A friend is someone who knows all about you and still loves you. ",
    "Always forgive your enemies; nothing annoys them so much. ",
    "To live is the rarest thing in the world. Most people exist, that is all. ",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. ",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. ",
    "I am so clever that sometimes I don't understand a single word of what I am saying. ",
    "Without music, life would be a mistake. ",
    "We accept the love we think we deserve. ",
    "To be a star, you must shine your own light, follow your own path, and don't worry about the darkness, for that is when the stars shine brightest.",
    "It does not do to dwell on dreams and forget to live. ",
    "It is our choices, Harry, that show what we truly are, far more than our abilities. ",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. ",
    "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid. ",
    "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. ",
    "Try not to become a man of success. Rather become a man of value. ",
    "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. ",
    "The fool doth think he is wise, but the wise man knows himself to be a fool. ",
    "We are all fools in love. ",
    "I have always imagined that Paradise will be a kind of library. ",
    "Never let your sense of morals prevent you from doing what is right. ",
    "A room without books is like a body without a soul. ",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. ",
    "Life is what happens to us while we are making other plans. ",
    "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close. ",
    "For every minute you are angry you lose sixty seconds of happiness. ",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. ",
    "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend. ",
    "No one can make you feel inferior without your consent. ",
    "Friendship is born at that moment when one person says to another: 'What! You too? I thought I was the only one. ",
    "If you tell the truth, you don't have to remember anything. ",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ",
    "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow. ",
    "You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do. ",
    "Some infinities are bigger than other infinities. ",
    "It is never too late to be what you might have been.",
    "There are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them. ",
    "Do what you can, with what you have, where you are. ",
    "In the end, it's not the years in your life that count. It's the life in your years. "
]

document.getElementById('quote').addEventListener('click',()=>{
    let i = Math.floor(Math.random()*(quotes.length-1))
    let j=0;
    let k=0;
    let quote = quotes[i]
    let a = authors[i]
    do{
    j = Math.floor(Math.random()*(quotes.length-1))
    }while(i==j)
    let quote2 = quotes[j]
    let a1 = authors[j]
    do{
    k = Math.floor(Math.random()*(quotes.length-1))
    }while(k==j || k==i)
    let quote3 = quotes[k]
    let a2 = authors[k]
    document.getElementById('enteredtextpara').innerHTML=quote+'<br><br>'+a+'<br><br><br>'+quote2+'<br><br>'+a1+'<br><br><br>'+quote3+'<br><br>'+a2;
    document.getElementById('Enteredtext').innerHTML='QUOTE'
    
})






authors=[
'- Steve Jobs',
'- Robert Frost',
'- Albert Einstein',
'- Bernard M. Baruch',
'- William W. Purkey',
'- Dr. Seuss',
'- Mae West',
'- Mahatma Gandhi',
'- Martin Luther King Jr.',
'- J.R.R. Tolkien',
'- Andre Gide',
'- Thomas A. Edison',
'- Elbert Hubbard',
'- Oscar Wilde',
'- Oscar Wilde',
'- Mahatma Gandhi',
'- Martin Luther King Jr.',
'- Oscar Wilde',
'- Friedrich Nietzsche',
'- Stephen Chbosky',
'- Napoleon Hill',
'- J.K. Rowling',
'- J.K. Rowling',
'- Albert Einstein',
'- Jane Austen',
'- Marilyn Monroe',
'- Albert Einstein',
'- Maurice Switzer',
'- William Shakespeare',
'- Jane Austen',
'- Jorge Luis Borges',
'- Isaac Asimov',
'- Marcus Tullius Cicero',
'- Mark Twain',
'- Allen Saunders',
'- Pablo Neruda',
'- Ralph Waldo Emerson',
'- J.K. Rowling',
'- Albert Camus',
'- Eleanor Roosevelt',
'- C.S. Lewis',
'- Mark Twain',
'- Maya Angelou',
'- William Shakespeare',
'- Patrick Ness',
'- John Green',
'- George Eliot',
'- J.K. Rowling',
'- Theodore Roosevelt',
'- Abraham Lincoln',
]
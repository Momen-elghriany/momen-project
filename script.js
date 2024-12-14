var advice =[
    {content:'Be kind to yourself: Practice self-compassion. Acknowledge your strengths and weaknesses. Treat yourself with the same kindness and understanding you would offer a friend.' , author:' Oscar Wilde'},
    {content:'Focus on gratitude: Take time each day to appreciate the good things in your life. This can help shift your perspective and cultivate a more positive outlook.' , author:' Frank Zappa'},
    {content:'You only live once, but if you do it right, once is enough.' , author:' Mae West'},
    {content:'Learn and grow: Continuously seek knowledge and new experiences. Step outside your comfort zone and embrace challenges.' , author:' Mahatma Gandhi'},
    {content:'Prioritize your well-being: Make time for activities that nourish your mind, body, and soul. This could include exercise, healthy eating, spending time in nature, or pursuing hobbies.' , author:' Elbert Hubbard'},
    {content:'Build strong relationships: Nurture your connections with loved ones and cultivate meaningful friendships.' , author:' Oscar Wilde'},
    {content:'Set realistic goals: Break down large goals into smaller, more manageable steps. Celebrate your accomplishments along the way.' , author:' Friedrich Nietzsche, Twilight of the Idols'},
    {content:'Embrace imperfection: Nobody is perfect. Learn from your mistakes and move forward.' , author:' Andre Gide, Autumn Leaves'},
    {content:'Find your passion: Explore your interests and discover what truly excites you.' , author:' Ernest Hemingway'},
    {content:'Never give up: Challenges are inevitable. Believe in yourself and persevere through difficult times.' , author:'Heraclitus '},
    ]
    function getRandomAdvice() {
        var randomIndex = Math.floor(Math.random() * advice.length);
        var randomAdvice = advice[randomIndex]; 
    
        console.log(randomAdvice);
    
        document.getElementById('demo').innerHTML = randomAdvice.content;
        document.getElementById('demo2').innerHTML = randomAdvice.author;
    }
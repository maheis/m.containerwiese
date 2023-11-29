const { processenv } = require('processenv')
const { randomInt } = require('crypto')
const express = require('express');

const app = express();
const port = processenv('PORT', 3333)

app.get('/', (req, res) => {
    switch (randomInt(1, 13)) {
        case 1:
            var message = "So long, and thanks for all the fish."
            break
        case 2:
            var message = "Time is an illusion. Lunchtime doubly so."
            break
        case 3:
            var message = "Don\'t Panic!"
            break
        case 4:
            var message = "I\'d far rather be happy than right any day."
            break
        case 5:
            var message = "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move."
            break
        case 6:
            var message = "The ships hung in the sky in much the same way that bricks don't."
            break
        case 7:
            var message = "The Answer to the Ultimate Question of Life, The Universe, and Everything is 42."
            break
        case 8:
            var message = "Curiously enough, the only thing that went through the mind of the bowl of petunias as it fell was Oh no, not again. Many people have speculated that if we knew exactly why the bowl of petunias had thought that we would know a lot more about the nature of the Universe than we do now."
            break
        case 9:
            var message = "A towel, it says, is about the most massively useful thing an interstellar hitch hiker can have."
            break
        case 10:
            var message = "What the strag will think is that any man that can hitch the length and breadth of the Galaxy, rough it, slum it, struggle against terrible odds, win through and still know where his towel is, is clearly a man to be reckoned with."
            break
        case 11:
            var message = "The first ten million years were the worst. And the second ten million: they were the worst, too. The third ten million I didn't enjoy at all. After that, I went into a bit of a decline."
            break
        case 12:
            var message = "Here I am, brain the size of a planet, and they ask me ..."
            break
        case 13:
            var message = "Ahhh! Woooh! What's happening? Who am I? Why am I here? What's my purpose in life? What do I mean by who am I? Okay okay, calm down calm down get a grip now. Ooh, this is an interesting sensation. What is it? Its a sort of tingling in my... well I suppose I better start finding names for things. Lets call it a... tail! Yeah! Tail! And hey, what's this roaring sound, whooshing past what I'm suddenly gonna call my head? Wind! Is that a good name? It'll do. Yeah, this is really exciting. I'm dizzy with anticipation! Or is it the wind? There's an awful lot of that now isn't it? And what's this thing coming toward me very fast? So big and flat and round, it needs a big wide sounding name like 'Ow', 'Ownge', 'Round', 'Ground'! That's it! Ground! Ha! I wonder if it'll be friends with me? Hello, Ground!"
            break
    }

    res.send(message + "\r\n")
})

// Readiness probe
app.get('/readyz', (req, res) => {
    res.send('OK');
});

// Liveness probe
app.get('/healthz', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
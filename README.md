# Password Game TAS
This is a UserScript that tries to solve [The Password Game](https://neal.fun/password-game/), usually succeeding in just a few seconds.

It's not always successful; the things that can impede its progress include:
- rolling a YouTube video with too many elements in its URL
- Paul not eating a bug when he's supposed to (his timer is started when the page loads)
- the hex color not registering immediately (it might still finish, just slowly)
- a too high digit sum (the bot tries to roll a good CAPTCHA and colour for this, but it doesn't always succeed)
- getting too many non-filler characters (it always fills to 151); in practice this is very rare

It does not cheat by poking into the game's code; however, it does use several tables from it.
All information is obtained via reading the HTML. Only the content of the input fields and the controls are modified directly
(this behaves like pasting from the clipboard), and the necessary buttons are activated

To ensure consistency, the JavaScript Date object is spoofed so that the game always uses the same date and time.
(This is equivalent to setting the time in your system settings)

## Controls
Press the "Start" button to reload the page and start the bot and timer.
You can press Shift to start without reloading, but that can desync Paul's timer.
Explanations for what the bot is currently doing are displayed in the bottom-right corner.

## Compiling
To compile this project, you'll need Node and Deno.
1. Run `npm install` to install the library used for character-counting.
2. Run `deno run -A ./compiler/build.ts`.
3. Install `password-game-tas.user.js` into your favourite UserScript extension.
4. You should now see the controls when you (re)load The Password Game.

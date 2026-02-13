function handlePlayClick() {
    clickCount++;

    const picked = pickMessage();
    if (!picked) return;

    showResultButtons();

    scrambleReveal(
        picked.text,
        scrambleDuration,
        revealDuration,
        t => display.textContent = t
    );
}
startBtn.addEventListener("click", handlePlayClick);

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "It's nice to have you back, shall we get going ~ M4ch1n3?",
        "Hello, We got a new task for you ~ J0k3rMag1c14n.",
        "It's been a while ~ Ph03n3ix, a new objective has given to you.",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    showResultTextIntro(randomMessage);
});
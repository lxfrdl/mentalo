class Mentalo {
    constructor() {
        this.inProgress = false;
        this.mentaloImg = document.getElementById('mentalo-img');
        this.resultText = document.getElementById('result-text');
        this.mentaloImg.addEventListener('click', () => this.onClick());
        this.updateImage();
    }

    onClick() {
        if (this.inProgress) {
            return;
        }
        this.inProgress = true;
        this.updateImage();
        this.resultText.textContent = ''; // Clear the result text
        this.resultText.classList.remove('show'); // Hide the result text
        this.playRandomAnfang()
            .then(() => this.playRandomEnde())
            .then(() => {
                this.inProgress = false;
                this.updateImage();
            });
    }

    playRandomByPrefix(prefix, min, max) {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.preload = 'auto';
            audio.autoplay = true;
            audio.onerror = reject;
            audio.onended = resolve;
            audio.src = `audio/${prefix}${this.randomInRange(min, max)}.mp3`;
            if (prefix === 'ende') {
                audio.onplay = () => {
                    this.resultText.textContent = audio.src.includes('ende1') ? 'NEIN' : 'JA';
                    this.resultText.classList.add('show'); // Show the result text
                };
            }
        });
    }

    playRandomAnfang() {
        return this.playRandomByPrefix('anfg', 1, 3);
    }

    playRandomEnde() {
        return this.playRandomByPrefix('ende', 1, 2);
    }

    randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    updateImage() {
        this.mentaloImg.src = this.inProgress ? 'images/m2.png' : 'images/m1.png';
        if (this.inProgress) {
            this.mentaloImg.classList.add('in-progress');
        } else {
            this.mentaloImg.classList.remove('in-progress');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Mentalo();
});
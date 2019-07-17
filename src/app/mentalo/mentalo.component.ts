import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentalo',
  templateUrl: './mentalo.component.html',
  styleUrls: [ './mentalo.component.scss' ]
})
export class MentaloComponent implements OnInit {
  inProgress = false;
  constructor() {}

  ngOnInit() {}

  onClick() {
    if (this.inProgress) {
      return;
    }
    this.inProgress = true;
    this.playRandomAnfang()
      .then((_) => {
        return this.playRandomEnde();
      })
      .then((_) => {
        this.inProgress = false;
      });
  }

  randomInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  playRandomAnfang() {
    return this.playRandomByPrefix('anfg', 1, 3);
  }

  playRandomEnde() {
    return this.playRandomByPrefix('ende', 1, 2);
  }

  playRandomByPrefix(prefix: string, min: number, max: number) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.autoplay = true;
      audio.onerror = reject;
      audio.onended = resolve;
      audio.src = `assets/audio/${prefix}${this.randomInRange(min, max)}.mp3`;
    });
  }
}

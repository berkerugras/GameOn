import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameDataService } from '../../core/game-data.service';

type SportFilter = 'all' | 'football' | 'basketball' | 'tennis' | 'volleyball';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {
  readonly data = inject(GameDataService);
  readonly challenged = signal(false);
  readonly selectedSport = signal<SportFilter>('all');

  readonly sportOptions = [
    { key: 'all', label: 'Tümü' },
    { key: 'football', label: '⚽ Futbol' },
    { key: 'basketball', label: '🏀 Basketbol' },
    { key: 'tennis', label: '🎾 Tenis' },
    { key: 'volleyball', label: '🏐 Voleybol' }
  ] as const;

  readonly visibleMatches = computed(() => {
    const selected = this.selectedSport();
    const matches = this.data.matches();

    if (selected === 'all') {
      return matches;
    }

    return matches.filter((match) => match.sport === selected);
  });
}

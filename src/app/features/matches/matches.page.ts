import { Component, inject, signal } from '@angular/core';import { GameDataService } from '../../core/game-data.service';
@Component({standalone:true,templateUrl:'./matches.page.html',styleUrl:'./matches.page.scss'}) export class MatchesPage{data=inject(GameDataService);tab=signal<'upcoming'|'past'>('upcoming')}

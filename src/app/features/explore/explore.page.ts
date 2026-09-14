import { Component, inject, signal } from '@angular/core';import { RouterLink } from '@angular/router';import { GameDataService } from '../../core/game-data.service';
@Component({standalone:true,imports:[RouterLink],templateUrl:'./explore.page.html',styleUrl:'./explore.page.scss'}) export class ExplorePage{data=inject(GameDataService);filter=signal<'teams'|'venues'>('teams')}

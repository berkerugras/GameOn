import { Injectable, signal } from '@angular/core';
export interface Team{id:number;name:string;initials:string;sport:'football'|'basketball'|'volleyball';rating:number;reliability:number;distance:string;color:string;players:string[];wins:number;draws:number;losses:number}
export interface Match{id:number;home:string;away:string;date:string;time:string;venue:string;format:string;sport:'football'|'basketball'|'volleyball';status:'open'|'confirmed'|'completed';score?:string;spots?:number}
export interface Coach{id:number;name:string;initials:string;title:string;gym:string;district:string;rating:number;reviews:number;price:number;distance:string;verified:boolean;color:string;specialties:string[];languages:string[];bio:string;slots:string[]}
export interface Booking{id:number;coach:string;service:string;gym:string;date:string;time:string;price:number;status:'confirmed'|'completed'}
@Injectable({providedIn:'root'}) export class GameDataService{
 readonly teams=signal<Team[]>([
  {id:1,name:'Kadıköy United',initials:'KU',sport:'football',rating:4.8,reliability:94,distance:'Takımın',color:'#c7f43d',players:['Burak','Mert','Emir','Can','Arda','Oğuz','Efe'],wins:14,draws:4,losses:5},
  {id:2,name:'Moda FC',initials:'MF',sport:'football',rating:4.7,reliability:96,distance:'2,8 km',color:'#9dd8ff',players:['Deniz','Berk','Umut','Kaan','Ali','Yiğit'],wins:11,draws:2,losses:4},
  {id:3,name:'Boğaziçi Ballers',initials:'BB',sport:'basketball',rating:4.6,reliability:91,distance:'6,2 km',color:'#ffb86b',players:['Kerem','Ege','Baran','Samet','Ozan'],wins:18,draws:0,losses:7}
 ]);
 readonly matches=signal<Match[]>([
  {id:1,home:'Kadıköy United',away:'Rakip aranıyor',date:'PAZ, 20 EYL',time:'18:30',venue:'Caddebostan Spor Parkı',format:'7v7 · Orta seviye',sport:'football',status:'open',spots:2},
  {id:2,home:'Boğaziçi Ballers',away:'Moda Hoopers',date:'CMT, 19 EYL',time:'20:00',venue:'Kalamış Basketbol Sahası',format:'5v5 · İleri',sport:'basketball',status:'confirmed'},
  {id:3,home:'Kadıköy United',away:'Moda FC',date:'12 EYL',time:'19:00',venue:'Fenerbahçe Parkı',format:'7v7',sport:'football',status:'completed',score:'5 – 3'}
 ]);
 readonly coaches=signal<Coach[]>([
  {id:1,name:'Derya Akın',initials:'DA',title:'Strength & Conditioning Coach',gym:'MAC/One Akasya',district:'Üsküdar',rating:4.9,reviews:86,price:1250,distance:'3,1 km',verified:true,color:'#e6c6ff',specialties:['Kuvvet','Yağ yakımı','Mobilite'],languages:['Türkçe','English'],bio:'Hedeflerine uygun, ölçülebilir ve sürdürülebilir programlarla çalışıyorum. NASM-CPT ve 7 yıllık deneyim.',slots:['18:00','19:30','21:00']},
  {id:2,name:'Emre Yalçın',initials:'EY',title:'Football Performance Coach',gym:'Athletic House Kadıköy',district:'Kadıköy',rating:4.8,reviews:54,price:900,distance:'1,4 km',verified:true,color:'#bde7d0',specialties:['Futbol performans','Kondisyon','Çeviklik'],languages:['Türkçe'],bio:'Amatör ve yarı profesyonel futbolcular için performans, sürat ve sakatlık önleme çalışmaları.',slots:['17:00','18:00','20:00']},
  {id:3,name:'Selin Kaya',initials:'SK',title:'Pilates & Mobility Trainer',gym:'Mys Studio Moda',district:'Kadıköy',rating:4.7,reviews:39,price:1100,distance:'2,0 km',verified:true,color:'#ffd6b0',specialties:['Pilates','Postür','Mobilite'],languages:['Türkçe','English'],bio:'Bire bir pilates ve mobilite seanslarıyla ağrısız ve güçlü hareket etmene yardımcı oluyorum.',slots:['10:00','14:00','16:30']}
 ]);
 readonly bookings=signal<Booking[]>([{id:1,coach:'Derya Akın',service:'Bire bir antrenman',gym:'MAC/One Akasya',date:'16 Eylül, Çarşamba',time:'19:30',price:1250,status:'confirmed'}]);
 addMatch(match:Match){this.matches.update(items=>[match,...items])}
 addBooking(booking:Booking){this.bookings.update(items=>[booking,...items])}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fantas-list',
  templateUrl: './fantas-list.component.html',
  styleUrls: ['./fantas-list.component.css'],
})
export class FantasListComponent {
  @Input() icons = [];
  @Input() formInputs: any = {
    trophy: 'all',
    country: 'all',
    position: 'all',
    sort: 'fantascore',
  };

  constructor() {}

  getTrophies(icon: any) {
    let count = 0;

    switch (this.formInputs.sort) {
      case 'ballonDor':
        count += icon.ballonDor.winner.length;
        break;
      case 'nominations':
        count += icon.ballonDor.nominations.length;
        break;
      case 'goldenShoe':
        count += icon.goldenShoe.length;
        break;
      case 'championsLeagueTopScorer':
        count += icon.championsLeagueTopScorer.length;
        break;
      case 'leagueTitles':
        icon.clubTeams.forEach((club: any) => {
          count += club.leagueTitles.length;
        });
        break;
      case 'championsLeague':
        icon.clubTeams.forEach((club: any) => {
          count += club.championsLeague.length;
        });
        break;
      case 'worldCup':
        count += icon.nationalTeam.worldCup.length;
        break;
      case 'nationalGoals':
        count += icon.nationalTeam.goalsScored;
        break;
      case 'nationalGames':
        count += icon.nationalTeam.gamesPlayed;
        break;
      case 'continentalCup':
        count += icon.nationalTeam.continentalCup.length;
        break;
      case 'careerGoals':
        count += icon.careerGoals;
        break;
      case 'careerGames':
        count += icon.careerGames;
        break;
      case 'retired':
        count += icon.retired;
        break;
      case 'worldCupGoals':
        count += icon.worldCupGoals;
        break;
      case 'careerLength':
        count += icon.careerLength;
        break;
      default:
        count = 0;
    }

    return count;
  }

  getCountries(icon: any) {
    let str = '';
    for (let i = 0; i < icon.country.length - 1; i++)
      str += `${icon.country[i]}, `;
    str += icon.country[icon.country.length - 1];

    return str;
  }

  getTeams(icon: any) {
    let newTeams = [...icon.clubTeams];
    // console.log(newTeams);
    newTeams.sort((t1, t2) => {
      if (t1.gamesPlayed - t2.gamesPlayed < 0) return 1;
      return -1;
    });

    newTeams = newTeams.splice(0, 3);

    let str = '';
    for (let i = 0; i < newTeams.length - 1; i++)
      str += `${newTeams[i].name}, `;
    str += newTeams[newTeams.length - 1].name;

    return str;
  }

  getPosition(icon: any) {
    if (this.formInputs.position === 'all') {
      return (
        icon.positions[0].charAt(0).toUpperCase() + icon.positions[0].slice(1)
      );
    } else {
      return (
        this.formInputs.position[0].charAt(0).toUpperCase() +
        this.formInputs.position[0].slice(1)
      );
    }
  }

  getRandom(images: string[]) {
    return images[Math.floor(Math.random() * images.length)];
  }
}

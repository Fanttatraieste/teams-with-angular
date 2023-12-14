import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-icons',
  templateUrl: './latest-icons.component.html',
  styleUrls: ['./latest-icons.component.css']
})

export class LatestIconsComponent {
  @Input() iconList!: any;
 
  constructor() {

  }

  getIcons() {
    return this.iconList;
  }

  getTrophies(icon: any) {
    let count = 0;

    count += icon.nationalTeam.worldCup.length;
    count += icon.nationalTeam.continentalCup.length;

    icon.clubTeams.forEach((team: any) => {
      count += team.leagueTitles.length;
      count += team.cupTitles.length;
      count += team.supercupTitles.length;
      count += team.championsLeague.length;
      count += team.uefaCup.length;
      count += team.uefaCupWinnersCup.length;
      count += team.uefaSuperCup.length;
    });

    return count;
  }

  getCountries(icon: any) {
    const countryList:any[] = [];

    icon.clubTeams.forEach((club: any) => {
      if (!countryList.includes(club.country)) countryList.push(club.country);
    });

    // console.log(countryList);

    countryList.sort((country1, country2) => {
      let games1 = 0;
      let games2 = 0;

      icon.clubTeams.forEach((club:any) => {
        if (club.country === country1) games1 += club.gamesPlayed;
        else if (club.country === country2) games2 += club.gamesPlayed;
      });

      return games2 - games1;
    });

    // console.log(countryList);

    return countryList.filter((country, index) => index <= 2).join(', ');
  }

    getClass(position: string) {
        let cssClass = {
          div: '',
          p: ''
        };

        switch(position) {
          case 'striker':
            cssClass.div = 'redPosition'
            cssClass.p = 'redPositionText'
            break;
          case 'winger':
            cssClass.div = 'redPosition'
            cssClass.p = 'redPositionText'
            break;
          case 'forward':
            cssClass.div = 'redPosition'
            cssClass.p = 'redPositionText'
            break;
          case 'midfielder':
            cssClass.div = 'greenPosition'
            cssClass.p = 'greenPositionText'
            break;
          case 'defender':
            cssClass.div = 'bluePosition'
            cssClass.p = 'bluePositionText'
            break;
          case 'fullback':
            cssClass.div = 'bluePosition'
            cssClass.p = 'bluePositionText'
            break;
          default :
            cssClass.div = 'yellowPosition'
            cssClass.p = 'yellowPositionText'
            break;
        }

        return cssClass;
    }

    getClassText(position: string) {

    }
}

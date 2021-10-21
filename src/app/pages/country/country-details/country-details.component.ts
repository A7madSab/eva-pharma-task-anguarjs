import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CityDAOService } from 'src/app/core/api/city-dao.service';
import { CountryDAOService } from 'src/app/core/api/country-dao.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  countryID: string = '';
  countryData: any;
  cityData: any;
  constructor(
    private route: ActivatedRoute,
    private countryDao: CountryDAOService,
    private cityDao: CityDAOService
  ) {}

  ngOnInit(): void {
    this.countryID = this.route.snapshot.params['id'];
    this.countryDao.getOne(this.countryID).subscribe((res) => {
      this.countryData = res;
    });
    this.getCityOfCities();
  }
  getCityOfCities() {
    this.cityDao.getCityOfCountries(this.countryID).subscribe((res) => {
      this.cityData = res;
      console.log(this.cityData);
    });
  }
  addCity(cityName: string, countryId: string) {
    this.cityDao
      .post({ Name: cityName, CountryId: +countryId })
      .subscribe(() => {
        this.getCityOfCities();
      });
  }
  deleteCity(cityID: string) {
    this.cityDao.delete(cityID).subscribe(() => {
      this.getCityOfCities();
    });
  }
  editCity(cityId: string, cityName: string, countryID: string) {
    this.cityDao
      .update({ Id: cityId, Name: cityName, countryId: +countryID })
      .subscribe(() => {
        this.getCityOfCities();
      });
  }
}

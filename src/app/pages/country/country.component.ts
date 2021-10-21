import { Component, OnInit } from '@angular/core';

import { CountryDAOService } from './../../core/api/country-dao.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: any;
  constructor(private CountryDAOService: CountryDAOService) {}

  ngOnInit(): void {
    this.CountryDAOService.get()
      .pipe(
        map((c: any) => {
          return c.map((cc: any) => ({
            name: cc.name,
            id: cc.id,
            edit: true,
          }));
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        this.countries = res;
      });
  }
  addCountry(data: any) {
    this.CountryDAOService.post({ name: data }).subscribe((res) => {
      this.CountryDAOService.get().subscribe((res: any) => {
        this.countries = res.map((country: any) => ({
          ...country,
          edit: true,
        }));
      });
    });
  }
  setEditCountry(countryID: string) {
    this.countries = this.countries.map((country: any) => {
      if (country.id === countryID) {
        return { ...country, edit: !country.edit };
      } else {
        return country;
      }
    });
  }
  deleteCountry(countryID: string) {
    this.CountryDAOService.delete(countryID).subscribe((res) => {
      this.CountryDAOService.get().subscribe((res: any) => {
        this.countries = res.map((country: any) => ({
          ...country,
          edit: true,
        }));
      });
    });
  }
  editCountry(countryId: string, countryName: string) {
    this.CountryDAOService.update({
      id: countryId,
      Name: countryName,
    }).subscribe((res) => {
      this.CountryDAOService.get().subscribe((res: any) => {
        this.countries = res.map((country: any) => ({
          ...country,
          edit: true,
        }));
      });
    });
  }
}

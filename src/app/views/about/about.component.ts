import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenusServices } from 'src/app/services/header.service';
import { IMembers } from 'src/app/utils/menus.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  members:IMembers[];
  currentIndex:number = 0;
  currentSlider:IMembers;
  prevSlider:IMembers;
  nextSlider:IMembers;

  position : boolean [] = [false];

  constructor(private memberSrvc : MenusServices){}
  ngOnInit(): void {
    this.memberSrvc.getMembers().subscribe(res => {
      this.members = res;
      if(this.members) {
        this.currentSlider = this.members[this.currentIndex];
        this.getOtherSlider(this.currentIndex);
      }
    });
  }

  getOtherSlider = (index:number) => {
    this.prevSlider = index === 0 ? this.members[this.members.length - 1] : this.members[index - 1];
    this.nextSlider = index === this.members.length - 1 ? this.members[0] : this.members[index + 1];
  }
  goToNext = () => {
    const lastSlide = this.currentIndex === this.members.length - 1;
    const newItem = lastSlide ? 0 : this.currentIndex + 1;
    this.currentSlider =this.members[newItem];
    this.currentIndex = newItem;
    this.getOtherSlider(this.currentIndex);
  }
  goToPrev = () => {
    const firstSlide = this.currentIndex === 0;
    const newItem = firstSlide ? this.members.length - 1 : this.currentIndex - 1;
    this.currentSlider =this.members[newItem];
    this.currentIndex = newItem;
    this.getOtherSlider(this.currentIndex);
  }
}
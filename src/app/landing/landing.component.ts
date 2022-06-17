/**
 * The landing page
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openResume = () => {
    window.open('../../assets/resume/Hannah_Lily_Watsky_Resume.pdf')
  }

}

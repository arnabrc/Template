import {AppService} from '../services/app.service';
import {AuthService} from '../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  detail: [any];
  element: [any];
  select: [any];
  name: any;
  email: any;
  image: any;
  isActive: boolean;
  len: number;

  @ViewChild('tref') PanelRef: ElementRef;
  // @ViewChildren('tref') PanelRef: ElementRef;

  @Input() act: boolean;
  @Input() checked: boolean;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router,
              public appService: AppService, private fb: FormBuilder) {
        this.appService.getJSON().subscribe(data => {
        console.log('data1');
        console.log(data);
        console.log('data2');
        this.detail = data;
      }, (err) => {
      console.log('Error Occured');
    });
  }

  ngOnInit() {
  }

  toggleAccordian(event, index) {
    const element = event.target;
    element.classList.toggle('active');
    if (this.detail[index].isActive) {
      this.detail[index].isActive = false;
    } else {
      this.detail[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}


  toggleAccordianAll(event) {
    // this.element = document.querySelectorAll('.friend-list');
    this.element = this.PanelRef.nativeElement.querySelectorAll('.friend-list');
    /*console.log(this.checked);
    this.select = this.PanelRef.nativeElement.querySelectorAll('.check');
    /console.log(this.select);*/
    if (!this.act) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.detail.length; i++) {
        // if (this.select[i].checked) {
          console.log('add 1');
          this.element[i].classList.add('active');
          const panel = this.element[i].nextElementSibling;
          if (panel.style.maxHeight) {
            // document.querySelector('.open').innerHTML = 'Expand All';
            this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Expand All';
            panel.style.maxHeight = null;
          } else {
            // document.querySelector('.open').innerHTML = 'Close All';
            this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Close All';
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
          /*this.checked = false;
        } else {
            this.element[i].classList.remove('active');
            const panel = this.element[i].nextElementSibling;
            if (panel.style.maxHeight) {
              // document.querySelector('.open').innerHTML = 'Expand All';
              this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Expand All';
              panel.style.maxHeight = null;
            } else {
              // document.querySelector('.open').innerHTML = 'Close All';
              this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Close All';
              panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }*/
      }
      this.act = true;
    } else {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.detail.length; i++) {
          // if (!this.select[i].checked) {
            console.log('add 3');
            this.element[i].classList.remove('active');
            const panel = this.element[i].nextElementSibling;
            if (panel.style.maxHeight) {
              // document.querySelector('.open').innerHTML = 'Expand All';
              this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Expand All';
              panel.style.maxHeight = null;
            } else {
              // document.querySelector('.open').innerHTML = 'Close All';
              this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Close All';
              panel.style.maxHeight = panel.scrollHeight + 'px';
            }
          /*} else {
              console.log('add 4');
              this.element[i].classList.remove('active');
              const panel = this.element[i].nextElementSibling;
              if (panel.style.maxHeight) {
                // document.querySelector('.open').innerHTML = 'Expand All';
                this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Expand All';
                panel.style.maxHeight = null;
              } else {
                // document.querySelector('.open').innerHTML = 'Close All';
                this.PanelRef.nativeElement.querySelector('.open').innerHTML = 'Close All';
                panel.style.maxHeight = panel.scrollHeight + 'px';
              }
            }*/
        }
    }
  }

  changeImage(nm, em, im) {
    this.name = nm;
    this.email = em;
    this.image = im;

    sessionStorage.setItem('editName', this.name);
    sessionStorage.setItem('editEmail', this.email);
    sessionStorage.setItem('editImage', this.image);

    this.router.navigate(['/edit']);
  }

}

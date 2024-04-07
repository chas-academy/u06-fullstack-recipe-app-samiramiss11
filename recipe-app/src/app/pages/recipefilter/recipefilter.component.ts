import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipefilter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './recipefilter.component.html',
  styleUrl: './recipefilter.component.css'
})
export class RecipefilterComponent implements OnInit {
  isOpen: boolean = false;
  areAllChecked: boolean = false;
  options = [
    { label: 'Selection One', value: 'Selection 1', checked: false },
    { label: 'Selection Two', value: 'Selection 2', checked: false },
    { label: 'Selection Three', value: 'Selection 3', checked: false },
    { label: 'Selection Four', value: 'Selection 4', checked: false },
    { label: 'Selection Five', value: 'Selection 5', checked: false }
  ];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initializeListeners();
  }

  initializeListeners() {
    const dropdownLabel = this.elementRef.nativeElement.querySelector('.dropdown-label');
    const checkAllButton = this.elementRef.nativeElement.querySelector('[data-toggle="check-all"]');
    const inputs = this.elementRef.nativeElement.querySelectorAll('[type="checkbox"]');

    dropdownLabel.addEventListener('click', () => this.toggleOpen());
    checkAllButton.addEventListener('click', () => this.onCheckAll());
    inputs.forEach((input: { addEventListener: (arg0: string, arg1: () => void) => any; }) => input.addEventListener('change', () => this.onCheckBox()));
  }

  onCheckBox() {
    // Handle checkbox change logic here
    this.updateStatus();
  }

  updateStatus() {
    // Update checkbox status logic here,create a form has input
    // You can manipulate this.options array to update the UI
  }

  onCheckAll() {
    // Handle "Check All" logic here
    this.areAllChecked = !this.areAllChecked;
    this.options.forEach(option => option.checked = this.areAllChecked);
    this.updateStatus();
  }

  toggleOpen() {
    // Toggle dropdown open/close logic here
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'on');
      document.addEventListener('click', this.documentClickListener);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'on');
      document.removeEventListener('click', this.documentClickListener);
    }
  }

  documentClickListener = (event: MouseEvent) => {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleOpen();
    }
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeTab: string = 'home';

  showScrollTop = false;

  searchQuery = '';
  results: any[] = [];
  selectedCompany: any = null;
  activeDetailTab: string = 'overview';

  isLoading = false;
  isDark = false;

  selectedImage: string | null = null;
  showSettings = false;

  username = 'User';
  isSearching = false;

  toggleMenu() {
    this.showSettings = !this.showSettings;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  setTab(tab: string) {
    this.activeTab = tab;
    this.selectedCompany = null;
  }

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.results = [];
      return;
    }

    this.isLoading = true;
    this.results = [];

    setTimeout(() => {
      this.results = this.mockData();
      this.isLoading = false;
    }, 800);
  }

  mockData() {
    return [
      {
        name: 'Hygan Technologies',
        rating: 4.9,
        address: 'Bhavani, Tamil Nadu',
        phone: '+91 9876543210',
        email: 'info@hygan.com',
        image: 'assets/hygan_1.jpg',
        description: 'Modern app development company.',
        gallery: ['assets/hygan_1.jpg', 'assets/hygan_2.jpg'],
        projects: [
          {
            name: 'E-Commerce App',
            description: 'Online shopping solution',
          },
        ],
      },
      {
        name: 'SP Info Tech',
        rating: 4.2,
        address: 'Komarapalayam, Tamil Nadu',
        phone: '+91 9123456780',
        email: 'contact@spinfotech.com',
        image: 'assets/image1.jpg',
        description: 'AI solutions company.',
        gallery: ['assets/image1.jpg'],
        projects: [
          {
            name: 'CRM System',
            description: 'Customer management platform',
          },
        ],
      },
    ];
  }

  open(item: any) {
    this.selectedCompany = item;
  }

  back() {
    this.selectedCompany = null;
    this.activeDetailTab = 'overview';
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

  onScroll(event: any) {
    this.showScrollTop = event.target.scrollTop > 200;
  }

  scrollToTop(el: any) {
    el.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

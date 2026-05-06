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
        description:
          'At Hygan Technologies, we craft cutting-edge web and mobile applications tailored to your business needs. Empowering students with internships, project guidance, and placement support—because innovation starts with the right foundation.',
        gallery: [
          'assets/hygan_1.jpg',
          'assets/hygan_2.jpg',
          'assets/hygan_3.jpg',
          'assets/hygan_4.jpg',
        ],
        projects: [
          {
            name: 'App Development',
            description:
              'From concept to launch, we build scalable and user-friendly applications that drive growth. Whether it’s a sleek website or a powerful mobile app, we turn your vision into reality.',
          },
          {
            name: 'Student Internships',
            description:
              'Gain hands-on experience in software development. Our internship program is designed to bridge the gap between academia and industry, preparing you for a successful career.',
          },
          {
            name: 'Final Year Projects',
            description:
              'Struggling with your final year project? Our experts provide end-to-end support—from ideation to execution—ensuring your project stands out.',
          },
          {
            name: 'Placement Assistance',
            description:
              'We don’t just guide you; we help you land your dream job. Our placement support includes resume building, interview preparation, and conducting mock interviews to help you crack the interviews and connecting with top companies for placements.',
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
        description:
          'Our teams are working to solve complex challenges, advance the field of AI and help as many people as possible.',
        gallery: ['assets/image1.jpg'],
        projects: [
          {
            name: 'Smart CRM Platform',
            description:
              'Manage customers, leads, and sales pipeline with automation tools.',
          },
          {
            name: 'E-Commerce Suite',
            description:
              'Complete online store solution with payments, analytics, and inventory.',
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

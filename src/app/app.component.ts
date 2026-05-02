import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ZettaCON';
  searchQuery = '';
  results: any[] = [];
  selectedCompany: any = null;

  isDarkMode = false;

  year = new Date().getFullYear();

  activeTab: string = 'overview';

  selectedImage: string | null = null;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.results = [];
      return;
    }

    this.results = [
      {
        name: 'Hygan Technologies',
        rating: 4.9,
        verified: true,
        address: 'Bhavani, Tamil Nadu',
        services: ['Web Dev', 'Mobile Apps', 'UI/UX'],
        description:
          'At Hygan Technologies, we craft cutting-edge web and mobile applications tailored to your business needs. Empowering students with internships, project guidance, and placement support—because innovation starts with the right foundation.',
        products: [
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
        images: [
          'assets/hygan_1.jpg',
          'assets/hygan_2.jpg',
          'assets/hygan_3.jpg',
          'assets/hygan_4.jpg',
        ],
        logo: 'assets/hygan-logo.png',
        phone: '919876543210',
        email: 'info@tech.com',
      },
      {
        name: 'SP Info Tech.',
        rating: 4.2,
        verified: false,
        address: 'Komarapalayam, Tamil Nadu',
        services: ['Solutions', 'Data Analytics'],
        description:
          'Our teams are working to solve complex challenges, advance the field of AI and help as many people as possible.',
        products: [
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
        images: ['assets/image1.jpg'],
        phone: '919123456780',
        email: 'contact@buildsoft.com',
        logo: 'assets/image1.jpg',
      },
    ].sort((a, b) => b.rating - a.rating);
  }

  openDetails(item: any) {
    this.selectedCompany = item;
  }

  backToList() {
    this.selectedCompany = null;
    this.activeTab = 'overview';
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}

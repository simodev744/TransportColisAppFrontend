import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AdminService } from '../../../core/admin/admin-service';
import { CommonModule } from '@angular/common';
import {AdminNav} from '../admin-nav/admin-nav';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule, AdminNav, RouterOutlet],
  template: `
    <app-admin-nav></app-admin-nav>
    <div><router-outlet></router-outlet></div>
    <div class="dashboard-container">
      <h1 class="dashboard-title">Admin Dashboard</h1>

      <div *ngIf="loading" class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading statistics...</p>
      </div>

      <div *ngIf="!loading && stats" class="dashboard-content">
        <!-- Stats Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3f51b5">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Total Users</h3>
              <p>{{ stats.totalUtilisateurs }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4db6ac">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z"/>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Total Ads</h3>
              <p>{{ stats.totalAnnonces }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffc107">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Acceptance Rate</h3>
              <p>{{ stats.tauxAcceptation }}%</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e91e63">
                <path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
              </svg>
            </div>
            <div class="stat-info">
              <h3>Active Users</h3>
              <p>{{ stats.utilisateursActifs }}</p>
            </div>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="charts-container">
          <div class="chart-card">
            <canvas id="barChart"></canvas>
          </div>
          <div class="chart-card">
            <canvas id="pieChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .dashboard-title {
      color: #3f51b5;
      margin-bottom: 2rem;
      font-weight: 600;
      font-size: 1.8rem;
    }

    .loading-spinner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 300px;
      gap: 1rem;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3f51b5;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(63, 81, 181, 0.1);
      border-radius: 50%;
    }

    .stat-icon svg {
      width: 24px;
      height: 24px;
    }

    .stat-info h3 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
      font-weight: 500;
      color: #666;
    }

    .stat-info p {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
      color: #333;
    }

    .charts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .chart-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    @media (max-width: 768px) {
      .charts-container {
        grid-template-columns: 1fr;
      }

      .stat-card {
        padding: 1rem;
      }

      .stat-info p {
        font-size: 1.25rem;
      }
    }
  `]
})
export class DashboardAdmin implements OnInit, OnDestroy {
  private adminService = inject(AdminService);
  stats: any = null;
  loading = true;
  private chart1: Chart | null = null;
  private chart2: Chart | null = null;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.adminService.getStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        setTimeout(() => this.initCharts(), 0); // Ensure DOM is ready
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load statistics:', err);
        this.loading = false;
      }
    });
  }

  initCharts(): void {
    // Destroy existing charts if they exist
    if (this.chart1) this.chart1.destroy();
    if (this.chart2) this.chart2.destroy();

    // Bar Chart
    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    if (barCtx) {
      this.chart1 = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Total Users', 'Total Ads', 'Acceptance Rate', 'Active Users'],
          datasets: [{
            label: 'Statistics',
            data: [
              this.stats.totalUtilisateurs,
              this.stats.totalAnnonces,
              this.stats.tauxAcceptation,
              this.stats.utilisateursActifs
            ],
            backgroundColor: [
              'rgba(63, 81, 181, 0.7)',
              'rgba(77, 182, 172, 0.7)',
              'rgba(255, 193, 7, 0.7)',
              'rgba(233, 30, 99, 0.7)'
            ],
            borderColor: [
              'rgba(63, 81, 181, 1)',
              'rgba(77, 182, 172, 1)',
              'rgba(255, 193, 7, 1)',
              'rgba(233, 30, 99, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Platform Statistics',
              font: { size: 16 }
            },
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => {
                  let label = context.dataset.label || '';
                  if (label) label += ': ';
                  if (context.parsed.y !== null) {
                    if (context.dataIndex === 2) { // tauxAcceptation
                      label += context.parsed.y + '%';
                    } else {
                      label += context.parsed.y;
                    }
                  }
                  return label;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => Number.isInteger(value) ? value : ''
              }
            }
          }
        }
      });
    }

    // Doughnut Chart
    const pieCtx = document.getElementById('pieChart') as HTMLCanvasElement;
    if (pieCtx) {
      this.chart2 = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Total Users', 'Total Ads', 'Active Users'],
          datasets: [{
            data: [
              this.stats.totalUtilisateurs,
              this.stats.totalAnnonces,
              this.stats.utilisateursActifs
            ],
            backgroundColor: [
              '#3f51b5',
              '#4db6ac',
              '#e91e63'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Distribution',
              font: { size: 16 }
            },
            legend: {
              position: 'right'
            }
          },
          cutout: '70%'
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart1) this.chart1.destroy();
    if (this.chart2) this.chart2.destroy();
  }
}

import {Component, AfterViewInit, OnInit} from '@angular/core';
import {
  Chart,
  registerables
} from 'chart.js';

@Component({
  selector: 'app-my-chart',
  templateUrl: './test.html',
})
export class MyChartComponent implements OnInit{
  constructor() {
    Chart.register(...registerables); // Required for Chart.js 3+
  }

  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx2 = document.getElementById('lineChart') as HTMLCanvasElement;
    const ctx3 = document.getElementById('doughnutChart') as HTMLCanvasElement;
    const ctx4 = document.getElementById('radarChart') as HTMLCanvasElement;
    const ctx5 = document.getElementById('polarChart') as HTMLCanvasElement;
    const ctx6 = document.getElementById('bubbleChart') as HTMLCanvasElement;
    const ctx7 = document.getElementById('scatterChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar', // change to 'line', 'pie', etc.
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Apples', 'Oranges', 'Bananas'],
        datasets: [{
          label: 'Fruits',
          data: [10, 20, 30],
          backgroundColor: ['#f87171', '#facc15', '#34d399'],
        }]
      },
      options: {
        responsive: true
      }
    });



    new Chart(ctx4, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
        }]
      },
      options: {
        responsive: true
      }
    });




    //radar chart
    new Chart(ctx3, {
      type: 'radar',
      data: {
        labels: ['Strength', 'Speed', 'Stamina', 'Agility', 'Skill'],
        datasets: [{
          label: 'Player A',
          data: [65, 59, 90, 81, 56],
          backgroundColor: 'rgba(34,197,94,0.2)',
          borderColor: '#22c55e',
          pointBackgroundColor: '#22c55e'
        }]
      },
      options: {
        responsive: true
      }
    });


    //polarchart

    new Chart(ctx5, {
      type: 'polarArea',
      data: {
        labels: ['North', 'South', 'East', 'West'],
        datasets: [{
          data: [11, 16, 7, 3],
          backgroundColor: ['#ec4899', '#f97316', '#10b981', '#3b82f6'],
        }]
      },
      options: {
        responsive: true
      }
    });




    //bubble chart

    new Chart(ctx6, {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Bubbles',
          data: [
            { x: 10, y: 20, r: 10 },
            { x: 15, y: 10, r: 15 },
            { x: 20, y: 30, r: 7 }
          ],
          backgroundColor: '#8b5cf6'
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true }
        }
      }
    });



    //scatter

    new Chart(ctx7, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Scatter Dataset',
          data: [
            { x: -10, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 5 }
          ],
          backgroundColor: '#ef4444'
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { beginAtZero: false },
          y: { beginAtZero: false }
        }
      }
    });

    }



}

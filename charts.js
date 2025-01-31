document.addEventListener('DOMContentLoaded', function() {
    // Setup context for each chart
    const ctxViews = document.getElementById('viewsChart').getContext('2d');
    const ctxResponses = document.getElementById('responsesChart').getContext('2d');
    const ctxFollowers = document.getElementById('followersChart').getContext('2d');
    const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
  
    // Views vs Expected Views Chart Data (Line chart)
    const viewsData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Actual Views',
        data: [500, 1200, 800, 1500, 1800],
        borderColor: '#1E3A8A', // Blue color
        backgroundColor: 'rgba(30, 58, 138, 0.2)', // Light blue background
        fill: true
      }, {
        label: 'Expected Views',
        data: [600, 1300, 850, 1600, 1900],
        borderColor: '#3B82F6', // Light blue color
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // Very light blue background
        fill: true
      }]
    };
  
    // Responses Analysis Chart Data (Bar chart)
    const responsesData = {
      labels: ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'],
      datasets: [{
        label: 'Responses (Comments/Likes/Shares)',
        data: [100, 200, 150, 250, 300],
        borderColor: '#1E3A8A', // Blue border color
        backgroundColor: 'rgba(30, 58, 138, 0.2)', // Light blue background
        fill: true
      }]
    };
  
    // Followers Growth Chart Data (Pie chart)
    const followersData = {
      labels: ['Facebook', 'Instagram', 'Twitter'],
      datasets: [{
        label: 'Followers/Subscribers',
        data: [5000, 8000, 4500],
        backgroundColor: [
          '#1E3A8A', // Facebook
          '#3B82F6', // Instagram
          '#60A5FA'  // Twitter
        ],
      }]
    };
  
    // Revenue Generated Chart Data (Bar chart)
    const revenueData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Revenue Generated ($)',
        data: [1000, 2000, 1500, 3000, 3500],
        borderColor: '#1E3A8A', // Blue border color
        backgroundColor: 'rgba(30, 58, 138, 0.2)', // Light blue background
        fill: true
      }]
    };
  
    // Initialize the Charts
  
    // Views vs Expected Views Chart (Line Chart)
    new Chart(ctxViews, {
      type: 'line',
      data: viewsData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Responses Analysis Chart (Bar Chart)
    new Chart(ctxResponses, {
      type: 'bar',
      data: responsesData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // Followers Growth Chart (Pie Chart)
    new Chart(ctxFollowers, {
      type: 'pie',
      data: followersData,
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.label + ': ' + tooltipItem.raw + ' followers';
              }
            }
          },
          legend: {
            position: 'top'
          }
        }
      }
    });
  
    // Revenue Generated Chart (Bar Chart)
    new Chart(ctxRevenue, {
      type: 'bar',
      data: revenueData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  
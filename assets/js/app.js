function startChart() {
	const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Argent',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'bla',
      backgroundColor: 'rgb(235, 122, 132)',
      borderColor: 'rgb(215, 230, 132)',
      data: [0, 30, 10, 5, 10, 20, 70],	
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

function rightChart() {
	const labels = [
	    'Janvier',
	    'Fevrier',
	    'Mars',
	    'Avril',
	    'Mai',
	    'Juin',
	  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Argent',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: 'bla',
      backgroundColor: 'rgb(235, 122, 132)',
      borderColor: 'rgb(215, 230, 132)',
      data: [0, 30, 10, 5, 10, 20, 70],	
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}


if (location.hash) {
	console.log(location.hash);

}
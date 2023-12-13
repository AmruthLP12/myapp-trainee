const portfinder = require('portfinder');

portfinder.getPort((err, port) => {
  if (err) {
    console.error(err);
    return;
  }

  // `port` is guaranteed to be a free port
  console.log(`Found free port: ${port}`);

  // Use the port for your application
});

portfinder.getPorts(10, (err, ports) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // `ports` is an array of two free ports
    console.log(`Found free ports: ${ports.join(', ')}`);
  
    // Use the ports for your applications
  });

  portfinder.getPortPromise()
  .then(port => {
    console.log(`Found free port: ${port}`);
  })
  .catch(err => {
    console.error(err);
  });

  portfinder.setBasePort(9000);

  portfinder.getPort((err, port) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // Use the port for your application
    console.log(`Found free port kee: ${port}`);
  
    // Start your application on this port
    // ... your code ...
  });

  portfinder.setBasePort(3000);

portfinder.getPortPromise()
  .then(port => {
    console.log(`Found free port: ${port}`);

    // Start your application on this port
    // ... your code ...
  })
  .catch(err => {
    console.error(err);
  });



  portfinder.setBasePort(10); // Start searching from 10 (two-digit range)

portfinder.getPorts(2, (err, ports) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filter the ports to find two-digit ones
  const twoDigitPorts = ports.filter(port => port >= 10 && port <= 99);

  if (twoDigitPorts.length > 0) {
    console.log(`Found two-digit ports: ${twoDigitPorts.join(', ')}`);
  } else {
    console.log('No available two-digit ports found.');
  }
});

  


  
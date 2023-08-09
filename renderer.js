const  {ReadlineParser,SerialPort} = require('serialport');

   var luminData 

   controlArduino()

   function controlArduino() {
      const port = new SerialPort({ path: 'COM3', baudRate: 9600 })
      const parser = new ReadlineParser()
      port.pipe(parser)

      parser.on('data', (line) => {
         luminData = line
         updateLuminDataInMain(luminData);
      });
   }


   function updateLuminDataInMain(luminData){
      document.getElementById('outlum').innerHTML = `<h4>Valor atual: <strong>${luminData}</strong></h4>`;
      console.log(luminData);     
   }

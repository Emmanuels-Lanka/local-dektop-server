const readports = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const deviceinfo = require('../resources/qrDeviceInfo.json');

let bindSerialPort = NaN;
let parser = NaN;

// Define your serial port configuration
function devicePortBind() {
    bindSerialPort = new readports.SerialPort({
        path: deviceinfo.Port,
        baudRate: deviceinfo.baudRate,
    });
    parser = bindSerialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

    bindSerialPort.on('open', () => {
        console.log('Port opened'); // Log when port is opened
    });
}

function devicePortOpenReadSerialData() {
    return new Promise((resolve, reject) => {
        bindSerialPort.on('data', (data) => {
            const qrData = data.toString('utf8').replace(/\r/g, ''); // Remove all occurrences of '\r'
            if (qrData) {
                console.log('Data received:', qrData);
                bindSerialPort.close((err) => {
                    if (err) {
                        reject('Error closing port: ' + err.message);
                    } else {
                        console.log('Port closed');
                        resolve(parseInt(qrData, 10));
                    }
                });
            }
        });

        bindSerialPort.on('error', (err) => {
            reject('Port error: ' + err.message);
        });
    })
}

// API controller function
exports.getQrData = async (req, res) => {
    try {
        devicePortBind();
        const qrData = await devicePortOpenReadSerialData();
        res.status(201).json({ qrData });
    } catch (error) {
        console.log("QR_ERROR:", error);
        return res.status(500).json({
            message: error.message || "Some error occurred while retrieving qr code."
        });
    };
}
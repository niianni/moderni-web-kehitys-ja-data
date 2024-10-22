/*
Race car simulator!

In this race we have several drivers and several laps. 
Each lap every driver has a three percent chance of crashing. 
If they don't crash, they finish one lap in 20-25 seconds. 
Write a function raceLap that takes no parameters and returns a promise. 
If the driver crashes, the promise is rejected. 
If not, the promise is resolved and the lap time is returned.

Write a function race that takes two parameters: 
- a list of drivers (strings), 
- the number of laps (number). 
When the race function is run, it should run the raceLap function for each driver on every lap. 
The race function should keep track of each drivers total time and best lap time. 
If a driver crashes, their times are not updated on further laps. 
When all laps have finished, the race function should return the name and stats of the winner.
*/

async function raceLap() {
    return new Promise((res, rej) => {
        let crash = (Math.random() > 0.97);
        if (crash) {
            return rej("ajoi seinään ja keskeytti kisan.");
        } else {
            let laptime = Math.round((Math.random() * 5 + 20) * 1000) / 1000;
            return res(laptime);
        }
    });
}

let race = async function(drivers, laps) {
    
    let raceData = {};
    drivers.forEach((driver) => {
        raceData[driver] = {
            bestLapTime: Infinity,
            totalTime: 0,
            allLaps: [],
            crashed: false
        }
    });
    
    let runLaps = async function() {
        drivers.forEach(driver => {
            for(let i = 1; i <= laps; i++) {
                raceData[driver].allLaps.push(raceLap());
            }
            Promise.all(raceData[driver].allLaps)
            .then(laptimes => {
                //tallennetaan tulokset raceDataan
                raceData[driver].bestLapTime = Math.min(...laptimes);
                let sum = laptimes.reduce((cur, acc) => cur + acc, 0);
                raceData[driver].totalTime = Math.round(sum * 1000) / 1000;
                raceData[driver].allLaps = laptimes;
            })
            .catch(err => {
                raceData[driver].crashed = true;
                console.log(`${driver} ${err}\n`)
            });
        })
    }
    await runLaps();
    
    //odotetaan tulokset ja tulostetaan koko kisan tulokset ja voittaja
    setTimeout(() => {
        let winner = "";
        let winnerTime = Infinity;
        
        console.log(`Maaliin päässeiden kierrosajat: `);
        drivers.forEach(driver => {
            if(!raceData[driver].crashed) {
                if(raceData[driver].totalTime < winnerTime) {
                    winner = driver;
                    winnerTime = raceData[driver].totalTime;
                }
                console.log(`${driver}:`);
                for (let i = 1; i <= laps; i++) {
                    console.log(`Kierros ${i}, aika: ${raceData[driver].allLaps[i-1]} sek`);
                }
                console.log(`Yhteensä: ${raceData[driver].totalTime} sek`)
                console.log();
            }
        })
        console.log(`Kisan voitti ${winner} ajalla ${winnerTime} sek.\nVoittajan nopein kierros oli ${raceData[winner].bestLapTime} sek.\nONNITTELUT\n`);
    }); 
}

//testataan 
let drivers = ["Niina", "Atte", "Olli", "Joonas", "Joni"];
let laps = 4;
race(drivers, laps);

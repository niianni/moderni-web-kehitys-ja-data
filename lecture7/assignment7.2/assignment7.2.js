
function countdown(seconds) {

    return new Promise((resolve, reject) => {
        let currentSecond = seconds;

        function tick() {
            if (typeof currentSecond !== "number") {
                reject();
            } else if (currentSecond > 0) {
            console.log(currentSecond);
            currentSecond--;
            setTimeout(tick, 1000);
          } else {
            resolve();
          }
        }
        tick();
      });
    }
  
countdown(3)
.then(() => {console.log("GO!")})
.catch(() => {console.log("Something went wrong...")});

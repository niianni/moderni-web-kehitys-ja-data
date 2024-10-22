import fs from "fs";


/** Funktio tarkastaa ja laskee pisteet jokaisen opiskelijan koevastauksille.
 * Jokaisesta oikeasta vastauksesta opiskelija saa +4 pistettä, ja väärästä vastauksesta
 * -1 pistettä. Tyhjä vastaus on 0 pistettä. Jos opiskelijan pisteet ovat lopulta miinuksella, 
 * kirjataan opiskelijalle 0 pistettä. 
 * Jokaisen opiskelijan lopullinen pistemäärä kirjoitetaan score-tiedostoon omalle rivilleen.
 * 
 * @param {string} correctAnswerFile - tiedoston nimi, jossa on oikeat vastaukset yhdellä rivillä pilkuilla eroteltuna
 * @param {string} studentAnswerFile - tiedoston nimi, jossa on opiskelijoiden antamat vastaukset. 
 * Yhden opiskelijan vastaukset yhdellä rivillä, vastaukset pilkulla eroteltuina. 
 * Tyhjä vastaus on välilyönti.
 * @param {string} scoreFile - tiedoston nimi, jonne kirjoitetaan opiskelijoiden lopulliset pisteet
 */
function checkScore(correctAnswerFile, studentAnswerFile, scoreFile) {
    let correctAnswers = fs.readFileSync(correctAnswerFile, "utf-8").split(",");
    let studentAnswers = fs.readFileSync(studentAnswerFile, "utf-8").split("\n");
    let allScores = "";
    
    studentAnswers.map(row => {
        row = row.replace(/(\r)/gm,"").split(",");
        let points = 0;
        let score;
        for (let i = 0; i < 20; i++) {
            if (row[i] === correctAnswers[i]) {
                points += 4;
            } else if (row[i] !== " ") {
                points -= 1;
            }
        }
        if (points < 0) {
            score = 0;
        } else {
            score = points;
        }
        allScores = allScores + score.toString() + "\n";
        fs.writeFileSync(scoreFile, allScores, "utf-8");
    });
    
}

checkScore("./correct_answers.txt", "./student_answers.txt", "./scores.txt");
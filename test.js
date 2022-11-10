var getHint = function (secret, guess) {

    let A = 0;
    let B = 0;
    let dultip = [];
    let remain = [];
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
            dultip.push(i);
        } else {
            remain.push(guess[i]);
        }
    }
    for (let i = 0; i < secret.length; i++) {
        if(dultip.includes(i)) continue;

        if(remain.includes(secret[i])){
           let index=remain.indexOf(secret[i]);
           B++;
           remain.splice(index,1);
        }

    }

    return A + "A" + B + "B";
};

console.log(getHint(secret = "1122", guess = "1221"));

// 1.設 A和B分別儲存A和B數量，dultip將已經為A的位置儲存，remain將guess未配對到的數儲存
// 2.首先secret和guess做比較將為A的位置存入dultip及剩餘guess的數存入remain
// 3. 在做B的判斷，secret迴圈去跟remain做比較，若遇到dultip裡的位置時跳過判斷，當remain包含secret，將B + 1及把數從remain刪掉
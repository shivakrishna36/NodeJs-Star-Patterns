/*

program for the below pattern

* * * * *
* * * *
* * *
* *
*

*/
function stars() {
    var star = '';
    for (i = 0; i < 5; i++) {
        for (j = 5; j > i; j--) {
            var star = star + '*' + ' ';
        }
        console.log(star)
        star = '';
    }
}
stars();

/*

program for below pattern
*
* *
* * *
* * * *
* * * * *

*/


function stars() {
    var star = '';
    for (i = 0; i < 5; i++) {
        for (j = i; j >= 0; j--) {
            var star = star + '*' + ' ';
        }
        console.log(star)
        star = '';
    }
}
stars();

/*

program for below pattern
        *
      * *
    * * *
  * * * *
* * * * *

*/

function stars() {
    var star = '';
    for (i = 1; i <= 5; i++) {
        for (j = 5; j >0; j--) {
            if(j<=i)
            var star = star +'*'+' ';
            else
            star = star + ' '+' ';
        }
        console.log(star)
        star = '';
    }
}
stars();


/*

program for below pattern
    *
   * *
  * * *
 * * * *
* * * * *

*/
function stars() {
    var star = '';
    for (i = 1; i <= 5; i++) {
        for (j = 5; j > 0; j--) {
            if (j <= i)
                var star = star + '*' + ' ';
            else
                star = star + ' ';
        }
        console.log(star)
        star = '';
    }
}
stars();

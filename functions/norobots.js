export default {
  choice : [
    {n: "&#x02776", d: 1},
    {n: "&#x02777", d:2},
    {n: "&#x02778", d:3},
    {n: "&#x02779", d:4},
    {n: "&#x277A", d:5},
    {n: "&#x277B", d:6},
    {n: "&#x277C", d:7}
    ]
  ,tStatus : false,
  choice2 : [
    {n: "&#x02776", d: 1},
    {n: "&#x02777", d:2},
    {n: "&#x02778", d:3},
    {n: "&#x02779", d:4},
    {n: "&#x277A", d:5},
    {n: "&#x277B", d:6},
    {n: "&#x277C", d:7}
    ]
  
  ,
  getResult(no, guess, temp, check, disable, secret) {
    guess = guess.concat(no);
    temp = temp.concat('*');
    // console.log(guess)
    // return guess

    // if(guess.length == 4) {
    //   if(guess == secret ) {
    //     console.log('bobbie')
    //     return {
    //       check = true;
    //       disable = false
    //     }
    //   } 
    // }
  }

}

// {n: "&#x277D", d:8},
// {n: "&#x277E", d:9}
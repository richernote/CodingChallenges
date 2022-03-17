function sumDigits(number) {
    let nana = [...number.toString()].map(element => {
        return Number(element)
    });

    console.log(nana.reduce((sum, cur) => sum += cur))
  }

  sumDigits(sumDigits(-32))
  
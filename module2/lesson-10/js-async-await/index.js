async function someFunction() {
    try {
        let response = await fetch('https://poetrydb.org/title/Ozymandias/lines.json');
        console.log('first await done')
        let returnedData = await response.json();
        console.log('second await done')
        let book = returnedData[0].lines;
        document.querySelector('p').innerHTML = book;
    }
    catch(err){
        console.log(err)
    }
  }

  someFunction()
//Write a function that when given a URL as a string,
//parses out just the domain name and returns it as a string


function domainName(url){
    // get url
    // check for https:// , https://www. & www. then remove any of those
    // return substring 
    
    const dot = (url) => url.indexOf('.') // too lazy to type that out more than once
    
    // check for www. and remove up to .
    if (url.includes('www.')) {
    
        const less = url.substring(dot(url) + 1) // + 1 to not include the .
        return less.slice(0, dot(less)) // go from the "second" but now first .
      
      } else {
        
        // check for http or https
        if (url.startsWith('https://')) {
          
          const less = url.slice(8)
          return less.slice(0, dot(less))
          
        } else if (url.startsWith('http://')) {
          
          const less = url.slice(7)
          return less.slice(0, dot(less))
          
        }
        
    }
    
    return url.slice(0, dot(url))
}

  domainName('https://google.co.jp')
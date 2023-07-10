// code your solution here
function superbowlWin(record) {
   const win = record.find(object => object.result === "W")
      if(win === undefined) { 
        return undefined 
    } else {
        return win.year  
    }
}


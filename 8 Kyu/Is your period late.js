function periodIsLate(last, today, cycleLength) {
    const date1 = last
    const date2 = today
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if(cycleLength < diffDays){
      return true
    }
    return false;
  }
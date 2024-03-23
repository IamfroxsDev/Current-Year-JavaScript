function getCurrentYear(){
    let date = new Date;
    let currentYear = date.getFullYear();
    
    document.getElementById("currentYear").textContent = currentYear;
};

getCurrentYear();
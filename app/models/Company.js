class Company{
    constructor(name,money){
        this.name = name;
        this.money = money;
        this.developers = {};
        this.manager = {};
    }

    allSalaryDay(){
        let allSalary = 0;
        this.sotrudiki.forEach(element => {
            allSalary+=element.salary;
        });
        allSalary+=this.manager.salary;
        return allSalary;
    }

    printProgrammer(select){
        let n = 0;
        select.options.length = 0;
        this.sotrudiki.forEach(element => {
            let newOption = new Option(element.about, n);
            n++;
            select.appendChild(newOption);
        });
    }

    addProgrammer(){
        let why = prompt("Введите должность:\n 1-Junior\n 2-Middle\n 3-Senior", 1);
        let name = prompt("Введите имя");
        let surname = prompt("Введите фамилию");
        let newS;
        switch(why){
            case '2':{
                newS = new Middle(name,surname);
                break;
            }
            case '3':{
                newS = new Senior(name,surname);
                break;
            }
            default:{
                newS = new Junior(name,surname);
                break;
            }
        }
        console.log(newS);
        this.sotrudiki.push(newS);
    }

    deleteProgrammer(select){
        this.sotrudiki.splice(select, 1);
    }

    addManager(){
        let name = prompt("Введите имя");
        let surname = prompt("Введите фамилию");
        let exp = Math.random() * (2 - 0) + 1;
        this.manager = new Manager(name,surname,exp);
        console.log(this.manager);
    }

    printManager(s) {
        let n = 0;
        s.options.length = 0;
        let newOption = new Option(this.manager.toString(), n);
        s.appendChild(newOption);
    }

    deleteManager() {
        this.manager = null;
    }

    allColLine(){
        let line = 0;
        this.sotrudiki.forEach(element => {
            line+=element.colLines;
        });
        return line;
    }

}
exports.Company = Company;
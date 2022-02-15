class Engineer {
    constructor(){
        this.github = getGithub;
    };
    getGithub() {
        return (this.github);
        console.log(this.github);
    };
    getRole() {
        return (Employee);
        console.log(Employee);
    };

}

module.exports = Engineer;

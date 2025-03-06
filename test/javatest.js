user = {
    firstName: "hello",
    lastName: "wrol",
    fullname: function(){
        return this.firstName + "" + this.lastName;
    }
}
console.log(user.firstName)
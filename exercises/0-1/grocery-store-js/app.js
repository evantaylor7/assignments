var shopper = {
    firstName: "Jerry",
    lastName: "Smith",
    membership: true,
    memberId: 2367,
    groceryCart: ["tomatoes", "avocados", "orange juice", "bread", "eggs"],
    date: "November 13, 2019",
    purchase: function(){
        console.log(this.firstName + " " + this.lastName + ", membership: " + this.memberId + ", bought " + this.groceryCart + " on " + this.date)
    }
}
shopper.purchase()
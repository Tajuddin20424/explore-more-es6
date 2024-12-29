class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na cole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){

    }
}


class Bus extends Vehicle{
    constructor(name, Price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}


class Truck extends Vehicle{
    constructor(name, price, load){
        supper(name, price);
        this.load = load;
    }
}
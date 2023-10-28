interface Mazda {
    startEngine(): string;
}

class Mazda3 implements Mazda {
    startEngine(): string {
        return "Запуск двигателя Mazda 3";
    }
}

class MazdaCX5 implements Mazda {
    startEngine(): string {
        return "Запуск двигателя Mazda CX-5";
    }
}

class MazdaFactory {
    createCar(model: string): Mazda | null {
        if (model === "Mazda3") {
            return new Mazda3();
        } else if (model === "MazdaCX5") {
            return new MazdaCX5();
        } else {
            return null; 
        }
    }
}

const factory = new MazdaFactory();

const mazda3Car = factory.createCar("Mazda3");
if (mazda3Car) {
    console.log(mazda3Car.startEngine()); 
}

const mazdaCX5Car = factory.createCar("MazdaCX5");
if (mazdaCX5Car) {
    console.log(mazdaCX5Car.startEngine()); 
}

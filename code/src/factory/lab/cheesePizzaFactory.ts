import { PizzaStyle, PizzaSize, Pizza, BreadType, CheezeType } from "./pizza";
import { PizzaFactory } from "factory/finish/pizzaFactory/pizzaFactory";
import { Ingredient, PizzaType } from "./pizza";

export class CheesePizzaFactory implements PizzaFactory {
    bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
        const pizza = new Pizza();

        pizza.type = PizzaType.Cheese;
        pizza.size = size;

        if (style === PizzaStyle.American) {
            pizza.bread = BreadType.Thin;
        } else {
            pizza.bread = BreadType.Thick;
        }
        pizza.cheese = CheezeType.Parmesan;
        pizza.ingredients = [Ingredient.Basil, Ingredient.Olive, Ingredient.Onion]

        return pizza;
    }
}
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponMachine } from "./gashaponMachine";
import { GashaponState } from "./states";

export class HasCoinState implements GashaponState {
    private gashaponMachine: GashaponMachine;

    constructor(gashaponMachine: GashaponMachine) {
        this.gashaponMachine = gashaponMachine
    }

    insertCoin(): void {
        this.gashaponMachine.addCoin();
        if (this.gashaponMachine.getCoin() < this.gashaponMachine.getNeedCoin()) {
            this.gashaponMachine.setState(GashaponMachineState.hasCoin);
        } else {
            this.gashaponMachine.setState(GashaponMachineState.readyToSpin);
        }
    }

    ejectCoin(): void {
        throw new Error("Method not implemented.");
    }
    spin(): GashaponCapsule {
        throw new Error("Method not implemented.");
    }
    reload(capsule: GashaponCapsule[]): void {
        throw new Error("Method not implemented.");
    }

}
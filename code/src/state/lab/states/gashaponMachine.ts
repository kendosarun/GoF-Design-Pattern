import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachineState } from "../gashaponMachineState";
import { ReadyState } from "./readyState";
import { GashaponState } from "./states";

export class GashaponMachine {

    private coins: number = 0; 
    
    getCoin(): number {
        return this.coins;
    }

    addCoin(): number {
        return this.coins++;
    }


    private needCoin: number = 4;
    getNeedCoin(): number {
        return this.needCoin;
    }

    private state: GashaponMachineState = GashaponMachineState.outOfCapsule;
    private machineStates: GashaponState | undefined;


    getState(): GashaponState {
        return this.state = state;
        
    }
    
    setState(): GashaponState {
        return this.state = state;
        if (this.state === GashaponMachineState.ready) {
            this.machineStates.ready = new ReadyState(this);
        }
    }

    reload(capsule: GashaponCapsule[]): void {
        this.capsule = [this.capsule, ...capsule];
        this.setState(GashaponMachineState.ready);
    }

    getRemainCapsule(): number {
        return this.getRemainCapsule.length;
    }


    insertCoin(): void {
        if (this.machineStates == null ) return;
        this.machineStates?.insertCoin();
    }

    ejectCoin(): number {
        if (this.machineStates == null ) return;
        this.machineStates?.insertCoin();
    }
}
import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachine } from "./gashaponMachine";
import { GashaponMachineState } from "../gashaponMachineState";

describe('[State - Lab] Gashapon Mahine', () => {
    it('should be outOfCapsule', () => {
        const gashapon = new GashaponMachine();

        expect(gashapon.getState());
    });

    it('should be read state when insert coin', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('Rome'),
            new GashaponCapsule('Might'),
        ]);

        gashapon.insertCoin();
        expect(gashapon.getState()).toBe(GashaponMachineState.hasCoin);


        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getState()).toBe(GashaponMachineState.readyToSpin);

        gashapon.ejectCoin();
        expect(() => gashapon.ejectCoin()).toThrow('You not insert coin.');
    });

});

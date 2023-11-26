import { GashaponCapsule } from "../gashaponCapsule";

export interface GashaponState {
    insertCoin(): void;
    ejectCoin(): void;
    spin(): GashaponCapsule;
    reload(capsule: GashaponCapsule[]): void;
}
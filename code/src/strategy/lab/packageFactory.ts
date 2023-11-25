import { HourFlexPackage } from "strategy/finish/packages/hourFlexPackage";
import { PackageType } from "./billing";
import { FixedPackage } from "./fixedPackage";
import { SteppingPackage } from "./steppingPackage";

export class PackageFactory {
    static createPackage(type: PackageType) {
        switch (type) {
            case PackageType.FIXED:
        return new FixedPackage();
      case PackageType.HOUR_FLEX:
        return new HourFlexPackage();
      case PackageType.STEPPING:
        return new SteppingPackage();
      default:
        return new UnknowPackage;
        }
    }
}

export class UnknowPackage {
    monthlyBill(total: number): number {
        return 0;
    }
}
// import { FixedPackage } from 'strategy/finish/packages/fixedPackage';
// import { HourFlexPackage } from './hourFlexPackage';
// import { SteppingPackage } from './steppingPackage';
import { PackageFactory } from './packageFactory';

export enum PackageType {
  FIXED = 'FIXED',
  HOUR_FLEX = 'HOUR_FLEX',
  STEPPING = 'STEPPING',
  UNKNOWN = 'UNKNOWN',
}

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    let total = PackageFactory
    .createPackage(this.packageType)
    .monthlyBill(this.totalHours)

    return total + (total * this.vatRate) / 100;
  }


}

import { GarageDoorDownCommand, GarageDoorLightOffCommand, GarageDoorLightOnCommand, GarageDoorStopCommand, GarageDoorUpCommand } from "./command/garageDoorCommand";
import { LightOnCommand, LightOffCommand } from "./command/lightCommand";
import { Controller } from "./controller";
import { GarageDoor, Light } from "./devices";

describe('[Command - lab] Controller', () => {
  it('should execute device that wrapped with command object', () => {
    //given
    const controller = new Controller();
    const light = new Light();
    light.on = jest.fn();
    light.off = jest.fn();

    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

     //when
    controller.execute(lightOnCommand);
    //then
    expect(light.on).toHaveBeenCalledTimes(1);

     //when
    controller.execute(lightOffCommand);
    //then
    expect(light.off).toHaveBeenCalledTimes(1);

  });

  it('should execute device GarageDoor with Command Object', () => {
    //given
    const controller = new Controller();
    const garageDoor = new GarageDoor();
    garageDoor.up = jest.fn();
    garageDoor.down = jest.fn();
    garageDoor.stop = jest.fn();
    garageDoor.lightOn = jest.fn();
    garageDoor.lightOff = jest.fn();

    const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
    const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);
    const garageDoorStopCommand = new GarageDoorStopCommand(garageDoor);
    const garageDoorLightOnCommand = new GarageDoorLightOnCommand(garageDoor);
    const garageDoorLightOffCommand = new GarageDoorLightOffCommand(garageDoor);

    //when
    controller.execute(garageDoorUpCommand);
    //then
    expect(garageDoor.up).toHaveBeenCalledTimes(1);

    //when
    controller.execute(garageDoorDownCommand);
    //then
    expect(garageDoor.down).toHaveBeenCalledTimes(1);

    //when
    controller.execute(garageDoorStopCommand);
    //then
    expect(garageDoor.stop).toHaveBeenCalledTimes(1);

    //when
    controller.execute(garageDoorLightOnCommand);
    //then
    expect(garageDoor.lightOn).toHaveBeenCalledTimes(1);

    //when
    controller.execute(garageDoorLightOffCommand);
    //then
    expect(garageDoor.lightOff).toHaveBeenCalledTimes(1);
  });
});

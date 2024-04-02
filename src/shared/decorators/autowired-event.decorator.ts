import { EventClsRegistry } from '../infreaestructure/event-store/event-cli.registry';

export const AutowiredEvent: ClassDecorator = (target: any) => {
  EventClsRegistry.add(target);
};

const DblLL = require('./doubly-ll');

const subway = new DblLL();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();
subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();
subway.removeHead();
subway.removeTail();
subway.printList();
subway.removeByValue('TimesSquare');
subway.printList();

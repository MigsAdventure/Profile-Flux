import Flux from 'flux';

const dispatcher = new Flux.Dispatcher();

export default dispatcher;

//Lines 3 and 5 can be written as :    export default new Flux.Dispatcher();
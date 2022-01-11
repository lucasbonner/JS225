/*
How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?
*/

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
let systemStatus = ready.status;
console.log(systemStatus);


/*
impossible
*/

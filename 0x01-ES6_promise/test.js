const myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
    myResolve(() => {
      return "Success !";
    }); // when successful
    myReject(() => {
      return "Failed ?";
    });  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise).
  myPromise.then(
    function(value) { console.log(value); },
    function(error) { console.log(error); }
  );

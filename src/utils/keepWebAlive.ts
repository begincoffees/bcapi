import fetch from 'node-fetch'

//arbitrary task that runs every 10 minutes on heroku scheduler to keep dyno live
(async function task() {
  const results = await fetch('https://begincoffeesweb.herokuapp.com');
  console.log(results)
  return await results
})();
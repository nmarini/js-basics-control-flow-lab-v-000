// 'gives customers a free sample if the ride is less than or equal to 400 feet'
// 'This one is on me!'
// 'charges 30 dollars for a distance over 2000 feet'
// 'I will gladly take your thirty bucks.'
// 'does not allow rides over 2500 feet'
// 'No can do.'

function scuberGreetingForFeet (ride) {
  let greeting
  if (ride > 2500) {
    greeting = 'No can do.'
  }
  else if (ride <= 400) {
    greeting = 'This one is on me!'
  } else if (ride > 2000) {
      greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting
}

function ternaryCheckCity (city) {
   return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tip) {

  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
    return 'Thank you.';
    default:
      return 'Bye.'
  }
}

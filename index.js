var recipes = [`object`, `prop`, `prop2`]
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( object, {[key]: value})
}
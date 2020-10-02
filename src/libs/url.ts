/**
 * retrieve variavles
 * @param url url 
 * @param variable get variables
 */
export function getQueryVariable(url: string, variable: string) {
  var query = url.split("?")[1];
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return "error";
}

export class DoctorLookup {
  getDoctors(name, medicalIssue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=47.608%2C-122.335%2C100&user_location=37.773%2C-122.413&skip=2&user_key=${process.env.API_KEY}&name=${name}&limit=100&`
      console.log(url)
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }
}

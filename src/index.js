import {DoctorLookup} from './doctor-lookup.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  $('#form').submit(function(event){
    event.preventDefault();

    let medicalIssue= $('#medicalIssue').val();
    $('#medicalIssue').val("");
    let name = $('name').val();
    $('name').val("");

    let doctorLookup  = new DoctorLookup();
    let promise = doctorLookup.getDoctors(name, medicalIssue);
    promise.then(function(response) {

      let body= JSON.parse(response);
      console.log(body.data.length);
      if (body.data.length==0) {
        $('#showDoctors').text('Sorry, according to your criteria, we don\'t find any doctors');
      } else {
              $('#showDoctors').text('');

            for (let i= 0; i<body.data.length; i++)
            {
              $('.showDoctors').append(body.data[i].profile.first_name + body.data[i].profile.first_name)
            }
      }


    })
  });
});

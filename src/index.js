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
    let name = $('#name').val();
    $('#name').val("");

    let doctorLookup  = new DoctorLookup();
    let promise = doctorLookup.getDoctors(name, medicalIssue);
    promise.then(function(response) {

      let body= JSON.parse(response);
      let acceptNewClients = function (i) {
        if (body.data[i].practices[0].accepts_new_patients === true)
        {
          return "Yes";
        }
        else {

            return "No";
        }
      }

      if (body.data.length==0) {
        $('.showDoctors').text('Sorry, according to your criteria, we don\'t find any doctors');
      } else {
        $('.showDoctors').text('');
        // Some doctors don't have website and pictures :(
        for (let i= 0; i<body.data.length; i++)
            {
              $('.showDoctors').append("<img src=" + body.data[i].profile.image_url + ">"+" "+"<strong>Name:</strong>  " + body.data[i].profile.first_name + "    "+body.data[i].profile.last_name +"&nbsp;&nbsp;<strong> Specialty : </strong>"+body.data[i].specialties[0].name+" " +  "<strong> Accepts new clients</strong>: "+ acceptNewClients(i)+ "<a href="+body.data[i].practices[0].website+"> Website</a>"+"<br>" + "           "+"<strong>Adress: </strong>"+ body.data[i].practices[0].name+" " +body.data[i].practices[0].visit_address.street + " "+ body.data[i].practices[0].visit_address.city +", " + body.data[i].practices[0].visit_address.zip+" <strong>Number:</strong> "+body.data[i].practices[0].phones[0].number+"<br> <br>" )
            }
          }
    });
  });
});

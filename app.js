//console.log("hellow world")

var QestionArry = [
  {
    Question: "What is The Full Form of Ram ?",
    Answer: "Random Excess Memory",
    option: [

      "Random Excess Memory",
      "Rendom Actual Memory",
      "Right Eccess Memory",
      "Non of the Above",

    ]



  },
  {
    Question: "What is The Full Form Of CPU?",
    Answer: "Centre processing Unit",
    option: [

      "Centre processing Unit",
      "Rendom Actual Memory",
      "Right Eccess Memory",
      "Non of the Above",

    ]



  },

  {
    Question: "Key Bord is Input Device or Output device",
    Answer: "Input Device",
    option: [

      "Input Device",
      "Out Put Device ",
      "Right Eccess Memory",
      "Non of the Above",

    ]



  }

]




function show(e) {

  var qest = document.getElementById("qest")
  qest.innerHTML = QestionArry[e].Question;
  var optionEliment = document.getElementsByClassName("optionEliment")

  for (var i = 0; i < optionEliment.length; i++) {

    //document.write(optionEliment[i])

    optionEliment[i].innerHTML = QestionArry[e].option[i];

  }

  Active();
}

var NextPage = 0;
var secore = 0;

function next() {
  
  NextPage++;
  //validate(NextPage)
  show(NextPage)
  Remove()

}

function Active() {

  var Question1 = document.getElementsByClassName(".optionEliment")
  //console.log(Question1)
  for (var i = 0; i < Question1.length; i++) {

    Question1[i].onClick = function () {

      Question1[i].classList.add("active")

    }



  }



}

function putActiveClass(e) {
  Remove();
  e.classList.add("active");



}


function Remove() {

  var active = document.getElementsByClassName("active")
  for (var i = 0; i < active.length; i++) {

    active[i].classList.remove("active")


  }


} 

function validate(e){

  var active = document.getElementsByClassName("active")  
  if(active[0].innerHTML == QestionArry[e].Answer){
    secore += 10;

    console.log(secore);


  }

}
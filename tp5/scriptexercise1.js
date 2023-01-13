var obj_quest=document.getElementById('quest');
//var obj_question=document.formQuestion.question;
var obj_reponse=document.getElementById('rep');
function afficher()
{
    switch(obj_quest.value)
    {
        case "0":obj_reponse.value="veuller choisir une question de la liste";
        break;
        case "1":obj_reponse.value="css est ....";
        break;
        case "2":obj_reponse.value="htm.....";
        break;
        case "3":obj_reponse.value="js.....";

    }
}